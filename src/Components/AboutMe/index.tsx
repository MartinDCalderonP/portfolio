import Section from '@/Components/Section'
import { motion } from 'framer-motion'
import { Container } from './styles'
import { lines } from './lines'

const AboutMe = () => {
  const whileHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
    translateX: 5
  }

  return (
    <Section title='About Me'>
      <Container>
        {lines?.map((line) => (
          <motion.p key={line} whileHover={whileHover}>
            {line}
          </motion.p>
        ))}
      </Container>
    </Section>
  )
}

export default AboutMe
