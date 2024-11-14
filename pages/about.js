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
            {/* <Heading as="h3" fontsize={20} mb={4}>
                About Me
            </Heading> */}
            <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        hi there!
                    </Heading>
                    <Paragraph>I graduated from the University of Illinois Urbana-Champaign (UIUC) with a Bachelor of Science in <Link href='https://cs.illinois.edu/academics/undergraduate/degree-program-options/cs-x-degree-programs/computer-science-crop-sciences' target='_blank'> Computer Science 
                        + Crop Sciences</Link>, an interdisciplinary program that brings the strengths of the <Link href='https://cs.illinois.edu/' target='_blank'> Department of Computer Science </Link> and the
                        <Link href='https://cropsciences.illinois.edu/' target='_blank'> Department of Crop Sciences</Link> at UIUC. My drive to pursue this intersection began with my interests in computing and 
                        sustainability, wanting to create more environmentally conscious technological solutions to the world&apos;s most complex issues. 
                    </Paragraph>

                    <br></br>

                    <Paragraph> 
                            While these interests still exist, research experiences throughout my undergraduate studies accompanied with my positionality gradually shifted my interests towards human-computer interaction (HCI).
                            I became increasingly excited in the ways in which humans and technology co-exist and interact with each other, and fast-forward to today, I find myself often lost in thought about humanity&apos;s boundless potential
                            to craft positively impactful digital experiences.  
                    </Paragraph>

                    <br></br>

                    <Paragraph>And there&apos;s so many ways this has already been done, and continues to be done as you read this/as we speak/as we exist! 
                            As for what I find especially interesting, I find myself thinking a <i>lot</i> about gaps in mental health access and support throughout the world, 
                            specifically for underrepresented communities. While technology rapidly evolves to offer new strategies to manage our health&apos;s multi-faceted nature, 
                            recurring setbacks remain in <b>accessibility</b> and <b>inclusivity</b>. My research investigates and aims to address these gaps by: 
                    </Paragraph>

                    <br></br>

                    <Paragraph>
                        <UnorderedList>
                                <ListItem><b>Collaborating</b> with community stakeholders to gather firsthand, lived experiences</ListItem>
                                <ListItem><b>Co-designing</b> novel interaction possibilities</ListItem>
                                <ListItem><b>Crafting</b> systems that positively enhance their users&apos; lives, iteratively making adjustments and improvements</ListItem>
                        </UnorderedList>
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
                        <ListItem>Cat parenting</ListItem>
                        <ListItem>Coffee</ListItem>
                        <ListItem>Reading (my <Link href='https://www.goodreads.com/user/show/143290931-omar-khan' target='_blank'> 
                            GoodReads profile</Link> for past and current reads)</ListItem>
                        <ListItem>Cooking</ListItem>
                        <ListItem>Writing (conveying my love of parenthical afterthoughts)</ListItem>
                        <ListItem>Gaming (especially Nintendo games)</ListItem>
                        <ListItem>Anything outdoors!</ListItem>
                    </UnorderedList>
                </Paragraph>
            </Section>
        </Container>
    </Layout>

) 

export default AboutMe