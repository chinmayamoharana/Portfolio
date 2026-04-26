import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelopeOpenText,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";
import { featuredProjects } from "../data/projects";

const storySteps = [
  {
    id: "01",
    title: "Design with business intent",
    text:
      "I start with the product problem, turn requirements into clear user flows, and shape interfaces that feel fast, focused, and trustworthy.",
    points: ["UI planning", "Conversion-minded sections", "Responsive-first layouts"],
  },
  {
    id: "02",
    title: "Build scalable full-stack systems",
    text:
      "From React interfaces to Django and Node APIs, I like systems that stay understandable as they grow: reusable components, secure auth, and structured data flows.",
    points: ["Reusable React architecture", "JWT and RBAC", "API-first thinking"],
  },
  {
    id: "03",
    title: "Ship polished user experiences",
    text:
      "The final layer is product feel: motion, feedback, performance, and details that make a portfolio or dashboard feel complete instead of merely functional.",
    points: ["Purposeful motion", "Micro-interactions", "Clean handoff quality"],
  },
];

const previewCards = [
  {
    title: "About",
    to: "/about",
    eyebrow: "Professional Snapshot",
    accent: "from-blue-500/30 to-cyan-500/10",
    content:
      "Full-stack developer focused on React, MERN, Django, and business-ready application architecture.",
    items: ["Responsive UIs", "Backend APIs", "Scalable app structure"],
    className: "lg:col-span-4",
  },
  {
    title: "Skills",
    to: "/skills",
    eyebrow: "Stack Coverage",
    accent: "from-cyan-500/25 to-sky-500/10",
    content:
      "Frontend, backend, databases, and deployment tools aligned for production-style projects.",
    items: ["React + Tailwind", "Node + Django", "MongoDB + MySQL"],
    className: "lg:col-span-4",
  },
  {
    title: "Experience",
    to: "/experience",
    eyebrow: "Hands-On Work",
    accent: "from-violet-500/25 to-indigo-500/10",
    content:
      "Internship experience building full-stack applications, APIs, dashboards, and structured workflows.",
    items: ["CODTECH", "QSpiders", "Real project implementation"],
    className: "lg:col-span-4",
  },
  {
    title: "Projects",
    to: "/projects",
    eyebrow: "Featured Builds",
    accent: "from-emerald-500/25 to-cyan-500/10",
    content:
      "Case-study-ready builds across job platforms, finance dashboards, collaboration tools, and utilities.",
    items: ["8 featured builds", "Full-stack delivery", "Case study pages"],
    className: "lg:col-span-7",
  },
  {
    title: "Contact",
    to: "/contact",
    eyebrow: "Let’s Build",
    accent: "from-fuchsia-500/25 to-cyan-500/10",
    content:
      "Open to internships, full-time roles, and product work where clean engineering and modern UI both matter.",
    items: ["Available for opportunities", "Fast responses", "Portfolio collaboration"],
    className: "lg:col-span-5",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen px-6 pb-16 pt-28 md:px-10 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.14),transparent_24%)]" />

        <Motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-12"
        >
          <Motion.div
            variants={item}
            className="lg:col-span-7 rounded-[2rem] border border-white/10 bg-slate-950/58 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-10 lg:p-12"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Full Stack Developer
              </span>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">
                Open to Work
              </span>
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-slate-400">
              Chinmaya Moharana
            </p>

            <h4 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
              Building polished web products with strong frontend design and reliable full-stack
              execution.
            </h4>

            <div className="mt-5 min-h-[2rem] text-lg font-medium text-cyan-300 sm:text-xl">
              <TypeAnimation
                sequence={[
                  "React experiences with premium UI",
                  1400,
                  "Django and MERN full-stack delivery",
                  1400,
                  "Dashboard, SaaS, and product-focused builds",
                  1400,
                ]}
                wrapper="span"
                speed={48}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              I create responsive interfaces, structured APIs, and production-ready user
              experiences with a focus on clarity, performance, and professional presentation. My
              work blends clean UI thinking with practical engineering across React, Django, and
              MERN projects.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <MagneticButton className="inline-flex w-full sm:w-auto">
                <Link
                  to="/projects"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]"
                >
                  Explore Projects
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>

              <MagneticButton className="inline-flex w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:border-cyan-300/50 hover:bg-white/10"
                >
                  Let’s Work Together
                  <FaEnvelopeOpenText />
                </Link>
              </MagneticButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Projects", value: "8 detailed builds" },
                { label: "Stack", value: "React, Django, MERN" },
                { label: "Strength", value: "UI systems + APIs" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-3">
                {["Responsive UI", "REST APIs", "Modern Portfolio", "Product Thinking"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <div className="flex gap-3 text-xl text-white">
                <a
                  href="https://github.com/chinmayamoharana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/chinmaya-moharana-707b02239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Motion.div>

          <Motion.div variants={item} className="lg:col-span-5">
            <TiltCard className="group overflow-hidden rounded-[2.2rem] border border-cyan-300/15 bg-slate-950/55 shadow-[0_30px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              <div className="relative p-4 sm:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_36%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_30%)]" />
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/5" />
                  <img
                    src="/Profile.jpeg"
                    alt="Portrait of Chinmaya Moharana"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
              </div>
            </TiltCard>
          </Motion.div>
        </Motion.div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl"
        >
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
              Bento Overview
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              A faster way to understand who I am, how I build, and what I deliver.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Each block gives a focused preview and leads to the full page. The goal is to make the
              homepage feel like a high-signal landing page instead of a long stack of unrelated sections.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            {previewCards.map((card, index) => (
              <Motion.div
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={card.className}
              >
                <TiltCard className="group h-full rounded-[2rem] border border-white/10 bg-slate-950/52 p-6 backdrop-blur-xl">
                  <div
                    className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${card.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative z-10 flex h-full flex-col">
                    <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-white">{card.title}</h3>
                    <p className="mt-4 flex-1 text-base leading-7 text-slate-300">
                      {card.content}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {card.items.map((entry) => (
                        <span
                          key={entry}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                        >
                          {entry}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={card.to}
                      className="group/link mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300"
                    >
                      Open Section
                      <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </TiltCard>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
              Scroll Story
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              The way I approach product work from first idea to shipped experience.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              This section replaces a generic long homepage with a clearer narrative: design intent,
              architecture depth, and final polish.
            </p>
          </Motion.div>

          <div className="relative space-y-8 before:absolute before:left-[1.15rem] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-400/50 before:to-transparent before:content-['']">
            {storySteps.map((step, index) => (
              <Motion.article
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative rounded-[2rem] border border-white/10 bg-slate-950/54 p-6 pl-14 backdrop-blur-xl"
              >
                <span className="absolute left-0 top-7 grid h-9 w-9 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                  {step.id}
                </span>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{step.text}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {step.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-7xl"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
                Featured Work
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                Three projects that show how I think through product, UI, and engineering.
              </h2>
            </div>

            <MagneticButton className="inline-flex w-full md:w-auto">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                View all projects
                <FaLocationArrow />
              </Link>
            </MagneticButton>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project, index) => (
                <Motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <TiltCard className="group h-full rounded-[2rem] border border-white/10 bg-slate-950/58 backdrop-blur-xl">
                    <div className="relative overflow-hidden rounded-t-[2rem]">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
                      <p className="mt-4 text-base leading-7 text-slate-300">
                        {project.description}
                      </p>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="group/link mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 transition duration-300 hover:border-cyan-300/45 hover:bg-cyan-300/15 hover:text-cyan-100 lg:px-6"
                      >
                        Read Case Study
                        <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </TiltCard>
                </Motion.div>
              ))
            ) : (
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/58 p-8 text-slate-300 lg:col-span-3">
                Featured projects will appear here after the project data is loaded.
              </div>
            )}
          </div>
        </Motion.div>
      </section>

      <section className="px-6 pb-24 pt-10 md:px-10 lg:px-12">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-950/80 to-blue-500/10 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-10"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
                Ready to Connect
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                Looking for a developer who can blend modern UI with real full-stack execution.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                I’m open to internships, entry-level developer roles, and collaborative projects
                where clean engineering and strong user experience both matter.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[15rem] lg:min-w-[18rem]">
              <MagneticButton className="w-full">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_26px_rgba(56,189,248,0.28)] lg:px-6"
                >
                  Start a Conversation
                  <FaEnvelopeOpenText className="text-sm" />
                </Link>
              </MagneticButton>

              <MagneticButton className="w-full">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 lg:px-6"
                >
                  Download Resume
                  <FaFileAlt className="text-sm" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </Motion.div>
      </section>
    </main>
  );
}
