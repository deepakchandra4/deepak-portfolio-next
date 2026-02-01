'use client';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';
import { FaGithub, FaLinkedin, FaArrowDown, FaCode, FaDatabase, FaServer, FaRobot } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite]" />

      <div className="section-padding z-10 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-accent font-mono mb-4">Hello World, I&apos;m</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Deepak</span>
              <span className="text-primary animate-pulse">.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto md:mx-0 mb-8" />

            <h3 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Full Stack Developer <span className="text-secondary">|</span> DevOps Learner <span className="text-secondary">|</span> AI Enthusiast
            </h3>

            <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
              Building scalable, high-performance web applications with the
              <span className="text-accent"> MERN stack</span>, exploring
              <span className="text-accent"> DevOps workflows</span>, and integrating
              <span className="text-accent"> AI-driven features</span>.
              Focused on clean architecture, performance, and modern user experiences.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center mb-12"
          >
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 bg-primary/10 border border-primary/50 text-white rounded-full hover:bg-primary/20 transition-all cursor-pointer backdrop-blur-sm group whitespace-nowrap"
            >
              View Work
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 bg-transparent border border-gray-700 text-gray-300 rounded-full hover:border-white hover:text-white transition-all cursor-pointer whitespace-nowrap"
            >
              Contact Me
            </ScrollLink>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center md:justify-start"
          >
            {[
              { Icon: FaGithub, href: "https://github.com/deepakchandra4" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/deepakchandra4" },
              { Icon: FaXTwitter, href: "https://x.com/deepakchandra41" }
            ].map(({ Icon, href }, index) => (
              <NextLink
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent text-2xl transition-colors transform hover:scale-110"
              >
                <Icon />
              </NextLink>
            ))}
          </motion.div>
        </div>

        {/* Abstract Developer Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          {/* Main Container */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">

            {/* Background Glows */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-[60px] animate-pulse delay-75" />

            {/* Rotating Rings (Orbitals) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border border-primary/30 rounded-full border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] border border-secondary/30 rounded-full border-dashed"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[60%] h-[60%] border border-accent/20 rounded-full"
            />

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
              {/* Top */}
              <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-[#0A1929] p-3 rounded-xl border border-primary/50 text-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <FaCode size={24} />
              </motion.div>
              {/* Bottom */}
              <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-[#0A1929] p-3 rounded-xl border border-secondary/50 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <FaDatabase size={24} />
              </motion.div>
              {/* Left */}
              <motion.div className="absolute top-1/2 left-0 -translate-x-6 -translate-y-1/2 bg-[#0A1929] p-3 rounded-xl border border-accent/50 text-cyan-200 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <FaServer size={24} />
              </motion.div>
              {/* Right */}
              <motion.div className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 bg-[#0A1929] p-3 rounded-xl border border-primary/50 text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                <FaRobot size={24} />
              </motion.div>
            </div>

            {/* Central Core */}
            <div className="relative z-10 w-32 h-32 bg-[#050a14] rounded-full border-2 border-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.4)]">
              <div className="text-6xl text-white font-bold tracking-tighter animate-pulse">
                &lt;/&gt;
              </div>
            </div>

            {/* Floating Code Snippets (Decorative) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-gray-700 text-[10px] text-gray-400 font-mono"
            >
              const dev = future;
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 left-1/4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-gray-700 text-[10px] text-gray-400 font-mono"
            >
              git commit -m &quot;innovation&quot;
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ScrollLink to="about" smooth={true} offset={-70} duration={500} className="cursor-pointer text-gray-500 hover:text-white transition-colors">
          <FaArrowDown />
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Hero;
