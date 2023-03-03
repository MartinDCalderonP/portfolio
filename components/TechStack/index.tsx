import Card from "components/Card";
import { Container, Column, Row, TechCard, LogoImage } from "./styles";

const today = new Date();

const techs = [
  {
    title: "Frontend",
    items: [
      {
        name: "HTML 5",
        image: "https://img.icons8.com/color/48/000000/html-5--v1.png",
        years: today.getFullYear() - 2019,
      },
      {
        name: "CSS 3",
        image: "https://img.icons8.com/color/48/000000/css3.png",
        years: today.getFullYear() - 2019,
      },
      {
        name: "SASS",
        image: "https://img.icons8.com/color/48/000000/sass.png",
        years: today.getFullYear() - 2020,
      },
      {
        name: "JavaScript",
        image: "https://img.icons8.com/color/48/000000/javascript--v1.png",
        years: today.getFullYear() - 2019,
      },
      {
        name: "TypeScript",
        image: "https://img.icons8.com/color/48/000000/typescript.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "React",
        image: "https://img.icons8.com/color/48/000000/react-native.png",
        years: today.getFullYear() - 2020,
      },
      {
        name: "React Native",
        image: "https://img.icons8.com/color/48/000000/react-native.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "Next.js",
        image:
          "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "Gatsby",
        image:
          "https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "JestJS",
        image: "https://jestjs.io/img/jest.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "React Testing Library",
        image: "https://testing-library.com/img/octopus-128x128.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "Emotion",
        image:
          "https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png",
        years: today.getFullYear() - 2022,
      },
      {
        name: "Tailwind CSS",
        image:
          "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
        years: today.getFullYear() - 2021,
      },
      {
        name: "Java",
        image:
          "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
        years: today.getFullYear() - 2019,
      },
      {
        name: "Python",
        image: "https://img.icons8.com/color/48/000000/python--v1.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "Django",
        image: "https://img.icons8.com/color/48/000000/django.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "Vue",
        image: "https://img.icons8.com/color/48/000000/vue-js.png",
        years: today.getFullYear() - 2021,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        image: "https://img.icons8.com/color/48/000000/nodejs.png",
        years: today.getFullYear() - 2020,
      },
      {
        name: "Express",
        image: "https://img.icons8.com/color/48/000000/express.png",
        years: today.getFullYear() - 2020,
      },
      {
        name: "MongoDB",
        image: "https://img.icons8.com/color/48/000000/mongodb.png",
        years: today.getFullYear() - 2020,
      },
      {
        name: "MySQL",
        image: "https://img.icons8.com/color/48/000000/mysql-logo.png",
        years: today.getFullYear() - 2019,
      },
      {
        name: "SQL",
        image: "https://img.icons8.com/color/48/000000/sql.png",
        years: today.getFullYear() - 2019,
      },
      {
        name: "GraphQL",
        image: "https://img.icons8.com/color/48/000000/graphql.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "Apollo",
        image: "https://img.icons8.com/color/48/000000/apollo.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "Firebase",
        image: "https://img.icons8.com/color/48/000000/firebase.png",
        years: today.getFullYear() - 2021,
      },
      {
        name: "AWS",
        image: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
        years: today.getFullYear() - 2020,
      },
    ],
  },
];

const TechStack = () => {
  return (
    <Card title="Tech Stack">
      <Container>
        {techs?.map(({ title, items }) => (
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
