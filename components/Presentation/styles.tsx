import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SocialIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

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
`;
