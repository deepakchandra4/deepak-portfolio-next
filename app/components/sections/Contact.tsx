'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaPaperPlane, FaSpinner, FaArrowRight, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [toast, setToast] = useState<{
    show: boolean;
    type: 'sending' | 'success' | 'error';
    message: string;
  }>({ show: false, type: 'success', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setToast({
      show: true,
      type: 'sending',
      message: 'Sending your message...'
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setToast({
          show: true,
          type: 'success',
          message: 'Message sent successfully!'
        });
        setTimeout(() => {
          setToast(prev => prev.type === 'success' ? { ...prev, show: false } : prev);
        }, 4000);
      } else {
        setSubmitStatus('error');
        setToast({
          show: true,
          type: 'error',
          message: 'Failed to send message.'
        });
        setTimeout(() => {
          setToast(prev => prev.type === 'error' ? { ...prev, show: false } : prev);
        }, 4000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setToast({
        show: true,
        type: 'error',
        message: 'Failed to send message.'
      });
      setTimeout(() => {
        setToast(prev => prev.type === 'error' ? { ...prev, show: false } : prev);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050816] grid-lines">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">CONNECTION CHANNEL</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Let&apos;s Build Something Intelligent
          </h3>
          <div className="h-[2px] w-16 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden">
              <h4 className="text-2xl font-bold text-white mb-4">Contact Me</h4>
              <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm text-justify">
                Whether it&apos;s an AI-powered application, a modern SaaS platform, or a full-stack web product, I&apos;m always interested in solving meaningful problems through technology. Let&apos;s turn ideas into production-ready software.
              </p>

              <div className="space-y-5">
                <a
                  href="tel:+919120279300"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-all duration-300 p-3 rounded-xl border border-transparent hover:border-primary/10 hover:bg-primary/5 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <FaPhoneAlt size={14} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Phone</span>
                    <span className="text-sm font-semibold text-white">+91 9120279300</span>
                  </div>
                </a>

                <a
                  href="mailto:deepakchandra4551@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-accent transition-all duration-300 p-3 rounded-xl border border-transparent hover:border-accent/10 hover:bg-accent/5 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <FaEnvelope size={14} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Email</span>
                    <span className="text-sm font-semibold text-white break-all">deepakchandra4551@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl border border-white/5 space-y-6 relative overflow-hidden group"
            >
              {/* Animated glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />


              {/* Name */}
              <div className="relative">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="peer w-full px-4 py-3 bg-black/40 border border-white/10 hover:border-white/20 focus:border-primary rounded-xl text-white outline-none transition-all duration-300 text-sm placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-3 text-xs font-mono text-gray-400 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4.5 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="peer w-full px-4 py-3 bg-black/40 border border-white/10 hover:border-white/20 focus:border-primary rounded-xl text-white outline-none transition-all duration-300 text-sm placeholder-transparent"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 text-xs font-mono text-gray-400 pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4.5 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Email
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="peer w-full px-4 py-3 bg-black/40 border border-white/10 hover:border-white/20 focus:border-primary rounded-xl text-white outline-none transition-all duration-300 text-sm min-h-[120px]"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-4.5 text-xs font-mono text-primary pointer-events-none transition-all duration-300"
                >
                  Message
                </label>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono text-center"
                >
                  Message sent successfully!
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-mono text-center"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}

              {/* Submit Button with loader */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaArrowRight className="text-white text-xs" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast Notifications */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 p-4 rounded-xl border backdrop-blur-md text-white shadow-2xl pointer-events-auto min-w-[280px] md:min-w-[320px] max-w-sm ${toast.type === 'sending'
                ? 'bg-black/85 border-cyan-500/30 shadow-cyan-500/10'
                : toast.type === 'success'
                  ? 'bg-black/85 border-emerald-500/30 shadow-emerald-500/10'
                  : 'bg-black/85 border-rose-500/30 shadow-rose-500/10'
              }`}
          >
            <div className="flex-shrink-0">
              {toast.type === 'sending' && (
                <FaSpinner className="animate-spin text-cyan-400 text-lg" />
              )}
              {toast.type === 'success' && (
                <FaCheckCircle className="text-emerald-400 text-lg" />
              )}
              {toast.type === 'error' && (
                <FaExclamationTriangle className="text-rose-400 text-lg" />
              )}
            </div>

            <div className="flex-grow font-mono text-xs tracking-wider">
              <span className={`block text-[10px] uppercase font-bold mb-0.5 ${toast.type === 'sending'
                  ? 'text-cyan-400'
                  : toast.type === 'success'
                    ? 'text-emerald-400'
                    : 'text-rose-400'
                }`}>
                {toast.type === 'sending' ? 'Sending' : toast.type === 'success' ? 'Success' : 'Error'}
              </span>
              <p className="text-gray-200 font-light">{toast.message}</p>
            </div>

            <button
              type="button"
              onClick={() => setToast({ ...toast, show: false })}
              className="text-gray-500 hover:text-white transition-colors duration-200 font-mono text-[10px] uppercase px-1.5 py-0.5 rounded hover:bg-white/5 cursor-pointer"
            >
              [X]
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
