import { useState } from "react";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { Container } from "./styles";

const Home = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      <Navbar activeItem={activeItem} handleItemClick={handleItemClick} />
      <Container>
        {activeItem === "Home" && <Presentation />}
        {activeItem === "About Me" && <AboutMe />}
        {activeItem === "Projects" && <Projects />}
        {activeItem === "Skills" && <Skills />}
        {activeItem === "Contact" && <Contact />}
      </Container>
    </>
  );
};

export default Home;
