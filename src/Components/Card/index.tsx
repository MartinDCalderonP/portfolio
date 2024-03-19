import { ReactNode } from 'react'
import { Container, TitleUnderline } from './styles'

interface CardProps {
  children: ReactNode
  title?: string
}

const Card = ({ children, title }: CardProps) => {
  const currentId = title ? title.toLowerCase() : 'home'

  return (
    <Container
      id={currentId}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.25, type: 'spring', stiffness: 100 }}
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
