"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const containerStagger = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = () => {
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
      title: "PluginVerse",
      description:
        "A component-sharing platform built with authentication and a CI/CD pipeline for streamlined deployment.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "CI/CD"],
      achievements: [
        "Built a component-sharing platform with secure authentication",
        "Optimized backend queries to enhance performance",
        "Set up CI/CD pipeline for smoother deployments",
      ],
      Live: "#",
      codeLink: "https://github.com/deepakchandra4/PluginVerse",
      image: "/images/projects/pluginverse.png",
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
        "A premium joinery website showcasing custom cabinetry services across Melbourne with a focus on craftsmanship and client trust.",
      technologies: ["WordPress", "Elementor", "Custom CSS", "SEO"],
      achievements: [
        "Built a conversion-driven WordPress website highlighting services and unique selling points",
        "Emphasized expert craftsmanship, customer satisfaction, and diverse installations",
        "Created sections like 'Why Choose Us' and 'Built for Life' for trust-building",
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
        "Created a custom-designed WordPress theme tailored for jewellery e-commerce",
        "Integrated secure WooCommerce payment and checkout functionalities",
        "Showcased diverse collections including solitaires, kundan, polki, and gemstone jewellery",
        "Optimized website speed and SEO with lazy loading and compressed media assets",
        "Implemented responsive UI with high-quality visuals for mobile and desktop users",
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

  const renderProjectSection = (
    title: string,
    projects: {
      title: string;
      image: string;
      description: string;
      technologies: string[];
      achievements: string[];
      Live: string;
      codeLink: string;
    }[]
  ) => (
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
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#112240]/70 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-[#1f2937] hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="relative h-64 overflow-hidden bg-gray-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2">
                {title.includes("WordPress") || title.includes("Shopify") ? (
                  <a
                    href={project.Live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-300"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                {project.description}
              </p>

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-blue-400 mb-1">
                  Highlights:
                </h4>
                <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                  {project.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-2 text-sm">
                <a
                  href={project.Live}
                  className="text-blue-400 hover:text-blue-300 font-medium underline"
                >
                  Live
                </a>
                {!title.includes("WordPress") && !title.includes("Shopify") && (
                  <a
                    href={project.codeLink}
                    className="text-blue-400 hover:text-blue-300 font-medium underline"
                  >
                    Source Code
                  </a>
                )}
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

        {/* WordPress & Shopify Projects */}
        {renderProjectSection(
          "WordPress & Shopify Projects",
          wordpressProjects
        )}
      </div>
    </section>
  );
};

export default Projects;
