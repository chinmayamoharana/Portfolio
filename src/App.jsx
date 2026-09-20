import "./App.css";
import { Suspense, useEffect, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalEffects from "./components/GlobalEffects";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Blogs = lazy(() => import("./components/Blogs"));
const ProjectCaseStudy = lazy(() => import("./components/ProjectCaseStudy"));
const NotFound = lazy(() => import("./components/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function PageLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-28 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-400/20 border-t-cyan-400" />
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Loading module...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell text-slate-100 transition-colors duration-500">
      <ScrollToTop />
      <GlobalEffects />
      <div className="app-content">
        <Navbar />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

