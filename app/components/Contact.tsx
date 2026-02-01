'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 relative"
    >
      <div className="section-padding">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-white">Get In </span>
          <span className="text-secondary">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <Link href="tel:+919120279300" className="text-lg font-medium">
                      +91 9120279300
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <Link href="mailto:deepakchandra4551@gmail.com" className="text-lg font-medium break-all">
                      deepakchandra4551@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              className="glass p-8 rounded-2xl space-y-6 relative overflow-hidden"
              action="https://getform.io/f/6e52b139-0076-4904-b9b1-53ba9f5e3168"
              method="POST"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-300 text-sm font-medium ml-1">Name</label>
                <input
                  suppressHydrationWarning
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#0A1929]/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white placeholder-gray-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300 text-sm font-medium ml-1">Email</label>
                <input
                  suppressHydrationWarning
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-[#0A1929]/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white placeholder-gray-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 text-sm font-medium ml-1">Message</label>
                <textarea
                  suppressHydrationWarning
                  id="message"
                  rows={4}
                  name="message"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 bg-[#0A1929]/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white placeholder-gray-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium py-3 rounded-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
