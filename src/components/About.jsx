import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative overflow-hidden px-6 py-16 text-white sm:py-20 md:px-10 lg:py-24 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.12),transparent_28%)]" />

      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">About</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            Professional overview, technical range, and what I care about in product work.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            I build responsive and scalable applications using React, MERN, Django, and Python.
            The focus is always on clear UI, dependable backend structure, and a polished result.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-black/45 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              What I build
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base md:text-lg">
              I have developed academic and personal projects that combine clean UI design, secure
              backend development, and efficient database integration. I am interested in work
              where design quality and engineering discipline both matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "MERN", "Node.js", "Django", "Python", "MongoDB", "MySQL", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { value: "Fresher", label: "Development experience" },
              { value: "10+ Projects", label: "Completed applications" },
              { value: "Full Stack", label: "Frontend and backend" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] border border-white/10 bg-black/45 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-5"
              >
                <h3 className="text-2xl font-black text-white sm:text-3xl">{stat.value}</h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-400 sm:text-sm sm:tracking-[0.24em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
