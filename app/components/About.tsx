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
            I&apos;m an <span className="text-primary font-semibold">MCA graduate</span> and a
            <span className="text-accent"> full-stack developer</span> focused on building scalable,
            responsive, and high-performance web applications using the MERN stack and modern web technologies.
          </p>

          <p className="mb-6 text-lg text-gray-300 leading-relaxed">
            I have hands-on experience developing full-stack applications, designing RESTful APIs,
            and integrating cloud-based services. I also work with basic
            <span className="text-accent"> DevOps practices</span> like containerization, version control,
            and deployment workflows to ensure efficient development and reliable application delivery.
          </p>

          <p className="mb-8 text-lg text-gray-300 leading-relaxed">
            I prioritize <span className="text-accent">clean, maintainable code</span>, performance optimization,
            and scalable system design. I&apos;m continuously exploring DevOps tools, cloud platforms,
            and system architecture to build robust, production-ready digital solutions.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
