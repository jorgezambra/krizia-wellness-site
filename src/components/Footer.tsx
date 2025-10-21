import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#D4C4B0', color: '#3A3A3A'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="font-heading text-xl sm:text-2xl mb-3 sm:mb-4" style={{color: '#3A3A3A'}}>KP Wellness</h3>
            <p className="font-body text-sm leading-relaxed" style={{color: 'rgba(58, 58, 58, 0.7)'}}>
              Functional Medicine & Longevity
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-base sm:text-lg mb-3 sm:mb-4 font-medium" style={{color: '#3A3A3A'}}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="font-body text-sm transition-colors hover:opacity-100" style={{color: 'rgba(58, 58, 58, 0.7)'}}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-body text-sm transition-colors hover:opacity-100" style={{color: 'rgba(58, 58, 58, 0.7)'}}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-body text-sm transition-colors hover:opacity-100" style={{color: 'rgba(58, 58, 58, 0.7)'}}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="font-body text-sm transition-colors hover:opacity-100" style={{color: 'rgba(58, 58, 58, 0.7)'}}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-base sm:text-lg mb-3 sm:mb-4 font-medium" style={{color: '#3A3A3A'}}>Services</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm" style={{color: 'rgba(58, 58, 58, 0.7)'}}>DNA Testing</li>
              <li className="font-body text-sm" style={{color: 'rgba(58, 58, 58, 0.7)'}}>Peptide Therapy</li>
              <li className="font-body text-sm" style={{color: 'rgba(58, 58, 58, 0.7)'}}>Nutrition Consulting</li>
              <li className="font-body text-sm" style={{color: 'rgba(58, 58, 58, 0.7)'}}>Longevity Protocols</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-base sm:text-lg mb-3 sm:mb-4 font-medium" style={{color: '#3A3A3A'}}>Connect</h4>
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:hello@kriziapassariello.com" 
                className="font-body text-sm block transition-colors hover:opacity-100"
                style={{color: 'rgba(58, 58, 58, 0.7)'}}
              >
                hello@kriziapassariello.com
              </a>
              <a 
                href="tel:+15551234567" 
                className="font-body text-sm block transition-colors hover:opacity-100"
                style={{color: 'rgba(58, 58, 58, 0.7)'}}
              >
                +1 (555) 123-4567
              </a>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="transition-opacity hover:opacity-100" style={{color: 'rgba(58, 58, 58, 0.6)'}}>
                <Instagram size={20} />
              </a>
              <a href="#" className="transition-opacity hover:opacity-100" style={{color: 'rgba(58, 58, 58, 0.6)'}}>
                <Twitter size={20} />
              </a>
              <a href="#" className="transition-opacity hover:opacity-100" style={{color: 'rgba(58, 58, 58, 0.6)'}}>
                <Linkedin size={20} />
              </a>
              <a href="#" className="transition-opacity hover:opacity-100" style={{color: 'rgba(58, 58, 58, 0.6)'}}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 sm:pt-8" style={{borderColor: 'rgba(58, 58, 58, 0.2)'}}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs sm:text-sm text-center md:text-left" style={{color: 'rgba(58, 58, 58, 0.6)'}}>
              © 2025 Krizia Passariello Wellness. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="font-body text-xs sm:text-sm transition-opacity hover:opacity-100" style={{color: 'rgba(58, 58, 58, 0.6)'}}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-body text-xs sm:text-sm transition-opacity hover:opacity-100" style={{color: 'rgba(58, 58, 58, 0.6)'}}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
