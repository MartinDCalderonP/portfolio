import Image from "next/image";
import { FiGithub, FiLink } from "react-icons/fi";
import Card from "../Card";
import BoardGames from "../../images/board-games.png";
import GoogleClone from "../../images/google-clone.png";
import YouTubeClone from "../../images/youtube-clone.png";
import IMDBApp from "../../images/imdb-app.png";
import {
  Container,
  Description,
  LinkButton,
  LinksContainer,
  Picture,
  ProjectCard,
  Tags,
} from "./styles";

const projects = [
  {
    title: "IMDB App",
    description:
      "A IMDB app that allows you to search for movies and tv shows. It uses the OMDB API to fetch the data.",
    image: IMDBApp,
    tags: [
      "React",
      "TypeScript",
      "Custom Hooks",
      "Context API",
      "ESLint",
      "SASS Modules",
      "Jest",
      "Mock Service Worker",
    ],
    repoUrl: "https://github.com/MartinDCalderonP/imdb-app-final-project",
    deployUrl: "https://imdb-app-final-project.vercel.app/",
  },
  {
    title: "YouTube Clone",
    description:
      "A YouTube clone that allows you to search for videos. It uses the YouTube API to fetch the data.",
    image: YouTubeClone,
    tags: ["React", "Material UI", "Custom Hooks", "Context API", "Firebase"],
    repoUrl: "https://github.com/MartinDCalderonP/YouTube-Clone",
    deployUrl: "https://clone-6c8d2.web.app/",
  },
  {
    title: "Google Clone",
    description:
      "A Google clone that allows you to search for anything. It uses the Google API to fetch the data.",
    image: GoogleClone,
    tags: ["React", "SASS Modules", "Custom Hooks", "Context API", "Firebase"],
    repoUrl: "https://github.com/MartinDCalderonP/Google-Clone",
    deployUrl: "https://clone-d3b31.web.app/",
  },
  {
    title: "Board Games",
    description:
      "A Board Games app where you can play Tic Tac Toe and a Memory game",
    image: BoardGames,
    tags: ["React", "SASS", "Custom Hooks", "TypeScript"],
    repoUrl: "https://github.com/MartinDCalderonP/board-games-week-07",
    deployUrl: "https://board-games-week-07.vercel.app/",
  },
];

const Projects = () => {
  return (
    <Card title="Projects">
      <Container>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <p>{project.title}</p>

            <Picture>
              <Image alt={project.title} src={project.image} />
            </Picture>

            <Description>{project.description}</Description>

            <Tags>{project.tags.join(", ")}</Tags>

            <LinksContainer>
              <LinkButton
                href={project.deployUrl}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLink />
              </LinkButton>

              <LinkButton
                href={project.repoUrl}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </LinkButton>
            </LinksContainer>
          </ProjectCard>
        ))}
      </Container>
    </Card>
  );
};

export default Projects;
