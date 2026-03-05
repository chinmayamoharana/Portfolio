import { motion } from "framer-motion";

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
    }
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Professional Experience
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-800 hover:border-blue-500"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400">
              {exp.role}
            </h3>

            <p className="text-gray-400 font-medium mt-2">
              {exp.company} | {exp.duration}
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text-lg">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}