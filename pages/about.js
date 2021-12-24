import { Container, Heading, List, ListItem, OrderedList, SimpleGrid, UnorderedList, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'



//ToDo: Finish editing these into displaying top projects. Possible custom API to pull info
const AboutMe = () => (
    <Layout title="AboutMe">
        <Container>
            <Heading as="h3" fontsize={20} mb={4}>
                About Me
            </Heading>

            <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        who am i?
                    </Heading>
                    <Paragraph>I am one of the first graduates from the University of Illinois at Urbana-Champaign (UIUC) with a B.S in Computer Science 
                        + Crop Sciences, an interdisciplinary program that brings the strengths of the Department of Computer Science and the
                        Department of Crop Sciences at UIUC. I am currently applying to Ph.D. programs in Computer Science, hoping to focus on user inteface design
                        that addresses accessibility, particularly for those with disabilities (especially visual impairments), as well as affective 
                        computing, wanting to understand the emotions that are generated as a result of inadequate interface design. 
                    </Paragraph>

                    <Paragraph>
                        My passions for this area of resarch come from my own lived experiences with assistive technologies as someone with low vision,
                        wanting to make the digital world more accessible to all. It will also allow the physical world to be more accessible as well, 
                        unlcoking new possibilities for us to interact with it. 
                    </Paragraph>
             
            </Section>

            <Section>
                    <Heading as="h3" variant="section-title">
                        non-academic interests
                    </Heading>
                <Paragraph>
                    I also enjoy...
                    <UnorderedList>
                        <ListItem>Fitness</ListItem>
                        <ListItem>Reading (current read is The Best of Friends by Lucinda Berry)</ListItem>
                        <ListItem>Cooking</ListItem>
                        <ListItem>Sweaters</ListItem>
                    </UnorderedList>
              
                </Paragraph>
            </Section>

           


        </Container>
    </Layout>
)

export default AboutMe