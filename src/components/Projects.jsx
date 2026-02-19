import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      img: "/project1.png",
      title: "Job Portal",
      tech: "MERN Stack (MongoDB, Express, React, Node.js)",
      github: "https://github.com/chinmayamoharana?tab=repositories",
      description:
        "Full-stack Job Portal with JWT authentication, REST APIs, MongoDB Atlas integration, and role-based dashboards."
    },
    {
      img: "/project2.png",
      title: "URL Shortener",
      tech: "MERN Stack (MongoDB, Express, React, Node.js)",
      github: "https://github.com/chinmayamoharana?tab=repositories",
      description:
        "URL shortening service with unique hash generation, MongoDB indexing, and responsive React frontend."
    },
    {
      img: "/project3.png",
      title: "PDF ↔ Word Converter",
      tech: "Django + React + Python",
      github: "https://github.com/chinmayamoharana?tab=repositories",
      description:
        "Document conversion platform using Django REST Framework with secure file upload handling."
    },
    {
      img: "/project4.png",
      title: "E-commerce Website",
      tech: "Django + Python",
      github: "https://github.com/chinmayamoharana?tab=repositories",
      description:
        "E-commerce platform with authentication, cart system, order management, and relational database design."
    },
    {
      img: "/project5.png",
      title: "Cafe Management System",
      tech: "React + PHP + MySQL",
      github: "https://github.com/chinmayamoharana?tab=repositories",
      description:
        "Role-based cafe management system with Admin/User dashboards and REST API integration."
    },
    {
      img: "/project6.png",
      title: "ATS Resume Checker",
      tech: "Django + React + Python",
      github: "https://github.com/chinmayamoharana?tab=repositories",
      description:
        "ATS resume analyzer with keyword extraction and scoring system using Django backend."
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black">

      {/* Background Glow Effect */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
      >
        My Projects
      </motion.h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
        A collection of full-stack and backend-focused applications showcasing scalable architecture and modern UI design.
      </p>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ rotateX: 6, rotateY: -6 }}
            className="relative group bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-xl transition-all duration-500"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {p.title}
              </h3>

              <p className="text-sm text-blue-500 mt-1">
                {p.tech}
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                {p.description}
              </p>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105 transition-transform duration-300"
              >
                View on GitHub →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
