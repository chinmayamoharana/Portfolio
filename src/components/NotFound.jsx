import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaHome, FaFolderOpen } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-28 text-white">
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)] -z-10" />

      <Motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-red-400 backdrop-blur-xl">
          404 Error
        </div>

        <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-7xl">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Page Not Found
          </span>
        </h1>

        <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg">
          The requested page does not exist or has been moved to a new route.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton className="inline-flex">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_26px_rgba(56,189,248,0.35)]"
            >
              <FaHome />
              Return Home
            </Link>
          </MagneticButton>

          <MagneticButton className="inline-flex">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <FaFolderOpen />
              Explore Projects
            </Link>
          </MagneticButton>
        </div>
      </Motion.div>
    </main>
  );
}
