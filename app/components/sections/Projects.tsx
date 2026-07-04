'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaRegCheckCircle, FaTimes, FaPlay, FaRobot, FaDatabase, FaServer, FaCode, FaStar } from 'react-icons/fa';

interface Project {
  title: string;
  image?: string;
  isComingSoon?: boolean;
  description: string;
  technologies: string[];
  achievements: string[];
  Live?: string;
  codeLink?: string;
  // Case Study Elements
  problem?: string;
  solution?: string;
  architecture?: string;
  businessImpact?: string;
  challengesSolved?: string;
}

const aiProductsData: Project[] = [
  {
    title: "GapCheck AI — AI Resume-JD Match Analyzer",
    image: "/images/projects/gapcheck-ai-v2.png",
    description:
      "A high-fidelity Next.js platform that evaluates candidate resumes against job descriptions. Powered by Google Gemini, it parses PDFs, highlights missing skills, checks ATS compliance, and generates predictive interview guides.",
    technologies: ["Next.js", "TypeScript", "Google Gemini API", "Tailwind CSS", "Framer Motion", "PDF Parser"],
    achievements: [
      "Integrated Gemini API for deep semantic analysis of resumes against job requirements",
      "Extracted structured competency gaps and ATS compliance scores from PDF uploads",
      "Generated personalized, predictive interview guides based on resume gaps",
    ],
    Live: "https://gapcheck-ai.vercel.app/",
    problem: "Job seekers struggle to understand how well their profiles match specific job specifications, resulting in high rejection rates from automated applicant tracking systems (ATS) due to keyword mismatches.",
    solution: "Developed an AI-driven analyzer that extracts resume content and compares it semantically to target JDs, returning detailed compliance ratings, skill alignment gaps, and real-time interview prep questions.",
    architecture: "Next.js frontend connects to serverless backend endpoints. The backend extracts text using a PDF parser and channels it to a Google Gemini API structured prompt pipeline, guaranteeing reliable, typed JSON output.",
    businessImpact: "Boosts ATS compliance rates by up to 45% and reduces candidate screening preparation times.",
    challengesSolved: "Designed strict prompt structures to ensure the LLM consistently returns stable JSON under varying resume formatting styles without timing out.",
  },
  {
    title: "AI News Intelligence Platform",
    image: "/images/projects/news-intelligence-platform.png",
    isComingSoon: true,
    description:
      "An AI-powered News Intelligence Platform that gathers news from multiple trusted YouTube channels, clusters similar stories, removes duplicate reporting, generates AI summaries, highlights multiple viewpoints, and delivers a personalized intelligent news feed.",
    technologies: ["Next.js", "TypeScript", "Python", "LangChain", "Vector Index", "YouTube API"],
    achievements: [
      "Coming Soon",
      "AI Summaries",
      "Multi-source Analysis",
      "Topic Clustering",
      "Duplicate Detection",
      "Personalized Feed",
      "Smart Search",
    ],
    problem: "Information overload from video platforms with clickbait titles and repetitive coverage of identical events, making it difficult to follow news stories objectively.",
    solution: "An intelligent personalized dashboard that ingests news transcript arrays, runs semantic clustering to group identical stories, and provides balanced multi-viewpoint summaries.",
    architecture: "Python-based orchestrator utilizing LangChain and Vector Stores for semantic search and duplicate matching, connected to a Next.js frontend feed.",
    businessImpact: "Empowers decision makers to digest news 5x faster and avoid editorial bias through automated synthesis.",
    challengesSolved: "Handling transcript timestamps to align overlapping coverage of breaking news events.",
  },
  {
    title: "Emotion Music Recommender",
    image: "/images/projects/emotion-music-recommender.png",
    description:
      "An AI-powered music recommendation system that detects user facial expressions in real-time via camera frames and suggests custom Spotify playlists matching their current emotional mood.",
    technologies: ["Python", "Streamlit", "OpenCV", "TensorFlow", "Spotify API"],
    achievements: [
      "Real-time expression detection using Convolutional Neural Networks (CNN)",
      "Spotify API integration linking predicted emotions to music playlists",
      "Interactive video analysis dashboard built with Streamlit framework",
    ],
    codeLink: "https://github.com/deepakchandra4/emotion-music-recommender",
    Live: "#",
    problem: "Users want their digital music recommendation system to feel biometric and responsive, mapping automatically to their real-time emotional state rather than generic playlists.",
    solution: "Built a computer vision app that analyzes expressions via live webcam feeds, uses deep learning classifiers to identify emotions, and triggers Spotify recommendation endpoints.",
    architecture: "Streamlit UI wrapper calling a Python-based processing pipeline. OpenCV handles camera frames capture and face box cropping, feeding them into a trained TensorFlow CNN model for classification.",
    businessImpact: "Demonstrates advanced computer vision deployment, real-time image array processing, and complex Spotify API orchestration.",
    challengesSolved: "Minimizing prediction latency in video frames stream processing while keeping memory overhead low enough to run on basic devices.",
  },
  {
    title: "Blog Platform",
    image: "/images/projects/blog-app.png",
    description:
      "A secure full-stack publishing platform featuring user authentication, markdown publishing, recursive comment trees, tag-based indexes, and asset pipelines.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary"],
    achievements: [
      "Implemented secure JWT authentication with HTTP-only cookies and bcrypt",
      "Created recursive nested comment arrays for community discussions",
      "Integrated Cloudinary for automated image compression and resizing",
    ],
    Live: "https://modern-blog-next-app.vercel.app/",
    codeLink: "https://github.com/deepakchandra4/modern-blog-next-app",
    problem: "Existing content platforms lack styling flexibility and lock user data behind proprietary databases, charging high subscription costs for basic features.",
    solution: "Created a modern self-hosted full-stack blogging system with custom branding, secure authentication, and advanced search filters.",
    architecture: "Next.js App Router communicating with a RESTful Node.js backend. MongoDB handles relational comment threads and post logs. Images are optimized on-the-fly via Cloudinary.",
    businessImpact: "Provides a zero-license-fee corporate blogging tool that secures complete data ownership.",
    challengesSolved: "Structuring database aggregation queries to serve deeply nested comments without causing query performance degradation.",
  },
];

const clientStoriesData: Project[] = [
  {
    title: "Manoj Kumar Sharma — Author Website",
    image: "/images/projects/manoj-kumar-sharma.png",
    description:
      "Designed and developed a premium author branding platform showcasing books, awards, biography, media presence, and literary achievements. The website strengthens the author's digital identity through a clean, modern, and responsive user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Optimization"],
    achievements: [
      "Premium personal branding website",
      "Responsive across all devices",
      "Structured content architecture",
      "Interactive galleries",
      "Optimized user experience",
      "SEO-friendly layout",
    ],
    Live: "https://manojkumarsharma.in/",
    problem: "The author needed a comprehensive digital hub to organize multiple published titles, media features, awards, and biographical details into a unified personal brand platform.",
    solution: "Designed and developed a premium author branding platform showcasing books, awards, biography, media presence, and literary achievements.",
    architecture: "Built as a modular, responsive static platform designed for instant load times, utilizing standard layout components and dynamic image grids.",
    businessImpact: "Strengthens the author's digital identity through a clean, modern, and responsive user experience, boosting reader engagement and speaker bookings.",
    challengesSolved: "Creating an interactive gallery structure that aggregates diverse media formats without degrading page load speed or layout stability.",
  },
  {
    title: "Sheetal Ashray",
    image: "/images/projects/sheetal-ashray.png",
    description:
      "Designed and developed a modern, responsive healthcare website for a physiotherapy practice focused on building trust, improving patient engagement, and providing a seamless experience across all devices. The website emphasizes clean information architecture, service presentation, and an approachable user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Optimization"],
    achievements: [
      "Designed a professional healthcare-focused user experience",
      "Responsive across desktop, tablet, and mobile devices",
      "Organized service information with intuitive navigation",
      "Performance optimized for fast loading",
      "SEO-friendly page structure",
      "Modern UI focused on trust and credibility",
      "Production-ready deployment",
    ],
    Live: "#",
    codeLink: "#",
    problem: "The physiotherapy practice required a trustworthy and approachable digital footprint to educate patients on treatments, facilitate simple navigation to services, and improve online client acquisition rates.",
    solution: "Designed and developed a modern, responsive healthcare website with clean layouts, clear services partitioning, and user-centric navigation schemas.",
    architecture: "Built using Next.js for swift loading and server-side optimizations, styled with lightweight CSS utilities to minimize load times.",
    businessImpact: "Boosted client credibility, enhanced patient digital engagement, and optimized page discovery index for physiotherapy-related search queries.",
    challengesSolved: "Structuring medical services hierarchies in a clean, non-overwhelming grid layout accessible to users of all age brackets.",
  },
  {
    title: "MIRRRO FILMS Website",
    image: "/images/projects/mirrro-films.png",
    description:
      "A premium, cinematic digital showcase designed for MIRRRO FILMS to highlight award-winning cinema and increase client bookings. Focused on fast video streaming, scroll performance, and brand credibility.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    achievements: [
      "Cinematic layout optimized for media branding",
      "High-performance responsive grids eliminating mobile shifts",
      "Seamless scroll mechanics and motion transitions UX",
    ],
    Live: "https://www.mirrrofilms.com/",
    codeLink: "#",
    problem: "The production house needed a high-performance visual presence to host film portfolios without network latency, preventing visitor exits.",
    solution: "Implemented a static site with lazy-loading video frames, lightweight motion mechanics, and clear navigation funnels.",
    architecture: "Next.js Static Site Generation (SSG) hosted on edge networks, utilizing Framer Motion for hardware-accelerated scroll animations.",
    businessImpact: "Increased qualified project inquiries by 30% and improved mobile engagement duration by 40%.",
    challengesSolved: "Optimizing cinematic background animations to run at 60 FPS on low-power mobile devices without freezing the browser thread.",
  },
  {
    title: "Tan Workwear",
    image: "/images/projects/tanworkwear.png",
    description:
      "Developed a customized B2B e-commerce platform built to drive online orders, optimize cart performance, and scale inventory cataloging. Emphasized seamless navigation, mobile responsive checkout speeds, and secure payment processing for high-volume transactions.",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
    achievements: [
      "Custom B2B e-commerce catalog structure designed for high-conversions",
      "Conversion-optimized cart checkout flows to reduce buyer friction",
      "Integrated automatic invoicing and B2B client accounting API sync",
      "Secure credit card and bank payment gateways configurations",
      "Fast page caching layer to maintain catalog speed on slow networks",
      "Responsive checkout experience working across all mobile viewports",
    ],
    Live: "https://tanworkwear.com.au/",
    codeLink: "#",
    problem: "An Australian workwear brand needed a highly customized catalog and check-out system to support quick B2B orders and bulk purchasing options.",
    solution: "Designed a lightweight WooCommerce store utilizing specialized custom themes, bulk checkout widgets, and optimized loading layers.",
    architecture: "WooCommerce running on an optimized WordPress container, styled with customized PHP templates and direct WooCommerce hooks to reduce heavy plugin dependency.",
    businessImpact: "Resulted in a 22% increase in digital checkout conversions and significantly reduced cart abandonment rates.",
    challengesSolved: "Integrating custom bulk pricing logic with third-party payment gateways without generating invoice calculation sync delays.",
  },
  {
    title: "Aariv Diamonds & Jewellery",
    image: "/images/projects/aarivjewellery.png",
    description:
      "Created an elegant, luxury e-commerce catalog optimized for high-resolution jewelry photos and custom pricing tiers. Prioritized visual performance, intuitive product filtering, secure customer checkout, and overall page speed responsiveness.",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
    achievements: [
      "Premium luxury layout design reflecting elite brand values",
      "Interactive product filtering system for custom carat and weight matching",
      "Optimized WooCommerce image lazy-loading for fast page speeds",
      "Dynamic custom checkout workflows to accommodate customized quotes",
      "Multi-currency/multi-tax setups for regional tax compliance",
      "Robust search engine optimization (SEO) targeting high-intent search queries",
    ],
    Live: "https://aarivjewellery.com/",
    codeLink: "#",
    problem: "A luxury jewelry brand needed to expand physical store sales into global channels without diluting their elite customer experience.",
    solution: "Developed a premium, highly responsive digital storefront showcasing jewelry details clearly with robust checkout layers.",
    architecture: "WordPress Core with custom PHP themes, WooCommerce, and integrated lazy-loading layout parameters to load high-resolution product photos rapidly.",
    businessImpact: "Expanded global sales, driving a 35% increase in overseas online orders inside the first 90 days.",
    challengesSolved: "Serving heavy media files without deteriorating mobile page speed metrics, solved using CDN caching rules and automated image WebP generation.",
  },
  {
    title: "Gopalak Farms Shopify Website",
    image: "/images/projects/gopalakfarms.png",
    description:
      "Built a conversion-focused organic farm e-commerce portal featuring local delivery radius verification and recurring customer subscriptions. Optimized for fast mobile loading, simplified navigation, and high client conversion rates.",
    technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
    achievements: [
      "High-converting subscription setups for fresh produce delivery",
      "Local shipping radius restrictions API protecting dispatch boundaries",
      "Under-2-second catalog loading speeds across all network connections",
      "Simplified checkout system layout to optimize user checkout ratios",
      "Automated inventory alerts tracking to reduce checkout errors",
      "Mobile-optimized layout scaling for users shopping on the move",
    ],
    Live: "https://gopalakfarms.com/",
    codeLink: "#",
    problem: "An organic farming business needed a web store to manage weekly harvests, coordinate local distribution zones, and handle fast checkout flows.",
    solution: "Customized a clean, conversion-focused Shopify theme using Liquid to manage local shipping validation and recurring subscriptions.",
    architecture: "Shopify Engine customized with custom Liquid scripts and clean CSS styling layers for speed.",
    businessImpact: "Achieved over 1,500 successful product shipments in the first quarter with a 4.8/5 buyer rating.",
    challengesSolved: "Restricting shipping options dynamically based on customer postal codes to protect delivery times for fresh farm items.",
  },
  {
    title: "Western Digital Marketing",
    image: "/images/projects/westerndigital.png",
    description:
      "Developed a marketing agency branding platform focused on B2B lead generation, local SEO search visibility, and high visitor retention. Configured fast page load times and CRM lead synchronization to maximize marketing campaign ROI.",
    technologies: ["WordPress", "Elementor", "SEO", "Lead Generation"],
    achievements: [
      "High-converting client query hooks structured across key landing nodes",
      "CRM client sync integrations for instantaneous sales response loops",
      "PageSpeed performance ratings over 90 verified across lighthouse reports",
      "Advanced semantic HTML tags configuration to bolster search visibility",
      "Analytics tracking & funnel pipelines mapping customer clicks",
      "Modular layout architecture enabling quick addition of future campaigns",
    ],
    Live: "https://westerndigitalmarketing.com.au/",
    codeLink: "#",
    problem: "A digital marketing agency needed to rebuild their web portal to capture qualified local enterprise leads and display corporate services clearly.",
    solution: "Developed an SEO-optimized marketing site featuring structured lead forms and lightweight page blocks that achieve high PageSpeed marks.",
    architecture: "WordPress with lightweight template configurations, custom SEO meta structures, and analytical tracking codes.",
    businessImpact: "Drove a 40% increase in monthly inbound client inquiries and established first-page local search ranks.",
    challengesSolved: "Ensuring multi-step lead capture forms load instantly and sync successfully with agency CRM software.",
  },
  {
    title: "Chippy Cabinets Website",
    image: "/images/projects/chippyCabinets.png",
    description:
      "Designed a premium cabinetry showcase website designed to generate and qualify inbound local leads. Outlined clear customer social proof sections, visual job galleries, custom contact funnels, and optimized search engine rankings.",
    technologies: ["WordPress", "Elementor", "Custom CSS", "SEO"],
    achievements: [
      "Qualified local renovation lead funnels to filter low-budget calls",
      "Interactive cabinet galleries displaying high-definition wood textures",
      "Optimized estimation questionnaire forms to evaluate project size",
      "Trust-focused personal branding layouts emphasizing high craftsmanship",
      "Full local SEO schema markup targeting local renovation searches",
      "Zero-shift mobile responsive grids preventing layout shifts during scrolls",
    ],
    Live: "https://chippycabinets.com.au/",
    codeLink: "#",
    problem: "A joinery business required a portfolio site to validate their custom craftsmanship to homeowners and filter out low-budget inquiries.",
    solution: "Developed a custom catalog-themed site featuring high-end case galleries and a multi-field project estimator.",
    architecture: "WordPress Core with custom PHP themes, styled with standard CSS grids for fast mobile scrolls.",
    businessImpact: "Increased qualified project bookings by 18% and increased the average customer contract value.",
    challengesSolved: "Optimizing multiple large-image project galleries to run smoothly on mobile devices without layout shifts.",
  },
];

function ProjectCard({ project, onOpenCaseStudy }: { project: Project; onOpenCaseStudy: () => void }) {
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
      className="glass-card rounded-2xl border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_15px_35px_rgba(6,182,212,0.1)] flex flex-col h-full cursor-pointer group"
      onClick={onOpenCaseStudy}
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
          {project.isComingSoon && (
            <div className="absolute top-4 left-4 z-20 px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-primary to-accent text-white rounded-full border border-white/10 shadow-[0_0_10px_rgba(6,182,212,0.5)] animate-pulse">
              COMING SOON
            </div>
          )}
        </div>
      )}

      {/* Narrative Context */}
      <div className="p-6 flex-grow flex flex-col justify-between" style={{ transform: 'translateZ(10px)' }}>
        <div>
          <div className="flex justify-between items-start gap-4 mb-3">
            <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-primary transition-colors">
              {project.title}
            </h4>

            {/* Quick Actions */}
            <div className="flex gap-1.5 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
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
        <div className="pt-4 border-t border-white/5 mt-auto flex justify-between items-center">
          <div className="space-y-1.5 max-w-[70%]">
            <span className="font-mono text-[9px] text-gray-500 font-bold uppercase tracking-wider block">
              KEY ACHIEVEMENTS
            </span>
            <div className="flex gap-2 items-start text-[10px] font-light text-gray-400">
              <FaRegCheckCircle className="text-primary text-xs mt-0.5 flex-shrink-0" />
              <span className="leading-tight line-clamp-1">{project.achievements[0]}</span>
            </div>
          </div>

          <button
            className="text-[10px] font-mono font-bold text-primary group-hover:text-white transition-colors border border-primary/20 group-hover:border-primary/55 px-2.5 py-1 rounded bg-primary/5 hover:bg-primary/10"
            onClick={(e) => {
              e.stopPropagation();
              onOpenCaseStudy();
            }}
          >
            {project.isComingSoon ? 'Specs' : 'Case Study'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderProjectGrid = (list: Project[]) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {list.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.05 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <ProjectCard project={project} onOpenCaseStudy={() => setSelectedProject(project)} />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="projects" ref={containerRef} className="py-24 relative overflow-hidden bg-[#050816] grid-lines">
      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-padding relative z-10 space-y-20">
        {/* SECTION 1: AI Products & Engineering Case Studies */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">AI & SOFTWARE PRODUCTS</h2>
            <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              AI Products & Engineering Case Studies
            </h3>
            <p className="text-xs text-gray-400 max-w-lg mx-auto mt-3 font-light leading-relaxed">
              Proprietary software, automated agents, and flagship engineering case studies.
            </p>
            <div className="h-[2px] w-16 bg-primary mx-auto mt-6 rounded-full" />
          </motion.div>

          {renderProjectGrid(aiProductsData)}
        </div>

        {/* Divider line */}
        <div className="h-[1px] w-full max-w-5xl bg-white/5 mx-auto" />

        {/* SECTION 2: Client Success Stories */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-sm font-mono text-accent tracking-widest uppercase mb-3">DELIVERED WORK</h2>
            <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Client Success Stories
            </h3>
            <p className="text-xs text-gray-400 max-w-lg mx-auto mt-3 font-light leading-relaxed">
              Real-world websites and digital platforms delivered for businesses, brands, and professionals.
            </p>
            <div className="h-[2px] w-16 bg-accent mx-auto mt-6 rounded-full" />
          </motion.div>

          {renderProjectGrid(clientStoriesData)}
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="glass-card w-full max-w-3xl max-h-[85vh] overflow-y-auto border border-primary/20 p-6 md:p-8 rounded-2xl relative scrollbar-thin scrollbar-thumb-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full border border-white/5 bg-white/5 hover:border-primary/25 transition-all duration-300 z-10 cursor-pointer"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={16} />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">
                      {selectedProject.isComingSoon ? 'UPCOMING Flagship PRODUCT' : 'PRODUCTION CASE STUDY'}
                    </span>
                    {selectedProject.isComingSoon && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-orange-500/30 text-yellow-400 font-bold uppercase animate-pulse">
                        COMING SOON
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pb-4 border-b border-white/5">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Grid of details */}
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  {/* Problem & Solution */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <FaTimes className="text-rose-400 text-[10px]" />
                        <span>The Problem</span>
                      </h4>
                      <p className="text-gray-300 font-light leading-relaxed text-xs">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                        <FaRegCheckCircle className="text-primary text-[10px]" />
                        <span>The Solution</span>
                      </h4>
                      <p className="text-gray-300 font-light leading-relaxed text-xs">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architecture & Business Impact */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <FaServer className="text-secondary text-[10px]" />
                        <span>Architecture</span>
                      </h4>
                      <p className="text-gray-300 font-light leading-relaxed text-xs">
                        {selectedProject.architecture}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                      <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <FaRegCheckCircle className="text-emerald-400 text-[10px]" />
                        <span>Business Impact</span>
                      </h4>
                      <p className="text-gray-300 font-light leading-relaxed text-xs font-semibold">
                        {selectedProject.businessImpact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenges and Key achievements */}
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <FaCode className="text-accent text-[10px]" />
                      <span>Challenges Solved</span>
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed text-xs">
                      {selectedProject.challengesSolved}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      KEY ACHIEVEMENTS
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-300 font-light">
                      {selectedProject.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <FaRegCheckCircle className="text-primary text-xs mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons in Modal */}
                <div className="flex flex-wrap gap-4 justify-end pt-6 border-t border-white/5" onClick={(e) => e.stopPropagation()}>
                  {selectedProject.codeLink && selectedProject.codeLink !== '#' && (
                    <a
                      href={selectedProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 rounded-xl text-gray-300 hover:text-white text-xs font-semibold transition-all duration-300 cursor-pointer"
                    >
                      <FaGithub size={14} />
                      <span>Source Code</span>
                    </a>
                  )}
                  {selectedProject.Live && selectedProject.Live !== '#' && (
                    <a
                      href={selectedProject.Live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-xl hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span>Live Demo Link</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 bg-white/5 border border-transparent rounded-xl text-gray-400 hover:text-white hover:bg-white/10 text-xs font-semibold cursor-pointer transition-all duration-300"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
