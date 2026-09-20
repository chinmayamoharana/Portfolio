import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";
import { visibleProjects } from "../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All Builds" },
    { id: "React", label: "React" },
    { id: "Django", label: "Django / Python" },
    { id: "Node.js", label: "Node.js / MERN" },
    { id: "WebSockets", label: "Real-time" },
  ];

  const filteredProjects = visibleProjects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.tech.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-12 text-white sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-24">
      {/* Background glow radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.14),transparent_30%)]" />

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-xl">
            Featured Portfolio Builds
          </div>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Full-Stack Systems &{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Case Study Applications.
            </span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
            Production-style web applications detailing architecture choices, role-based security, backend API logic, and real-time frontend states.
          </p>

          {/* FILTER BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 ${
                  activeFilter === opt.id
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <Motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <TiltCard className="group flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-900/60 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition duration-500 hover:border-cyan-400/40">
                  {/* IMAGE CONTAINER */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-300 backdrop-blur-md">
                      Case Study
                    </div>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                      {project.stackLabel}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-300 flex-1">
                      {project.description}
                    </p>

                    {/* METRICS PREVIEW */}
                    {project.metrics && (
                      <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-4 text-xs">
                        {project.metrics.slice(0, 2).map((m) => (
                          <div key={m.label} className="rounded-xl border border-white/5 bg-black/30 p-2">
                            <span className="block text-[10px] text-slate-400 uppercase">{m.label}</span>
                            <span className="font-semibold text-white truncate block">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* ACTIONS */}
                    <div className="mt-6 flex items-center gap-3">
                      <MagneticButton className="flex-1">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="group/btn flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_24px_rgba(56,189,248,0.35)]"
                        >
                          Read Case Study
                          <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                      </MagneticButton>

                      <MagneticButton>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Github Repository"
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                        >
                          <FaGithub />
                        </a>
                      </MagneticButton>
                    </div>
                  </div>
                </TiltCard>
              </Motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Motion.div>
    </main>
  );
}

