import { Container, Heading, Link,  ListItem, Text,  UnorderedList} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'



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
                    <Paragraph>I am one of the first graduates from the University of Illinois at Urbana-Champaign (UIUC) with a Bachelor of Science in <Link href='https://cs.illinois.edu/academics/undergraduate/degree-program-options/cs-x-degree-programs/computer-science-crop-sciences' target='_blank'> Computer Science 
                        + Crop Sciences</Link>, an interdisciplinary program that brings the strengths of the <Link href='https://cs.illinois.edu/' target='_blank'> Department of Computer Science </Link> and the
                        <Link href='https://cropsciences.illinois.edu/' target='_blank'> Department of Crop Sciences</Link> at UIUC. My drive to pursue this intersection began with my interests in computing and 
                        sustainability, wanting to create technological solutions to the world's most prominent issues that are cognizant of the environment. 
                    </Paragraph>

                    <Paragraph> While these interests definitely remain intact, through research experiences in each of my departments, my interests have shifted towards about human-computer interaction at large. Specifically, I care a lot 
                        about making technology (and in particular user interfaces) accessible to all, especially those with disabilities (e.g., visual impairments), as well as identifying the underlying emotions associated with poor interface design through
                        identifying what elements of current interface design and the design procfess in general neglect the needs of this population, as well as other historically underrepresented communities.
                        It is far too often the case that digital experiences cannot be enjoyed by everyone, and my goals as a researcher is to challenge the way we think about interface design in any software we create, understanding that the best designs 
                        are those that are inclusive and adaptive to a user's needs. This was also motivat4ed by my own lived experiences with assistive technologies as someone with 
                        low vision, experiencing firsthand the indequacies with current accessibility technologies. 
                        <Paragraph>
                        </Paragraph>
                        I believe we can achieve greater accessibility through two distinct, but feasible methods: co-design (creating technologies with those that will be using them) and virtual agents 
                        (intelligent software/agents that aim to understand more about what makes your experiences the way they are).
                    </Paragraph>
             
            </Section>

            <Section>
                    <Heading as="h3" variant="section-title">
                        non-academic interests
                    </Heading>
                <Paragraph>
                    Some other things I enjoy...
                    <UnorderedList>
                        <ListItem>Fitness</ListItem>
                        <ListItem>Reading (current read is <Link href='https://www.goodreads.com/en/book/show/56238004-the-good-lie' target='_blank'> 
                        <i>The Good Lie </i></Link> by A.R. Torre; recently read <Link href='https://www.goodreads.com/en/book/show/52149789-the-best-of-friends' target='_blank'> 
                        <i>The Best of Friends </i></Link> by Lucinda Berry)</ListItem>
                        <ListItem>Cooking (esepcially breakfast foods!)</ListItem>
                        <ListItem>Sweaters</ListItem>
                    </UnorderedList>
              
                </Paragraph>
            </Section>

        </Container>
    </Layout>
)

export default AboutMe