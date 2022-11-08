import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Presentation />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
