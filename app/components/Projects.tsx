'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaRegCheckCircle } from 'react-icons/fa';

interface Project {
  title: string;
  image?: string;
  description: string;
  technologies: string[];
  achievements: string[];
  Live?: string;
  codeLink?: string;
}

const webProjects: Project[] = [
  {
    title: "MIRRRO FILMS Website",
    image: "/images/projects/mirrro-films.png",
    description:
      "A cinematic and responsive production house website for MIRRRO FILMS, redesigned to showcase purpose-driven storytelling, featured films, and socially impactful cinema through a modern and interactive user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    achievements: [
      "Redesigned the existing website with a premium cinematic UI while preserving the brand’s original color palette",
      "Added smooth animations, scroll reveal effects, interactive sections, and responsive layouts for all devices",
      "Enhanced content structure with dedicated sections for MIRRRO FILMS, featured film highlights, mission, vision, and storytelling focus",
    ],
    Live: "https://www.mirrrofilms.com/",
  },
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
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary"],
    achievements: [
      "Implemented JWT authentication with bcrypt for secure user login",
      "Designed a responsive UI with glassmorphism and animations",
      "Added nested comments, tag filtering, and advanced search",
      "Integrated Cloudinary for image hosting and optimized performance with Next.js Image",
    ],
    Live: "https://modern-blog-next-app.vercel.app/",
    codeLink: "https://github.com/deepakchandra4/modern-blog-next-app",
  },
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
  {
    title: "Author Portfolio Website",
    image: "/images/projects/manoj-kumar-sharma.png",
    description:
      "A professional author portfolio website built for Manoj Kumar Sharma to showcase his books, biography, achievements, and literary journey through a modern and responsive web experience.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
    achievements: [
      "Designed a clean and engaging author-focused website layout",
      "Showcased books, biography, awards, and personal brand presence",
      "Built a responsive interface for smooth browsing across devices",
    ],
    Live: "https://manojkumarsharma.in/",
    codeLink: "",
  },
];

const backendProjects: Project[] = [
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
    Live: "#",
    codeLink: "https://github.com/deepakchandra4/bookshelf-api",
  },
];

const wordpressProjects: Project[] = [
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
  {
    title: "Western Digital Marketing",
    image: "/images/projects/westerndigital.png",
    description:
      "A digital marketing agency site designed to boost conversions through SEO and lead generation.",
    technologies: ["WordPress", "Elementor", "SEO", "Lead Generation"],
    achievements: [
      "Built a responsive agency website with Elementor",
      "Included lead capture forms to generate inquiries",
      "Applied SEO best practices for visibility",
    ],
    Live: "https://westerndigitalmarketing.com.au/",
    codeLink: "#",
  },
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

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse tilt variables
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { damping: 20, stiffness: 150 });
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { damping: 20, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: 'preserve-3d',
      }}
      className="glass-card rounded-2xl border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_15px_35px_rgba(6,182,212,0.1)] flex flex-col h-full"
    >
      {/* Visual Asset (Only render if image is present) */}
      {project.image && (
        <div className="relative h-48 overflow-hidden bg-black/40 border-b border-white/5">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-40" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>
      )}

      {/* Narrative Context */}
      <div className="p-6 flex-grow flex flex-col justify-between" style={{ transform: 'translateZ(10px)' }}>
        <div>
          <div className="flex justify-between items-start gap-4 mb-3">
            <h4 className="text-lg font-bold text-white tracking-tight hover:text-primary transition-colors">
              {project.title}
            </h4>

            {/* Quick Actions */}
            <div className="flex gap-1.5 flex-shrink-0">
              {project.codeLink && project.codeLink !== '#' && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary/40 transition-all duration-300"
                  title="Source Code"
                >
                  <FaGithub size={12} />
                </a>
              )}
              {project.Live && project.Live !== '#' && (
                <a
                  href={project.Live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt size={10} />
                </a>
              )}
            </div>
          </div>

          {/* Stack Badges */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[9px] font-mono bg-primary/5 border border-primary/10 px-2 py-0.5 rounded text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-400 text-xs font-light leading-relaxed mb-6 text-justify">
            {project.description}
          </p>
        </div>

        {/* Achievements / Key Features */}
        <div className="pt-4 border-t border-white/5 mt-auto">
          <span className="font-mono text-[9px] text-gray-500 font-bold uppercase tracking-wider block mb-2">
            KEY ACHIEVEMENTS
          </span>
          <div className="space-y-1.5">
            {project.achievements.slice(0, 2).map((achievement, idx) => (
              <div key={idx} className="flex gap-2 items-start text-[10px] font-light text-gray-400">
                <FaRegCheckCircle className="text-primary text-xs mt-0.5 flex-shrink-0" />
                <span className="leading-tight line-clamp-1">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);

  const renderProjectSection = (title: string, list: Project[]) => (
    <div className="space-y-6">
      <motion.h4
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl font-bold text-white font-mono border-l-2 border-primary pl-3 tracking-wide"
      >
        {title}
      </motion.h4>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" ref={containerRef} className="py-24 relative overflow-hidden bg-[#050816] grid-lines">
      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-padding relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">SYSTEM PORTFOLIO</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Featured Projects
          </h3>
          <p className="text-xs text-gray-400 max-w-lg mx-auto mt-3 font-light leading-relaxed">
            A showcase of my recent work, ranging from full-stack web applications to eCommerce solutions.
          </p>
          <div className="h-[2px] w-16 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {renderProjectSection("Web Applications", webProjects)}
        <div className="py-2" />
        {renderProjectSection("Backend API", backendProjects)}
        <div className="py-2" />
        {renderProjectSection("CMS & eCommerce", wordpressProjects)}
      </div>
    </section>
  );
}
