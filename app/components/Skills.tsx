'use client'
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiWordpress,
  SiShopify,
  SiCanva,
  SiOpenai,
  SiPostman,
  SiVercel
} from "react-icons/si";

const skillCategories = [
  {
    title: "Full Stack Development",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-4xl" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-400 text-4xl" /> },
    ]
  },
  {
    title: "AI & Learning",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-300 text-4xl" /> },
      { name: "Generative AI", icon: <SiOpenai className="text-green-400 text-4xl" /> },
      { name: "Prompt Engineering", icon: <SiOpenai className="text-cyan-400 text-4xl" /> },
      { name: "LLM Basics", icon: <SiOpenai className="text-emerald-400 text-4xl" /> },
      { name: "AI Tools", icon: <SiOpenai className="text-teal-300 text-4xl" /> },
    ]
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git / GitHub", icon: <FaGitAlt className="text-orange-400 text-4xl" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-300 text-4xl" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400 text-4xl" /> },
      { name: "Vercel", icon: <SiVercel className="text-white text-4xl" /> },
    ]
  },
  {
    title: "Platforms",
    skills: [
      { name: "WordPress", icon: <SiWordpress className="text-blue-300 text-4xl" /> },
      { name: "Shopify", icon: <SiShopify className="text-green-500 text-4xl" /> },
      { name: "Canva", icon: <SiCanva className="text-blue-400 text-4xl" /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-[#020617] -z-10" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px]" />

      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Full-stack development skills, developer tools, and growing exposure to AI-powered workflows.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-14">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-6 rounded-xl text-center hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 group cursor-default"
                  >
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium text-gray-300 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}