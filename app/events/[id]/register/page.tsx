'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';

export default function EventRegistrationPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = params.id;

  // Mock event data - in real app, fetch from API
  const event = {
    id: eventId,
    icon: '🔧',
    title: 'Flutter Workshop',
    description: 'Learn mobile app development with Flutter',
    date: '23 Jan 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Room 301, DIU Main Building',
    capacity: '45 / 50',
    fee: 'Free Event',
    type: 'Workshop',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentId: '',
    department: '',
    batch: '',
    motivation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Event registration submitted:', { eventId, ...formData });
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Redirect after 3 seconds
    setTimeout(() => {
      router.push('/events');
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <section className="animate-fade-in">
        <GlassCard enhanced className="py-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <span className="text-xl">←</span>
            <span>Back</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Event Registration
            </h1>
            <p className="text-white/70">Register for this event</p>
          </div>
        </GlassCard>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Event Details Sidebar */}
        <div className="lg:col-span-1">
          <GlassCard enhanced className="sticky top-24">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
              <span className="text-4xl">{event.icon}</span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              {event.title}
            </h2>
            <p className="text-center mb-6">
              <span className="inline-block px-3 py-1 rounded-lg blue-gradient text-white text-sm font-medium">
                {event.type}
              </span>
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-white/60 text-sm mb-1">📅 Date</h3>
                <p className="text-white font-medium">{event.date}</p>
              </div>
              <div>
                <h3 className="text-white/60 text-sm mb-1">🕐 Time</h3>
                <p className="text-white font-medium">{event.time}</p>
              </div>
              <div>
                <h3 className="text-white/60 text-sm mb-1">💵 Fee</h3>
                <p className="text-white font-medium">{event.fee}</p>
              </div>
              <div>
                <h3 className="text-white/60 text-sm mb-1">👥 Capacity</h3>
                <p className="text-white font-medium">{event.capacity}</p>
              </div>
              <div>
                <h3 className="text-white/60 text-sm mb-1">📍 Location</h3>
                <p className="text-white font-medium">{event.location}</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl glass-card border border-primary-blue/30">
              <p className="text-white/80 text-xs text-center">
                ℹ️ Your profile information will be used for registration
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Registration Form */}
        <div className="lg:col-span-2">
          <GlassCard enhanced>
            {submitSuccess ? (
              <div className="text-center py-16 animate-scale-in">
                <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 mb-6 shadow-xl">
                  <span className="text-5xl">✅</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Registration Successful!
                </h3>
                <p className="text-white/70 mb-6 max-w-md mx-auto">
                  You have successfully registered for {event.title}. 
                  You will receive a confirmation email shortly.
                </p>
                <p className="text-white/50 text-sm">
                  Redirecting to events page...
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Your Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 mb-2 text-sm font-medium">
                        👤 Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="Sifatullah Haque"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2 text-sm font-medium">
                        📧 Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="sifatulla.haque@gmail.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2 text-sm font-medium">
                        📱 Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="01850676787"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2 text-sm font-medium">
                        🆔 Student ID *
                      </label>
                      <input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="CS-D-78-22-120242"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2 text-sm font-medium">
                        🎓 Department *
                      </label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                      >
                        <option value="">Select Department</option>
                        <option value="CSE" className="bg-primary-dark">CSE</option>
                        <option value="SWE" className="bg-primary-dark">SWE</option>
                        <option value="EEE" className="bg-primary-dark">EEE</option>
                        <option value="BBA" className="bg-primary-dark">BBA</option>
                        <option value="English" className="bg-primary-dark">English</option>
                        <option value="Other" className="bg-primary-dark">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2 text-sm font-medium">
                        📚 Batch *
                      </label>
                      <input
                        type="text"
                        name="batch"
                        value={formData.batch}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="D-78A"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      💭 Why do you want to attend this event? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl glass-card text-white border border-white/20 focus:border-primary-blue focus:outline-none transition-colors resize-none"
                      placeholder="Share your motivation for attending this event..."
                    />
                  </div>

                  {/* Info Box */}
                  <div className="p-4 rounded-xl glass-card border border-primary-blue/30">
                    <p className="text-white/80 text-sm">
                      ℹ️ <strong>Note:</strong> After successful registration, you will receive a confirmation 
                      email with event details and QR code for check-in.
                    </p>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <GlassButton
                      type="button"
                      variant="outline"
                      onClick={() => router.back()}
                      className="flex-1"
                    >
                      Cancel
                    </GlassButton>
                    <GlassButton
                      type="submit"
                      variant="blue"
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      {isSubmitting ? 'Registering...' : 'Complete Registration'}
                    </GlassButton>
                  </div>
                </form>
              </>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
