import { useState } from "react";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { Container, Card } from "./styles";

const Home = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      <Navbar activeItem={activeItem} handleItemClick={handleItemClick} />
      <Container>
        <Card
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {activeItem === "Home" && <Presentation />}
          {activeItem === "About Me" && <AboutMe />}
          {activeItem === "Projects" && <Projects />}
          {activeItem === "Skills" && <Skills />}
          {activeItem === "Contact" && <Contact />}
        </Card>
      </Container>
    </>
  );
};

export default Home;
