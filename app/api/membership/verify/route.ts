import { NextRequest, NextResponse } from 'next/server';
import { createSign } from 'node:crypto';

type GoogleSheetsValuesResponse = {
  values?: string[][];
};

type SheetsConfig = {
  serviceAccountEmail: string;
  serviceAccountPrivateKey: string;
  spreadsheetId: string;
  range: string;
};

type GoogleTokenResponse = {
  access_token?: string;
  expires_in?: number;
};

class SheetsFetchError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'SheetsFetchError';
    this.status = status;
  }
}

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_QUERY_LENGTH = 3;
const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';
const TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

let tokenCache: { token: string; expiresAtMs: number } | null = null;

const SEARCH_HEADER_ALIASES = [
  'registrationcode',
  'registration',
  'registrationnumber',
  'regno',
  'memberid',
  'cpcmemberid',
  'email',
  'mobilenumber',
  'mobile',
  'phone',
  'phonenumber',
];

const MEMBER_ID_HEADER_ALIASES = ['memberid', 'cpcmemberid'];
const NAME_HEADER_ALIASES = ['name', 'fullname', 'studentname'];
const EMAIL_HEADER_ALIASES = ['email', 'emailaddress'];

function normalizeText(value: string): string {
  return value.trim().toLowerCase();
}

function normalizeHeader(value: string): string {
  return normalizeText(value).replace(/[^a-z0-9]/g, '');
}

function normalizeIdentifier(value: string): string {
  return normalizeText(value).replace(/[^a-z0-9]/g, '');
}

function digitOnly(value: string): string {
  return value.replace(/\D/g, '');
}

function phoneVariants(value: string): string[] {
  const digits = digitOnly(value);
  if (!digits) return [];

  const variants = new Set<string>([digits]);
  if (digits.startsWith('880')) variants.add(digits.slice(3));
  if (digits.startsWith('88')) variants.add(digits.slice(2));
  if (digits.startsWith('0')) variants.add(digits.slice(1));

  return [...variants].filter(Boolean);
}

function isValueMatch(query: string, candidate: string): boolean {
  const normalizedQuery = normalizeText(query);
  const normalizedCandidate = normalizeText(candidate);

  if (!normalizedQuery || !normalizedCandidate) return false;
  if (normalizedQuery === normalizedCandidate) return true;

  const queryIdentifier = normalizeIdentifier(query);
  const candidateIdentifier = normalizeIdentifier(candidate);
  if (queryIdentifier.length >= MIN_QUERY_LENGTH && queryIdentifier === candidateIdentifier) {
    return true;
  }

  const queryPhoneVariants = phoneVariants(query);
  const candidatePhoneVariants = new Set(phoneVariants(candidate));
  if (queryPhoneVariants.length > 0 && candidatePhoneVariants.size > 0) {
    for (const variant of queryPhoneVariants) {
      if (candidatePhoneVariants.has(variant)) return true;
    }
  }

  return false;
}

function extractSpreadsheetId(sheetRef: string): string | null {
  const trimmed = sheetRef.trim();
  const fromUrl = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (fromUrl?.[1]) return fromUrl[1];

  if (/^[a-zA-Z0-9-_]{20,}$/.test(trimmed)) {
    return trimmed;
  }

  return null;
}

function getSheetsConfig(): SheetsConfig | null {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const serviceAccountPrivateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
    ?.replace(/\\n/g, '\n')
    .trim();
  const sheetRef = process.env.GOOGLE_SHEETS_LINK?.trim() || process.env.GOOGLE_SHEETS_ID?.trim();
  const range = process.env.GOOGLE_SHEETS_RANGE?.trim() || 'A:Z';

  if (!serviceAccountEmail || !serviceAccountPrivateKey || !sheetRef) return null;

  const spreadsheetId = extractSpreadsheetId(sheetRef);
  if (!spreadsheetId) return null;

  return { serviceAccountEmail, serviceAccountPrivateKey, spreadsheetId, range };
}

function toBase64Url(value: string): string {
  return Buffer.from(value)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function createServiceAccountJwt(config: SheetsConfig): string {
  const now = Math.floor(Date.now() / 1000);

  const header = toBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = toBase64Url(
    JSON.stringify({
      iss: config.serviceAccountEmail,
      scope: SHEETS_SCOPE,
      aud: TOKEN_ENDPOINT,
      iat: now,
      exp: now + 3600,
    }),
  );

  const unsigned = `${header}.${payload}`;
  const signer = createSign('RSA-SHA256');
  signer.update(unsigned);
  signer.end();

  const signature = signer
    .sign(config.serviceAccountPrivateKey, 'base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');

  return `${unsigned}.${signature}`;
}

async function getAccessToken(config: SheetsConfig): Promise<string> {
  const now = Date.now();
  if (tokenCache && tokenCache.expiresAtMs - 60_000 > now) {
    return tokenCache.token;
  }

  const assertion = createServiceAccountJwt(config);
  const body = new URLSearchParams({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion,
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
    cache: 'no-store',
  });

  if (!response.ok) {
    const fallbackMessage = `Token request failed with status ${response.status}`;
    let detail = '';

    try {
      const payload = (await response.json()) as {
        error_description?: string;
        error?: string;
      };
      detail = payload.error_description?.trim() || payload.error?.trim() || '';
    } catch {
      // Ignore parse failure and use fallback message.
    }

    throw new SheetsFetchError(detail || fallbackMessage, response.status);
  }

  const tokenPayload = (await response.json()) as GoogleTokenResponse;
  if (!tokenPayload.access_token) {
    throw new SheetsFetchError('OAuth token missing from Google response', 502);
  }

  const expiresInMs = (tokenPayload.expires_in ?? 3600) * 1000;
  tokenCache = {
    token: tokenPayload.access_token,
    expiresAtMs: now + expiresInMs,
  };

  return tokenPayload.access_token;
}

function resolveClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIp = forwardedFor.split(',')[0]?.trim();
    if (firstIp) return firstIp;
  }

  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

async function fetchSheetRows(config: SheetsConfig): Promise<string[][]> {
  const accessToken = await getAccessToken(config);
  const encodedRange = encodeURIComponent(config.range);
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${encodedRange}`;

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    next: { revalidate: 60 }, // revalidation time (in seconds). Affects how frequently membership data is refreshed
  });

  if (!response.ok) {
    const fallbackMessage = `Google Sheets request failed with status ${response.status}`;
    let detail = '';

    try {
      const payload = (await response.json()) as {
        error?: { message?: string };
      };
      detail = payload.error?.message?.trim() ?? '';
    } catch {
      // Ignore parse failure and use fallback message.
    }

    throw new SheetsFetchError(detail || fallbackMessage, response.status);
  }

  const payload = (await response.json()) as GoogleSheetsValuesResponse;
  return payload.values ?? [];
}

function getSearchColumnIndexes(headers: string[], columnCount: number): number[] {
  const indexes = headers
    .map((header, index) => ({
      index,
      normalized: normalizeHeader(header),
    }))
    .filter(({ normalized }) =>
      SEARCH_HEADER_ALIASES.some((alias) => normalized.includes(alias)),
    )
    .map(({ index }) => index);

  if (indexes.length > 0) return indexes;

  return Array.from({ length: columnCount }, (_, i) => i);
}

function getColumnIndexByAliases(headers: string[], aliases: string[]): number {
  return headers.findIndex((header) => {
    const normalized = normalizeHeader(header);
    return aliases.some((alias) => normalized.includes(alias));
  });
}

function getMemberIdColumnIndex(headers: string[]): number {
  return getColumnIndexByAliases(headers, MEMBER_ID_HEADER_ALIASES);
}

export async function POST(request: NextRequest) {
  const ip = resolveClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please wait and try again.' }, { status: 429 });
  }

  const body = (await request.json().catch(() => null)) as { query?: string } | null;
  const query = body?.query?.trim() ?? '';

  if (query.length < MIN_QUERY_LENGTH) {
    return NextResponse.json({ error: 'Please provide a valid query.' }, { status: 400 });
  }

  const config = getSheetsConfig();
  if (!config) {
    return NextResponse.json(
      { error: 'Membership verification is not configured (service account env missing).' },
      { status: 500 },
    );
  }

  try {
    const rows = await fetchSheetRows(config);

    if (rows.length === 0) {
      return NextResponse.json({ found: false });
    }

    const headers = rows[0] ?? [];
    const columnCount = Math.max(headers.length, ...rows.map((row) => row.length));
    const searchableIndexes = getSearchColumnIndexes(headers, columnCount);
    const memberIdColumnIndex = getMemberIdColumnIndex(headers);
    const nameColumnIndex = getColumnIndexByAliases(headers, NAME_HEADER_ALIASES);
    const emailColumnIndex = getColumnIndexByAliases(headers, EMAIL_HEADER_ALIASES);

    for (let rowIndex = 1; rowIndex < rows.length; rowIndex += 1) {
      const row = rows[rowIndex] ?? [];

      const matches = searchableIndexes.some((columnIndex) => {
        const value = row[columnIndex] ?? '';
        return isValueMatch(query, value);
      });

      if (matches) {
        const memberId =
          memberIdColumnIndex >= 0 ? (row[memberIdColumnIndex] ?? '').trim() || null : null;
        const name = nameColumnIndex >= 0 ? (row[nameColumnIndex] ?? '').trim() || null : null;
        const email = emailColumnIndex >= 0 ? (row[emailColumnIndex] ?? '').trim() || null : null;

        return NextResponse.json({ found: true, memberId, name, email });
      }
    }

    return NextResponse.json({ found: false });
  } catch (error) {
    if (error instanceof SheetsFetchError) {
      if (error.status === 401) {
        return NextResponse.json(
          { error: 'Service account credentials invalid. Check email/private key.' },
          { status: 502 },
        );
      }

      if (error.status === 403) {
        return NextResponse.json(
          {
            error:
              'Google Sheets access denied. Share the private sheet with the service account email as Viewer.',
          },
          { status: 502 },
        );
      }

      if (error.status === 404) {
        return NextResponse.json(
          { error: 'Spreadsheet not found. Check GOOGLE_SHEETS_LINK or GOOGLE_SHEETS_ID.' },
          { status: 502 },
        );
      }

      if (error.status === 400) {
        return NextResponse.json(
          { error: 'Invalid sheet range. Check GOOGLE_SHEETS_RANGE (example: A:Z).' },
          { status: 502 },
        );
      }

      return NextResponse.json(
        { error: `Google Sheets request failed (${error.status}). Please try again.` },
        { status: 502 },
      );
    }

    console.error('Membership verification failed:', error);
    return NextResponse.json({ error: 'Verification is temporarily unavailable.' }, { status: 502 });
  }
}
