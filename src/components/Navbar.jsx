import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef(null);
  const scrolledRef = useRef(false);
  const rafRef = useRef(null);
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);

  useEffect(() => {
    const animate = () => {
      const bar = barRef.current;
      if (!bar) {
        rafRef.current = null;
        return;
      }

      const current = currentProgressRef.current;
      const target = targetProgressRef.current;
      const delta = target - current;
      const next = Math.abs(delta) < 0.08 ? target : current + delta * 0.16;

      currentProgressRef.current = next;
      bar.style.width = `${next}%`;

      if (Math.abs(target - next) < 0.05) {
        rafRef.current = null;
        return;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    const updateProgress = () => {
      const docEl = document.documentElement;
      const body = document.body;
      const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop || 0;
      const scrollHeight = Math.max(
        body.scrollHeight,
        docEl.scrollHeight,
        body.offsetHeight,
        docEl.offsetHeight,
        body.clientHeight,
        docEl.clientHeight
      );
      const maxScroll = scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      const nextScrolled = scrollTop > 40;
      if (scrolledRef.current !== nextScrolled) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      targetProgressRef.current = nextProgress;
      if (rafRef.current != null) {
        return;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
      }
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
    `relative px-2 py-2 text-sm font-medium transition duration-300 xl:px-3 ${
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
      <div className="relative">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <Motion.img
              src="/LOGO.png"
              alt="Chinmaya Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-11 w-auto shrink-0 rounded object-contain drop-shadow-lg [image-rendering:auto] sm:h-12 lg:h-14"
            />
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                Chinmaya
              </p>
              <p className="truncate text-xs text-slate-300">Full Stack Developer</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-6">
            {navItems.map(({ to, label }) => {
              return (
                <NavLink key={to} to={to} className={navLinkStyle}>
                  {({ isActive }) => (
                    <span className="relative group">
                      {label}
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
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Resume
            </a>
          </div>

          {/* Tablet / Mobile Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="/resume.pdf"
              download
              className="hidden rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl sm:inline-flex"
            >
              Resume
            </a>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:border-cyan-300/40 hover:text-cyan-300"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] overflow-hidden bg-white/20">
        <div
          ref={barRef}
          className="h-full w-0 rounded-r-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_12px_rgba(34,211,238,0.45)] will-change-[width]"
        />
      </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="xl:hidden border-t border-white/10 bg-black/85 backdrop-blur-xl"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:px-6 lg:px-8">
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/5 px-4 py-3 text-white transition hover:border-cyan-300/30 hover:bg-white/5 hover:text-cyan-300"
                >
                  {label}
                </Link>
              ))}

              <a
                href="/resume.pdf"
                download
                className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-white font-semibold sm:hidden"
              >
                Resume
              </a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
