import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled.nav`
  align-items: center;
  background-color: #f5ebe0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  left: 0;
  min-height: 4.375rem;
  padding: 0.5rem 2rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`

export const List = styled.ul`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
  list-style: none;
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
