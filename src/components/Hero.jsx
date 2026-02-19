import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between 
    px-6 md:px-16 pt-24 md:pt-28 
    bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white overflow-hidden">

      {/* Soft Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 -z-10"></div>

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl space-y-6 z-10 text-center md:text-left"
      >
        <p className="text-gray-400 tracking-widest text-sm md:text-base">
          Hi, I am
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
        bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 
        bg-clip-text text-transparent leading-tight">
          Chinmaya Moharana
        </h1>

        {/* Typing Effect */}
        <div className="text-base sm:text-lg md:text-xl font-medium text-blue-400 min-h-[40px]">
          <TypeAnimation
            sequence={[
              "Full Stack Developer 🚀",
              1500,
              "React & MERN Specialist",
              1500,
              "Django & Python Developer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed px-2 md:px-0">
          I build scalable, high-performance web applications with clean architecture 
          and optimized APIs. Passionate about modern UI design, backend scalability, 
          and solving real-world business problems.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/projects"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full 
            bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium 
            hover:scale-105 transition-all duration-300 shadow-lg 
            hover:shadow-cyan-500/50"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full 
            border border-gray-600 hover:border-blue-400 
            hover:text-blue-400 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-8 text-2xl md:text-3xl">
          <a href="https://github.com/chinmayamoharana" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-blue-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
          </a>

          <a href="https://www.linkedin.com/in/chinmaya-moharana-707b02239/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
          </a>

          <a href="https://www.instagram.com/chinmaya._.moharana/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-blue-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
          </a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-14 md:mt-0 relative z-10 flex justify-center animate-[bounce_4s_infinite]"
      >
        {/* Glow */}
        <div className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full 
        bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>

        {/* Profile Image */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 
          rounded-full border-4 border-blue-500 overflow-hidden 
          shadow-2xl hover:scale-105 transition-transform duration-500"
        >
          <img
            src="/Profile.jpeg"
            className="w-full h-full object-cover rounded-full"
            alt="Profile"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
