'use client';

import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import { LuGraduationCap, LuTrophy, LuHandshake, LuBriefcase, LuLibrary, LuTarget, LuCalendarClock, LuSearch, LuCheck, LuCircleX, LuX } from 'react-icons/lu';
import { useState } from 'react';

export default function Membership() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState<'idle' | 'loading' | 'found' | 'not_found' | 'error'>('idle');
  const [verifiedMemberDetails, setVerifiedMemberDetails] = useState<{
    name: string | null;
    email: string | null;
    memberId: string | null;
  } | null>(null);

  const trimmedQuery = searchQuery.trim();
  const isQueryValid = trimmedQuery.length >= 3;

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isQueryValid) return;

    setSearchStatus('loading');
    setVerifiedMemberDetails(null);
    try {
      const response = await fetch('/api/membership/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: trimmedQuery }),
      });

      if (!response.ok) {
        setSearchStatus('error');
        return;
      }

      const data: {
        found: boolean;
        memberId?: string | null;
        name?: string | null;
        email?: string | null;
      } = await response.json();

      setVerifiedMemberDetails(
        data.found
          ? {
              memberId: data.memberId ?? null,
              name: data.name ?? null,
              email: data.email ?? null,
            }
          : null,
      );
      setSearchStatus(data.found ? 'found' : 'not_found');
    } catch {
      setVerifiedMemberDetails(null);
      setSearchStatus('error');
    }
  };

  const benefits = [
    {
      icon: <LuGraduationCap className="w-6 h-6" />,
      title: 'Skill Development',
      description: 'Access to exclusive workshops, training sessions, and bootcamps.',
    },
    {
      icon: <LuTrophy className="w-6 h-6" />,
      title: 'Competitions',
      description: 'Represent DIU in national and internal programming contests.',
    },
    {
      icon: <LuHandshake className="w-6 h-6" />,
      title: 'Networking',
      description: 'Connect with alumni, industry experts, and fellow programmers.',
    },
    {
      icon: <LuBriefcase className="w-6 h-6" />,
      title: 'Career Support',
      description: 'Guidance for internships, job placements, and resume building.',
    },
    {
      icon: <LuLibrary className="w-6 h-6" />,
      title: 'Resources',
      description: 'Free access to premium learning materials and coding resources.',
    },
    {
      icon: <LuTarget className="w-6 h-6" />,
      title: 'Mentorship',
      description: '1-on-1 guidance from senior unviersity students and alumni.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="animate-fade-in">
        <GlassCard enhanced className="text-center py-12">
          <div className="inline-block p-6 rounded-3xl blue-gradient-enhanced mb-6 shadow-xl">
            <LuGraduationCap className="w-12 h-12 text-gray-100" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Become a Member
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Join DIU Computer Programming Club and take your coding skills to the next level
          </p>
        </GlassCard>
      </section>

      {/* Verification Section */}
      <section className="animate-slide-up pb-2">
        <GlassCard enhanced className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Already a member? Verify your status
            </h2>
            <p className="text-foreground/70">
              Search with phone number, email, CPC Member ID or registration number.
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-4" noValidate>
            <label htmlFor="membership-verify-input" className="block text-sm font-medium text-foreground/80">
              Member Identifier
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LuSearch className="h-5 w-5 text-foreground/50" />
              </div>
              <input
                id="membership-verify-input"
                type="text"
                className="w-full pl-10 pr-11 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="e.g. 015XXXXXXXX / your-name@gmail.com / 002103 / CS-D-61-20-121527"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVerifiedMemberDetails(null);
                  if (searchStatus !== 'idle') setSearchStatus('idle');
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-foreground/60 hover:text-foreground transition-colors"
                  onClick={() => {
                    setSearchQuery('');
                    setVerifiedMemberDetails(null);
                    setSearchStatus('idle');
                  }}
                >
                  <LuX className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="flex gap-3">
              <GlassButton
                type="submit"
                className="w-full justify-center py-3"
                disabled={searchStatus === 'loading' || !isQueryValid}
              >
                {searchStatus === 'loading' ? 'Verifying...' : 'Verify Membership'}
              </GlassButton>
            </div>

            {!isQueryValid && trimmedQuery.length > 0 && (
              <p className="text-sm text-amber-300">
                Please enter at least 3 characters to run verification.
              </p>
            )}
          </form>

          <div className="mt-6 min-h-24">
            {searchStatus === 'found' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-4 animate-fade-in">
                <LuCheck className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h3 id="membership-verified-title" className="text-green-400 font-bold mb-1">Membership Verified</h3>
                  <p className="text-foreground/80 text-sm">
                    A matching member record exists for <span className="font-semibold">{trimmedQuery}</span>.
                  </p>
                  <dl aria-labelledby="membership-verified-title" className="mt-2 text-foreground/90 text-sm space-y-1">
                    <div className="flex gap-2">
                      <dt className="font-medium">Name:</dt>
                      <dd className="font-semibold">{verifiedMemberDetails?.name || 'N/A'}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-medium">Email:</dt>
                      <dd className="font-semibold">{verifiedMemberDetails?.email || 'N/A'}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-medium">CPC Member ID:</dt>
                      <dd className="font-semibold">{verifiedMemberDetails?.memberId || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}

            {searchStatus === 'not_found' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-4 animate-fade-in">
                <LuCircleX className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-red-400 font-bold mb-1">Record Not Found</h3>
                  <p className="text-foreground/80 text-sm">
                    No membership record matched <span className="font-semibold">{trimmedQuery}</span>. Please verify the value or apply below.
                  </p>
                </div>
              </div>
            )}

            {searchStatus === 'error' && (
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-4 animate-fade-in">
                <LuCircleX className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-amber-400 font-bold mb-1">Verification Unavailable</h3>
                  <p className="text-foreground/80 text-sm">
                    We could not verify right now. Please try again in a moment.
                  </p>
                </div>
              </div>
            )}
          </div>
        </GlassCard>
      </section>

      {/* Benefits Section */}
      <section className="animate-slide-up">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Membership Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <GlassCard key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl blue-gradient-enhanced flex items-center justify-center shadow-lg">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-foreground/70 text-sm">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section className="animate-slide-up">
        <GlassCard enhanced>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Membership Application
            </h2>
            <p className="text-red-400 font-medium bg-red-400/10 inline-flex px-6 py-2 text-sm rounded-full border border-red-400 items-center flex-nowrap gap-3 animate-pulse">
              <LuCalendarClock className="w-5 h-5 shrink-0" />
              <span className="whitespace-nowrap">Deadline: April 15, 2026</span>
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-inner">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeYoqPOJPP9g-BWzB0nkvoJTpTCCel8NhVou92Zn8oiO_tD6w/viewform?embedded=true"
              width="100%"
              height="2000"
              style={{ border: 0 }}
              title="Membership Application Form"
            >
              Loading…
            </iframe>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
