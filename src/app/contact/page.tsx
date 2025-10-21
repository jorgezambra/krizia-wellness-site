'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase / Email service
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-16" style={{backgroundColor: '#E8DCC8'}}>
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading text-graphite mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ash font-body"
          >
            Have questions? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading text-graphite mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-bio-teal flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading text-lg text-graphite mb-1">Email</h3>
                    <a 
                      href="mailto:hello@kriziapassariello.com" 
                      className="text-ash font-body hover:text-bio-teal transition-colors"
                    >
                      hello@kriziapassariello.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-bio-teal flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading text-lg text-graphite mb-1">Phone</h3>
                    <a 
                      href="tel:+15551234567" 
                      className="text-ash font-body hover:text-bio-teal transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-bio-teal flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-heading text-lg text-graphite mb-1">Location</h3>
                    <p className="text-ash font-body">
                      Virtual consultations available worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-stone/20 rounded-sm">
                <h3 className="font-heading text-xl text-graphite mb-3">
                  Office Hours
                </h3>
                <div className="space-y-2 text-ash font-body">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading text-graphite mb-8">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-graphite mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-stone rounded-sm focus:border-bio-teal focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-body text-graphite mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-stone rounded-sm focus:border-bio-teal focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-body text-graphite mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-stone rounded-sm focus:border-bio-teal focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-body text-graphite mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-stone rounded-sm focus:border-bio-teal focus:outline-none resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full inline-flex items-center justify-center gap-2">
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

