import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';

export default function CommitteePage() {
  const committeeMembers = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      position: 'President',
      studentId: 'DIU-211-15-1001',
      batch: '57th',
      department: 'CSE',
      program: '57th Batch',
      email: 'ahmed.hassan@diu.edu.bd',
      phone: '+880 1712-345678',
      icon: '⭐',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Fatima Rahman',
      position: 'Vice President',
      studentId: 'DIU-211-15-1002',
      batch: '57th',
      department: 'SWE',
      program: '57th Batch',
      email: 'fatima.rahman@diu.edu.bd',
      phone: '+880 1712-345679',
      icon: '⭐',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      name: 'Mohammad Ali',
      position: 'General Secretary',
      studentId: 'DIU-211-15-1003',
      batch: '58th',
      department: 'CSE',
      program: '58th Batch',
      email: 'mohammad.ali@diu.edu.bd',
      phone: '+880 1712-345680',
      icon: '✏️',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 4,
      name: 'Sarah Khan',
      position: 'Treasurer',
      studentId: 'DIU-211-15-1004',
      batch: '57th',
      department: 'CSE',
      program: '57th Batch',
      email: 'sarah.khan@diu.edu.bd',
      phone: '+880 1712-345681',
      icon: '💰',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 5,
      name: 'Karim Ahmed',
      position: 'Technical Lead',
      studentId: 'DIU-211-15-1005',
      batch: '57th',
      department: 'CSE',
      program: '57th Batch',
      email: 'karim.ahmed@diu.edu.bd',
      phone: '+880 1712-345682',
      icon: '💻',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 6,
      name: 'Nusrat Jahan',
      position: 'Event Coordinator',
      studentId: 'DIU-211-15-1006',
      batch: '58th',
      department: 'SWE',
      program: '58th Batch',
      email: 'nusrat.jahan@diu.edu.bd',
      phone: '+880 1712-345683',
      icon: '🎯',
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 7,
      name: 'Tanvir Islam',
      position: 'Media Manager',
      studentId: 'DIU-211-15-1007',
      batch: '58th',
      department: 'CSE',
      program: '58th Batch',
      email: 'tanvir.islam@diu.edu.bd',
      phone: '+880 1712-345684',
      icon: '📱',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      id: 8,
      name: 'Riya Hossain',
      position: 'PR & Marketing',
      studentId: 'DIU-211-15-1008',
      batch: '57th',
      department: 'CSE',
      program: '57th Batch',
      email: 'riya.hossain@diu.edu.bd',
      phone: '+880 1712-345685',
      icon: '📢',
      color: 'from-teal-500 to-teal-600',
    },
    {
      id: 9,
      name: 'Shakib Rahman',
      position: 'Workshop Coordinator',
      studentId: 'DIU-211-15-1009',
      batch: '58th',
      department: 'CSE',
      program: '58th Batch',
      email: 'shakib.rahman@diu.edu.bd',
      phone: '+880 1712-345686',
      icon: '🎓',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 10,
      name: 'Ayesha Siddique',
      position: 'Member Relations',
      studentId: 'DIU-211-15-1010',
      batch: '57th',
      department: 'SWE',
      program: '57th Batch',
      email: 'ayesha.siddique@diu.edu.bd',
      phone: '+880 1712-345687',
      icon: '🤝',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  const executiveMembers = committeeMembers.slice(0, 3);
  const generalMembers = committeeMembers.slice(3);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="animate-fade-in">
        <GlassCard enhanced className="text-center py-12">
          <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-yellow-500 to-yellow-600 mb-6 shadow-xl">
            <span className="text-5xl">👥</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Members</h1>
          <p className="text-xl text-white/70 mb-2">Committee & Executive Members</p>
          <p className="text-primary-light font-semibold">10 total members</p>
        </GlassCard>
      </section>

      {/* Tab-like Section Headers */}
      <section className="animate-slide-down">
        <div className="flex gap-4 justify-center">
          <div className="px-8 py-3 rounded-xl blue-gradient-enhanced text-white font-semibold shadow-lg">
            Committee Members
          </div>
          <div className="px-8 py-3 rounded-xl glass-card text-white/70 font-semibold">
            Executive Members
          </div>
        </div>
      </section>

      {/* Executive Members */}
      <section className="animate-slide-up">
        <h2 className="text-2xl font-bold text-white mb-6">Executive Board</h2>
        <div className="space-y-6">
          {executiveMembers.map((member) => (
            <GlassCard key={member.id} enhanced>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Member Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <span className="text-4xl">{member.icon}</span>
                </div>

                {/* Member Details */}
                <div className="flex-1 min-w-0">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-lg blue-gradient text-white text-xs font-medium mb-2">
                      {member.position}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {member.studentId} • {member.batch}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-primary-light">🎓</span>
                      <span className="text-white/70">
                        {member.department} • {member.program}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-primary-light">📧</span>
                      <span className="text-white/70">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-primary-light">📱</span>
                      <span className="text-white/70">{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* General Committee Members */}
      <section className="animate-slide-up">
        <h2 className="text-2xl font-bold text-white mb-6">Committee Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {generalMembers.map((member) => (
            <GlassCard key={member.id} className="hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-4">
                {/* Member Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <span className="text-3xl">{member.icon}</span>
                </div>

                {/* Member Details */}
                <div className="flex-1 min-w-0">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 rounded-lg blue-gradient text-white text-xs font-medium mb-2">
                      {member.position}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/60 text-xs">
                      {member.studentId}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-primary-light">🎓</span>
                      <span className="text-white/70">
                        {member.department} • {member.batch}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-primary-light">📧</span>
                      <span className="text-white/70 truncate">{member.email}</span>
                    </div>
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
            Want to Contribute?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join our committee and help shape the future of DIU CPC. We're always
            looking for passionate individuals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton href="/membership" variant="blue" className="px-8 py-4">
              Become a Member
            </GlassButton>
            <GlassButton href="/about" variant="outline" className="px-8 py-4">
              Learn More
            </GlassButton>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
