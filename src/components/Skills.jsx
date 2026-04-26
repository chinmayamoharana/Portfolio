import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import {
  SiDjango,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiPostman,
  SiRender,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion as Motion } from "framer-motion";
import TiltCard from "./TiltCard";

const skillCategories = [
  {
    title: "Frontend Systems",
    description:
      "Interfaces focused on responsive layouts, polished component structure, and modern interaction patterns.",
    skills: [
      { icon: <FaReact />, name: "React.js", color: "text-cyan-400", level: 92 },
      { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400", level: 88 },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-sky-400", level: 90 },
      { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500", level: 92 },
      { icon: <FaCss3 />, name: "CSS3", color: "text-blue-500", level: 87 },
      { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-500", level: 78 },
    ],
  },
  {
    title: "Backend Engineering",
    description:
      "API design, auth flows, server-side structure, and product logic for full-stack applications.",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500", level: 84 },
      { icon: <SiExpress />, name: "Express.js", color: "text-slate-200", level: 81 },
      { icon: <SiDjango />, name: "Django", color: "text-emerald-500", level: 86 },
      { icon: <FaPython />, name: "Python", color: "text-blue-400", level: 88 },
    ],
  },
  {
    title: "Data, Tooling, Deployment",
    description:
      "The supporting layer that keeps projects practical: databases, Git workflows, testing utilities, and deployment platforms.",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500", level: 82 },
      { icon: <DiMysql />, name: "MySQL", color: "text-blue-500", level: 80 },
      { icon: <FaGitAlt />, name: "Git", color: "text-orange-500", level: 84 },
      { icon: <FaGithub />, name: "GitHub", color: "text-slate-200", level: 88 },
      { icon: <SiPostman />, name: "Postman", color: "text-orange-400", level: 80 },
      { icon: <VscVscode />, name: "VS Code", color: "text-blue-400", level: 92 },
      { icon: <SiVercel />, name: "Vercel", color: "text-white", level: 76 },
      { icon: <SiNetlify />, name: "Netlify", color: "text-emerald-400", level: 74 },
      { icon: <SiRender />, name: "Render", color: "text-violet-400", level: 74 },
    ],
  },
];

export default function Skills() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-28 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.12),transparent_24%)]" />
      <Motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
            Technical Skills
          </p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
            Tools I use to build fast interfaces and dependable full-stack products.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            This section now shows stack depth more clearly with category-based cards and animated
            proficiency bars instead of static labels alone.
          </p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <Motion.div
              key={category.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: categoryIndex * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TiltCard className="group h-full rounded-[2rem] border border-white/10 bg-slate-950/58 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
                  {category.title}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {category.description}
                </p>

                <div className="mt-8 space-y-5">
                  {category.skills.map((skill, index) => (
                    <Motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      viewport={{ once: true, amount: 0.4 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                          <span className="font-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-300">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                        <Motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.08 + index * 0.04 }}
                          viewport={{ once: true, amount: 0.6 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                      </div>
                    </Motion.div>
                  ))}
                </div>
              </TiltCard>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </main>
  );
}
