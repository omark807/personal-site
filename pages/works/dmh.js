import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Box,
  Link,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Digital Mental Health & BLV">
    <Container as="main" maxW="container.md">
      <Title>
        Digital Mental Health (DMH) <Badge>Project</Badge>
      </Title>
      <WorkImage src="/images/dmh.png" alt="Digital mental health and accessibility" />

      <P>
        This project investigates the need for <strong>digital mental health
        (DMH) tracking services</strong> that are designed with and for the
        blind and low-vision (BLV) community. While sighted users have many
        options for tracking mood, habits, and wellness, BLV users often find
        these tools inaccessible or poorly suited to their needs. Our work
        unpacks these gaps and advocates for DMH tools that support mental
        health access and inclusivity for blind and low-vision individuals.
      </P>

      <Box as="section" aria-labelledby="dmh-problem" mt={6}>
        <Heading as="h2" id="dmh-problem" size="md" mb={3}>
          The problem
        </Heading>
        <P>
          Digital mental health apps (for mood tracking, meditation, journaling,
          and self-care) are increasingly common, but many rely on visual
          interfaces, charts, and interactions that are inaccessible to blind
          and low-vision users. As one participant put it, &quot;sighted people
          have their pick of the litter.&quot; This project explores what BLV
          individuals need from DMH tracking services and how design and
          research can better include them.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-approach" mt={6}>
        <Heading as="h2" id="dmh-approach" size="md" mb={3}>
          Approach
        </Heading>
        <P>
          We conducted research <strong>with and for</strong> the blind
          community to understand lived experiences, barriers, and desired
          features in digital mental health tools. The work centers community
          perspectives to inform more inclusive design and future development of
          accessible DMH tracking services.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-ux-skills" mt={6}>
        <Heading as="h2" id="dmh-ux-skills" size="md" mb={3}>
          Research skills demonstrated
        </Heading>
        <P>
          This project showcases skills that UX research hiring managers value:
          <strong> user research and interviews</strong> with blind and
          low-vision individuals to uncover needs and barriers; <strong>need-finding
          and problem definition</strong> in an underserved domain; <strong>translating
          research into actionable insights</strong> and recommendations for
          inclusive product and design; and <strong>collaboration</strong> with an
          academic advisor and community stakeholders. The work demonstrates
          critical thinking about accessibility and equity in digital health
          and the ability to drive impact through evidence-based recommendations.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-publications" mt={6}>
        <Heading as="h2" id="dmh-publications" size="md" mb={3}>
          Publication
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={2}>
          <ListItem>
            <Link
              href="https://dl.acm.org/doi/10.1145/3706599.3719817"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CHI EA 2025 paper on digital mental health tracking (opens in new tab)"
            >
              CHI EA &apos;25: Unpacking the need for DMH tracking services with
              and for the blind community [DOI]
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://arxiv.org/abs/2503.07415"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="arXiv preprint for digital mental health tracking paper (opens in new tab)"
            >
              arXiv preprint
            </Link>
          </ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="dmh-meta" mt={6}>
        <Heading as="h2" id="dmh-meta" size="md" mb={3}>
          Project details
        </Heading>
        <List spacing={2}>
          <ListItem>
            <Meta>Lead</Meta>
            Omar Khan
          </ListItem>
          <ListItem>
            <Meta>Collaborator</Meta>
            JooYoung Seo, University of Illinois Urbana-Champaign
          </ListItem>
          <ListItem>
            <Meta>Methods</Meta>
            User interviews &amp; surveys, need-finding, persona/segment
            understanding, actionable insights for product &amp; design,
            stakeholder collaboration
          </ListItem>
        </List>
      </Box>
    </Container>
  </Layout>
)

export default Project
