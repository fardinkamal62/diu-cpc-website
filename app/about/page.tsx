import Image from 'next/image';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';

export default function AboutPage() {
  const stats = [
    { icon: '👥', value: '500+', label: 'Active Members' },
    { icon: '🏆', value: '20+', label: 'Events Hosted' },
    { icon: '🎯', value: '20+', label: 'Workshops' },
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We encourage creative thinking and innovative solutions to real-world problems.',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working together to achieve common goals and learn from each other.',
    },
    {
      icon: '📚',
      title: 'Learning',
      description: 'Continuous learning and skill development through workshops and projects.',
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Striving for excellence in everything we do, from coding to competitions.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="animate-fade-in">
        <GlassCard enhanced className="text-center py-16">
          <div className="inline-block p-6 rounded-3xl mb-2">
            <Image
              src="/cpc-logo.png"
              alt="DIU CPC Logo"
              width={90}
              height={90}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About DIU CPC
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            The Computer Programming Club at Dhaka International University is dedicated
            to fostering a community of passionate programmers and technology enthusiasts.
          </p>
        </GlassCard>
      </section>

      {/* Stats Section */}
      <section className="animate-slide-up">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <GlassCard key={index} enhanced className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl blue-gradient-enhanced flex items-center justify-center shadow-lg">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="animate-slide-up">
        <GlassCard enhanced>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-4xl">🎯</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                To create a vibrant community where students can enhance their programming
                skills, collaborate on projects, participate in competitions, and prepare
                for successful careers in technology. We aim to bridge the gap between
                academic learning and industry requirements through practical workshops,
                hackathons, and mentorship programs.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Vision Section */}
      <section className="animate-slide-up">
        <GlassCard enhanced>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-4xl">🔭</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                To become the leading programming community in Bangladesh, producing
                world-class developers who can compete globally. We envision a future
                where every member is equipped with cutting-edge technical skills,
                problem-solving abilities, and the confidence to innovate and lead
                in the tech industry.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Values Section */}
      <section className="animate-slide-up">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <GlassCard key={index} className="hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl blue-gradient-enhanced flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="animate-slide-up">
        <GlassCard enhanced>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Workshops & Training</h4>
                  <p className="text-white/70 text-sm">
                    Regular workshops on various programming languages and technologies
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Competitions</h4>
                  <p className="text-white/70 text-sm">
                    Organize and participate in coding competitions and hackathons
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Career Development</h4>
                  <p className="text-white/70 text-sm">
                    Guidance on career paths, internships, and job opportunities
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Networking</h4>
                  <p className="text-white/70 text-sm">
                    Connect with fellow programmers and industry professionals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💻</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Project Development</h4>
                  <p className="text-white/70 text-sm">
                    Collaborative projects to build real-world applications
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Resources</h4>
                  <p className="text-white/70 text-sm">
                    Access to learning materials, tutorials, and coding challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* CTA Section */}
      <section className="animate-scale-in">
        <GlassCard enhanced className="text-center py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Be a part of something bigger. Join DIU CPC today and start your journey
            towards becoming a skilled programmer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton href="/membership" variant="blue" className="px-8 py-4">
              Become a Member
            </GlassButton>
            <GlassButton href="/events" variant="outline" className="px-8 py-4">
              View Events
            </GlassButton>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
