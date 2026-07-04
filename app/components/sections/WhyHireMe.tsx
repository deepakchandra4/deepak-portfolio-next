'use client';

import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaExpandArrowsAlt,
  FaDesktop,
  FaRobot,
  FaBolt,
  FaFileCode,
  FaChartLine,
  FaTachometerAlt,
} from 'react-icons/fa';

const reasons = [
  {
    title: 'Production-ready Architecture',
    desc: 'Deploy secure, robust solutions with database sanitization, strict typing, and auth configurations ready for immediate customer traffic.',
    icon: FaShieldAlt,
    color: 'text-cyan-400 border-cyan-500/20 hover:border-cyan-500/50',
  },
  {
    title: 'Scalable Systems',
    desc: 'Build database schemas and component state boundaries designed to scale seamlessly as user count and operations grow.',
    icon: FaExpandArrowsAlt,
    color: 'text-blue-400 border-blue-500/20 hover:border-blue-500/50',
  },
  {
    title: 'Modern UI/UX',
    desc: 'Design beautiful, conversion-focused user interfaces featuring fluid micro-animations, clean typography, and full responsiveness.',
    icon: FaDesktop,
    color: 'text-purple-400 border-purple-500/20 hover:border-purple-500/50',
  },
  {
    title: 'AI-first Workflow',
    desc: 'Leverage state-of-the-art agentic tools and custom prompt configurations to build faster and eliminate repetitive code overhead.',
    icon: FaRobot,
    color: 'text-pink-400 border-pink-500/20 hover:border-pink-500/50',
  },
  {
    title: 'Rapid MVP Development',
    desc: 'Transform early product specs into working, high-fidelity SaaS platforms in weeks instead of months for quick validation.',
    icon: FaBolt,
    color: 'text-yellow-400 border-yellow-500/20 hover:border-yellow-500/50',
  },
  {
    title: 'Clean Maintainable Code',
    desc: 'Ship modular, readable codebases using Next.js & TypeScript, making it easy for internal tech teams to take over and expand.',
    icon: FaFileCode,
    color: 'text-orange-500 border-orange-500/20 hover:border-orange-500/50',
  },
  {
    title: 'Business-focused Solutions',
    desc: 'Align code development directly with core business metrics, conversion funnels, user retention, and lead generation.',
    icon: FaChartLine,
    color: 'text-emerald-400 border-emerald-500/20 hover:border-emerald-500/55',
  },
  {
    title: 'Performance Optimization',
    desc: 'Implement edge-caching, Next.js image optimizations, lazy loading, and SEO structures for maximum speed and visibility.',
    icon: FaTachometerAlt,
    color: 'text-teal-400 border-teal-500/20 hover:border-teal-500/50',
  },
];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-24 relative overflow-hidden bg-[#050816] grid-lines">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">PARTNER ADVANTAGE</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Why Work With Me
          </h3>
          <div className="h-[2px] w-16 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, margin: '-50px' }}
                className={`glass-card p-6 rounded-2xl border ${item.color} relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(6,182,212,0.05)] transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Icon */}
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-white w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-lg" />
                  </div>
                  <h4 className="font-bold text-white text-base tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
