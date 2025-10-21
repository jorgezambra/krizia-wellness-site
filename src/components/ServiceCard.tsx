'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  features?: string[];
  icon?: ReactNode;
  href?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  price, 
  features,
  icon,
  href 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group p-8 bg-porcelain border border-stone rounded-sm hover:shadow-card transition-all duration-300 hover:border-bio-teal"
    >
      {icon && (
        <div className="mb-4 text-bio-teal">
          {icon}
        </div>
      )}
      
      <h3 className="font-heading text-2xl text-graphite mb-3 group-hover:text-bio-teal transition-colors">
        {title}
      </h3>
      
      {price && (
        <p className="text-muted-gold font-heading text-xl mb-4">{price}</p>
      )}
      
      <p className="text-ash font-body mb-6 leading-relaxed">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-ash font-body flex items-start">
              <span className="text-bio-teal mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {href && (
        <Link
          href={href}
          className="inline-block px-6 py-3 border border-graphite text-graphite font-body text-sm hover:bg-graphite hover:text-porcelain transition-all rounded-sm"
        >
          Learn More
        </Link>
      )}
    </motion.div>
  );
}

