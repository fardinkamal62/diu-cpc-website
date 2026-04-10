'use client';

import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import { LuGraduationCap, LuTrophy, LuHandshake, LuBriefcase, LuLibrary, LuTarget, LuCalendarClock } from 'react-icons/lu';

export default function Membership() {
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
            <LuGraduationCap className="w-12 h-12 text-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Become a Member
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Join DIU Computer Programming Club and take your coding skills to the next level
          </p>
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
              <LuCalendarClock className="w-5 h-5 flex-shrink-0" />
              <span className="whitespace-nowrap">Deadline: April 15, 2026</span>
            </p>
          </div>

          <div className="w-full bg-foreground rounded-xl overflow-hidden shadow-inner">
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
