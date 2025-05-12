"use client";
import { motion } from "framer-motion";

const containerStagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  const webProjects = [
    {
      title: "PluginVerse",
      description:
        "A component-sharing platform built with authentication and a CI/CD pipeline for streamlined deployment.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "CI/CD"],
      achievements: [
        "Built a component-sharing platform with secure authentication",
        "Optimized backend queries to enhance performance",
        "Set up CI/CD pipeline for smoother deployments",
      ],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Search Meal App",
      description:
        "A recipe search application using an external API, with caching and responsive design for better UX.",
      technologies: ["JavaScript", "MealDB API", "HTML/CSS", "Caching"],
      achievements: [
        "Created a meal search interface with external API integration",
        "Implemented caching to reduce API calls",
        "Achieved mobile-responsive layout using semantic HTML & CSS",
      ],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const wordpressProjects = [
    {
      title: "Tan Workwear Website",
      description:
        "A WordPress-based e-commerce platform featuring a custom theme and payment integration.",
      technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
      achievements: [
        "Designed a tailored WordPress theme for e-commerce",
        "Integrated secure payment options",
        "Optimized performance with lazy loading and image compression",
      ],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Western Digital Marketing",
      description:
        "A digital marketing agency site designed to boost conversions through SEO and lead generation.",
      technologies: ["WordPress", "Elementor", "SEO", "Lead Generation"],
      achievements: [
        "Built a responsive agency website with Elementor",
        "Included lead capture forms to generate inquiries",
        "Applied SEO best practices for visibility",
      ],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const renderProjectSection = (title: string, projects: typeof webProjects) => (
    <>
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl text-white font-semibold mb-6 mt-12"
      >
        {title}
      </motion.h3>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#112240]/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-[#1f2937] transition-transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative h-48 bg-gradient-to-tr from-gray-800 to-gray-700 flex items-center justify-center text-gray-500 text-sm italic">
              Project Image
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">
                  Highlights:
                </h4>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  {project.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.demoLink}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium underline"
                >
                  View Demo
                </a>
                <a
                  href={project.codeLink}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium underline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0A192F] to-[#040D12]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Projects
        </motion.h2>

        {/* Web Projects */}
        {renderProjectSection("Web Projects", webProjects)}

        {/* WordPress Projects */}
        {renderProjectSection("WordPress Projects", wordpressProjects)}
      </div>
    </section>
  );
};

export default Projects;
