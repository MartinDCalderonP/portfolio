import { ReactNode } from 'react'
import { Container, TitleUnderline } from './styles'

interface ICard {
  children: ReactNode;
  title?: string;
}

const Card = ({ children, title }: ICard) => {
  return (
    <Container
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      {title && (
        <>
          <h1>{title}</h1>

          <TitleUnderline />
        </>
      )}

      {children}
    </Container>
  )
}

export default Card
