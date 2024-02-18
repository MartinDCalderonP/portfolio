import { Container } from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <p>© Martín Calderón {currentYear}. All rights reserved</p>
    </Container>
  )
}

export default Footer
