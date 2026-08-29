import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelopeOpenText,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
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
      <section className="relative min-h-screen px-4 pb-12 pt-28 text-white sm:px-6 sm:pb-14 sm:pt-32 md:px-10 md:pb-16 md:pt-36 lg:px-12 lg:pb-16 lg:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.14),transparent_24%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/58 via-gray-900/46 to-blue-950/60" />

        <Motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 md:gap-12 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-12"
        >
          <Motion.div
            variants={item}
            className="order-2 mx-auto flex max-w-2xl flex-col text-center lg:order-1 lg:col-span-7 lg:mx-0 lg:items-start lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.28em]">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.12)]" />
              Available for opportunities
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-6 sm:gap-3 lg:justify-start">
              <Link
                to="/projects"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200 sm:px-4 sm:text-xs sm:tracking-[0.28em]"
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200 sm:px-4 sm:text-xs sm:tracking-[0.28em]"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200 sm:px-4 sm:text-xs sm:tracking-[0.28em]"
              >
                Contact
              </Link>
            </div>

            <p className="mt-7 text-xs uppercase tracking-[0.3em] text-slate-400 sm:mt-8 sm:text-sm sm:tracking-[0.35em]">
              Chinmaya Moharana
            </p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Hi, I&apos;m Chinmaya.
              <br />
              Full Stack Developer building{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                intelligent digital products.
              </span>
            </h1>

            <div className="mt-4 min-h-[1.75rem] text-sm font-medium text-cyan-300 sm:mt-5 sm:text-lg md:text-xl">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "AI Application Developer",
                  1500,
                  "React & Node.js Developer",
                  1500,
                  "Python & Django Developer",
                  1500,
                ]}
                wrapper="span"
                speed={48}
                repeat={Infinity}
              />
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
              I build scalable web applications with clean architecture, responsive interfaces,
              and reliable APIs. My focus is on modern UI, backend clarity, and products that feel
              polished in real use.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
              <MagneticButton className="inline-flex w-full sm:w-auto">
                <Link
                  to="/projects"
                  className="group inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 text-sm font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] sm:h-12 sm:px-8 sm:text-base"
                >
                  View My Work
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>

              <MagneticButton className="inline-flex w-full sm:w-auto">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 sm:h-12 sm:px-8 sm:text-base"
                >
                  Download Resume
                  <FaEnvelopeOpenText />
                </a>
              </MagneticButton>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start">
              <a
                href="https://github.com/chinmayamoharana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-lg text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300 sm:p-3 sm:text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/chinmaya-moharana-707b02239/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-lg text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300 sm:p-3 sm:text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/mr_chinmaya_22/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-lg text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300 sm:p-3 sm:text-xl"
              >
                <FaInstagram />
              </a>
            </div>
          </Motion.div>

          <Motion.div variants={item} className="relative order-1 flex justify-center lg:order-2 lg:col-span-5">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-[22rem] w-[22rem] rounded-full bg-blue-500/20 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
            </div>

            <div className="relative w-full max-w-[320px] rounded-[2rem] border border-white/10 bg-black/45 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:max-w-[360px] sm:p-4 lg:max-w-[420px]">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5" />
                <img
                  src="/Profile.jpeg"
                  className="aspect-[4/5] w-full object-cover object-top opacity-90"
                  alt="Portrait of Chinmaya Moharana"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>

            <Motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-1/4 hidden lg:block"
            >
              <div className="rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Stack</p>
                <p className="mt-1 text-sm font-semibold text-white">React / Django / MERN</p>
              </div>
            </Motion.div>

            <Motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute right-0 bottom-1/4 hidden lg:block"
            >
              <div className="rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Focus</p>
                <p className="mt-1 text-sm font-semibold text-white">UI / APIs / Performance</p>
              </div>
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_32%)]" />
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
            <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl md:text-5xl">
              A faster way to understand who I am, how I build, and what I deliver.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
              Each block gives a focused preview and leads to the full page. On mobile, these cards
              swipe horizontally so the page stays comfortable to scan without losing content density.
            </p>
          </div>

          <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:mt-12 sm:gap-4 sm:px-6 sm:pb-4 lg:mx-0 lg:grid lg:grid-cols-12 lg:overflow-visible lg:px-0">
            {previewCards.map((card, index) => (
              <Motion.div
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`w-[78%] shrink-0 snap-center sm:w-[62%] md:w-[52%] lg:w-auto lg:min-w-0 ${card.className}`}
              >
                <TiltCard className="group relative h-full rounded-[2rem] border border-white/10 bg-black/45 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-4 md:p-5">
                  <div
                    className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${card.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative z-10 flex h-full flex-col">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400 sm:text-xs sm:tracking-[0.32em]">
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-3 text-xl font-bold leading-tight text-white sm:mt-4 sm:text-2xl">{card.title}</h3>
                    <p className="mt-2 flex-1 text-[11px] leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-6 line-clamp-2 sm:line-clamp-3">
                      {card.content}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                      {card.items.map((entry) => (
                        <span
                          key={entry}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-200 sm:px-3 sm:text-sm"
                        >
                          {entry}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={card.to}
                      className="group/link mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:mt-6 sm:text-xs sm:tracking-[0.28em]"
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

      <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.08),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
              Build Story
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl md:text-5xl">
              The way I approach product work from first idea to shipped experience.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
              This section turns the homepage into a narrative: product intent, system structure,
              and final polish. On mobile, the cards swipe sideways so each step stays readable.
            </p>
          </Motion.div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:gap-4 sm:px-6 sm:pb-4 lg:mx-0 lg:block lg:overflow-visible lg:px-0">
            {storySteps.map((step, index) => (
              <Motion.article
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-[78%] shrink-0 snap-center rounded-[2rem] border border-white/10 bg-black/45 p-3 backdrop-blur-2xl sm:w-[62%] sm:p-4 md:w-[52%] md:p-5 lg:mb-8 lg:w-auto lg:shrink lg:pl-14"
              >
                <span className="absolute left-5 top-5 grid h-8 w-8 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-xs font-semibold text-cyan-200 lg:left-0 lg:top-7">
                  {step.id}
                </span>
                <h3 className="pl-11 text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl lg:pl-0">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[11px] leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-6 md:text-base md:leading-7">{step.text}</p>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
                  {step.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-200 sm:px-3 sm:text-sm"
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

      <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_34%)]" />

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-7xl"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
                Featured Work
              </p>
              <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl md:text-5xl">
                Three projects that show how I think through product, UI, and engineering.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
                A tighter sample of the work I care about most: clear problem solving, polished
                interfaces, and full-stack execution that feels intentional.
              </p>
            </div>

            <MagneticButton className="inline-flex w-full md:w-auto">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-200"
              >
                View all projects
                <FaLocationArrow />
              </Link>
            </MagneticButton>
          </div>

          <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:mt-12 sm:gap-4 sm:px-6 sm:pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project, index) => (
                <Motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="w-[80%] shrink-0 snap-center sm:w-[62%] md:w-[52%] lg:w-auto lg:min-w-0"
                >
                  <TiltCard className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
                    <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.22em]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-tight text-white sm:mt-4 sm:text-xl md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[11px] leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-7 md:text-base line-clamp-2 sm:line-clamp-3">
                        {project.description}
                      </p>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="group/link mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-300/15 hover:text-cyan-100 sm:mt-6 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.24em] lg:px-6"
                      >
                        Read Case Study
                        <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </TiltCard>
                </Motion.div>
              ))
            ) : (
              <div className="rounded-[2rem] border border-white/10 bg-black/45 p-8 text-slate-300 backdrop-blur-2xl lg:col-span-3">
                Featured projects will appear here after the project data is loaded.
              </div>
            )}
          </div>
        </Motion.div>
      </section>

      <section className="px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:px-10 md:pb-20 lg:px-12 lg:pb-24">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-950/80 to-blue-500/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8 md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
                Ready to Connect
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                Looking for a developer who can blend modern UI with real full-stack execution.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                I’m open to internships, entry-level developer roles, and collaborative projects
                where clean engineering and strong user experience both matter.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[15rem] lg:min-w-[18rem]">
              <MagneticButton className="w-full">
                <Link
                  to="/contact"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_26px_rgba(56,189,248,0.28)] sm:h-12 lg:px-6"
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
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 sm:h-12 lg:px-6"
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
