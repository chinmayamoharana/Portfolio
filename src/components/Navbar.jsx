import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition duration-300 ${
      isActive
        ? "text-blue-400"
        : "text-gray-200 hover:text-blue-400"
    }`;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <motion.img
            src="/LOGO.png"
            alt="Chinmaya Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-12 md:h-14 w-auto object-contain rounded
            drop-shadow-lg 
            [image-rendering:auto] 
            cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">

          {["/", "/about", "/skills", "/projects", "/experience", "/contact","/blogs"].map((path, index) => {
            const names = ["Home", "About", "Skills", "Projects", "Experience", "Contact","Blogs"];
            return (
              <NavLink key={index} to={path} className={navLinkStyle}>
                {({ isActive }) => (
                  <span className="relative group">
                    {names[index]}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                )}
              </NavLink>
            );
          })}

          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black/80 backdrop-blur-xl text-white flex flex-col items-center gap-6 py-6"
          >
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
            <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="/experience" onClick={() => setOpen(false)}>Experience</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/blogs" onClick={() => setOpen(false)}>Blogs</Link>


            <a
              href="/resume.pdf"
              download
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}