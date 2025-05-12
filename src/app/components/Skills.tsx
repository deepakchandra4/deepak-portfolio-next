'use client'
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
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
} from "react-icons/si";



const skills = [
  {
    name: "JavaScript (ES6+)",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-400 text-3xl" />,
  },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-3xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-3xl" />,
  },
  { name: "Redux", icon: <SiRedux className="text-purple-400 text-3xl" /> },
  {
    name: "Git/GitHub",
    icon: <FaGitAlt className="text-orange-400 text-3xl" />,
  },
  { name: "Docker", icon: <FaDocker className="text-blue-300 text-3xl" /> },
  { name: "Wordpress", icon: <SiWordpress className="text-blue-300 text-3xl" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#040D12] to-[#0A1929]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#0A1929]/50 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="mb-3 flex justify-center">{skill.icon}</div>
              <h3 className="font-semibold text-gray-200 text-sm">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
