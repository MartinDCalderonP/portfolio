import Card from "../Card";
import { Container, TitleUnderline } from "./styles";

const texts = [
  "I'm a Front End Developer with a passion for building web applications and learning new technologies. 📖",
  "I've been working with React since September 2021. I've also worked with Next, Gatsby, Styled Components, Tailwind and other technologies. 👨🏽‍💻",
  "My hobbies include reading, playing with my two cats, cooking and watching movies. 🎞",
  "I know Spanish, English, Portuguese and a little bit of French. 🌎",
  "I was born in Buenos Aires and I love my city. 🇦🇷",
];

const AboutMe = () => {
  return (
    <Card>
      <Container>
        <h1>About Me</h1>
        <TitleUnderline />
        {texts?.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Container>
    </Card>
  );
};

export default AboutMe;
