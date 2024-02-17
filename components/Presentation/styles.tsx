import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const TypingText = `
  display: block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid;

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: black }
  }

  @media (width < 48rem) {
    animation: none;
    border-right: none;
    overflow: visible;
    white-space: normal;
    text-align: center;
  }
`

export const TypingH1 = styled(motion.h1)`
  ${TypingText}
  animation: typingh1 2s steps(30, end), blink-caret 0.75s step-end infinite;

  @keyframes typingh1 {
    from {
      width: 0;
    }
    to {
      width: 24ch;
    }
  }
`

export const TypingH2 = styled(motion.h2)`
  ${TypingText}
  animation: typingh2 2s steps(30, end), blink-caret 0.75s step-end infinite;

  @keyframes typingh2 {
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #00539cff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  cursor: pointer;
`
