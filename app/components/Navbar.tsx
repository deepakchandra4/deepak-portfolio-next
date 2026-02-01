'use client';

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-heavy py-3 shadow-lg' : 'bg-transparent py-5'
          }`}
      >
        <div className="section-padding flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer relative z-50">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold font-mono tracking-tighter"
            >
              <span className="text-white">Deepak</span>
              <span className="text-primary animate-pulse">.</span>
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
                activeClass="!text-primary bg-primary/10"
                className="text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/5 cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ))}
            <NextLink
              href="/resume.pdf"
              target="_blank"
              className="ml-4 px-5 py-2 border border-primary text-primary hover:bg-primary/10 rounded-full text-sm font-medium transition-all"
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
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-[#050a14] md:hidden flex items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-gray-300 hover:text-primary font-medium cursor-pointer transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <NextLink
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-3 border border-primary text-primary text-xl rounded-full hover:bg-primary/10 transition-all mt-4"
              >
                Resume
              </NextLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
