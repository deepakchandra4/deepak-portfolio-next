'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaBrain, FaCode, FaRocket, FaLaptopCode, FaRegLightbulb } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiPostgresql, SiDocker, SiOpenai, SiMongodb } from 'react-icons/si';

const stats = [
  { label: 'Production-Level Projects', value: 3, prefix: '+' },
  { label: 'Programming Languages', value: 4, prefix: '+' },
  { label: 'Modern Technologies', value: 12, prefix: '+' },
  { label: 'Workflow Paradigm', value: 100, prefix: '% AI' },
];

const tickerIcons = [
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiPython, name: 'Python' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiOpenai, name: 'OpenAI' },
  { icon: SiMongodb, name: 'MongoDB' },
];

function AnimatedCounter({ value, duration = 2, prefix = '' }: { value: number; duration?: number; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {count}
      {prefix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden grid-lines">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">PROFILE TELEMETRY</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            About Me
          </h3>
          <div className="h-[2px] w-16 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Narrative & Statistics */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FaBrain className="text-primary text-xl" />
                <span>Who I Am</span>
              </h4>
              <p className="text-gray-300 leading-relaxed font-light mb-6">
                I&apos;m a software engineer passionate about combining artificial intelligence with modern web development to build intelligent digital products.
              </p>

              {/* Development Philosophy Quote */}
              <div className="my-6 p-4 rounded-xl border border-primary/20 bg-primary/5 text-left font-mono relative">
                <span className="text-xs text-primary block mb-1.5">// DEVELOPMENT PHILOSOPHY</span>
                <blockquote className="text-base text-white font-semibold italic">
                  &ldquo;AI accelerates development. Engineering ensures quality.&rdquo;
                </blockquote>
              </div>

              <p className="text-gray-300 leading-relaxed font-light">
                I use AI as a collaborative development partner—not a replacement for software engineering principles. Every project is designed with scalability, maintainability, clean architecture, and user experience in mind.
                <br /><br />
                My expertise spans full-stack web development, REST APIs, AI integrations, prompt engineering, database design, authentication systems, and deploying production-ready applications. I enjoy transforming ideas into products using an iterative AI-assisted workflow while maintaining professional engineering standards.
              </p>
            </div>

            {/* Quick Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl border border-white/5 flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                  <FaLaptopCode className="text-lg" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Full Stack Engineering</h5>
                  <p className="text-xs text-gray-400 mt-1">Production-ready system deployment, scalable databases, clean REST structures.</p>
                </div>
              </div>
              <div className="glass-card p-5 rounded-xl border border-white/5 flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-accent/10 text-accent mt-1">
                  <FaRegLightbulb className="text-lg" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">AI-First Workflows</h5>
                  <p className="text-xs text-gray-400 mt-1">Accelerated prototyping and code execution backed by rigid validation constraints.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl text-center border border-white/5 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.05)] transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-mono">
                  {stat.value === 100 ? (
                    <span>AI-First</span>
                  ) : (
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} />
                  )}
                </div>
                <div className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skill Graph Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <FaRocket className="text-accent" />
                <span>AI-Assisted Architecture</span>
              </h4>
              <p className="text-xs text-gray-400 mt-1">Colloquial workflow combining developer intelligence with LLM systems.</p>
            </div>
            <span className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
              STATUS // ACTIVE
            </span>
          </div>

          {/* SVG Skill Graph */}
          <div className="w-full flex justify-center py-4">
            <svg className="w-full max-w-2xl h-auto" viewBox="0 0 600 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Connection Lines with Animated Dash offsets */}
              <motion.path
                d="M 300 120 L 150 50"
                stroke="url(#gradient-left-top)"
                strokeWidth="2"
                strokeDasharray="6,6"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              <motion.path
                d="M 300 120 L 150 190"
                stroke="url(#gradient-left-bottom)"
                strokeWidth="2"
                strokeDasharray="6,6"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              <motion.path
                d="M 300 120 L 450 50"
                stroke="url(#gradient-right-top)"
                strokeWidth="2"
                strokeDasharray="6,6"
                animate={{ strokeDashoffset: [20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              <motion.path
                d="M 300 120 L 450 190"
                stroke="url(#gradient-right-bottom)"
                strokeWidth="2"
                strokeDasharray="6,6"
                animate={{ strokeDashoffset: [20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central Core Node */}
              <g>
                <circle cx="300" cy="120" r="32" fill="#050816" stroke="url(#core-gradient)" strokeWidth="3" />
                <circle cx="300" cy="120" r="24" fill="url(#core-glow)" opacity="0.15" />
                <text x="300" y="123" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  DEVELOPER
                </text>
              </g>

              {/* Left Top Node */}
              <g>
                <rect x="60" y="30" width="140" height="38" rx="8" fill="#0a0f1e" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="130" y="53" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif">
                  AI Architecture Planning
                </text>
              </g>

              {/* Left Bottom Node */}
              <g>
                <rect x="60" y="170" width="140" height="38" rx="8" fill="#0a0f1e" stroke="#10b981" strokeWidth="1.5" />
                <text x="130" y="193" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif">
                  Human Code Review
                </text>
              </g>

              {/* Right Top Node */}
              <g>
                <rect x="400" y="30" width="140" height="38" rx="8" fill="#0a0f1e" stroke="#a855f7" strokeWidth="1.5" />
                <text x="470" y="53" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif">
                  Prompt Development
                </text>
              </g>

              {/* Right Bottom Node */}
              <g>
                <rect x="400" y="170" width="140" height="38" rx="8" fill="#0a0f1e" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="470" y="193" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif">
                  Rapid Prototyping
                </text>
              </g>

              {/* Gradients Definition */}
              <defs>
                <linearGradient id="core-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <radialGradient id="core-glow">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <linearGradient id="gradient-left-top" x1="300" y1="120" x2="150" y2="50" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="gradient-left-bottom" x1="300" y1="120" x2="150" y2="190" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <linearGradient id="gradient-right-top" x1="300" y1="120" x2="450" y2="50" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="gradient-right-bottom" x1="300" y1="120" x2="450" y2="190" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Moving Ticker Loop */}
        <div className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-black/20">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050816] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050816] to-transparent z-10" />

          {/* Continuous Ticker Row */}
          <div className="flex w-[200%] gap-12 items-center animate-[marquee_25s_linear_infinite]">
            <div className="flex justify-around items-center w-full gap-12">
              {tickerIcons.map((t, idx) => {
                const IconComponent = t.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                    <IconComponent className="text-2xl" />
                    <span className="font-mono text-sm font-semibold tracking-wider">{t.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-around items-center w-full gap-12">
              {tickerIcons.map((t, idx) => {
                const IconComponent = t.icon;
                return (
                  <div key={idx + '_2'} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                    <IconComponent className="text-2xl" />
                    <span className="font-mono text-sm font-semibold tracking-wider">{t.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
