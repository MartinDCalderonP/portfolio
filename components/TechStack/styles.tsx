import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1.5rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const MiniCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid #00539cff;
  padding-top: 1.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #9cc3d5ff;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;
