'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <footer className="glass border-t border-gray-800 text-gray-400 py-16 relative z-50">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand/About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-mono">Deepak<span className="text-primary">.</span></h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Full Stack Developer & AI Enthusiast. Building digital experiences that are performant, accessible, and beautiful.
            </p>
            <div className="flex space-x-3 pt-2">
              {[
                { icon: FaGithub, href: "https://github.com/deepakchandra4" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/deepak-chandra-maurya-a03a21266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { icon: FaXTwitter, href: "https://x.com/deepakchandra41" }
              ].map((social, index) => (
                <NextLink
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-2.5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-primary"
                >
                  <social.icon className="w-4 h-4" />
                </NextLink>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', to: 'hero' },
                { name: 'About', to: 'about' },
                { name: 'Projects', to: 'projects' },
                { name: 'Contact', to: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-[1px] w-0 bg-primary group-hover:w-3 transition-all"></span>
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Competencies */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary transition-colors cursor-default">Full Stack Development</li>
              <li className="hover:text-primary transition-colors cursor-default">MERN Stack Solutions</li>
              <li className="hover:text-primary transition-colors cursor-default">API Development</li>
              <li className="hover:text-primary transition-colors cursor-default">UI/UX Implementation</li>
              <li className="hover:text-primary transition-colors cursor-default">Wordpress Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary" />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <NextLink href="mailto:deepakchandra4551@gmail.com" className="hover:text-primary transition-colors">deepakchandra4551@gmail.com</NextLink>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <NextLink href="tel:+919120279300" className="hover:text-primary transition-colors">+91 9120279300</NextLink>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-primary" />
                <NextLink href="https://wa.me/919120979300" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Chat on WhatsApp</NextLink>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} Deepak Chandra Maurya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse">♥</span> using Next.js 15 & Tailwind v4
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
