import { useState } from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import Presentation from "components/Presentation";
import AboutMe from "components/AboutMe";
import Projects from "components/Projects";
import TechStack from "components/TechStack";
import ArrowButton from "components/ArrowButton";
import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  background-color: #fefcf3;
`;

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

      <MainContainer>
        <ArrowButton direction="left" />
        {activeItem === "Home" && <Presentation />}
        {activeItem === "About Me" && <AboutMe />}
        {activeItem === "Projects" && <Projects />}
        {activeItem === "Tech Stack" && <TechStack />}
        <ArrowButton direction="right" />
      </MainContainer>
    </>
  );
};

export default Home;
