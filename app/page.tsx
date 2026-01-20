import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const stats = [
    { icon: '👥', value: '500+', label: 'Active Members' },
    { icon: '🏆', value: '50+', label: 'Events Organized' },
    { icon: '🎯', value: '10+', label: 'Years Active' },
  ];

  const featuredEvents = [
    {
      id: 1,
      icon: '🔧',
      title: 'Flutter Workshop',
      description: 'Learn mobile app development with Flutter framework',
      date: 'Jan 23, 2026',
      type: 'Workshop',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      icon: '🏆',
      title: 'Coding Competition 2026',
      description: 'Test your programming skills in competitive coding',
      date: 'Feb 15, 2026',
      type: 'Competition',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 3,
      icon: '🤖',
      title: 'AI & ML Workshop',
      description: 'Dive into Artificial Intelligence and Machine Learning',
      date: 'Mar 5, 2026',
      type: 'Workshop',
      color: 'from-green-500 to-green-600',
    },
  ];

  const benefits = [
    {
      icon: '🎓',
      title: 'Skill Development',
      description: 'Learn cutting-edge technologies through workshops, bootcamps, and hands-on projects.',
    },
    {
      icon: '🏆',
      title: 'Competitions',
      description: 'Participate in coding competitions, hackathons, and programming contests.',
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Connect with fellow programmers, industry professionals, and tech enthusiasts.',
    },
    {
      icon: '💼',
      title: 'Career Growth',
      description: 'Get guidance on internships, job opportunities, and career development.',
    },
    {
      icon: '💻',
      title: 'Real Projects',
      description: 'Work on real-world projects and build your portfolio with practical experience.',
    },
    {
      icon: '📚',
      title: 'Resources',
      description: 'Access exclusive learning materials, tutorials, and coding resources.',
    },
  ];

  const achievements = [
    '🥇 NASA International Space Apps Challenge 2025 Champion (Barishal Region)',
    '🎖️ NASA International Space Apps Challenge 2025 1st Runners-Up, Cumilla Division',
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-light-blue/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            {/* Logo/Icon */}
            <div className="inline-block p-2 rounded-3xl bg-white/10 backdrop-blur-sm mb-8 shadow-2xl shadow-primary-blue/30 animate-scale-in">
              <Image
                src="/cpc-logo.png"
                alt="DIU CPC Logo"
                width={90}
                height={90}
                className="object-contain"
                priority
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              DIU Computer
              <br />
              <span className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Programming Club
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering students at Dhaka International University through coding, 
              innovation, and technology.
              <br />
              Join the largest programming community on campus.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <GlassButton href="/membership" variant="blue" className="px-10 py-5 text-lg">
                Join Now
              </GlassButton>
              <GlassButton href="/about" variant="outline" className="px-10 py-5 text-lg">
                Learn More
              </GlassButton>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary-light">✓</span>
                <span>500+ Members</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-light">✓</span>
                <span>50+ Events</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-light">✓</span>
                <span>10+ Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <GlassCard
              key={index}
              enhanced
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl blue-gradient-enhanced flex items-center justify-center shadow-lg">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What is DIU CPC?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              The Computer Programming Club at Dhaka International University is the premier 
              student organization dedicated to fostering excellence in computer science, 
              software development, and technology innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard enhanced className="p-8 animate-slide-up">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed">
                    To create a vibrant community where students can enhance their programming 
                    skills, collaborate on innovative projects, and prepare for successful 
                    careers in technology through workshops, competitions, and mentorship.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard enhanced className="p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-3xl">🔭</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                  <p className="text-white/80 leading-relaxed">
                    To become the leading programming community in Bangladesh, producing 
                    world-class developers who excel in competitive programming, software 
                    development, and technological innovation on a global scale.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-white/70">
                Join our workshops, competitions, and tech talks
              </p>
            </div>
            <GlassButton href="/events" variant="outline">
              View All Events
            </GlassButton>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <GlassCard
                key={event.id}
                enhanced
                className="group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  <span className="text-7xl">{event.icon}</span>
                </div>
                <span className="inline-block px-3 py-1 rounded-lg blue-gradient text-white text-xs font-medium mb-3">
                  {event.type}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {event.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-primary-light">
                  <span>📅</span>
                  <span>{event.date}</span>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <GlassButton href="/events" variant="blue" className="px-8 py-4">
              Explore All Events
            </GlassButton>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Join DIU CPC?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Unlock exclusive benefits and opportunities to accelerate your tech journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard
                key={index}
                className="p-6 hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 rounded-xl blue-gradient-enhanced flex items-center justify-center shadow-lg mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard enhanced className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Our Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 glass-card p-4 rounded-xl animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-white/90 text-lg">{achievement}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Connect With Us</h2>
            <p className="text-xl text-white/70">Follow us on social media for updates</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.facebook.com/diucsecpc"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <GlassCard enhanced className="p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Facebook</h3>
                <p className="text-white/70 text-sm">@diucsecpc</p>
              </GlassCard>
            </a>

            <a
              href="https://www.linkedin.com/company/diucsecpc"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <GlassCard enhanced className="p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-400/50">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-white/70 text-sm">@diucsecpc</p>
              </GlassCard>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard enhanced className="p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join DIU Computer Programming Club today and become part of a thriving 
                community of developers, innovators, and tech enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton href="/membership" variant="blue" className="px-10 py-5 text-lg">
                  Join Now
                </GlassButton>
                <GlassButton href="/events" variant="outline" className="px-10 py-5 text-lg">
                  View Events
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}