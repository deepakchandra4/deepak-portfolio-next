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
  SiShopify,
  SiCanva
} from "react-icons/si";

const skills = [
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-4xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400 text-4xl" /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-400 text-4xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-300 text-4xl" /> },
  { name: "WordPress", icon: <SiWordpress className="text-blue-300 text-4xl" /> },
  { name: "Shopify", icon: <SiShopify className="text-green-500 text-4xl" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-400 text-4xl" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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
      {/* Background Elements */}
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
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="glass p-6 rounded-xl text-center hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 group cursor-default"
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md">
                {skill.icon}
              </div>
              <h3 className="font-medium text-gray-300 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
