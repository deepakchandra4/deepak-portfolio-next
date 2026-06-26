'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';
import { FaArrowDown, FaTerminal, FaPlay, FaCode, FaDatabase, FaServer, FaRobot } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  // Rotate container slightly based on mouse
  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{ perspective: 1000 }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[140px] animate-[pulse_8s_ease-in-out_infinite]" />

      <div className="section-padding z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left text column */}
        <div className="text-center md:text-left order-2 md:order-1 flex flex-col justify-center">
          {/* Animated Command Prompt Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-6 mx-auto md:mx-0 w-fit"
          >
            <FaTerminal className="text-primary text-[10px]" />
            <span>AI SYSTEM ONLINE // EXEC_CODE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-[1.1]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              AI-First Software Engineer
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              GenAI Application Developer
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-gray-300 text-sm md:text-base font-mono font-medium tracking-tight mb-6 max-w-xl mx-auto md:mx-0 border-l border-primary/30 pl-4 text-left"
          >
            Building Production-Ready Web Apps with AI, Full-Stack Engineering & Modern Developer Tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed font-light text-justify"
          >
            I combine software engineering fundamentals with an AI-first workflow to rapidly design, build, and ship modern applications. I specialize in Next.js, TypeScript, React, Node.js, and Python.
          </motion.p>

          {/* Interactive Liquid / Glowing Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center mb-12"
          >
            {/* View My Projects Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-70}
                duration={500}
                className="relative flex items-center justify-center gap-2 px-8 py-3 bg-black rounded-full text-white text-sm font-semibold cursor-pointer border border-white/10 group-hover:border-transparent transition-all duration-300 w-full sm:w-auto"
              >
                <FaPlay className="text-primary text-[10px]" />
                <span>View My Projects</span>
              </ScrollLink>
            </motion.div>

            {/* Let's Build Something Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 hover:text-white rounded-full text-gray-300 text-sm font-semibold transition-all duration-300 cursor-pointer w-full sm:w-auto"
              >
                <FaTerminal className="text-accent text-[10px]" />
                <span>Let&apos;s Build Something</span>
              </ScrollLink>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-6 justify-center md:justify-start"
          >
            {[
              { icon: SiGithub, href: 'https://github.com/deepakchandra4' },
              { icon: SiLinkedin, href: 'https://www.linkedin.com/in/deepakchandra4' },
              { icon: FaXTwitter, href: 'https://x.com/deepakchandra41' },
            ].map((social, idx) => {
              const IconComponent = social.icon;
              return (
                <NextLink
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary text-xl transition-all duration-300 transform hover:scale-110"
                >
                  <IconComponent />
                </NextLink>
              );
            })}
          </motion.div>
        </div>

        {/* Right side original moving circle layout with cursor coordinate tilt parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative select-none"
        >
          <motion.div
            style={{
              rotateX: isClient ? rotateX : 0,
              rotateY: isClient ? rotateY : 0,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center"
          >
            {/* Background Glows */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute inset-0 bg-secondary/5 rounded-full blur-[100px] animate-pulse delay-75 pointer-events-none" />

            {/* Rotating Rings (Orbitals) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-full h-full border border-primary/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[80%] h-[80%] border border-secondary/20 rounded-full border-dashed animate-[spin_25s_linear_infinite_reverse]"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[60%] h-[60%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]"
            />

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
              {/* Top */}
              <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-[#050816]/90 p-3 rounded-xl border border-white/10 text-cyan-400/90 shadow-md">
                <FaCode size={24} />
              </motion.div>
              {/* Bottom */}
              <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-[#050816]/90 p-3 rounded-xl border border-white/10 text-indigo-400/90 shadow-md">
                <FaDatabase size={24} />
              </motion.div>
              {/* Left */}
              <motion.div className="absolute top-1/2 left-0 -translate-x-6 -translate-y-1/2 bg-[#050816]/90 p-3 rounded-xl border border-white/10 text-cyan-200/90 shadow-md">
                <FaServer size={24} />
              </motion.div>
              {/* Right */}
              <motion.div className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 bg-[#050816]/90 p-3 rounded-xl border border-white/10 text-green-400/90 shadow-md">
                <FaRobot size={24} />
              </motion.div>
            </div>

            {/* Central Core */}
            <div className="relative z-10 w-32 h-32 bg-[#050816] rounded-full border border-white/10 flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              {/* Subtle internal ring */}
              <div className="absolute inset-1 rounded-full border border-primary/10" />
              <div className="text-6xl text-white font-bold tracking-tighter animate-pulse font-mono relative z-10">
                &lt;/&gt;
              </div>
            </div>

            {/* Floating Code Snippets (Decorative) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 right-1/4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/5 text-[10px] text-gray-400 font-mono"
            >
              const dev = future;
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-1/4 left-1/4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/5 text-[10px] text-gray-400 font-mono"
            >
              git commit -m &quot;innovation&quot;
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ScrollLink
          to="about"
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer text-gray-500 hover:text-white transition-colors"
        >
          <FaArrowDown />
        </ScrollLink>
      </motion.div>
    </section>
  );
}
