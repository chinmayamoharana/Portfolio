import { useState } from "react";
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
import { motion as Motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Systems",
    description: "Responsive layouts, state management, modern component design, and UI motion.",
    skills: [
      { icon: <FaReact />, name: "React.js", level: "Advanced", color: "text-cyan-400" },
      { icon: <FaJs />, name: "JavaScript (ES6+)", level: "Advanced", color: "text-yellow-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS v4", level: "Advanced", color: "text-sky-400" },
      { icon: <FaHtml5 />, name: "HTML5", level: "Advanced", color: "text-orange-500" },
      { icon: <FaCss3 />, name: "CSS3 / Modern CSS", level: "Advanced", color: "text-blue-500" },
      { icon: <FaBootstrap />, name: "Bootstrap", level: "Intermediate", color: "text-purple-400" },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    description: "RESTful API design, auth flows, JWT/RBAC security, and server-side processing.",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", level: "Advanced", color: "text-emerald-400" },
      { icon: <SiExpress />, name: "Express.js", level: "Advanced", color: "text-slate-200" },
      { icon: <SiDjango />, name: "Django REST Framework", level: "Advanced", color: "text-emerald-500" },
      { icon: <FaPython />, name: "Python", level: "Advanced", color: "text-blue-400" },
    ],
  },
  {
    id: "database-tools",
    title: "Data & Cloud Infrastructure",
    description: "Database schema design, API testing, version control, and deployment pipelines.",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB", level: "Advanced", color: "text-emerald-400" },
      { icon: <DiMysql />, name: "MySQL", level: "Advanced", color: "text-blue-400" },
      { icon: <FaGitAlt />, name: "Git", level: "Advanced", color: "text-orange-500" },
      { icon: <FaGithub />, name: "GitHub Workflows", level: "Advanced", color: "text-slate-200" },
      { icon: <SiPostman />, name: "Postman API Testing", level: "Advanced", color: "text-orange-400" },
      { icon: <VscVscode />, name: "VS Code", level: "Advanced", color: "text-blue-400" },
      { icon: <SiVercel />, name: "Vercel", level: "Production", color: "text-white" },
      { icon: <SiNetlify />, name: "Netlify", level: "Production", color: "text-emerald-400" },
      { icon: <SiRender />, name: "Render", level: "Production", color: "text-violet-400" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <main className="relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-12 lg:py-24">
      {/* Radial glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(139,92,246,0.12),transparent_30%)]" />

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-xl">
            Technical Stack
          </div>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Technologies & tools I use to build{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              scalable systems.
            </span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            End-to-end full-stack engineering proficiency spanning modern React UIs, Python/Django APIs, Node.js microservices, and relational/document databases.
          </p>

          {/* CATEGORY FILTER TABS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: "all", label: "All Skills" },
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "database-tools", label: "Data & Cloud" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SKILLS CATEGORY PANELS */}
        <div className="mt-12 grid gap-8">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <Motion.article
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-[2.25rem] border border-white/10 bg-slate-900/50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 md:p-10"
              >
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-2xl font-black text-white sm:text-3xl">{category.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{category.description}</p>
                  </div>
                  <span className="self-start rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-cyan-300 md:self-auto">
                    {category.skills.length} Technologies
                  </span>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-black/60 hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)]"
                    >
                      <div className={`rounded-xl border border-white/10 bg-white/5 p-3 text-2xl ${skill.color} transition duration-300 group-hover:scale-110`}>
                        {skill.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-base font-bold text-white">{skill.name}</p>
                        <p className="text-xs font-medium text-slate-400">{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Motion.article>
            ))}
          </AnimatePresence>
        </div>
      </Motion.div>
    </main>
  );
}

