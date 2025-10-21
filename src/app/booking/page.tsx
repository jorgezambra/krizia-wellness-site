'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Clock, Video, MapPin } from 'lucide-react';

const services = [
  { id: 'discovery', name: 'Discovery Call (15 min)', price: 'Free', duration: '15 min' },
  { id: 'nutrition', name: 'Nutrition Consultation', price: '$199', duration: '60 min' },
  { id: 'dna', name: 'DNA Testing Package', price: '$299', duration: '90 min' },
  { id: 'peptide', name: 'Peptide Therapy Consultation', price: '$499', duration: '75 min' },
  { id: 'longevity', name: 'Longevity Protocol', price: '$799', duration: '120 min' },
];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase
    console.log('Booking submitted:', { service: selectedService, ...formData });
    alert('Booking request submitted! We will contact you shortly to confirm.');
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
            Book Your Session
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ash font-body"
          >
            Take the first step towards optimal health
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-3">
              <Video className="text-bio-teal flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-lg text-graphite mb-1">Virtual Sessions</h3>
                <p className="text-sm text-ash font-body">Available worldwide via Zoom</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="text-bio-teal flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-lg text-graphite mb-1">Flexible Scheduling</h3>
                <p className="text-sm text-ash font-body">7 days a week availability</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="text-bio-teal flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-lg text-graphite mb-1">In-Person Option</h3>
                <p className="text-sm text-ash font-body">Select locations available</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-stone/20 p-8 rounded-sm">
            {/* Service Selection */}
            <div className="mb-6">
              <label className="block font-heading text-graphite mb-3">
                Select Service
              </label>
              <div className="space-y-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center justify-between p-4 border rounded-sm cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-bio-teal bg-bio-teal/5'
                        : 'border-stone hover:border-bio-teal/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={selectedService === service.id}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="text-bio-teal"
                      />
                      <div>
                        <div className="font-body text-graphite">{service.name}</div>
                        <div className="text-sm text-ash">{service.duration}</div>
                      </div>
                    </div>
                    <div className="font-heading text-bio-teal">{service.price}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-body text-graphite mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-stone rounded-sm focus:border-bio-teal focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block font-body text-graphite mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-stone rounded-sm focus:border-bio-teal focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-body text-graphite mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-stone rounded-sm focus:border-bio-teal focus:outline-none"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-body text-graphite mb-2">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-stone rounded-sm focus:border-bio-teal focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block font-body text-graphite mb-2">Preferred Time *</label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 border border-stone rounded-sm focus:border-bio-teal focus:outline-none"
                >
                  <option value="">Select time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-6">
              <label className="block font-body text-graphite mb-2">
                Additional Notes / Health Goals
              </label>
              <textarea
                rows={4}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 border border-stone rounded-sm focus:border-bio-teal focus:outline-none resize-none"
                placeholder="Tell us about your health goals, concerns, or questions..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Request Booking
            </Button>

            <p className="text-sm text-ash font-body mt-4 text-center">
              You will receive a confirmation email within 24 hours
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

