'use client';

import { motion } from 'framer-motion';
import {
  FaSearch,
  FaProjectDiagram,
  FaDraftingCompass,
  FaCode,
  FaRobot,
  FaVial,
  FaRocket,
  FaLifeRing,
} from 'react-icons/fa';

const workflowSteps = [
  {
    phase: '01',
    title: 'Discovery',
    icon: FaSearch,
    color: 'text-cyan-400 border-cyan-500/20 hover:border-cyan-500/50',
    desc: 'Analyzing project specs, user journeys, and business goals to outline the optimal scope.',
  },
  {
    phase: '02',
    title: 'Architecture',
    icon: FaProjectDiagram,
    color: 'text-blue-400 border-blue-500/20 hover:border-blue-500/50',
    desc: 'Designing schema models, API patterns, and component states before code execution.',
  },
  {
    phase: '03',
    title: 'Design',
    icon: FaDraftingCompass,
    color: 'text-purple-400 border-purple-500/20 hover:border-purple-500/50',
    desc: 'Crafting responsive layouts, glassmorphism UI/UX, and cohesive color palettes.',
  },
  {
    phase: '04',
    title: 'Development',
    icon: FaCode,
    color: 'text-pink-400 border-pink-500/20 hover:border-pink-500/50',
    desc: 'Writing clean, typed, modular full-stack code using Next.js, React, and TypeScript.',
  },
  {
    phase: '05',
    title: 'AI Integration',
    icon: FaRobot,
    color: 'text-yellow-400 border-yellow-500/20 hover:border-yellow-500/50',
    desc: 'Integrating LLMs, prompt validation logic, agent setups, and vector store retrieval.',
  },
  {
    phase: '06',
    title: 'Testing',
    icon: FaVial,
    color: 'text-orange-500 border-orange-500/20 hover:border-orange-500/50',
    desc: 'Rigid layout inspections, functional schema reviews, and automated sanity testing.',
  },
  {
    phase: '07',
    title: 'Deployment',
    icon: FaRocket,
    color: 'text-emerald-400 border-emerald-500/20 hover:border-emerald-500/50',
    desc: 'Shipping optimized production bundles to Vercel/Docker, verifying fast loading and SEO.',
  },
  {
    phase: '08',
    title: 'Support',
    icon: FaLifeRing,
    color: 'text-teal-400 border-teal-500/20 hover:border-teal-500/50',
    desc: 'Providing post-launch assistance, server logs review, and scaling support for new features.',
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-[#050816] grid-lines">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">PRODUCT LIFECYCLE</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Development Workflow
          </h3>
          <div className="h-[2px] w-16 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline Grid (Vertical layout on mobile/tablet, multi-step grid on desktop) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-50px' }}
                className={`glass-card p-6 rounded-2xl border ${step.color} relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(6,182,212,0.05)] transition-all duration-300 flex flex-col justify-between min-h-[220px]`}
              >
                {/* Visual Connection line highlight for sequence */}
                <div className="absolute top-0 right-0 p-3 font-mono text-xs font-extrabold text-white/10 group-hover:text-primary/30 transition-colors">
                  {step.phase}
                </div>

                <div className="space-y-4">
                  {/* Step Icon */}
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-white w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-lg" />
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-base tracking-tight mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Animated progress indicator dots at the bottom */}
                <div className="flex gap-1.5 pt-4 mt-auto">
                  {workflowSteps.map((s, idx) => (
                    <span
                      key={s.phase}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx <= index ? 'bg-primary/80 w-3' : 'bg-white/5 w-1.5'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
