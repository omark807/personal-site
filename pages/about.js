import { Container, Heading, Link,  ListItem, UnorderedList} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

/**
 * Contains information about my background and some personal interests. 
 */
const AboutMe = () => (
    <Layout title="More about me! ">
        <Container>
            <Heading as="h3" fontsize={20} mb={4}>
                About Me
            </Heading>
            <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        who am i?
                    </Heading>
                    <Paragraph>I graduated from the University of Illinois Urbana-Champaign (UIUC) with a Bachelor of Science in <Link href='https://cs.illinois.edu/academics/undergraduate/degree-program-options/cs-x-degree-programs/computer-science-crop-sciences' target='_blank'> Computer Science 
                        + Crop Sciences</Link>, an interdisciplinary program that brings the strengths of the <Link href='https://cs.illinois.edu/' target='_blank'> Department of Computer Science </Link> and the
                        <Link href='https://cropsciences.illinois.edu/' target='_blank'> Department of Crop Sciences</Link> at UIUC. My drive to pursue this intersection began with my interests in computing and 
                        sustainability, wanting to create more environmentally conscious technological solutions to the world&apos;s most complex issues. 
                    </Paragraph>

                    <br></br>

                    <Paragraph> 
                        <Paragraph>While these interests definitely remain intact, through research experiences in each of my departments, my interests have shifted broadly towards human-computer interaction (HCI). Specifically, I frequently question 
                        the extent to which current technological paradigms promote accessibility, whether these experiences <i>also</i> consider security/privacy, and how users feel about these experiences. I am also interested in ways that security and privacy 
                        topics are portrayed in popular media and the impact these depictions on yougner audiences (kids and teens).
                    </Paragraph>

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
                        <ListItem>Coffee</ListItem>
                        <ListItem>Reading (current read is <Link href='https://www.goodreads.com/en/book/show/56238004-the-good-lie' target='_blank'> 
                        <i>The Good Lie </i></Link> by A.R. Torre; recently read <Link href='https://www.goodreads.com/en/book/show/52149789-the-best-of-friends' target='_blank'> 
                        <i>The Best of Friends </i></Link> by Lucinda Berry)</ListItem>
                        <ListItem>Cooking</ListItem>
                        <ListItem>Writing</ListItem>
                        <ListItem>Anything outdoorsy!</ListItem>
                    </UnorderedList>
                </Paragraph>
            </Section>
        </Container>
    </Layout>

) 

export default AboutMe