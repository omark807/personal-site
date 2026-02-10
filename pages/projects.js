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
                    <WorkGridItem id="quartz" title="QUARTZ" thumbnail="/images/quartz_logo.png" role="lead">
                        User research, co-design, and usability testing with BLV practitioners; qualitative analysis and actionable design guidelines for accessible qualitative visualization.
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="dmh" title="Digital Mental Health & BLV" thumbnail="/images/dmh.png" role="lead">
                        User interviews and need-finding with the blind community; translating research into actionable insights for inclusive digital mental health products.
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="maidr" title="MAIDR" thumbnail="/images/maidr_logo.svg" role="collaborator">
                        Needs assessment, co-design, and usability testing with BLV participants; insights driving an accessible R/Python visualization framework.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
