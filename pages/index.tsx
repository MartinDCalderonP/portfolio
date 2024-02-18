import { useState } from 'react'
import Head from 'next/head'
import Navbar from 'components/Navbar'
import Presentation from 'components/Presentation'
import AboutMe from 'components/AboutMe'
import Projects from 'components/Projects'
import TechStack from 'components/TechStack'
import ArrowButton from 'components/ArrowButton'
import Footer from 'components/Footer'
import styled from '@emotion/styled'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  background-color: #fefcf3;
`

const items = ['Home', 'About Me', 'Projects', 'Tech Stack']

const Home = () => {
  const [activeItem, setActiveItem] = useState<string>('Home')

  const handleItemClick = (item: string) => {
    setActiveItem(item)
  }

  const handleLeftArrowClick = () => {
    const currentIndex = items.indexOf(activeItem)
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
    const nextItem = items[nextIndex]

    setActiveItem(nextItem)
  }

  const handleRightArrowClick = () => {
    const currentIndex = items.indexOf(activeItem)
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1
    const nextItem = items[nextIndex]

    setActiveItem(nextItem)
  }

  return (
    <>
      <Head>
        <title>Martín Calderón | Portfolio</title>
        <meta
          name='description'
          content="Martín Calderón's portfolio. Full Stack Developer"
        />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>

      <Navbar
        activeItem={activeItem}
        handleItemClick={handleItemClick}
        items={items}
      />

      <MainContainer>
        <ArrowButton direction='left' onClick={handleLeftArrowClick} />

        {activeItem === 'Home' && <Presentation />}
        {activeItem === 'About Me' && <AboutMe />}
        {activeItem === 'Projects' && <Projects />}
        {activeItem === 'Tech Stack' && <TechStack />}

        <ArrowButton direction='right' onClick={handleRightArrowClick} />
      </MainContainer>

      <Footer />
    </>
  )
}

export default Home
