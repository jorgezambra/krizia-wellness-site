'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';
import { Award, BookOpen, Users, Heart } from 'lucide-react';

export default function AboutPage() {
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
            About Krizia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-body"
            style={{color: '#5A5A5A'}}
          >
            Functional medicine practitioner, nutritionist, and biohacking expert
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg font-body leading-relaxed mb-6" style={{color: '#5A5A5A'}}>
                Krizia Passariello is a certified functional medicine practitioner and nutritionist 
                specializing in personalized wellness protocols, longevity optimization, and advanced 
                biohacking strategies.
              </p>
              
              <p className="text-lg font-body leading-relaxed mb-6" style={{color: '#5A5A5A'}}>
                With over a decade of experience in functional medicine and nutrition science, 
                Krizia has helped hundreds of clients achieve optimal health through evidence-based, 
                personalized approaches that address the root causes of health challenges.
              </p>
              
              <p className="text-lg font-body leading-relaxed mb-6" style={{color: '#5A5A5A'}}>
                Her approach combines cutting-edge scientific research with time-tested wellness 
                principles, integrating genetic testing, advanced biomarker analysis, peptide therapy, 
                and personalized nutrition to create comprehensive health optimization protocols.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 px-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading mb-12 text-center" style={{color: '#3A3A3A'}}>
            Credentials & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <Award className="flex-shrink-0" size={32} style={{color: '#3A3A3A'}} />
              <div>
                <h3 className="font-heading text-xl mb-2" style={{color: '#3A3A3A'}}>
                  Certifications
                </h3>
                <ul className="space-y-2 font-body" style={{color: '#5A5A5A'}}>
                  <li>• Certified Functional Medicine Practitioner</li>
                  <li>• Board Certified Nutritionist</li>
                  <li>• Peptide Therapy Specialist</li>
                  <li>• Certified Biohacking Coach</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4"
            >
              <BookOpen className="flex-shrink-0" size={32} style={{color: '#3A3A3A'}} />
              <div>
                <h3 className="font-heading text-xl mb-2" style={{color: '#3A3A3A'}}>
                  Education
                </h3>
                <ul className="space-y-2 font-body" style={{color: '#5A5A5A'}}>
                  <li>• MS, Nutrition Science</li>
                  <li>• BS, Biochemistry</li>
                  <li>• Institute for Functional Medicine</li>
                  <li>• Advanced Peptide Training</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <Users className="flex-shrink-0" size={32} style={{color: '#3A3A3A'}} />
              <div>
                <h3 className="font-heading text-xl mb-2" style={{color: '#3A3A3A'}}>
                  Experience
                </h3>
                <ul className="space-y-2 font-body" style={{color: '#5A5A5A'}}>
                  <li>• 10+ years in functional medicine</li>
                  <li>• 500+ clients served</li>
                  <li>• Speaker at wellness conferences</li>
                  <li>• Published researcher</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <Heart className="flex-shrink-0" size={32} style={{color: '#3A3A3A'}} />
              <div>
                <h3 className="font-heading text-xl mb-2" style={{color: '#3A3A3A'}}>
                  Specializations
                </h3>
                <ul className="space-y-2 font-body" style={{color: '#5A5A5A'}}>
                  <li>• Longevity & Anti-Aging</li>
                  <li>• Performance Optimization</li>
                  <li>• Metabolic Health</li>
                  <li>• Hormone Optimization</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading mb-8" style={{color: '#3A3A3A'}}>
            Philosophy
          </h2>
          <p className="text-lg font-body leading-relaxed mb-8" style={{color: '#5A5A5A'}}>
            I believe that optimal health is not a one-size-fits-all approach. Every individual 
            has a unique genetic blueprint, lifestyle, and set of health goals. My mission is to 
            empower you with the knowledge and tools to take control of your health through 
            personalized, science-backed strategies that work for YOUR body.
          </p>
          <Link href="/booking">
            <button className="px-8 py-3.5 border-2 font-body rounded-full transition-all duration-300 hover:opacity-90" style={{
              borderColor: '#3A3A3A',
              backgroundColor: '#3A3A3A',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: '400'
            }}>
              Work With Me
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

