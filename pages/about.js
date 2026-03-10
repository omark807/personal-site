import { Container, Heading, Link, ListItem, Grid, GridItem, List, ListIcon } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { StarIcon, EditIcon, RepeatClockIcon, DownloadIcon, SunIcon, ChevronUpIcon, ChevronRightIcon } from '@chakra-ui/icons'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const aboutMarkdown = `
I am a PhD candidate in Computer Science at the University of Illinois Urbana-Champaign (UIUC), focusing on research at the intersection of human-computer interaction (HCI), AI, and accessibility. I am fortunate to be advised by [Dr. JooYoung Seo](http://jooyoungseo.me/) and work in the [(x)Ability Design Lab](https://xabilitylab.ischool.illinois.edu/). My research investigates co-designing qualitative data visualizations with blind and low-vision (BLV) communities, enabling them to independently analyze qualitative visualizations through multimodal interactions and evidence-backed design guidance. I also have interests in human-centered design in a broad range of contexts, which you should check out in the [Research](/research) section of my site.

Prior to my PhD, I graduated from UIUC with a Bachelor of Science in [Computer Science + Crop Sciences](https://cs.illinois.edu/academics/undergraduate/degree-program-options/cs-x-degree-programs/computer-science-crop-sciences), an interdisciplinary program that brings the strengths of the [Siebel School of Computing and Data Science](https://cs.illinois.edu/) and the [Department of Crop Sciences](https://cropsciences.illinois.edu/). My drive to pursue this intersection began with my interests in computing and sustainability, wanting to create more environmentally conscious technological solutions to the world's most complex issues, and through a whirlwind of experiences, opportunities, and random happenings, I found myself doing what I do now (read more about that in this [blog post](/blog/my-pathway-to-ux-research)).  

While my interests in sustainability and computing remain, research opportunities throughout my undergraduate studies accompanied with my positionality gradually shifted my interests towards HCI. I became increasingly excited in the ways in which humans and technology co-exist and interact with each other, and how these interactions can and **should** be made more equitable and accessible. Fast-forward to today, I find myself often lost in thought about humanity's boundless potential to craft positively impactful digital experiences. This is especially important given the amount of division that exists in our society today.

There are so many ways this division has already been tackled, and continues to be addressed as you read this/as we speak/as we exist! As for what I find especially interesting, I find myself thinking a *lot* about gaps in accessible and equitable design throughout the world, specifically for underrepresented communities. I ask myself:

- Who gets to participate in designing the tools that shape how we work and learn?
- When technology is built "for everyone," who is actually imagined as the user? 
- How do we build systems that augment what people *can* do, rather than assuming what they *can't* do?


To answer these questions, my research aims to:

- **Collaborate** with community stakeholders to gather firsthand, lived experiences
- **Co-design** novel interaction possibilities and design recommendations
- **Craft** systems that positively enhance their users' lives, iteratively making adjustments and improvements
`

const AboutMe = () => (
    <Layout title="More about me! ">
        <Container>
            <Section delay={0.1}>
                <Heading as="h1" variant="section-title">
                    hi there!
                </Heading>

                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        p: ({ _node, ...props }) => <Paragraph {...props} />,
                        a: ({ _node, ...props }) => (
                            <Link isExternal {...props} />
                        ),
                        ul: ({ _node, ...props }) => (
                            <ul style={{ paddingLeft: '1.2em', marginBottom: '1em' }} {...props} />
                        )
                    }}
                >
                    {aboutMarkdown}
                </ReactMarkdown>

            </Section>

            <Section>
                <Heading as="h2" variant="section-title">
                    non-academic interests
                </Heading>

                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <GridItem>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={RepeatClockIcon} color="orange.500" />
                                Fitness
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ChevronUpIcon} color="purple.500" />
                                Cat parenting
                            </ListItem>
                            <ListItem>
                                <ListIcon as={StarIcon} color="brown.500" />
                                Coffee
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ChevronRightIcon} color="blue.500" />
                                Reading (<Link href='https://www.goodreads.com/user/show/143290931-omar-khan' target='_blank' rel="noopener noreferrer" aria-label="Visit Omar Khan's GoodReads profile (opens in new tab)">
                                    GoodReads profile</Link> for past and current reads)
                            </ListItem>
                        </List>
                    </GridItem>
                    <GridItem>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={SunIcon} color="yellow.500" />
                                Anything outdoors!
                            </ListItem>
                            <ListItem>
                                <ListIcon as={EditIcon} color="gray.500" />
                                Writing (conveying my love of parenthetical afterthoughts)
                            </ListItem>
                            <ListItem>
                                <ListIcon as={DownloadIcon} color="red.500" />
                                Gaming (especially Nintendo games)
                            </ListItem>
                            <ListItem>
                                <ListIcon as={StarIcon} color="green.500" />
                                Cooking
                            </ListItem>
                        </List>
                    </GridItem>
                </Grid>
            </Section>
        </Container>
    </Layout>

)

export default AboutMe