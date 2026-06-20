'use client';
import { motion } from 'framer-motion';

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

          <p className="mb-6 text-lg text-gray-300 leading-relaxed">
            I&apos;m an <span className="text-primary font-semibold">MCA graduate specializing in Data Science and AI</span> and a
            <span className="text-accent"> full-stack developer</span> passionate about building modern, scalable, and user-friendly web applications.
          </p>

          <p className="mb-6 text-lg text-gray-300 leading-relaxed">
            I have hands-on experience developing full-stack projects, building REST APIs, and working with backend systems using technologies like
            <span className="text-accent"> React</span>,
            <span className="text-accent"> Next.js</span>,
            <span className="text-accent"> Node.js</span>, and
            <span className="text-accent"> databases</span> to create practical digital solutions.
          </p>

          <p className="mb-8 text-lg text-gray-300 leading-relaxed">
            Alongside full-stack development, I&apos;m exploring
            <span className="text-accent"> Generative AI</span>,
            <span className="text-accent"> LLM workflows</span>, and
            <span className="text-accent"> AI-powered development tools</span>
            to improve productivity and expand the way I build smarter applications. I&apos;m also continuously strengthening my knowledge of backend architecture, deployment workflows, and scalable application development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
