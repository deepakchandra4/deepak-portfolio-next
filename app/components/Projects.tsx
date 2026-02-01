"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from 'next/link';

const containerStagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const webProjects = [
    {
      title: "Weather Forecast App",
      image: "/images/projects/weather-app.png",
      description:
        "A real-time weather forecasting app built with Next.js and OpenWeather API, featuring responsive design.",
      technologies: ["Next.js", "JavaScript", "API", "CSS"],
      achievements: [
        "Integrated OpenWeather API for accurate forecasts",
        "Implemented responsive UI for mobile and desktop",
        "Optimized performance using Next.js features like ISR",
      ],
      Live: "https://weather-forecast-next-app-seven.vercel.app/",
      codeLink: "https://github.com/deepakchandra4/weather-forecast-next-app",
    },
    {
      title: "Blog App — Full-Stack Blogging Platform",
      image: "/images/projects/blog-app.png",
      description:
        "A secure and modern full-stack blogging platform with authentication, real-time features, and responsive UI.",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      achievements: [
        "Implemented JWT authentication with bcrypt for secure user login",
        "Designed a responsive UI with glassmorphism and animations",
        "Added nested comments, tag filtering, and advanced search",
        "Integrated Cloudinary for image hosting and optimized performance with Next.js Image",
      ],
      Live: "https://modern-blog-next-app.vercel.app/",
      codeLink: "https://github.com/deepakchandra4/modern-blog-next-app",
    },
    // {
    //   title: "PluginVerse",
    //   description:
    //     "A component-sharing platform built with authentication and a CI/CD pipeline for streamlined deployment.",
    //   technologies: ["React", "Node.js", "MongoDB", "JWT", "CI/CD"],
    //   achievements: [
    //     "Built a component-sharing platform with secure authentication",
    //     "Optimized backend queries to enhance performance",
    //     "Set up CI/CD pipeline for smoother deployments",
    //   ],
    //   Live: "#",
    //   codeLink: "https://github.com/deepakchandra4/PluginVerse",
    //   image: "/images/projects/pluginverse.png",
    // },
    {
      title: "Search Meal App",
      image: "/images/projects/search-meal.png",
      description:
        "A recipe search application using an external API, with caching and responsive design for better UX.",
      technologies: ["JavaScript", "MealDB API", "HTML/CSS", "Caching"],
      achievements: [
        "Created a meal search interface with external API integration",
        "Implemented caching to reduce API calls",
        "Achieved mobile-responsive layout using semantic HTML & CSS",
      ],
      Live: "https://search-meal-amber.vercel.app/",
      codeLink: "https://github.com/deepakchandra4/search-meal",
    },
  ];

  const backendProjects = [
    {
      title: "BookShelf API",
      description:
        "A beginner-friendly RESTful API built using Node.js and Express.js to manage a simple directory of books. Supports basic CRUD operations.",
      technologies: ["Node.js", "Express.js", "REST API", "MongoDB"],
      achievements: [
        "Implemented CRUD operations for managing books",
        "Designed RESTful routes for scalable backend development",
        "Allowed flexibility with in-memory JSON storage or MongoDB database",
        "Built as a learning project for backend API development",
      ],
      Live: "#", // placeholder, will be ignored
      codeLink: "https://github.com/deepakchandra4/bookshelf-api",
    },
  ];


  const wordpressProjects = [
    {
      title: "Tan Workwear Website",
      image: "/images/projects/tanworkwear.png",
      description:
        "A WordPress-based e-commerce platform featuring a custom theme and payment integration.",
      technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
      achievements: [
        "Designed a tailored WordPress theme for e-commerce",
        "Integrated secure payment options",
        "Optimized performance with lazy loading and image compression",
      ],
      Live: "https://tanworkwear.com.au/",
      codeLink: "#",
    },
    // {
    //   title: "Western Digital Marketing",
    //   image: "/images/projects/westerndigital.png",
    //   description:
    //     "A digital marketing agency site designed to boost conversions through SEO and lead generation.",
    //   technologies: ["WordPress", "Elementor", "SEO", "Lead Generation"],
    //   achievements: [
    //     "Built a responsive agency website with Elementor",
    //     "Included lead capture forms to generate inquiries",
    //     "Applied SEO best practices for visibility",
    //   ],
    //   Live: "https://westerndigitalmarketing.com.au/",
    //   codeLink: "#",
    // },
    {
      title: "Chippy Cabinets Website",
      image: "/images/projects/chippyCabinets.png",
      description:
        "A premium joinery website showcasing custom cabinetry services across Melbourne with a focus on craftsmanship.",
      technologies: ["WordPress", "Elementor", "Custom CSS", "SEO"],
      achievements: [
        "Built a conversion-driven WordPress website",
        "Emphasized expert craftsmanship and customer satisfaction",
        "Created sections like 'Why Choose Us' for trust-building",
        "Optimized layout and images for performance and SEO",
      ],
      Live: "https://chippycabinets.com.au/",
      codeLink: "#",
    },
    {
      title: "Aariv Diamonds & Jewellery Website",
      image: "/images/projects/aarivjewellery.png",
      description:
        "A WordPress-based e-commerce platform for showcasing traditional and contemporary jewellery with a premium shopping experience.",
      technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
      achievements: [
        "Created a custom-designed WordPress theme",
        "Integrated secure WooCommerce payment and checkout functionalities",
        "Optimized website speed and SEO",
        "Implemented responsive UI with high-quality visuals",
      ],
      Live: "https://aarivjewellery.com/",
      codeLink: "#",
    },
    {
      title: "Gopalak Farms Shopify Website",
      image: "/images/projects/gopalakfarms.png",
      description:
        "A Shopify-based e-commerce store for premium farm products with a clean, responsive design and smooth shopping experience.",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      achievements: [
        "Built a clean, responsive Shopify store",
        "Customized product pages using Liquid templates",
        "Optimized store performance and mobile UX",
      ],
      Live: "https://gopalakfarms.com/",
      codeLink: "#",
    },
  ];

  interface Project {
    title: string;
    image?: string;
    description: string;
    technologies: string[];
    achievements: string[];
    Live?: string;
    codeLink?: string;
  }

  const renderProjectSection = (
    title: string,
    projects: Project[]
  ) => (
    <>
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary mb-8 mt-16 border-l-4 border-primary pl-4"
      >
        {title}
      </motion.h3>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
            }}
            whileHover={{ y: -10 }}
            className="glass rounded-xl overflow-hidden group h-full flex flex-col"
          >
            {/* Only render image if provided */}
            {project.image && (
              <div className="relative h-56 overflow-hidden bg-gray-900/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.Live && project.Live !== "#" && (
                    <Link href={project.Live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:scale-110 transition-all">
                      <FaExternalLinkAlt />
                    </Link>
                  )}
                  {project.codeLink && project.codeLink !== "#" && (
                    <Link href={project.codeLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black hover:scale-110 transition-all">
                      <FaGithub size={20} />
                    </Link>
                  )}
                </div>
              </div>
            )}

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech: string) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="pt-4 border-t border-gray-800">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
                  {project.achievements.slice(0, 2).map((item: string, idx: number) => (
                    <li key={idx} className="line-clamp-1">{item}</li>
                  ))}
                </ul>
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
      className="py-24 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-background pointer-events-none" />

      {/* Decorative blobs */}
      <motion.div style={{ y }} className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }} className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, ranging from full-stack web applications to eCommerce solutions.
          </p>
        </motion.div>

        {renderProjectSection("Web Applications", webProjects)}
        {renderProjectSection("Backend API", backendProjects)}
        {renderProjectSection("CMS & eCommerce", wordpressProjects)}
      </div>
    </section>
  );
};

export default Projects;
