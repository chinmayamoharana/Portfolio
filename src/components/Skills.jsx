import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaBootstrap,
  FaPython,
  FaGithub,
} from "react-icons/fa";

import { DiMysql } from "react-icons/di";

import {
  SiTailwindcss,
  SiDjango,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
        { icon: <FaCss3 />, name: "CSS3", color: "text-blue-500" },
        { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
        { icon: <FaReact />, name: "React.js", color: "text-cyan-400" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-sky-400" },
        { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
        { icon: <SiExpress />, name: "Express.js", color: "text-gray-300" },
        { icon: <SiDjango />, name: "Django", color: "text-green-700" },
        { icon: <FaPython />, name: "Python", color: "text-blue-400" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
        { icon: <DiMysql />, name: "MySQL", color: "text-blue-600" },
        { icon: <FaGitAlt />, name: "Git", color: "text-red-500" },
        { icon: <FaGithub />, name: "GitHub", color: "text-gray-300" },
        { icon: <SiPostman />, name: "Postman", color: "text-orange-500" },
        { icon: <VscVscode />, name: "VS Code", color: "text-blue-400" },
        { icon: <SiVercel />, name: "Vercel", color: "text-white" },
        { icon: <SiNetlify />, name: "Netlify", color: "text-green-400" },
        { icon: <SiRender />, name: "Render", color: "text-purple-400" },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Technical Skills & Tools
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Technologies and tools I use to build scalable applications
        </p>
      </motion.div>

      {/* Categories */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-blue-400 text-center md:text-left">
              {category.title}
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center
                  hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-300 blur-xl"></div>

                  <div
                    className={`text-5xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>

                  <p className="font-semibold text-gray-200 tracking-wide">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}