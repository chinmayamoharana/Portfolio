import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black/56 via-gray-950/44 to-black/56 px-4 pb-8 pt-16 text-gray-300 sm:px-6 md:px-10 lg:px-12">

      {/* Top Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 blur-3xl -z-10"></div>

      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3"
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
        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            Quick Links
          </h3>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 justify-center sm:grid-cols-2">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
              { name: "Experience", path: "/experience" },
              { name: "Education", path: "/education" },
              { name: "Blogs", path: "/blogs" },

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
              href=" https://www.instagram.com/mr_chinmaya_22/"
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
      </Motion.div>

      {/* Divider */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-500">
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
