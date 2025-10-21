'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Placeholder blog posts - will be replaced with Sanity CMS
const blogPosts = [
  {
    id: 1,
    title: 'The Science of Longevity: Understanding NAD+ and Cellular Health',
    excerpt: 'Explore the critical role of NAD+ in cellular energy production and how supplementation can support healthy aging and vitality.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Longevity',
  },
  {
    id: 2,
    title: 'Peptide Therapy 101: BPC-157 and Tissue Repair',
    excerpt: 'A comprehensive guide to BPC-157, one of the most powerful peptides for healing and recovery in functional medicine.',
    date: '2025-01-10',
    readTime: '10 min read',
    category: 'Peptides',
  },
  {
    id: 3,
    title: 'Optimizing Your Diet Based on Your DNA',
    excerpt: 'Learn how nutrigenomics can reveal your unique dietary needs and help you create a personalized nutrition plan.',
    date: '2025-01-05',
    readTime: '12 min read',
    category: 'Nutrition',
  },
  {
    id: 4,
    title: 'Biohacking Sleep: Protocols for Deep Restorative Rest',
    excerpt: 'Science-backed strategies to optimize your sleep quality, from temperature control to supplementation.',
    date: '2024-12-28',
    readTime: '7 min read',
    category: 'Biohacking',
  },
  {
    id: 5,
    title: 'The Gut-Brain Axis: How Microbiome Health Affects Mental Clarity',
    excerpt: 'Discover the fascinating connection between gut health and cognitive function, and how to optimize both.',
    date: '2024-12-20',
    readTime: '9 min read',
    category: 'Functional Medicine',
  },
  {
    id: 6,
    title: 'Advanced Biomarker Testing: Beyond Basic Blood Work',
    excerpt: 'A deep dive into the most important biomarkers for health optimization and how to interpret your results.',
    date: '2024-12-15',
    readTime: '11 min read',
    category: 'Testing',
  },
];

const categories = ['All', 'Longevity', 'Peptides', 'Nutrition', 'Biohacking', 'Functional Medicine', 'Testing'];

export default function BlogPage() {
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
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ash font-body"
          >
            Insights on functional medicine, longevity, and optimal health
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6 border-b border-stone">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 border border-stone text-graphite font-body text-sm rounded-sm hover:border-bio-teal hover:text-bio-teal transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-stone rounded-sm overflow-hidden hover:shadow-card transition-all group"
              >
                <div className="h-48 bg-gradient-to-br from-bio-teal to-sage" />
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-ash font-body mb-3">
                    <span className="px-3 py-1 bg-bio-teal/10 text-bio-teal rounded-sm text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl text-graphite mb-3 group-hover:text-bio-teal transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-ash font-body text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-ash">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-bio-teal font-body text-sm hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-graphite">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading text-porcelain mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-porcelain/80 font-body mb-8">
            Get the latest insights on wellness, longevity, and biohacking delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-sm focus:outline-none"
            />
            <button className="px-8 py-3 bg-bio-teal text-porcelain font-body font-medium rounded-sm hover:bg-bio-teal/90 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

