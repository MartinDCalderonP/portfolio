import { ReactNode } from "react";
import { Container } from "./styles";

interface ICard {
  children: ReactNode;
}

const Card = ({ children }: ICard) => {
  return (
    <Container
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </Container>
  );
};

export default Card;
