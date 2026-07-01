import { useMemo, useState } from 'react'
import { Heading, SimpleGrid, HStack, Text, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { WorkGridItem } from '../components/grid-item'

const focusOptions = [
  { id: 'all', label: 'All' },
  { id: 'ux', label: 'UX research-focused' },
  { id: 'product', label: 'Product-focused' },
  { id: 'academic', label: 'Academic-facing' },
]

const projects = [
  {
    id: 'quartz',
    title: 'QUARTZ',
    thumbnail: '/images/quartz_logo.png',
    role: 'lead',
    tags: ['UX Research', 'Accessibility', 'Product', 'Academic'],
    focuses: ['ux', 'product', 'academic'],
    metadata: ['Interviews · co-design · usability evaluation'],
    description:
      'Co-designing qualitative visualization tools with BLV researchers through multimodal interactions and design guidelines informed by user studies.',
  },
  {
    id: 'dmh',
    title: 'Digital Mental Health & BLV',
    thumbnail: '/images/dmh.png',
    role: 'lead',
    tags: ['UX Research', 'Accessibility', 'Product'],
    focuses: ['ux', 'product'],
    metadata: ['Interviews · surveys · need-finding'],
    description:
      'Interviewed BLV users about digital mental health tracking and surfaced design recommendations grounded in what participants actually needed from these tools.',
  },
  {
    id: 'maidr',
    title: 'MAIDR',
    thumbnail: '/images/maidr_logo.svg',
    role: 'collaborator',
    tags: ['Design Research', 'Accessibility', 'Product', 'Academic'],
    focuses: ['ux', 'product', 'academic'],
    metadata: ['7 BLV participants · within-subjects study · mixed methods'],
    description:
      'Explored non-visual interpretation of statistical charts with BLV participants.',
  },
]

const Projects = () => {
  const [activeFocus, setActiveFocus] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeFocus === 'all') return projects
    return projects.filter((project) => project.focuses.includes(activeFocus))
  }, [activeFocus])

  return (
    <Layout title="Projects" canonicalPath="/projects">
        <Heading as="h1" variant="section-title" mb={4}>
          UX Research Projects
        </Heading>
        <Paragraph>
          Three case studies with blind and low-vision participants — methods, outcomes, and reflections.
        </Paragraph>
        <Text mb={3} fontSize="sm">
          Show by focus:
        </Text>
        <HStack spacing={2} flexWrap="wrap" mb={6} role="group" aria-label="Project focus filters">
          {focusOptions.map((option) => (
            <Button
              key={option.id}
              size="sm"
              onClick={() => setActiveFocus(option.id)}
              variant={activeFocus === option.id ? 'brand' : 'ghost'}
              aria-pressed={activeFocus === option.id}
            >
              {option.label}
            </Button>
          ))}
        </HStack>

        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          {filteredProjects.map((project, index) => (
            <Section key={project.id} delay={0.1 * (index + 1)}>
              <WorkGridItem
                id={project.id}
                title={project.title}
                thumbnail={project.thumbnail}
                role={project.role}
                metadata={project.metadata}
              >
                {project.description}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>

        {filteredProjects.length === 0 && (
          <Text mt={6} fontSize="sm">
            No projects match this focus yet.
          </Text>
        )}
    </Layout>
  )
}

export default Projects
