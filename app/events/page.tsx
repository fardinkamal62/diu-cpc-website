import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import Link from 'next/link';

export default function EventsPage() {
  const events = [
    {
      id: 1,
      icon: '🔧',
      title: 'Flutter Workshop',
      description: 'Learn mobile app development with Flutter framework',
      fullDescription: 'Join us for an intensive workshop on Flutter development. We\'ll cover:\n\n• Widget basics and state management\n• Navigation and routing\n• API integration\n• State management with Provider\n• Building real-world applications\n\nThis workshop is perfect for beginners and intermediate developers looking to expand their mobile development skills.',
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
    {
      id: 2,
      icon: '🏆',
      title: 'Coding Competition 2024',
      description: 'Test your programming skills in this competitive coding contest',
      fullDescription: 'Test your programming skills in our annual coding competition. Compete against the best programmers and solve challenging algorithmic problems.',
      date: '22 Sept 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Computer Lab, DIU',
      capacity: '30 / 40',
      organizer: 'CPC Executive Committee',
      contact: 'tech@cpc.diu.edu.bd',
      fee: 'Free Event',
      registrationPeriod: '10 Sept, 2024 - 20 Sept, 2024',
      tags: ['competition', 'coding', 'algorithms'],
      type: 'Competition',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 3,
      icon: '🎨',
      title: 'Web Development Bootcamp',
      description: 'Master modern web development with React and Next.js',
      fullDescription: 'A comprehensive bootcamp covering modern web development technologies including React, Next.js, and Tailwind CSS.',
      date: '5 Oct 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Room 205, DIU Main Building',
      capacity: '25 / 30',
      organizer: 'CPC Technical Team',
      contact: 'tech@cpc.diu.edu.bd',
      fee: 'Free Event',
      registrationPeriod: '25 Sept, 2024 - 3 Oct, 2024',
      tags: ['web', 'react', 'nextjs', 'bootcamp'],
      type: 'Bootcamp',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 4,
      icon: '🤖',
      title: 'AI & Machine Learning Workshop',
      description: 'Introduction to AI and ML concepts with practical examples',
      fullDescription: 'Explore the fascinating world of Artificial Intelligence and Machine Learning with hands-on projects.',
      date: '15 Oct 2024',
      time: '1:00 PM - 5:00 PM',
      location: 'Room 401, DIU Main Building',
      capacity: '20 / 25',
      organizer: 'CPC Technical Team',
      contact: 'tech@cpc.diu.edu.bd',
      fee: 'Free Event',
      registrationPeriod: '5 Oct, 2024 - 13 Oct, 2024',
      tags: ['ai', 'ml', 'python', 'workshop'],
      type: 'Workshop',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 5,
      icon: '🚀',
      title: 'Hackathon 2024',
      description: '24-hour hackathon to build innovative solutions',
      fullDescription: 'Join our 24-hour hackathon where you\'ll work in teams to build innovative solutions to real-world problems.',
      date: '1 Nov 2024',
      time: '9:00 AM - 9:00 AM (Next Day)',
      location: 'DIU Campus',
      capacity: '50 / 60',
      organizer: 'CPC Executive Committee',
      contact: 'tech@cpc.diu.edu.bd',
      fee: 'Free Event',
      registrationPeriod: '15 Oct, 2024 - 30 Oct, 2024',
      tags: ['hackathon', 'innovation', 'teamwork'],
      type: 'Hackathon',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="animate-fade-in">
        <GlassCard enhanced className="text-center py-12">
          <div className="inline-block p-6 rounded-3xl blue-gradient-enhanced mb-6 shadow-xl">
            <span className="text-5xl">📅</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Events</h1>
          <p className="text-xl text-white/70 mb-2">5 total events</p>
        </GlassCard>
      </section>

      {/* Events List */}
      <section className="space-y-6 animate-slide-up">
        {events.map((event) => (
          <GlassCard key={event.id} enhanced>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Event Icon */}
              <div className={`w-full md:w-48 h-48 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <span className="text-7xl">{event.icon}</span>
              </div>

              {/* Event Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {event.title}
                    </h2>
                    <span className="inline-block px-3 py-1 rounded-lg blue-gradient text-white text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>

                <p className="text-white/80 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary-light">📅</span>
                    <span className="text-white/70">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary-light">🕐</span>
                    <span className="text-white/70">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary-light">📍</span>
                    <span className="text-white/70">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary-light">👥</span>
                    <span className="text-white/70">{event.capacity}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-lg glass-card text-xs text-white/70 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <GlassButton
                    href={`/events/${event.id}/register`}
                    variant="blue"
                    className="flex-1 sm:flex-none"
                  >
                    Register
                  </GlassButton>
                  <GlassButton
                    href={`/events/${event.id}`}
                    variant="outline"
                    className="flex-1 sm:flex-none"
                  >
                    View Details
                  </GlassButton>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </section>

      {/* CTA Section */}
      <section className="animate-scale-in">
        <GlassCard enhanced className="text-center py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't Miss Out!
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest events and workshops. Join DIU CPC today
            to get early access to event registrations.
          </p>
          <GlassButton href="/membership" variant="blue" className="px-8 py-4">
            Become a Member
          </GlassButton>
        </GlassCard>
      </section>
    </div>
  );
}
