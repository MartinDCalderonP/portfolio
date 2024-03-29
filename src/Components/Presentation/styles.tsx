import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const MainTitle = styled(motion.h1)`
  text-align: center;
`

export const TypingText = styled(motion.h2)`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid;

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }

  @media (width < 48rem) {
    animation: none;
    border-right: none;
    overflow: visible;
    white-space: normal;
    text-align: center;
  }

  animation: typing 2s steps(30, end), blink-caret 0.75s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 34ch;
    }
  }
`

export const SocialIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`

export const IconButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0.063rem solid #00539cff;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  margin: 0 0.625rem;
  cursor: pointer;
`
