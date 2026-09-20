import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaServer, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-24 pb-16 text-white md:px-10 md:pt-28 lg:px-12">
      {/* Soft Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 -z-10" />

      {/* Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -z-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 -z-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:min-h-[calc(100vh-7rem)]">
        {/* LEFT CONTENT */}
        <Motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="order-2 mx-auto flex max-w-2xl flex-col text-center lg:order-1 lg:mx-0 lg:items-start lg:text-left lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-xl shadow-[0_0_18px_rgba(34,211,238,0.15)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for Full-Time Roles & Internships
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            Chinmaya Moharana
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Hi, I&apos;m Chinmaya.
            <br />
            Full Stack Developer building{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent animate-gradient">
              intelligent web systems.
            </span>
          </h1>

          <div className="mt-5 min-h-[2.25rem] text-lg font-semibold text-cyan-300 sm:text-xl">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "AI Application Developer",
                1500,
                "React & Node.js Engineer",
                1500,
                "Python & Django Developer",
                1500,
              ]}
              wrapper="span"
              speed={48}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Specializing in production-grade React interfaces, Django REST Framework backends,
            real-time WebSockets, and clean software architecture.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <MagneticButton className="inline-flex">
              <Link
                to="/projects"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] sm:w-auto"
              >
                Explore Projects
                <span aria-hidden="true">→</span>
              </Link>
            </MagneticButton>

            <MagneticButton className="inline-flex">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-cyan-300/50 hover:bg-white/10 sm:w-auto"
              >
                Download Resume
                <span aria-hidden="true">↗</span>
              </a>
            </MagneticButton>
          </div>

          {/* SOCIAL LINKS & QUICK STATS */}
          <div className="mt-12 grid w-full gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-2xl font-extrabold text-cyan-300">8+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Featured Builds</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-2xl font-extrabold text-violet-300">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Full Stack Coverage</p>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:justify-start">
              <a
                href="https://github.com/chinmayamoharana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-lg text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/chinmaya-moharana-707b02239/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-lg text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/mr_chinmaya_22/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-lg text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </Motion.div>

        {/* RIGHT PORTRAIT & STACK BADGES */}
        <Motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative order-1 flex justify-center lg:order-2 lg:col-span-5"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[22rem] w-[22rem] rounded-full bg-cyan-500/20 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
          </div>

          <div className="relative w-full max-w-[400px] rounded-[2.25rem] border border-white/15 bg-slate-900/60 p-3.5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-4">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
              <img
                src="/Profile.jpeg"
                className="aspect-[4/5] w-full object-cover object-top opacity-90 transition duration-700 hover:scale-105"
                alt="Portrait of Chinmaya Moharana"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-white/10 bg-slate-900/80 p-3 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Software Engineer</p>
                <p className="text-sm font-semibold text-white">Full Stack & REST API Architecture</p>
              </div>
            </div>
          </div>

          {/* Floating Pill Left */}
          <Motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[-2rem] top-1/4 hidden lg:block"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="rounded-lg bg-cyan-400/20 p-2 text-cyan-300">
                <FaCode />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Frontend</p>
                <p className="text-xs font-bold text-white">React + Tailwind v4</p>
              </div>
            </div>
          </Motion.div>

          {/* Floating Pill Right */}
          <Motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute right-[-2rem] bottom-1/4 hidden lg:block"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="rounded-lg bg-violet-400/20 p-2 text-violet-300">
                <FaServer />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Backend</p>
                <p className="text-xs font-bold text-white">Django REST & Node.js</p>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}

