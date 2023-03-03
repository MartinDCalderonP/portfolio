import Card from "components/Card";
import { motion } from "framer-motion";
import { Container } from "./styles";

const texts = [
  "I'm a Full Stack Developer with a passion for building web applications and learning new technologies. 📖",
  "I've working experience with React since August 2020 and I'm looking for a new challenge. 🚀",
  "I've also worked with Next, Gatsby, Node, Express, SQL, MongoDB, Emotion, Tailwind CSS and other technologies. 👨🏽‍💻",
  "My hobbies include reading, playing with my two cats, cooking and watching movies. 🎞",
  "I know Spanish (Native), English (C2), Portuguese (Intermediate) and French (Basic). 🌎",
  "I was born in Buenos Aires and I love my city. 🇦🇷",
];

const AboutMe = () => {
  const whileHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
    translateX: 5,
  };

  return (
    <Card title="About Me">
      <Container>
        {texts?.map((text) => (
          <motion.p key={text} whileHover={whileHover}>
            {text}
          </motion.p>
        ))}
      </Container>
    </Card>
  );
};

export default AboutMe;
