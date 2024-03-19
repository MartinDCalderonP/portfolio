import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`

export const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 31.25rem;
  padding: 1rem;
  border-radius: 0.625rem;
  border: 0.063rem solid #dba39a;
  padding: 1rem 2rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.5);
  background-color: #f0dbdb;
`

export const Picture = styled(motion.picture)`
  width: 100%;
  height: 10rem;
  border-radius: 0.625rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Description = styled(motion.p)`
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem 0;
  text-align: center;
`

export const Tags = styled(motion.p)`
  font-size: 0.8rem;
  font-weight: 300;
  max-width: 80%;
`

export const LinksContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`

export const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  border: 0.063rem solid #dba39a;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.5);
  background-color: #f0dbdb;
  cursor: pointer;
  text-decoration: none;
`

export const MoreProjects = styled(motion.p)`
  font-size: 1rem;
  font-weight: 500;
  margin: 2rem 0 0;
  text-align: center;
`

export const GitHubLink = styled(motion.a)`
  opacity: 0.75;
`
