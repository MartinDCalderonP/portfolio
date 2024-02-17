import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  gap: 1.5rem;

  @media (width < 48rem) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (width < 48rem) {
    width: 100%;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`

export const TechCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 9.375rem;
  width: 9.375rem;
  height: fit-content;
  border-radius: 0.625rem;
  border: 0.063rem solid #dba39a;
  padding: 1rem 0.5rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.5);
  background-color: #f0dbdb;

  @media (width < 48rem) {
    width: 7.813rem;
    height: 7.813rem;
    padding-top: 0.75rem;
  }
`

export const LogoImage = styled.img`
  width: 3.125rem;
  height: 3.125rem;
`
