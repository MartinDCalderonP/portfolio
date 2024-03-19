'use client'
import Navbar from '@/Components/Navbar'
import Presentation from '@/Components/Presentation'
import AboutMe from '@/Components/AboutMe'
import Projects from '@/Components/Projects'
import TechStack from '@/Components/TechStack'
import { MainContainer } from './styles'

const items = ['Home', 'About Me', 'Projects', 'Tech Stack']

const Home = () => {
  return (
    <>
      <Navbar items={items} />

      <MainContainer>
        <Presentation />
        <AboutMe />
        <Projects />
        <TechStack />
      </MainContainer>
    </>
  )
}

export default Home
