import Card from "components/Card";
import { motion } from "framer-motion";
import { Container } from "./styles";

const texts = [
  "I'm a Front End Developer with a passion for building web applications and learning new technologies. 📖",
  "I've working experience with React since September 2021 and I'm looking for a new challenge. 🚀",
  "I've also worked with Next, Gatsby, Emotion, Styled Components, Tailwind and other technologies. 👨🏽‍💻",
  "My hobbies include reading, playing with my two cats, cooking and watching movies. 🎞",
  "I know Spanish, English, Portuguese and a little bit of French. 🌎",
  "I was born in Buenos Aires and I love my city. 🇦🇷",
];

const AboutMe = () => {
  return (
    <Card title="About Me">
      <Container>
        {texts?.map((text) => (
          <motion.p
            key={text}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
              translateX: 5,
            }}
          >
            {text}
          </motion.p>
        ))}
      </Container>
    </Card>
  );
};

export default AboutMe;
