import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education/>
      <Skills />
      <Experience />

      <Projects />
      <Contact />
    </>
  );
}
