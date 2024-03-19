import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  min-height: 80vh;
  padding-top: 3.5rem;
`

export const TitleUnderline = styled.div`
  width: 100%;
  height: 0.125rem;
  background-color: #dba39a;
`
