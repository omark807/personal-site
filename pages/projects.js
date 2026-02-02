import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

/**
 * Page where users can find information about personal projects I have done.
 * @returns a page showing links to personal projects I have done
 */
const Works = () => (
    <Layout title="Projects">
        <Container>
            <Heading as="h1" fontSize={24} mb={6}>
                UX Research Projects
            </Heading>

            <SimpleGrid columns={[1, 1, 3]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem id="quartz" title="QUARTZ" thumbnail="/images/quartz_logo.png">
                        A qualitative research tool for analyzing and visualizing thematic structures in interview and survey data.
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="maidr" title="MAIDR" thumbnail="/images/maidr_logo.svg">
                        An R package and framework for making data visualizations more accessible through multiple representation modalities.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works