import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #9cc3d5ff;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

export const ListItem = styled(motion.li)`
  margin-right: 1rem;
  cursor: pointer;
`;

export const Underline = styled(motion.div)`
  height: 3px;
  background-color: #000;
  bottom: -5px;
  left: 0;
  right: 0;
`;
