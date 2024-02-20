'use client'
import { useState } from 'react'
import Navbar from '@/Components/Navbar'
import Presentation from '@/Components/Presentation'
import AboutMe from '@/Components/AboutMe'
import Projects from '@/Components/Projects'
import TechStack from '@/Components/TechStack'
import ArrowButton from '@/Components/ArrowButton'
import { MainContainer } from './styles'

const items = ['Home', 'About Me', 'Projects', 'Tech Stack']

const Home = () => {
  const [activeItem, setActiveItem] = useState<(typeof items)[number]>(items[0])

  const handleItemClick = (item: string) => setActiveItem(item)

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
    </>
  )
}

export default Home
