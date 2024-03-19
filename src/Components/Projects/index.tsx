import Image from 'next/image'
import { FiGithub, FiLink } from 'react-icons/fi'
import Section from '@/Components/Section'
import {
  Container,
  Description,
  GitHubLink,
  LinkButton,
  LinksContainer,
  MoreProjects,
  Picture,
  ProjectCard,
  Tags
} from './styles'
import { projects } from './projects'

const Projects = () => {
  return (
    <Section title='Projects'>
      <Container>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <p>{project.title}</p>

            <Picture>
              <Image alt={project.title} src={project.image} loading='lazy' />
            </Picture>

            <Description>{project.description}</Description>

            <Tags>{project.tags.join(', ')}</Tags>

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
          You can find more projects on my{' '}
          <GitHubLink href='https://github.com/MartinDCalderonP?tab=repositories'>
            GitHub
          </GitHubLink>{' '}
          repository.
        </MoreProjects>
      </Container>
    </Section>
  )
}

export default Projects
