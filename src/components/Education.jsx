import { motion as Motion } from "framer-motion";

export default function Education() {

  const educationData = [
    {
      institute: "College of Engineering Bhubaneswar",
      location: "Bhubaneswar",
      duration: "Jul 2021 – May 2025",
      degree: "B.Tech in Computer Science and Engineering"
    },
    {
      institute: "Saheed Higher Secondary School",
      location: "Barapur, Bhadrak",
      duration: "Apr 2019 – Mar 2021",
      degree: "Intermediate in Science"
    },
    {
      institute: "Siba Prasad Nodal High School",
      location: "Saud, Balasore",
      duration: "Mar 2018 – Mar 2019",
      degree: "Matriculation"
    }
  ];

  return (
    <section className="relative overflow-hidden px-6 py-16 text-white sm:py-20 md:px-10 lg:py-24 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.12),transparent_24%)]" />

      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Education</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            The academic path behind the portfolio.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            A simple summary of the institutions and milestones that led into full-stack work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {educationData.map((edu, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-black/45 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-5 md:p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
                {edu.duration}
              </p>
              <h3 className="mt-4 text-xl font-bold leading-tight text-white sm:text-2xl">
                {edu.institute}
              </h3>
              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-slate-400 sm:text-sm sm:tracking-[0.24em]">
                {edu.location}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:mt-4 sm:text-base">{edu.degree}</p>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
