'use client';

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-navbar py-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-primary/10'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="section-padding flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer relative z-50">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('hero')}
              className="text-2xl font-bold font-sans tracking-tight flex items-center gap-1 group"
            >
              <span className="text-white group-hover:text-primary transition-colors duration-300">Deepak</span>
              <span className="text-primary group-hover:animate-ping">.</span>
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveSection(link.to)}
                className="text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer relative"
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.to && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </ScrollLink>
            ))}
            <NextLink
              href="/DeepakCV.pdf"
              target="_blank"
              className="ml-4 px-5 py-1.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 border border-primary/20"
            >
              Resume
            </NextLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent"
          style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050816]/95 md:hidden flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="flex flex-col space-y-6 text-center"
            >
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(link.to);
                  }}
                  className={`text-2xl font-medium cursor-pointer transition-all duration-300 ${
                    activeSection === link.to ? 'text-primary scale-110' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <NextLink
                href="/DeepakCV.pdf"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white text-xl rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all font-semibold mt-4"
              >
                Resume
              </NextLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
