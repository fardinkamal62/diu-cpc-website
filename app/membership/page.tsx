'use client';

import { useState } from 'react';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    studentId: '',
    department: '',
    batch: '',
    semester: '',
    cgpa: '',
    programmingLanguages: [] as string[],
    interests: [] as string[],
    experience: '',
    motivation: '',
    github: '',
    linkedin: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const departments = ['CSE', 'SWE', 'EEE', 'BBA', 'English', 'Other'];
  const programmingLanguages = ['C', 'C++', 'Java', 'Python', 'JavaScript', 'PHP', 'Go', 'Rust'];
  const interestAreas = [
    'Web Development',
    'Mobile Development',
    'AI/ML',
    'Data Science',
    'Competitive Programming',
    'Game Development',
    'Cybersecurity',
    'Cloud Computing',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData((prev) => {
      const currentArray = prev[name as keyof typeof prev] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [name]: newArray };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        studentId: '',
        department: '',
        batch: '',
        semester: '',
        cgpa: '',
        programmingLanguages: [],
        interests: [],
        experience: '',
        motivation: '',
        github: '',
        linkedin: '',
      });
    }, 3000);
  };

  const benefits = [
    {
      icon: '🎓',
      title: 'Exclusive Workshops',
      description: 'Access to premium workshops and training sessions',
    },
    {
      icon: '🏆',
      title: 'Competitions',
      description: 'Participate in coding competitions and hackathons',
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Connect with industry professionals and peers',
    },
    {
      icon: '💼',
      title: 'Career Support',
      description: 'Get guidance on internships and job opportunities',
    },
    {
      icon: '📚',
      title: 'Learning Resources',
      description: 'Access to coding tutorials and study materials',
    },
    {
      icon: '🎯',
      title: 'Projects',
      description: 'Collaborate on real-world projects',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="animate-fade-in">
        <GlassCard enhanced className="text-center py-12">
          <div className="inline-block p-6 rounded-3xl blue-gradient-enhanced mb-6 shadow-xl">
            <span className="text-5xl">🎓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Become a Member
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join DIU Computer Programming Club and take your coding skills to the next level
          </p>
        </GlassCard>
      </section>

      {/* Benefits Section */}
      <section className="animate-slide-up">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Membership Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <GlassCard key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl blue-gradient-enhanced flex items-center justify-center shadow-lg">
                <span className="text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section className="animate-slide-up">
        <GlassCard enhanced>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Membership Application
          </h2>

          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 mb-6 shadow-xl">
                <span className="text-5xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Application Submitted!
              </h3>
              <p className="text-white/70">
                Thank you for applying. We'll review your application and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="your.email@diu.edu.bd"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Student ID *
                    </label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="CS-D-XX-XX-XXXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Academic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept} className="bg-primary-dark">
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Batch *
                    </label>
                    <input
                      type="text"
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="e.g., D-78A"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Current Semester *
                    </label>
                    <input
                      type="number"
                      name="semester"
                      value={formData.semester}
                      onChange={handleChange}
                      required
                      min="1"
                      max="12"
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="e.g., 5"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      CGPA
                    </label>
                    <input
                      type="number"
                      name="cgpa"
                      value={formData.cgpa}
                      onChange={handleChange}
                      step="0.01"
                      min="0"
                      max="4"
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="e.g., 3.75"
                    />
                  </div>
                </div>
              </div>

              {/* Technical Information */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technical Background</h3>
                
                <div className="mb-4">
                  <label className="block text-white/80 mb-2 text-sm font-medium">
                    Programming Languages (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {programmingLanguages.map((lang) => (
                      <label
                        key={lang}
                        className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.programmingLanguages.includes(lang)}
                          onChange={() => handleCheckboxChange('programmingLanguages', lang)}
                          className="rounded text-primary-blue focus:ring-primary-blue"
                        />
                        <span className="text-white text-sm">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-white/80 mb-2 text-sm font-medium">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interestAreas.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange('interests', interest)}
                          className="rounded text-primary-blue focus:ring-primary-blue"
                        />
                        <span className="text-white text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">
                    Programming Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                  >
                    <option value="">Select Experience Level</option>
                    <option value="beginner" className="bg-primary-dark">Beginner (0-1 year)</option>
                    <option value="intermediate" className="bg-primary-dark">Intermediate (1-2 years)</option>
                    <option value="advanced" className="bg-primary-dark">Advanced (2+ years)</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Additional Information</h3>
                
                <div className="mb-4">
                  <label className="block text-white/80 mb-2 text-sm font-medium">
                    Why do you want to join DIU CPC? *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors resize-none"
                    placeholder="Share your motivation for joining..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      GitHub Profile (Optional)
                    </label>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="https://github.com/username"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      LinkedIn Profile (Optional)
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <GlassButton
                  type="submit"
                  variant="blue"
                  disabled={isSubmitting}
                  className="w-full py-4 text-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </GlassButton>
                <p className="text-white/60 text-xs text-center mt-4">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </div>
            </form>
          )}
        </GlassCard>
      </section>
    </div>
  );
}
