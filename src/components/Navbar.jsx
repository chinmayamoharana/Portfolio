import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll progress spring
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
    { to: "/blogs", label: "Blogs" },
  ];

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-semibold transition duration-300 ${
      isActive ? "text-cyan-300" : "text-slate-200 hover:text-cyan-300"
    }`;

  return (
    <>
      {/* Top Fixed Hardware-Accelerated Scroll Progress Bar */}
      <Motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="pointer-events-none fixed top-0 left-0 right-0 z-[100] h-1.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 shadow-[0_0_16px_rgba(56,189,248,0.9)]"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-2"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <Motion.img
              src="/LOGO.png"
              alt="Chinmaya Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-10 w-auto shrink-0 rounded object-contain drop-shadow-md sm:h-12"
              loading="eager"
              decoding="async"
            />
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-black uppercase tracking-[0.28em] text-cyan-300">
                Chinmaya
              </p>
              <p className="truncate text-xs font-medium text-slate-300">Full Stack & AI Developer</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 xl:flex">
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to} className={navLinkStyle}>
                {({ isActive }) => (
                  <span className="relative group">
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-950 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 xl:hidden">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-950 shadow-md sm:inline-flex"
            >
              Resume ↗
            </a>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-300/40 hover:text-cyan-300"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Drawer */}
        <AnimatePresence>
          {open && (
            <Motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl xl:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:px-6">
                {navItems.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/5 hover:text-cyan-300"
                  >
                    {label}
                  </Link>
                ))}

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 sm:hidden"
                >
                  Resume ↗
                </a>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

