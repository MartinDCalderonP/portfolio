import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Card from "../Card";
import { SocialIcons, IconButton } from "./styles";

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
      <motion.h1
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hi!, my name is Martín Calderón
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        I'm a Front End Developer from Argentina 🇦🇷
      </motion.h2>

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
