'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#E8DCC8', margin: 0, padding: 0}}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{top: 0, left: 0, right: 0, bottom: 0, margin: 0, padding: 0}}>
        <Image
          src="/images/hero-krizia.jpg"
          alt="Background"
          fill
          style={{objectFit: 'cover', objectPosition: 'center top'}}
          priority
          onError={(e) => {
            // Hide image if it fails to load (placeholder will show background color)
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full" style={{paddingTop: '80px'}}>
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 max-w-2xl mb-12"
          >
            <h1 className="font-heading mb-3" style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              lineHeight: '1.1',
              color: '#3A3A3A',
              fontWeight: '400',
              letterSpacing: '-0.02em'
            }}>
              KRIZIA
              <br />
              PASSARIELLO
            </h1>
            
            <p className="font-serif text-xl sm:text-2xl md:text-3xl mb-8" style={{
              color: '#5A5A5A',
              fontWeight: '300',
              fontStyle: 'italic'
            }}>
              Wellness & Biohacking
            </p>
            
            {/* Decorative Element - Optional glass/vase */}
            <div className="flex gap-4 opacity-60">
              <div className="w-12 h-20 rounded-full" style={{backgroundColor: 'rgba(180, 160, 130, 0.3)'}}></div>
              <div className="w-10 h-16 rounded-full" style={{backgroundColor: 'rgba(160, 180, 140, 0.3)'}}></div>
            </div>
          </motion.div>

          {/* Buttons - Centered on page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="z-10 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <Link href="/booking">
                <button className="group px-8 py-3.5 border-2 font-body rounded-full transition-all duration-300 hover:opacity-90 w-full sm:w-auto min-w-[200px]" style={{
                  borderColor: '#3A3A3A',
                  backgroundColor: '#3A3A3A',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: '400'
                }}>
                  Book Consultation
                </button>
              </Link>
              
              <Link href="/services">
                <button className="group px-8 py-3.5 border-2 font-body rounded-full transition-all duration-300 hover:bg-white/20 w-full sm:w-auto min-w-[200px]" style={{
                  borderColor: '#3A3A3A',
                  backgroundColor: 'transparent',
                  color: '#3A3A3A',
                  fontSize: '15px',
                  fontWeight: '400'
                }}>
                  View Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
