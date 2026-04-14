# DIU CPC Website

A modern, glassmorphic web platform for Dhaka International University Computer Programming Club. Built with Next.js, TypeScript, and Tailwind CSS.

## Overview

The DIU CPC Website is a professional platform designed to serve the Computer Programming Club community at Dhaka International University. It provides comprehensive information about events, membership, committee members, and club activities with a modern, user-friendly interface.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/fardinkamal62/diu-cpc-website.git
cd diu-cpc-website

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## Membership Checker Integration (Google Sheets)

The membership checker now verifies data through the server route `app/api/membership/verify/route.ts`, which reads from Google Sheets.

1. Copy `.env.example` to `.env.local`.
2. Set these variables:

```bash
GOOGLE_SHEETS_LINK="https://docs.google.com/spreadsheets/d/<YOUR_SHEET_ID>/edit"
GOOGLE_SHEETS_RANGE="A:Z"
GOOGLE_SERVICE_ACCOUNT_EMAIL="<SERVICE_ACCOUNT_EMAIL>"
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Notes:
- You can use `GOOGLE_SHEETS_ID` instead of `GOOGLE_SHEETS_LINK`.
- Share the sheet with `GOOGLE_SERVICE_ACCOUNT_EMAIL` as Viewer.
- Keep newline characters escaped (`\n`) in `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`.
- Keep the first row in your sheet as column headers.
- The API automatically tries to match values from common headers like phone/email/member id/registration.

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS animations with Tailwind
- **Package Manager**: npm/yarn

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**DIU CPC** - Computer Programming Club
- Email: [diucsecpc.official@gmail.com](mailto:diucsecpc.official@gmail.com)
- Location: BCEL Building, Satarkul, Badda Dhaka, Bangladesh

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Dhaka International University
- Computer Programming Club Members
- Inspiration from modern UI design patterns
