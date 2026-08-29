import { Link, Navigate, useParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";
import { getProjectBySlug, getRelatedProjects } from "../data/projects";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = getRelatedProjects(project.slug);

  return (
    <main className="relative overflow-hidden px-6 pb-16 pt-24 text-white sm:pb-20 sm:pt-28 md:px-10 lg:pb-24 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <MagneticButton className="inline-flex">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-200"
          >
            <FaArrowLeft />
            Back to projects
          </Link>
        </MagneticButton>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2.25rem] border border-white/10 bg-black/45 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-6 md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
              Project Case Study
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight text-white sm:mt-5 sm:text-4xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base md:text-lg">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <MagneticButton className="inline-flex">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_26px_rgba(56,189,248,0.28)] sm:gap-3 sm:px-6 sm:py-3"
                >
                  <FaGithub />
                  View GitHub
                </a>
              </MagneticButton>

              <MagneticButton className="inline-flex">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 sm:gap-3 sm:px-6 sm:py-3"
                >
                  Discuss Similar Project
                  <FaArrowRight />
                </Link>
              </MagneticButton>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <TiltCard className="group rounded-[2.25rem] border border-white/10 bg-black/45 shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[2.25rem]">
                <div className="aspect-[16/10] w-full">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/5 to-transparent" />
              </div>
            </TiltCard>
          </Motion.div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {project.metrics.map((metric, index) => (
            <Motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.4 }}
            className="rounded-[1.75rem] border border-white/10 bg-black/45 p-4 backdrop-blur-2xl sm:p-6"
          >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                {metric.label}
              </p>
              <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">{metric.value}</p>
            </Motion.div>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          {[
            { title: "Problem", text: project.problem },
            { title: "Solution", text: project.solution },
            { title: "Tech Stack", text: project.stackLabel },
            { title: "Result", text: project.result },
          ].map((entry, index) => (
            <Motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] border border-white/10 bg-black/45 p-5 backdrop-blur-2xl sm:p-7"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
                {entry.title}
              </p>
              <p className="mt-3 text-xs leading-6 text-slate-300 sm:mt-4 sm:text-sm sm:leading-8 md:text-base line-clamp-2 sm:line-clamp-3">
                {entry.text}
              </p>
            </Motion.article>
          ))}
        </section>

        <section className="mt-6">
          <Motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] border border-white/10 bg-black/45 p-5 backdrop-blur-2xl sm:p-7"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              Challenges
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:mt-5 sm:space-y-4 sm:text-lg sm:leading-8">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </Motion.article>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
                More Work
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white">
                Related projects from the same portfolio.
              </h2>
            </div>
          </div>

          <div className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0">
            {relatedProjects.map((entry, index) => (
              <Motion.div
                key={entry.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.25 }}
                className="w-[66%] shrink-0 snap-center sm:w-[58%] md:w-auto md:min-w-0"
              >
                <TiltCard className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 backdrop-blur-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={entry.img}
                      alt={entry.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">{entry.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-slate-300 sm:mt-4 sm:text-sm sm:leading-7 sm:text-base line-clamp-2 sm:line-clamp-3">
                      {entry.description}
                    </p>
                    <Link
                      to={`/projects/${entry.slug}`}
                      className="group/link mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:mt-6 sm:text-sm sm:tracking-[0.28em]"
                    >
                      Open case study
                      <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </TiltCard>
              </Motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
