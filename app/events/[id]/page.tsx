'use client';

import { useParams, useRouter } from 'next/navigation';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = params.id;

  // Mock event data - in real app, fetch from API based on eventId
  const events: Record<string, any> = {
    '1': {
      id: 1,
      icon: '🔧',
      title: 'Flutter Workshop',
      description: 'Learn mobile app development with Flutter framework',
      fullDescription: `Join us for an intensive workshop on Flutter development. We'll cover:

• Widget basics and state management
• Navigation and routing
• API integration
• State management with Provider
• Building real-world applications

This workshop is perfect for beginners and intermediate developers looking to expand their mobile development skills.`,
      date: '23 Jan 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'Room 301, DIU Main Building',
      capacity: '45 / 50',
      organizer: 'CPC Technical Team',
      contact: 'tech@cpc.diu.edu.bd',
      fee: 'Free Event',
      registrationPeriod: '14 Jan, 2026 - 22 Jan, 2026',
      tags: ['flutter', 'mobile', 'development', 'workshop'],
      type: 'Workshop',
      color: 'from-blue-500 to-blue-600',
    },
  };

  const event = events[eventId as string] || events['1'];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors animate-fade-in"
      >
        <span className="text-xl">←</span>
        <span>Back to Events</span>
      </button>

      {/* Event Header */}
      <section className="animate-slide-up">
        <GlassCard enhanced>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className={`w-full md:w-64 h-64 rounded-3xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-2xl flex-shrink-0`}>
              <span className="text-8xl">{event.icon}</span>
            </div>
            
            <div className="flex-1">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-xl blue-gradient text-foreground text-sm font-medium mb-4">
                  {event.type}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {event.title}
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <GlassButton href={`/events/${event.id}/register`} variant="blue" className="px-8 py-4">
                  Register Now
                </GlassButton>
                <GlassButton variant="outline" className="px-8 py-4">
                  Share Event
                </GlassButton>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* About This Event */}
          <GlassCard enhanced className="animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-6">About This Event</h2>
            <div className="text-foreground/80 leading-relaxed whitespace-pre-line">
              {event.fullDescription}
            </div>
          </GlassCard>

          {/* Tags */}
          <GlassCard className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {event.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-xl blue-gradient text-foreground text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Event Information Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Event Information */}
          <GlassCard enhanced className="animate-slide-up sticky top-24">
            <h3 className="text-2xl font-bold text-foreground mb-6">Event Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-foreground/60 text-sm mb-2">
                  <span>📅</span> Date
                </h4>
                <p className="text-foreground text-lg font-medium">{event.date}</p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-foreground/60 text-sm mb-2">
                  <span>🕐</span> Time
                </h4>
                <p className="text-foreground text-lg font-medium">{event.time}</p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-foreground/60 text-sm mb-2">
                  <span>👥</span> Capacity
                </h4>
                <p className="text-foreground text-lg font-medium">{event.capacity}</p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-foreground/60 text-sm mb-2">
                  <span>👤</span> Organizer
                </h4>
                <p className="text-foreground text-lg font-medium">{event.organizer}</p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-foreground/60 text-sm mb-2">
                  <span>📧</span> Contact
                </h4>
                <p className="text-primary-light text-sm font-medium break-all">
                  {event.contact}
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Registration Info */}
          <GlassCard className="animate-slide-up">
            <h3 className="text-xl font-bold text-foreground mb-4">Registration</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="flex items-center gap-2 text-foreground/60 text-sm mb-2">
                  <span>📅</span> Registration Period
                </h4>
                <p className="text-foreground font-medium">{event.registrationPeriod}</p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-foreground/60 text-sm mb-2">
                  <span>💵</span> Fee
                </h4>
                <p className="text-foreground font-medium">{event.fee}</p>
              </div>
            </div>
          </GlassCard>

          {/* Location */}
          <GlassCard className="animate-slide-up">
            <h3 className="text-xl font-bold text-foreground mb-4">Location</h3>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl blue-gradient flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <p className="text-foreground font-medium leading-relaxed">
                  {event.location}
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
