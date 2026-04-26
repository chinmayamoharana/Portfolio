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
    <main className="px-6 pb-24 pt-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <MagneticButton className="inline-flex">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
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
            className="rounded-[2.25rem] border border-white/10 bg-slate-950/60 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
              Project Case Study
            </p>
            <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
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
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950"
                >
                  <FaGithub />
                  View GitHub
                </a>
              </MagneticButton>

              <MagneticButton className="inline-flex">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
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
            <TiltCard className="group rounded-[2.25rem] border border-white/10 bg-slate-950/58 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[2.25rem]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full min-h-[22rem] w-full object-cover transition duration-700 group-hover:scale-105"
                />
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
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                {metric.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
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
              className="rounded-[2rem] border border-white/10 bg-slate-950/58 p-7 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
                {entry.title}
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">{entry.text}</p>
            </Motion.article>
          ))}
        </section>

        <section className="mt-6">
          <Motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/58 p-7 backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              Challenges
            </p>
            <ul className="mt-5 space-y-4 text-lg leading-8 text-slate-300">
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
              <h2 className="mt-4 text-3xl font-bold text-white">
                Related projects from the same portfolio.
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {relatedProjects.map((entry, index) => (
              <Motion.div
                key={entry.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <TiltCard className="group h-full rounded-[2rem] border border-white/10 bg-slate-950/58 backdrop-blur-xl">
                  <div className="relative overflow-hidden rounded-t-[2rem]">
                    <img
                      src={entry.img}
                      alt={entry.title}
                      className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">{entry.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      {entry.description}
                    </p>
                    <Link
                      to={`/projects/${entry.slug}`}
                      className="group/link mt-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300"
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
