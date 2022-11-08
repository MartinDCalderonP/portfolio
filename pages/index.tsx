import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
