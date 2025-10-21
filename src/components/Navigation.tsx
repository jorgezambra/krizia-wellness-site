'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/booking', label: 'Book' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{backgroundColor: 'transparent', backdropFilter: 'none'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3" style={{backgroundColor: 'transparent'}}>
        <div className="flex items-center justify-between" style={{backgroundColor: 'transparent'}}>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6" style={{backgroundColor: 'transparent'}}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-body text-sm font-normal transition-all duration-300 px-4 py-2 rounded-full"
                style={{color: 'rgba(255, 255, 255, 0.95)'}}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 border-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{borderColor: 'rgba(255, 255, 255, 0.9)'}} />
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block ml-auto">
            <Link
              href="/booking"
              className="px-6 py-2.5 border-2 font-body font-normal rounded-full transition-all text-sm hover:opacity-90"
              style={{
                borderColor: '#FFFFFF',
                backgroundColor: '#FFFFFF',
                color: '#3A3A3A'
              }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden transition-colors"
            style={{color: 'rgba(255, 255, 255, 0.95)'}}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-4"
            >
              <div className="flex flex-col gap-3 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-body transition-colors py-2 px-4 rounded-full border-2"
                    style={{color: '#3A3A3A', borderColor: 'rgba(58, 58, 58, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 border-2 font-body font-medium rounded-full transition-all text-center mt-2"
                  style={{
                    borderColor: '#3A3A3A',
                    backgroundColor: '#3A3A3A',
                    color: '#FFFFFF'
                  }}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
