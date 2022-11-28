import Card from "components/Card";
import { Container, Column, Row, TechCard, LogoImage } from "./styles";

const tech = [
  {
    title: "Frontend",
    items: [
      {
        name: "HTML 5",
        image: "https://img.icons8.com/color/48/000000/html-5--v1.png",
        years: 3,
      },
      {
        name: "CSS 3",
        image: "https://img.icons8.com/color/48/000000/css3.png",
        years: 3,
      },
      {
        name: "SASS",
        image: "https://img.icons8.com/color/48/000000/sass.png",
        years: 1,
      },
      {
        name: "JavaScript",
        image: "https://img.icons8.com/color/48/000000/javascript--v1.png",
        years: 3,
      },
      {
        name: "TypeScript",
        image: "https://img.icons8.com/color/48/000000/typescript.png",
        years: 1,
      },
      {
        name: "React",
        image: "https://img.icons8.com/color/48/000000/react-native.png",
        years: 2,
      },
      {
        name: "Next.js",
        image:
          "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
        years: 1,
      },
      {
        name: "Gatsby",
        image:
          "https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png",
        years: 1,
      },
      {
        name: "Emotion",
        image:
          "https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png",
        years: 1,
      },
      {
        name: "Styled Components",
        image: "https://styled-components.com/atom.png",
        years: 1,
      },
      {
        name: "Tailwind CSS",
        image:
          "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
        years: 1,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        image: "https://img.icons8.com/color/48/000000/nodejs.png",
        years: 2,
      },
      {
        name: "Express",
        image: "https://img.icons8.com/color/48/000000/express.png",
        years: 2,
      },
      {
        name: "MongoDB",
        image: "https://img.icons8.com/color/48/000000/mongodb.png",
        years: 2,
      },
      {
        name: "MySQL",
        image: "https://img.icons8.com/color/48/000000/mysql-logo.png",
        years: 3,
      },
      {
        name: "GraphQL",
        image: "https://img.icons8.com/color/48/000000/graphql.png",
        years: 1,
      },
      {
        name: "Apollo",
        image: "https://img.icons8.com/color/48/000000/apollo.png",
        years: 1,
      },
      {
        name: "Firebase",
        image: "https://img.icons8.com/color/48/000000/firebase.png",
        years: 1,
      },
      {
        name: "AWS",
        image: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
        years: 1,
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
              {items?.map(({ name, image, years }) => (
                <TechCard key={name} whileHover={{ scale: 1.1 }}>
                  {image && <LogoImage src={image} alt={name} />}

                  <p>{name}</p>

                  <span>
                    {years} exp year{years > 1 && "s"}
                  </span>
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
