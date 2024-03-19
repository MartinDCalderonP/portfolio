import Section from '@/Components/Section'
import { Container, Column, Row, TechCard, LogoImage } from './styles'
import { sortedTechsByItemYears } from './utils'

const TechStack = () => {
  return (
    <Section title='Tech Stack'>
      <Container>
        {sortedTechsByItemYears?.map(({ title, items }) => (
          <Column key={title}>
            <h2>{title}</h2>

            <Row>
              {items?.map(({ name, image, year }) => (
                <TechCard key={name} whileHover={{ scale: 1.1 }}>
                  {image && <LogoImage src={image} alt={name} loading='lazy' />}

                  <p>{name}</p>

                  <span>
                    {year} exp year{year > 1 && 's'}
                  </span>
                </TechCard>
              ))}
            </Row>
          </Column>
        ))}
      </Container>
    </Section>
  )
}

export default TechStack
