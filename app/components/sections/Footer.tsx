'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaHeart } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] border-t border-white/5 pt-20 pb-10 z-20">
      {/* Wave Animation Block */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none opacity-45">
        <svg className="absolute w-[200%] h-full top-0 left-0 animate-[wave_12s_linear_infinite]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1350,20 1500,60 C1650,100 1850,20 2000,60 L2000,120 L0,120 Z" fill="#06b6d4" opacity="0.15"></path>
        </svg>
        <svg className="absolute w-[200%] h-full top-0 left-0 animate-[wave_8s_linear_infinite_reverse]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,70 C100,30 250,90 400,70 C550,50 700,90 850,70 C1000,50 1150,90 1300,70 C1450,50 1600,90 1750,70 C1900,50 2000,90 2050,70 L2050,120 L0,120 Z" fill="#a855f7" opacity="0.1"></path>
        </svg>
      </div>

      <div className="section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Deepak<span className="text-primary animate-pulse">.</span>
            </h3>
            {/* Tagline requirement */}
            <div className="font-mono text-xs text-gray-400 space-y-1 border-l border-primary/20 pl-3 leading-relaxed py-1">
              <p>Designed with curiosity.</p>
              <p>Built with engineering.</p>
              <p>Accelerated by <span className="text-primary">AI</span>.</p>
              <p>Shipped with confidence.</p>
            </div>
            {/* Glowing Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: FaGithub, href: 'https://github.com/deepakchandra4', label: 'GitHub', color: 'hover:text-primary hover:border-primary/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/deepak-chandra-maurya-a03a21266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', color: 'hover:text-secondary hover:border-secondary/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
                { icon: FaXTwitter, href: 'https://x.com/deepakchandra41', label: 'X', color: 'hover:text-accent hover:border-accent/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]' },
              ].map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <NextLink
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 transition-all duration-300 ${s.color}`}
                    title={s.label}
                  >
                    <IconComponent size={14} />
                  </NextLink>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold font-mono tracking-wider text-white mb-5">SYSTEM PATHS</h4>
            <ul className="space-y-2 text-sm font-light">
              {[
                { name: 'Home', to: 'hero' },
                { name: 'About', to: 'about' },
                { name: 'Projects', to: 'projects' },
                { name: 'Skills', to: 'skills' },
                { name: 'Contact', to: 'contact' },
              ].map((item) => (
                <li key={item.name}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group w-fit"
                  >
                    <span className="h-[1px] w-0 bg-primary group-hover:w-3 transition-all duration-300"></span>
                    <span>{item.name}</span>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-sm font-semibold font-mono tracking-wider text-white mb-5">CAPABILITIES</h4>
            <ul className="space-y-2 text-sm font-light text-gray-400">
              <li>AI-First Development</li>
              <li>Full Stack Web Apps</li>
              <li>Prompt Engineering</li>
              <li>REST API Architecture</li>
              <li>Database Schema Design</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold font-mono tracking-wider text-white mb-5">LOCATION CONFIG</h4>
            <div className="space-y-3.5 text-sm font-light text-gray-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary" />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <NextLink href="mailto:deepakchandra4551@gmail.com" className="hover:text-primary transition-colors">
                  deepakchandra4551@gmail.com
                </NextLink>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-secondary" />
                <NextLink href="tel:+919120279300" className="hover:text-primary transition-colors">
                  +91 9120279300
                </NextLink>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-emerald-400" />
                <NextLink
                  href="https://wa.me/919120979300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Chat on WhatsApp
                </NextLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata row */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Deepak Chandra Maurya. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Powered by</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>Next.js 15 & Tailwind v4</span>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes wave {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}
