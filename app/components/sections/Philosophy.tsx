'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaLaptopCode, FaCogs, FaProjectDiagram } from 'react-icons/fa';

const whyWorkWithMe = [
  'AI-First Developer',
  'Full-Stack Engineer',
  'Clean Code Advocate',
  'Production-Oriented Development',
  'Modern UI/UX Focus',
  'Rapid Prototyping',
  'REST API Development',
  'Authentication Systems',
  'Database Design',
  'AI Integration Specialist',
];

const philosophyPillars = [
  {
    title: 'AI-assisted planning',
    desc: 'Using LLM reasoning to validate database schemas and planning application states before writing code.',
    icon: FaProjectDiagram,
  },
  {
    title: 'Prompt-driven dev',
    desc: 'Accelerating boilerplate delivery using advanced system prompts and Antigravity script orchestration.',
    icon: FaCogs,
  },
  {
    title: 'Human code validation',
    desc: 'Every file is manually inspected, linted, and benchmarked to verify safety and layout stability.',
    icon: FaLaptopCode,
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-[#050816] grid-lines">
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Development Philosophy Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">WORKFLOW SYSTEM</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Development Philosophy
          </h3>
          <div className="h-[2px] w-16 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* AI-First Engineering Detail */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <h4 className="text-2xl font-extrabold text-white tracking-tight">AI-First Engineering</h4>
            <p className="text-gray-300 leading-relaxed font-light text-justify">
              I believe modern software development is evolving beyond writing every line manually. My workflow combines prompt-driven orchestration with clean, rigid software engineering practices.
              <br /><br />
              The result is faster delivery without compromising code quality, maintainability, or scalability. By combining AI tools with human review, projects shift from prototype to production at speed.
            </p>

            {/* Checklist why work with me */}
            <div className="pt-4 space-y-3">
              <h5 className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">// WHY WORK WITH ME</h5>
              <div className="grid grid-cols-2 gap-3">
                {whyWorkWithMe.map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-xs font-medium text-gray-300">
                    <FaCheckCircle className="text-primary text-xs flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pillars visual cards */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-4"
          >
            {philosophyPillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="glass-card p-5 rounded-xl border border-white/5 flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <IconComp className="text-lg" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{p.title}</h5>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed font-light">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Experience Banner (Text callout) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 max-w-5xl mx-auto text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-lines opacity-5 pointer-events-none" />
          <h4 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
            Experience Workflow Banner
          </h4>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Building intelligent applications with modern AI workflows and full-stack engineering. Focused on creating scalable, maintainable, and user-centric software using the latest web technologies and Generative AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
