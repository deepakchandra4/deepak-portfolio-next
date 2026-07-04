'use client';

import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaRobot, FaCode, FaCogs, FaLightbulb, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    id: 'ai-dev',
    title: 'AI Development',
    icon: FaRobot,
    color: 'text-cyan-400 border-cyan-500/20 hover:border-cyan-500/50',
    glowColor: 'bg-cyan-500/5',
    description: 'Build custom intelligent solutions that leverage advanced Large Language Models (LLMs) and agentic workflows to automate reasoning and decisions.',
    features: [
      'Autonomous AI Agents & MCP Servers',
      'Intelligent Conversational Chatbots',
      'Retrieval-Augmented Generation (RAG)',
      'Custom LLM API Integrations',
      'Intelligent Business Workflows',
    ],
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Development',
    icon: FaCode,
    color: 'text-blue-400 border-blue-500/20 hover:border-blue-500/50',
    glowColor: 'bg-blue-500/5',
    description: 'Ship responsive, secure, and production-ready applications with modern frontends, performant backends, and robust schemas.',
    features: [
      'SaaS MVP Development',
      'Interactive Web Dashboards',
      'Secure Admin Panels',
      'Clean REST & GraphQL APIs',
      'JWT & Multi-role Authentication',
    ],
  },
  {
    id: 'automation',
    title: 'Business Automation',
    icon: FaCogs,
    color: 'text-purple-400 border-purple-500/20 hover:border-purple-500/50',
    glowColor: 'bg-purple-500/5',
    description: 'Connect siloed systems and replace repetitive manual work with intelligent automated scripts and robust internal pipelines.',
    features: [
      'Custom Internal Tools',
      'Workflow Automation Pipelines',
      'API & SaaS Integrations',
      'Database Schema Customizations',
      'System Event Orchestration',
    ],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    icon: FaLightbulb,
    color: 'text-emerald-400 border-emerald-500/20 hover:border-emerald-500/50',
    glowColor: 'bg-emerald-500/5',
    description: 'Define your technical architecture and AI implementation strategy to save development costs and reduce time-to-market.',
    features: [
      'Architecture Planning',
      'AI Feasibility & Strategy',
      'Tech Stack Optimization',
      'Database Schema Audits',
      'Code Quality & Scalability Advisory',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#050816] grid-lines">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">SERVICE CATALOG</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            What I Can Build For You
          </h3>
          <div className="h-[2px] w-16 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className={`glass-card p-8 rounded-2xl border ${service.color} transition-all duration-300 relative overflow-hidden group flex flex-col justify-between`}
              >
                {/* Internal Glow Effect */}
                <div className={`absolute -inset-2 rounded-2xl ${service.glowColor} opacity-0 group-hover:opacity-100 blur transition duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Title & Icon Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight">{service.title}</h4>
                  </div>

                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features list */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs font-mono text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/85 animate-pulse" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Link to Contact */}
                <div className="relative z-10 pt-4 border-t border-white/5">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-cyan-400 tracking-wider uppercase cursor-pointer transition-colors group/link"
                  >
                    <span>Inquire About This Service</span>
                    <FaArrowRight className="text-[10px] transform group-hover/link:translate-x-1.5 transition-transform" />
                  </ScrollLink>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
