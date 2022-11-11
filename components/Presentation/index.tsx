import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Card from "../Card";
import { TypingH1, TypingH2, SocialIcons, IconButton } from "./styles";

const icons = [
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/mart%C3%ADn-calder%C3%B3n/",
  },
  {
    name: "GitHub",
    icon: <FiGithub />,
    link: "https://github.com/MartinDCalderonP",
  },
  {
    name: "Email",
    icon: <FiMail />,
    link: "mailto:martincalderon92@outlook.com",
  },
];

const Presentation = () => {
  return (
    <Card>
      <TypingH1>Hi! My name is Martín Calderón</TypingH1>

      <TypingH2>I'm a Front End Developer from Argentina 🇦🇷</TypingH2>

      <SocialIcons
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {icons?.map((icon) => (
          <IconButton
            key={icon.name}
            href={icon.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {icon.icon}
          </IconButton>
        ))}
      </SocialIcons>
    </Card>
  );
};

export default Presentation;
