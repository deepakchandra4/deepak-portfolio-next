'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-white">About </span>
            <span className="text-primary">Me</span>
          </h2>

          <div className="glass p-8 md:p-12 rounded-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />

            <p className="mb-6 text-lg text-gray-300 leading-relaxed">
              I&apos;m a passionate <span className="text-primary font-semibold">MCA graduate</span> with expertise in full-stack
              development using the <span className="text-accent">MERN stack</span>. I completed a 6-month internship
              at <span className="text-white font-medium">Manak Analytics & Development Pvt Ltd</span>, where I gained hands-on
              experience in building responsive, high-performance web applications.
            </p>

            <p className="mb-8 text-lg text-gray-300 leading-relaxed">
              During my internship, I contributed to improving user engagement
              and optimizing the performance of APIs. My commitment to <span className="text-accent">clean code</span> and continuous learning drives me to create seamless digital
              experiences. I am always excited about new challenges and eager to
              apply and expand my skills in full-stack development.
            </p>

            <div className="flex justify-center gap-6">
              <Link
                href="https://www.linkedin.com/in/deepakchandra4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors px-6 py-3 rounded-full border border-gray-700 hover:border-primary/50 bg-[#0A1929] hover:bg-primary/10"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/deepakchandra4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-6 py-3 rounded-full border border-gray-700 hover:border-white bg-[#0A1929] hover:bg-white/10"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
