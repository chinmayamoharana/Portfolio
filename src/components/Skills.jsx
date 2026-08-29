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

const skillCategories = [
  {
    title: "Frontend Systems",
    description:
      "Responsive layouts, component structure, and modern interaction patterns.",
    skills: [
      { icon: <FaReact />, name: "React.js", color: "text-cyan-400" },
      { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-sky-400" },
      { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
      { icon: <FaCss3 />, name: "CSS3", color: "text-blue-500" },
      { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-500" },
    ],
  },
  {
    title: "Backend Engineering",
    description: "API design, auth flows, server-side structure, and application logic.",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
      { icon: <SiExpress />, name: "Express.js", color: "text-slate-200" },
      { icon: <SiDjango />, name: "Django", color: "text-emerald-500" },
      { icon: <FaPython />, name: "Python", color: "text-blue-400" },
    ],
  },
  {
    title: "Data, Tooling, Deployment",
    description: "Databases, workflows, testing tools, and deployment platforms.",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
      { icon: <DiMysql />, name: "MySQL", color: "text-blue-500" },
      { icon: <FaGitAlt />, name: "Git", color: "text-orange-500" },
      { icon: <FaGithub />, name: "GitHub", color: "text-slate-200" },
      { icon: <SiPostman />, name: "Postman", color: "text-orange-400" },
      { icon: <VscVscode />, name: "VS Code", color: "text-blue-400" },
      { icon: <SiVercel />, name: "Vercel", color: "text-white" },
      { icon: <SiNetlify />, name: "Netlify", color: "text-emerald-400" },
      { icon: <SiRender />, name: "Render", color: "text-violet-400" },
    ],
  },
];

export default function Skills() {
  return (
    <main className="relative overflow-hidden px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-black/35" />

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            Technical Skills
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I use to build
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              modern digital products.
            </span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            A focused stack covering frontend development, backend engineering, data, tooling, and deployment.
          </p>
        </div>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {skillCategories.map((category, categoryIndex) => (
            <Motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 py-6 sm:py-7 lg:grid-cols-[16rem_1fr] lg:items-start lg:gap-8 lg:py-8"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {category.title}
                </h3>
                <p className="max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                  {category.description}
                </p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  {category.skills.length} technologies
                </p>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, index) => (
                  <Motion.span
                    key={skill.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-sm text-slate-200 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-black/55"
                  >
                    <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                    <span className="whitespace-nowrap font-medium">{skill.name}</span>
                  </Motion.span>
                ))}
              </div>
            </Motion.article>
          ))}
        </div>
      </Motion.div>
    </main>
  );
}
