import { useState } from 'react'
import { Container, List, ListItem, Underline } from './styles'

interface INavbar {
  items: string[]
}

const Navbar = ({ items }: INavbar) => {
  const [hoveredItem, setHoveredItem] = useState<string>('')

  const handleItemClick = (item: string) => {
    const element = document.getElementById(item.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container>
      <List>
        {items?.map((item) => (
          <ListItem
            key={item}
            onClick={() => handleItemClick(item)}
            onHoverEnd={() => setHoveredItem('')}
            onHoverStart={() => setHoveredItem(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}

            {hoveredItem === item && (
              <Underline
                animate={{ width: '100%' }}
                className='underline'
                initial={{ width: '0%' }}
                transition={{ duration: 0.2, type: 'spring', stiffness: 120 }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Navbar
