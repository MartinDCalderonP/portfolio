import { useState } from "react";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      <Navbar activeItem={activeItem} handleItemClick={handleItemClick} />
      <Presentation />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
