'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const placeholderTestimonials = [
  {
    id: 1,
    role: 'Startup Founder',
    industry: 'AI Platform',
    color: 'border-cyan-500/20 hover:border-cyan-500/40',
  },
  {
    id: 2,
    role: 'Product Director',
    industry: 'SaaS Business',
    color: 'border-purple-500/20 hover:border-purple-500/40',
  },
  {
    id: 3,
    role: 'Agency Partner',
    industry: 'Digital Agency',
    color: 'border-blue-500/20 hover:border-blue-500/40',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#050816] grid-lines">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">TRUST PROTOCOL</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Client Testimonials
          </h3>
          <div className="h-[2px] w-16 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Testimonials Placeholder Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {placeholderTestimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`glass-card p-6 rounded-2xl border ${item.color} relative overflow-hidden group flex flex-col justify-between min-h-[220px]`}
            >
              {/* Header Feed Connection Details */}
              <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 mb-6">
                <span>FEED // CONNECT_0{item.id}</span>
                <span className="text-cyan-500/80 animate-pulse">PENDING...</span>
              </div>

              {/* Quote Icon & Coming Soon Text */}
              <div className="relative">
                <FaQuoteLeft className="text-white/5 text-4xl absolute -top-4 -left-2 z-0" />
                <p className="text-gray-400 text-sm font-medium italic relative z-10 font-mono mb-6">
                  &ldquo;Client testimonial coming soon.&rdquo;
                </p>
              </div>

              {/* User Skeleton Footer */}
              <div className="pt-4 border-t border-white/5 mt-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-gray-400 font-bold">
                  T{item.id}
                </div>
                <div>
                  <h5 className="font-mono text-xs font-bold text-white tracking-wider">
                    {item.role}
                  </h5>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    {item.industry}
                  </span>
                </div>

                {/* Stars Placeholder */}
                <div className="flex gap-0.5 ml-auto text-primary/40">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} className="text-[10px]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
