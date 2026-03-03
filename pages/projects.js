import { useMemo, useState } from 'react'
import { Container, Heading, SimpleGrid, HStack, Text, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

/**
 * Page where users can find information about personal projects I have done.
 * @returns a page showing links to personal projects I have done
 */
const focusOptions = [
    { id: 'all', label: 'All', colorScheme: 'orange' },
    { id: 'ux', label: 'UX research-focused', colorScheme: 'purple' },
    { id: 'product', label: 'Product-focused', colorScheme: 'green' },
    { id: 'academic', label: 'Academic-facing', colorScheme: 'blue' }
]

const projects = [
    {
        id: 'quartz',
        title: 'QUARTZ',
        thumbnail: '/images/quartz_logo.png',
        role: 'lead',
        tags: ['UX Research', 'Accessibility', 'Product', 'Academic'],
        focuses: ['ux', 'product', 'academic'],
        description:
            'Enabled BLV researchers to independently analyze qualitative visualizations through co-designed multimodal interactions and evidence-backed design guidance.'
    },
    {
        id: 'dmh',
        title: 'Digital Mental Health & BLV',
        thumbnail: '/images/dmh.png',
        role: 'lead',
        tags: ['UX Research', 'Accessibility', 'Product'],
        focuses: ['ux', 'product'],
        description:
            'Clarified unmet needs in digital mental health tracking and translated BLV community insights into actionable product and design recommendations.'
    },
    {
        id: 'maidr',
        title: 'MAIDR',
        thumbnail: '/images/maidr_logo.svg',
        role: 'collaborator',
        tags: ['Design Research', 'Accessibility', 'Product', 'Academic'],
        focuses: ['ux', 'product', 'academic'],
        description:
            'Improved access to statistical visualizations via multimodal representation and usability findings that informed MAIDR&apos;s R/Python framework.'
    }
]

const Works = () => {
    const [activeFocus, setActiveFocus] = useState('all')

    const filteredProjects = useMemo(() => {
        if (activeFocus === 'all') return projects
        return projects.filter(project => project.focuses.includes(activeFocus))
    }, [activeFocus])

    return (
        <Layout title="Projects">
            <Container>
                <Heading as="h1" fontSize={24} mb={6}>
                    UX Research Projects
                </Heading>
                <Text mb={3} fontSize="sm">
                    Show by focus:
                </Text>
                <HStack spacing={2} flexWrap="wrap" mb={6} role="group" aria-label="Project focus filters">
                    {focusOptions.map(option => (
                        <Button
                            key={option.id}
                            size="sm"
                            onClick={() => setActiveFocus(option.id)}
                            colorScheme={option.colorScheme}
                            variant={activeFocus === option.id ? 'solid' : 'ghost'}
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
                                tags={project.tags}
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
            </Container>
        </Layout>
    )
}

export default Works
