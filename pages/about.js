import { Heading, Link, ListItem, Grid, GridItem, List, ListIcon, Box, Flex, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import PageNav from '../components/page-nav'
import { StarIcon, EditIcon, RepeatClockIcon, DownloadIcon, SunIcon, ChevronUpIcon, ChevronRightIcon, CheckCircleIcon } from '@chakra-ui/icons'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// import { AVAILABILITY, PROOF_POINTS } from '../lib/site'

const aboutMarkdown = `
I am a PhD candidate in Computer Science at the University of Illinois Urbana-Champaign (UIUC), focusing on research at the intersection of human-computer interaction (HCI), AI, and accessibility. I am fortunate to be advised by [Dr. JooYoung Seo](http://jooyoungseo.me/) and work in the [(x)Ability Design Lab](https://xabilitylab.ischool.illinois.edu/). My research investigates co-designing qualitative data visualizations with blind and low-vision (BLV) communities, enabling them to independently analyze qualitative visualizations through multimodal interactions and evidence-backed design guidance. I also have interests in human-centered design in a broad range of contexts, which you should check out in the [Research](/research) section of my site.

Prior to my PhD, I graduated from UIUC with a Bachelor of Science in [Computer Science + Crop Sciences](https://cs.illinois.edu/academics/undergraduate/degree-program-options/cs-x-degree-programs/computer-science-crop-sciences), an interdisciplinary program that brings the strengths of the [Siebel School of Computing and Data Science](https://cs.illinois.edu/) and the [Department of Crop Sciences](https://cropsciences.illinois.edu/). My drive to pursue this intersection began with my interests in computing and sustainability, wanting to create more environmentally conscious technological solutions to the world's most complex issues, and through a whirlwind of experiences, opportunities, and random happenings, I found myself doing what I do now.

While my interests in sustainability and computing remain, research opportunities throughout my undergraduate studies accompanied with my positionality gradually shifted my interests towards HCI. I became increasingly excited in the ways in which humans and technology co-exist and interact with each other, and how these interactions can and **should** be made more equitable and accessible. Fast-forward to today, I find myself often lost in thought about humanity's boundless potential to craft positively impactful digital experiences. This is especially important given the amount of division that exists in our society today.

There are so many ways this division has already been tackled, and continues to be addressed as you read this/as we speak/as we exist! As for what I find especially interesting, I find myself thinking a *lot* about gaps in accessible and equitable design throughout the world, specifically for underrepresented communities.

To answer these questions, my research aims to:

- **Collaborate** with community stakeholders to gather firsthand, lived experiences
- **Co-design** novel interaction possibilities and design recommendations
- **Craft** systems that positively enhance their users' lives, iteratively making adjustments and improvements
`

const sections = [
  { id: 'hi-there', label: 'Hi there!' },
  { id: 'research-agenda', label: 'Research agenda' },
  { id: 'non-academic-interests', label: 'Interests' },
]

const MarkdownLink = ({ href, children, ...props }) => {
  const isInternal = href?.startsWith('/')
  if (isInternal) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <Link href={href} isExternal {...props}>
      {children}
    </Link>
  )
}

const AboutMe = () => (
  <Layout title="About" canonicalPath="/about">
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
        <PageNav sections={sections} />
        <Box flex={1} minW={0}>
          <Section delay={0.1}>
            <Heading as="h1" id="hi-there" variant="section-title">
              Hi there!
            </Heading>

            {/* <Box
              mb={6}
              p={4}
              borderWidth="1px"
              borderColor="border.default"
              borderRadius="lg"
            > */}
              {/* <Text fontWeight="medium" mb={2}>
                I&apos;m a mixed-methods HCI researcher who builds and evaluates
                accessible AI systems with and for blind and low-vision
                communities.
              </Text> */}
              {/* <List spacing={2} mb={2} aria-label="Highlights">
                {PROOF_POINTS.map((point) => (
                  <ListItem key={point} display="flex" alignItems="flex-start">
                    <ListIcon as={CheckCircleIcon} color="brand.600" mt={1} aria-hidden="true" />
                    <Text as="span">{point}</Text>
                  </ListItem>
                ))}
              </List> */}
              {/* <Text fontSize="sm" color="text.muted">
                {AVAILABILITY}
              </Text> */}
            {/* </Box> */}

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ _node, ...props }) => <Paragraph {...props} />,
                a: MarkdownLink,
                ul: ({ _node, ...props }) => (
                  <ul style={{ paddingLeft: '1.2em', marginBottom: '1em' }} {...props} />
                ),
              }}
            >
              {aboutMarkdown}
            </ReactMarkdown>

            <Paragraph>
              For more personal writing, I share thoughts on my{' '}
              <Link href="https://substack.com/@winterydaphne" isExternal>
                Substack
              </Link>
              .
            </Paragraph>
          </Section>

          <Section>
            <Heading as="h2" id="research-agenda" variant="section-title">
              Research agenda
            </Heading>
            <Paragraph>
              My work centers on accessible research and product ecosystems with and for blind and
              low-vision communities. I ask:
            </Paragraph>
            <List spacing={3} styleType="disc" pl={6} mb={4}>
              <ListItem>
                Who gets to participate in designing the tools that shape how we work and learn?
              </ListItem>
              <ListItem>
                When technology is built &quot;for everyone,&quot; who is actually imagined as the user?
              </ListItem>
              <ListItem>
                How do we build systems that augment what people <i>can</i> do, rather than
                assuming what they <i>can&apos;t</i> do?
              </ListItem>
            </List>
            <Paragraph>
              See <Link href="/research">publications</Link> and{' '}
              <Link href="/projects">case studies</Link> for how these questions show up in my
              current projects.
            </Paragraph>
          </Section>

          <Section>
            <Heading as="h2" id="non-academic-interests" variant="section-title">
              Non-academic interests
            </Heading>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              <GridItem>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={RepeatClockIcon} color="brand.600" />
                    Fitness
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronUpIcon} color="accent.500" />
                    Cat parenting
                  </ListItem>
                  <ListItem>
                    <ListIcon as={StarIcon} color="brand.500" />
                    Coffee
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="accent.600" />
                    Reading (
                    <Link
                      href="https://www.goodreads.com/user/show/143290931-omar-khan"
                      isExternal
                      aria-label="Visit Omar Khan's GoodReads profile (opens in new tab)"
                    >
                      GoodReads profile
                    </Link>{' '}
                    for past and current reads)
                  </ListItem>
                </List>
              </GridItem>
              <GridItem>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={SunIcon} color="accent.400" />
                    Anything outdoors!
                  </ListItem>
                  <ListItem>
                    <ListIcon as={EditIcon} color="brand.700" />
                    Writing (conveying my love of parenthetical afterthoughts)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={DownloadIcon} color="accent.500" />
                    Gaming (especially Nintendo games)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={StarIcon} color="brand.600" />
                    Cooking
                  </ListItem>
                </List>
              </GridItem>
            </Grid>
          </Section>
        </Box>
      </Flex>
  </Layout>
)

export default AboutMe
