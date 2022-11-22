import { useState } from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import Presentation from "components/Presentation";
import AboutMe from "components/AboutMe";
import Projects from "components/Projects";
import TechStack from "components/TechStack";
import { Container } from "./styles";

const Home = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      <Head>
        <title>Martín Calderón | Portfolio</title>
        <meta
          name="description"
          content="Martín Calderón's portfolio. Front End Developer"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Navbar activeItem={activeItem} handleItemClick={handleItemClick} />
      <Container>
        {activeItem === "Home" && <Presentation />}
        {activeItem === "About Me" && <AboutMe />}
        {activeItem === "Projects" && <Projects />}
        {activeItem === "Tech Stack" && <TechStack />}
      </Container>
    </>
  );
};

export default Home;
