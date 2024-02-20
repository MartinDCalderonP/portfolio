import { Container } from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <p>© Martín Calderón {currentYear}.</p>
    </Container>
  )
}

export default Footer
