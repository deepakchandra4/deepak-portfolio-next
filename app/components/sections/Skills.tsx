'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBrain,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaEye,
  FaStar,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiPostman,
  SiVercel,
  SiGit,
  SiReact,
  SiHtml5,
  SiBootstrap,
  SiTensorflow,
  SiOpencv,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: any;
  projects: number;
  difficulty: number; // 0 to 100
  stack: string[];
  color: string;
}

interface Category {
  title: string;
  icon: any;
  skills: Skill[];
}

const matrixCategories: Category[] = [
  {
    title: 'AI Engineering',
    icon: FaBrain,
    skills: [
      {
        name: 'AI-First Development',
        icon: FaBrain,
        projects: 8,
        difficulty: 95,
        stack: ['Cursor', 'Prompt Pipelines', 'Iterative Workflows'],
        color: 'text-emerald-400 border-emerald-500/20 hover:border-emerald-500/50',
      },
      {
        name: 'Prompt Engineering',
        icon: FaBrain,
        projects: 10,
        difficulty: 90,
        stack: ['Role System Prompts', 'Few-Shot Prompts', 'Chains'],
        color: 'text-purple-400 border-purple-500/20 hover:border-purple-500/50',
      },
      {
        name: 'Gemini API Integration',
        icon: FaBrain,
        projects: 5,
        difficulty: 88,
        stack: ['Google GenAI SDK', 'Structured JSON outputs', 'Streaming'],
        color: 'text-cyan-400 border-cyan-500/20 hover:border-cyan-500/50',
      },
      {
        name: 'AI Workflow Design',
        icon: FaBrain,
        projects: 6,
        difficulty: 85,
        stack: ['Automated Agents', 'Retrieval Systems', 'LLM Fallbacks'],
        color: 'text-blue-400 border-blue-500/20 hover:border-blue-500/50',
      },
      {
        name: 'LLM App Dev',
        icon: FaBrain,
        projects: 7,
        difficulty: 87,
        stack: ['Context Buffering', 'Semantic Search', 'Vector Indexes'],
        color: 'text-yellow-400 border-yellow-500/20 hover:border-yellow-500/50',
      },
      {
        name: 'AI-assisted Software Eng',
        icon: FaBrain,
        projects: 9,
        difficulty: 92,
        stack: ['Antigravity IDE', 'Co-pilot refactoring', 'Rapid specs'],
        color: 'text-pink-400 border-pink-500/20 hover:border-pink-500/50',
      },
    ],
  },
  {
    title: 'Frontend',
    icon: FaCode,
    skills: [
      {
        name: 'React.js',
        icon: SiReact,
        projects: 12,
        difficulty: 92,
        stack: ['Hooks', 'Context API', 'State management'],
        color: 'text-cyan-300 border-cyan-500/20 hover:border-cyan-500/50',
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        projects: 11,
        difficulty: 95,
        stack: ['App Router', 'RSC', 'Server Actions', 'Optimizations'],
        color: 'text-white border-white/10 hover:border-white/30',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        projects: 10,
        difficulty: 90,
        stack: ['Strict Typing', 'Generics', 'Interfaces'],
        color: 'text-blue-400 border-blue-500/20 hover:border-blue-500/50',
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        projects: 15,
        difficulty: 96,
        stack: ['ES6+', 'Promises', 'Event Loop', 'JSON processing'],
        color: 'text-yellow-400 border-yellow-500/20 hover:border-yellow-500/50',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        projects: 14,
        difficulty: 98,
        stack: ['Utility styling', 'Tailwind v4 theme extensions'],
        color: 'text-teal-400 border-teal-500/20 hover:border-teal-500/50',
      },
      {
        name: 'HTML5 & CSS3',
        icon: SiHtml5,
        projects: 18,
        difficulty: 95,
        stack: ['Semantic DOM', 'Flex/Grid layouts', 'Custom transitions'],
        color: 'text-orange-500 border-orange-500/20 hover:border-orange-500/50',
      },
      {
        name: 'Bootstrap',
        icon: SiBootstrap,
        projects: 6,
        difficulty: 80,
        stack: ['Grid layout utilities', 'Predefined UI templates'],
        color: 'text-purple-500 border-purple-500/20 hover:border-purple-500/50',
      },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      {
        name: 'Node.js',
        icon: SiNodedotjs, // using placeholder workaround import
        projects: 10,
        difficulty: 88,
        stack: ['Asynchronous event loop', 'npm packages config'],
        color: 'text-green-500 border-green-500/20 hover:border-green-500/50',
      },
      {
        name: 'Express.js',
        icon: SiExpress,
        projects: 10,
        difficulty: 87,
        stack: ['Middlewares', 'Route groupings', 'Rate limiting'],
        color: 'text-slate-300 border-slate-500/20 hover:border-slate-500/50',
      },
      {
        name: 'REST APIs',
        icon: FaServer,
        projects: 12,
        difficulty: 92,
        stack: ['API endpoints', 'Payload sanitization', 'HTTP verbs'],
        color: 'text-blue-500 border-blue-500/20 hover:border-blue-500/50',
      },
      {
        name: 'JWT Authentication',
        icon: FaServer,
        projects: 9,
        difficulty: 90,
        stack: ['Token signings', 'Cookie caching', 'Auth guards'],
        color: 'text-purple-400 border-purple-500/20 hover:border-purple-500/50',
      },
      {
        name: 'API Design',
        icon: FaServer,
        projects: 11,
        difficulty: 89,
        stack: ['Structured payloads', 'Status responses', 'Endpoints versioning'],
        color: 'text-cyan-400 border-cyan-500/20 hover:border-cyan-500/50',
      },
      {
        name: 'Authentication Systems',
        icon: FaServer,
        projects: 9,
        difficulty: 90,
        stack: ['Bcrypt hashing', 'Session states', 'OAuth hooks'],
        color: 'text-pink-400 border-pink-500/20 hover:border-pink-500/50',
      },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: [
      {
        name: 'MongoDB',
        icon: SiMongodb,
        projects: 8,
        difficulty: 88,
        stack: ['Mongoose ODM', 'Aggregation queries', 'Document indexes'],
        color: 'text-emerald-500 border-emerald-500/20 hover:border-emerald-500/50',
      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        projects: 5,
        difficulty: 82,
        stack: ['Relational queries', 'Joins optimization', 'pgvector matching'],
        color: 'text-blue-300 border-blue-500/20 hover:border-blue-500/50',
      },
      {
        name: 'MySQL',
        icon: SiMysql,
        projects: 6,
        difficulty: 80,
        stack: ['Relational tables', 'Stored procedures', 'Indexes'],
        color: 'text-blue-500 border-blue-500/20 hover:border-blue-500/50',
      },
    ],
  },
  {
    title: 'AI & Vision',
    icon: FaEye,
    skills: [
      {
        name: 'OpenCV',
        icon: SiOpencv,
        projects: 3,
        difficulty: 85,
        stack: ['Camera frames streaming', 'Feature extraction', 'Cascade classifiers'],
        color: 'text-blue-500 border-blue-500/20 hover:border-blue-500/50',
      },
      {
        name: 'TensorFlow',
        icon: SiTensorflow,
        projects: 3,
        difficulty: 80,
        stack: ['CNN models', 'Layer structures', 'Model loading'],
        color: 'text-orange-500 border-orange-500/20 hover:border-orange-500/50',
      },
      {
        name: 'Deep Learning',
        icon: FaBrain,
        projects: 4,
        difficulty: 82,
        stack: ['Supervised pipelines', 'Weights optimization', 'Dense layers'],
        color: 'text-purple-400 border-purple-500/20 hover:border-purple-500/50',
      },
      {
        name: 'Emotion Recognition',
        icon: FaEye,
        projects: 3,
        difficulty: 85,
        stack: ['Facial grids analysis', 'Real-time classification', 'DeepFace models'],
        color: 'text-yellow-400 border-yellow-500/20 hover:border-yellow-500/50',
      },
      {
        name: 'AI Recommendation Systems',
        icon: FaBrain,
        projects: 4,
        difficulty: 86,
        stack: ['Cosine similarities', 'Filtering pipelines', 'Preferences mapping'],
        color: 'text-pink-400 border-pink-500/20 hover:border-pink-500/50',
      },
    ],
  },
  {
    title: 'Developer Tools',
    icon: FaTools,
    skills: [
      {
        name: 'Cursor & Copilot',
        icon: FaTools,
        projects: 15,
        difficulty: 96,
        stack: ['Vibe coding', 'Context building', 'Composer tools'],
        color: 'text-cyan-400 border-cyan-500/20 hover:border-cyan-500/50',
      },
      {
        name: 'Claude & ChatGPT',
        icon: FaBrain,
        projects: 20,
        difficulty: 98,
        stack: ['System templates prompts', 'Advanced reasoning', 'Refactoring hooks'],
        color: 'text-emerald-400 border-emerald-500/20 hover:border-emerald-500/50',
      },
      {
        name: 'Antigravity IDE',
        icon: FaTools,
        projects: 8,
        difficulty: 90,
        stack: ['Agentic code modification', 'Multi-replace validations'],
        color: 'text-purple-400 border-purple-500/20 hover:border-purple-500/50',
      },
      {
        name: 'Docker',
        icon: SiDocker,
        projects: 6,
        difficulty: 82,
        stack: ['Multi-stage containers', 'Docker Compose files'],
        color: 'text-blue-500 border-blue-500/20 hover:border-blue-500/50',
      },
      {
        name: 'Linux',
        icon: SiLinux,
        projects: 10,
        difficulty: 85,
        stack: ['Bash shell commands', 'Server cron configuration', 'Nginx blocks'],
        color: 'text-yellow-500 border-yellow-500/20 hover:border-yellow-500/50',
      },
      {
        name: 'Postman',
        icon: SiPostman,
        projects: 12,
        difficulty: 90,
        stack: ['Environment payloads', 'API Mock environments', 'Assertions'],
        color: 'text-orange-500 border-orange-500/20 hover:border-orange-500/50',
      },
      {
        name: 'Vercel',
        icon: SiVercel,
        projects: 14,
        difficulty: 95,
        stack: ['CD pipelines', 'Preview deployments', 'Edge optimization'],
        color: 'text-white border-white/10 hover:border-white/30',
      },
      {
        name: 'Git & GitHub',
        icon: SiGit,
        projects: 20,
        difficulty: 93,
        stack: ['Rebase/Merge streams', 'GitHub actions workflows'],
        color: 'text-slate-300 border-slate-500/20 hover:border-slate-500/50',
      },
    ],
  },
];

// Workaround imports/workarounds
import { FaLaptopCode as SiNodedotjs } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { SiLinux } from 'react-icons/si';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('AI Engineering');
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const selectedCategory = matrixCategories.find((cat) => cat.title === activeCategory) || matrixCategories[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050816] grid-lines">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">INTELLIGENCE MATRIX</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Skills & Technologies
          </h3>
          <div className="h-[2px] w-16 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Matrix category navigation pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {matrixCategories.map((category) => {
            const CatIcon = category.icon;
            const isActive = category.title === activeCategory;

            return (
              <button
                key={category.title}
                onClick={() => {
                  setActiveCategory(category.title);
                  setHoveredSkill(null);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-semibold border transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <CatIcon className="text-sm" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Skills Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* List of Skills in Selected Category */}
          <div className="md:col-span-6 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-gray-400 uppercase mb-4 px-2">
              {activeCategory} LAYER SYSTEM
            </h4>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid gap-2.5"
              >
                {selectedCategory.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  const isCurrentlyHovered = hoveredSkill?.name === skill.name;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`glass-card p-4 rounded-xl border flex items-center justify-between cursor-default transition-all duration-300 ${
                        isCurrentlyHovered
                          ? 'border-primary/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-primary/5 translate-x-2'
                          : 'border-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-lg bg-white/5 border border-white/5 ${skill.color}`}>
                          <SkillIcon className="text-lg" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-white text-sm">{skill.name}</h5>
                        </div>
                      </div>

                      {/* Active indicator */}
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${isCurrentlyHovered ? 'bg-primary animate-pulse' : 'bg-gray-700'}`} />
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Active</span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Details Dashboard Card */}
          <div className="md:col-span-6">
            <div className="glass-card p-6 rounded-2xl border border-primary/10 relative overflow-hidden min-h-[300px] flex flex-col justify-between">
              {/* Header Grid Lines detail */}
              <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />

              <AnimatePresence mode="wait">
                {hoveredSkill ? (
                  <motion.div
                    key={hoveredSkill.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 space-y-6"
                  >
                    <div>
                      <div className="inline-block px-2 py-0.5 rounded font-mono text-[9px] bg-primary/10 text-primary border border-primary/20 mb-3">
                        ACTIVE SYSTEM PARAMETER
                      </div>
                      <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                        <span>{hoveredSkill.name}</span>
                      </h4>
                    </div>

                    {/* Skill Statistics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/30 border border-white/5 p-3.5 rounded-xl text-center">
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                          PROJECTS COMPLETED
                        </span>
                        <span className="text-lg font-bold text-secondary font-mono">{hoveredSkill.projects}</span>
                      </div>
                      <div className="bg-black/30 border border-white/5 p-3.5 rounded-xl text-center">
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                          INTEGRATION LEVEL
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-primary font-mono uppercase block mt-1">Production Ready</span>
                      </div>
                    </div>

                    {/* Skill Level info tags instead of progress bar */}
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-2">
                        CORE FREELANCE COMPETENCY
                      </span>
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <FaStar className="text-xs animate-pulse flex-shrink-0" />
                        <span className="text-xs font-mono font-semibold tracking-wider">Enterprise-Grade Design Patterns & APIs</span>
                      </div>
                    </div>

                    {/* Associated stack elements */}
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-3">
                        INTELLIGENT TELEMETRY PATHS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {hoveredSkill.stack.map((s, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-slate-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col justify-center items-center text-center py-12 relative z-10"
                  >
                    <FaBrain className="text-4xl text-gray-600 animate-pulse mb-4" />
                    <h5 className="font-semibold text-gray-400">Select a Skill Layer</h5>
                    <p className="text-xs text-gray-500 max-w-xs mt-1.5 leading-relaxed font-light">
                      Hover over any skill block on the left to reveal detailed telemetry, capability indexing, and project integrations.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}