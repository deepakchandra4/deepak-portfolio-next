'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#040D12] text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p>Email: <a href="mailto:deepakchandra4551@gmail.com" className="hover:text-white">deepakchandra4551@gmail.com</a></p>
            <p>Phone: <a href="tel:+91 9120279300" className="hover:text-white">+91 9120279300</a></p>
          </div>

          {/* Middle Section: Navigation Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Right Section: Social Media Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/deepakchandra41" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://github.com/deepakchandra4" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/deepak-chandra-maurya-a03a21266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="mailto:deepakchandra4551@gmail.com" className="hover:text-white">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a href="https://wa.me/919120979300" target='_blank' rel='noopener noreferrer' className="hover:text-white">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section: Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Deepak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
