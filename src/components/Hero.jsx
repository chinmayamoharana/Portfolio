import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-24 pb-16 text-white md:px-10 md:pt-28 lg:px-12">

      {/* Soft Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 -z-10"></div>

      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black/58 via-gray-900/46 to-blue-950/60"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:min-h-[calc(100vh-7rem)]">
        {/* LEFT CONTENT */}
        <Motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="order-2 mx-auto flex max-w-2xl flex-col text-center lg:order-1 lg:mx-0 lg:items-start lg:text-left lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.12)]" />
            Available for opportunities
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              to="/projects"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              Contact
            </Link>
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-slate-400">
            Chinmaya Moharana
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Hi, I&apos;m Chinmaya.
            <br />
            Full Stack Developer building{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              intelligent digital products.
            </span>
          </h1>

          <div className="mt-5 min-h-[2rem] text-lg font-medium text-cyan-300 sm:text-xl">
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

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I build scalable web applications with clean architecture, responsive interfaces,
            and reliable APIs. My focus is on modern UI, backend clarity, and products that feel
            polished in real use.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              to="/projects"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] sm:w-auto"
            >
              View My Work
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 sm:w-auto"
            >
              Download Resume
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://github.com/chinmayamoharana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chinmaya-moharana-707b02239/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/mr_chinmaya_22/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <FaInstagram />
            </a>
          </div>
        </Motion.div>

        {/* RIGHT IMAGE */}
        <Motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative order-1 flex justify-center lg:order-2 lg:col-span-5"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[22rem] w-[22rem] rounded-full bg-blue-500/20 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
          </div>

          <div className="relative w-full max-w-[420px] rounded-[2rem] border border-white/10 bg-black/45 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-4">
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
      </div>
    </section>
  );
}
