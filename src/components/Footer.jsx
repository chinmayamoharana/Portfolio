import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black text-gray-300 pt-16 pb-8 px-6 md:px-12 overflow-hidden">

      {/* Top Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10"
      >

        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Chinmaya Moharana
          </h2>
          <p className="text-gray-400 mt-3">
            Full Stack Developer specializing in React, MERN, Django & Python.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
              { name: "Experience", path: "/experience" },
              { name: "Education", path: "/education" },


              

            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-blue-400 transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="text-center md:text-right">
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            Connect with Me
          </h3>

          <div className="flex justify-center md:justify-end gap-6 text-2xl">
            <a
              href="https://github.com/chinmayamoharana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/chinmaya-moharana-707b02239/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/chinmaya._.moharana/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="mt-5 text-gray-400 text-sm">
            Email:{" "}
            <a
              href="mailto:moharanachinmay300@gmail.com"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              moharanachinmay300@gmail.com
            </a>
          </p>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Chinmaya Moharana. All Rights Reserved.
      </div>

      {/* Back To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-gradient-to-r from-blue-500 to-cyan-500 
        p-3 rounded-full text-white shadow-lg hover:scale-110 hover:shadow-cyan-500/40 transition-all duration-300"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
