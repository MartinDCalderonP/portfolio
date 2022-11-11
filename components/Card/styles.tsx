import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #9cc3d5ff;
  min-height: 80%;
  height: fit-content;
  width: 90%;
  border-radius: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;
  margin-top: 5rem;
  background-image: linear-gradient(
    30deg,
    #00929cff 25%,
    #9cc3d5ff 40%,
    #9cc3d5ff 60%,
    #00929cff 75%,
    #00929cff
  );
`;

export const TitleUnderline = styled.div`
  width: 100%;
  height: 2px;
  background-color: #00539cff;
`;
