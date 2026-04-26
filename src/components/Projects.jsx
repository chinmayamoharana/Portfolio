import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";
import { visibleProjects } from "../data/projects";

export default function Projects() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-28 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_26%)]" />

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
            Featured Projects
          </p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
            Case-study-ready work with cleaner product thinking.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Each project now points to a structured case study with the problem, approach,
            stack choices, implementation challenges, and final outcome.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => (
              <Motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <TiltCard className="group h-full rounded-[2rem] border border-white/10 bg-slate-950/58 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                  <div className="relative overflow-hidden rounded-t-[2rem]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:-translate-y-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                      {project.stackLabel}
                    </p>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <MagneticButton className="w-full sm:flex-1">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="group/link flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_26px_rgba(56,189,248,0.35)] sm:px-6"
                        >
                          Read Case Study
                          <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </MagneticButton>

                      <MagneticButton className="w-full sm:w-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 sm:min-w-[8.5rem]"
                        >
                          <FaGithub />
                          GitHub
                        </a>
                      </MagneticButton>
                    </div>
                  </div>
                </TiltCard>
              </Motion.div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/58 p-8 text-slate-300 md:col-span-2 xl:col-span-3">
              No projects are available right now. Add entries in the project data to show them here.
            </div>
          )}
        </div>
      </Motion.div>
    </main>
  );
}
