import Card from "components/Card";
import { Container, Column, Row, TechCard, LogoImage } from "./styles";

const tech = [
  {
    title: "Frontend",
    items: [
      {
        name: "HTML 5",
        image: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      },
      {
        name: "CSS 3",
        image: "https://img.icons8.com/color/48/000000/css3.png",
      },
      {
        name: "SASS",
        image: "https://img.icons8.com/color/48/000000/sass.png",
      },
      {
        name: "JavaScript",
        image: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      },
      {
        name: "TypeScript",
        image: "https://img.icons8.com/color/48/000000/typescript.png",
      },
      {
        name: "React",
        image: "https://img.icons8.com/color/48/000000/react-native.png",
      },
      {
        name: "Next.js",
        image:
          "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
      },
      {
        name: "Gatsby",
        image:
          "https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png",
      },
      {
        name: "Emotion",
        image:
          "https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png",
      },
      {
        name: "Styled Components",
        image: "https://styled-components.com/atom.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        image: "https://img.icons8.com/color/48/000000/nodejs.png",
      },
      {
        name: "Express",
        image: "https://img.icons8.com/color/48/000000/express.png",
      },
      {
        name: "MongoDB",
        image: "https://img.icons8.com/color/48/000000/mongodb.png",
      },
      {
        name: "MySQL",
        image: "https://img.icons8.com/color/48/000000/mysql-logo.png",
      },
      {
        name: "GraphQL",
        image: "https://img.icons8.com/color/48/000000/graphql.png",
      },
      {
        name: "Apollo",
        image: "https://img.icons8.com/color/48/000000/apollo.png",
      },
      {
        name: "Firebase",
        image: "https://img.icons8.com/color/48/000000/firebase.png",
      },
      {
        name: "AWS",
        image: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
      },
    ],
  },
];

const TechStack = () => {
  return (
    <Card title="Tech Stack">
      <Container>
        {tech?.map(({ title, items }) => (
          <Column key={title}>
            <h2>{title}</h2>

            <Row>
              {items?.map(({ name, image }) => (
                <TechCard key={name} whileHover={{ scale: 1.1 }}>
                  {image && <LogoImage src={image} alt={name} />}

                  <p>{name}</p>
                </TechCard>
              ))}
            </Row>
          </Column>
        ))}
      </Container>
    </Card>
  );
};

export default TechStack;
