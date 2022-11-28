import Image from "next/image";
import { FiGithub, FiLink } from "react-icons/fi";
import Card from "components/Card";
import Portfolio from "images/portfolio.png";
import IMDBApp from "images/imdb-app.png";
import YouTubeClone from "images/youtube-clone.png";
import GoogleClone from "images/google-clone.png";
import {
  Container,
  Description,
  GitHubLink,
  LinkButton,
  LinksContainer,
  MoreProjects,
  Picture,
  ProjectCard,
  Tags,
} from "./styles";

const projects = [
  {
    title: "Portfolio",
    description:
      "This is the portofolio you're currently seeing. It's built with Next.js, TypeScript and Emotion. It's also hosted on Vercel.",
    image: Portfolio,
    tags: ["Next.js", "TypeScript", "Emotion", "Vercel"],
    repoUrl: "https://github.com/MartinDCalderonP/portfolio",
    deployUrl: "https://portfolio-martindcalderonp.vercel.app/",
  },
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

        <MoreProjects>
          You can find more projects on my{" "}
          <GitHubLink
            href="https://github.com/MartinDCalderonP?tab=repositories"
            
          >
            GitHub
          </GitHubLink>{" "}
          repository.
        </MoreProjects>
      </Container>
    </Card>
  );
};

export default Projects;
