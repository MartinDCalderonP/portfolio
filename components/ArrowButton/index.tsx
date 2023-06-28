import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Button } from './styles'

type Direction = 'left' | 'right';

interface IArrowButton {
  direction: Direction;
  onClick?: () => void;
}

const ArrowButton = ({ direction, onClick }: IArrowButton) => {
  return (
    <Button
      direction={direction}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {direction === 'left' && <BiChevronLeft size={28} />}
      {direction === 'right' && <BiChevronRight size={28} />}
    </Button>
  )
}

export default ArrowButton
