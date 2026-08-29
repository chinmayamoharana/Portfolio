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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app-shell text-black dark:text-white transition-colors duration-500">
      <ScrollToTop />
      <GlobalEffects />
      <div className="app-content">
        <Navbar />

        <Suspense fallback={<main className="min-h-screen px-6 py-28 text-white" />}>
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
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}
