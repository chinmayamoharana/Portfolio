import { motion as Motion } from "framer-motion";

export default function Experience() {
  const experienceData = [
    {
      role: "Full Stack Web Development Intern",
      company: "CODTECH IT SOLUTIONS",
      duration: "Aug 2025 - Sep 2025",
      description:
        "Completed a 4-week intensive internship focused on full-stack application development using React.js, Node.js, and Express.js. Designed and consumed RESTful APIs, implemented CRUD operations, optimized MongoDB queries, and ensured responsive UI development using modern CSS frameworks. Followed clean architecture principles and improved application performance through efficient state management and API handling."
    },
    {
      role: "Python Full-Stack Developer Intern",
      company: "QSpiders",
      duration: "Jan 2025 - June 2025",
      description:
        "Developed a production-ready e-commerce web application using Django, Python, HTML, CSS, and MySQL. Designed secure authentication systems, implemented role-based access control, integrated backend APIs, and managed database schema design. Improved user experience through responsive design and efficient server-side rendering. Gained hands-on experience in full project lifecycle including development, testing, and deployment."
    },
    {
      role: "WEB DEVELOPMENT INTERN",
      company: "AjursInsights Pvt Ltd",
      duration: "Apr 2026 – Present",
      description:
        "Working on production-level web development tasks involving frontend development, bug fixing, feature implementation, debugging, and maintaining responsive web applications in a real-world development environment."
    }
  ];

  return (
    <section className="relative overflow-hidden px-6 py-16 text-white sm:py-20 md:px-10 lg:py-24 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_75%_15%,rgba(139,92,246,0.12),transparent_24%)]" />

      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">
            Professional Experience
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            Roles and project work that shaped how I build.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            A compact timeline of internships and production-style responsibilities with a focus
            on frontend delivery, API work, and real-world implementation.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {experienceData.map((exp, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-black/45 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-5 md:p-6"
          >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
                    {exp.company}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  {exp.duration}
                </p>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base md:text-lg">
                {exp.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
