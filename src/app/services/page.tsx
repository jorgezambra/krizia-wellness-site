'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { Dna, Pill, Apple, Heart, Activity, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16" style={{backgroundColor: '#E8DCC8'}}>
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading mb-6"
            style={{color: '#3A3A3A'}}
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-body"
            style={{color: '#5A5A5A'}}
          >
            Comprehensive wellness solutions tailored to your unique biology and goals
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ServiceCard
              title="DNA Testing"
              description="Comprehensive genetic analysis to unlock personalized health insights and optimize your wellness strategy."
              price="$299 - $599"
              icon={<Dna size={48} />}
              features={[
                'Full genetic sequencing',
                'Nutrigenomics analysis',
                'Fitness & performance genes',
                'Disease risk assessment',
                'Personalized supplement plan',
                'Detailed report & consultation'
              ]}
            />
            
            <ServiceCard
              title="Peptide Therapy"
              description="Cutting-edge peptide protocols designed to enhance recovery, performance, and cellular regeneration."
              price="$499 - $999"
              icon={<Pill size={48} />}
              features={[
                'Custom peptide stacks',
                'BPC-157 & TB-500 protocols',
                'Growth hormone optimization',
                'Anti-aging compounds',
                'Performance enhancement',
                'Ongoing monitoring & adjustment'
              ]}
            />
            
            <ServiceCard
              title="Nutrition Consulting"
              description="Personalized nutrition plans based on your biomarkers, goals, and lifestyle."
              price="$199 - $399"
              icon={<Apple size={48} />}
              features={[
                '60-90 minute consultation',
                'Comprehensive intake assessment',
                'Custom meal plans',
                'Macro & micro optimization',
                'Supplement recommendations',
                '30 days of follow-up support'
              ]}
            />
          </div>

          {/* Additional Services */}
          <div className="border-t border-stone pt-20">
            <h2 className="text-3xl md:text-4xl font-heading text-graphite mb-12 text-center">
              Additional Wellness Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-stone rounded-sm hover:border-bio-teal transition-colors">
                <Heart className="text-coral mb-3" size={32} />
                <h3 className="font-heading text-xl text-graphite mb-2">
                  Longevity Protocol
                </h3>
                <p className="text-ash text-sm font-body mb-3">
                  Comprehensive anti-aging and longevity optimization program
                </p>
                <p className="text-muted-gold font-heading">From $799</p>
              </div>

              <div className="p-6 border border-stone rounded-sm hover:border-bio-teal transition-colors">
                <Activity className="text-bio-teal mb-3" size={32} />
                <h3 className="font-heading text-xl text-graphite mb-2">
                  Biomarker Testing
                </h3>
                <p className="text-ash text-sm font-body mb-3">
                  Advanced blood work and biomarker analysis for health optimization
                </p>
                <p className="text-muted-gold font-heading">From $299</p>
              </div>

              <div className="p-6 border border-stone rounded-sm hover:border-bio-teal transition-colors">
                <Sparkles className="text-sage mb-3" size={32} />
                <h3 className="font-heading text-xl text-graphite mb-2">
                  Biohacking Consult
                </h3>
                <p className="text-ash text-sm font-body mb-3">
                  Personalized biohacking strategies for peak performance
                </p>
                <p className="text-muted-gold font-heading">From $249</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{backgroundColor: '#3A3A3A'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-6" style={{color: '#FFFFFF'}}>
            Not sure which service is right for you?
          </h2>
          <p className="text-lg font-body mb-8" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
            Book a free 15-minute discovery call to discuss your goals.
          </p>
          <Link href="/booking">
            <button className="px-8 py-3.5 border-2 font-body rounded-full transition-all duration-300 hover:opacity-90" style={{
              borderColor: '#FFFFFF',
              backgroundColor: '#FFFFFF',
              color: '#3A3A3A',
              fontSize: '15px',
              fontWeight: '400'
            }}>
              Book Discovery Call
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

