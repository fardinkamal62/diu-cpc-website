import { redirect } from 'next/navigation';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';

export default function ProfilePage() {
  // TODO: Add authentication check here
  // For now, redirect to login (will be implemented with Appwrite)
  // Uncomment when authentication is ready:
  // if (!isAuthenticated) {
  //   redirect('/login');
  // }

  const quickActions = [
    { icon: '🎓', title: 'Classes', description: 'View upcoming classes' },
    { icon: '💡', title: 'Ideas', description: 'Share your projects' },
    { icon: '💬', title: 'Chat', description: 'Connect with members' },
    { icon: '📝', title: 'Notes', description: 'Access resources' },
  ];

  const upcomingEvents = [
    {
      id: 1,
      icon: '🔧',
      title: 'Flutter Workshop',
      description: 'Learn mobile app development with Flutter',
      date: 'Sept 15, 2024',
      time: '2:00 PM',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      icon: '🏆',
      title: 'Coding Competition',
      description: 'Test your programming skills in this contest',
      date: 'Sept 22, 2024',
      time: '10:00 AM',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const announcements = [
    {
      id: 1,
      icon: '⚠️',
      title: 'Club Meeting Tomorrow',
      description: "Don't forget about our weekly meeting at 4:00 PM in Room 301",
      time: '2 hours ago',
      type: 'urgent',
    },
    {
      id: 2,
      icon: '📚',
      title: 'New Programming Resources',
      description: 'Check out our latest coding tutorials and practice problems',
      time: '1 day ago',
      type: 'info',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="animate-fade-in">
        <GlassCard enhanced className="text-center py-12">
          <div className="inline-block p-4 rounded-2xl blue-gradient-enhanced mb-6 shadow-xl">
            <div className="w-16 h-16 flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back!
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Sifatullah Haque
          </h2>
          <p className="text-white/60 text-sm">CPC ID: DIUCPC-150925000001</p>
        </GlassCard>
      </section>

      {/* Quick Actions */}
      <section className="animate-slide-up">
        <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <GlassCard
              key={index}
              className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl blue-gradient-enhanced flex items-center justify-center shadow-lg">
                <span className="text-3xl">{action.icon}</span>
              </div>
              <h3 className="text-white font-semibold mb-1">{action.title}</h3>
              <p className="text-white/60 text-xs">{action.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl blue-gradient-enhanced flex items-center justify-center shadow-lg">
              <span className="text-2xl">📅</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
          </div>
          <GlassButton href="/events" variant="outline" className="text-sm">
            View All
          </GlassButton>
        </div>

        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <GlassCard key={event.id} enhanced>
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <span className="text-3xl">{event.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-primary-light">
                    <span className="flex items-center gap-1">
                      📅 {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      🕐 {event.time}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section className="animate-slide-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
            <span className="text-2xl">📢</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Announcements</h2>
        </div>

        <div className="space-y-4">
          {announcements.map((announcement) => (
            <GlassCard
              key={announcement.id}
              className={`border-l-4 ${
                announcement.type === 'urgent'
                  ? 'border-warning'
                  : 'border-primary-blue'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <span className="text-2xl">{announcement.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white">
                        {announcement.title}
                      </h3>
                      <span className="text-xs text-white/50 whitespace-nowrap">
                        {announcement.time}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm">
                      {announcement.description}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="animate-scale-in">
        <GlassCard enhanced className="text-center py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Become a part of DIU Computer Programming Club and enhance your
            coding skills, participate in competitions, and build amazing
            projects.
          </p>
          <GlassButton href="/membership" variant="blue" className="px-8 py-4">
            Become a Member
          </GlassButton>
        </GlassCard>
      </section>
    </div>
  );
}
