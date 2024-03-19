import Section from '@/Components/Section'
import { MainTitle, TypingText, SocialIcons, IconButton } from './styles'
import { socialIcons } from './socialIcons'

const Presentation = () => {
  return (
    <Section>
      <MainTitle>Hi! My name is Martín Calderón</MainTitle>

      <TypingText>{"I'm a Full Stack Developer from Argentina 🇦🇷"}</TypingText>

      <SocialIcons
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {socialIcons?.map((icon) => (
          <IconButton
            key={icon.name}
            aria-label={`Go to ${icon.name} profile`}
            href={icon.link}
            rel='noreferrer'
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {icon.icon}
          </IconButton>
        ))}
      </SocialIcons>
    </Section>
  )
}

export default Presentation
