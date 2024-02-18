import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5ebe0;
  min-height: 80vh;
  height: fit-content;
  width: 90%;
  border: 0.063rem solid #dba39a;
  border-radius: 2rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.75);
  padding: 1rem;
  margin: 2rem 1rem 1rem;
`

export const TitleUnderline = styled.div`
  width: 100%;
  height: 0.125rem;
  background-color: #dba39a;
`
