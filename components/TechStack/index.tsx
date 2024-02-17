import Card from 'components/Card'
import { Container, Column, Row, TechCard, LogoImage } from './styles'
import { sortedTechsByItemYears } from './utils'

const TechStack = () => {
  return (
    <Card title='Tech Stack'>
      <Container>
        {sortedTechsByItemYears?.map(({ title, items }) => (
          <Column key={title}>
            <h2>{title}</h2>

            <Row>
              {items?.map(({ name, image, years }) => (
                <TechCard key={name} whileHover={{ scale: 1.1 }}>
                  {image && <LogoImage src={image} alt={name} loading='lazy' />}

                  <p>{name}</p>

                  <span>
                    {years} exp year{years > 1 && 's'}
                  </span>
                </TechCard>
              ))}
            </Row>
          </Column>
        ))}
      </Container>
    </Card>
  )
}

export default TechStack
