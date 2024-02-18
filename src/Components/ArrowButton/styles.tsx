import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Button = styled(motion.button)<{ direction: string }>`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0 1.5rem;
  padding: 0;
  position: absolute;
  top: 50%;
  z-index: 1;
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}

  @media (width < 64rem) {
    margin: 0;
  }
`
