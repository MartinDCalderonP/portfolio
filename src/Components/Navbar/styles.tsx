import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
  background-color: #f5ebe0;
  z-index: 100;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`

export const ListItem = styled(motion.li)`
  margin-right: 1rem;
  cursor: pointer;
`

export const Underline = styled(motion.div)`
  height: 0.188rem;
  background-color: #000;
  bottom: -0.313rem;
  left: 0;
  right: 0;
`
