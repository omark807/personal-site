import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Box,
  Link,
} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Digital Mental Health & BLV">
    <Container as="main" maxW="container.md">
      <Title>
        Digital Mental Health (DMH) <Badge>Project</Badge>
      </Title>
      <WorkImage src="/images/dmh.png" alt="Digital mental health and accessibility" />

      <Box as="section" aria-labelledby="dmh-project" mt={4}>
        <Heading as="h2" id="dmh-project" size="md" mb={3}>
          Project
        </Heading>
        <P>
          <strong>My role:</strong> Lead researcher. <strong>Collaborator:</strong> JooYoung Seo, University of Illinois Urbana-Champaign. <strong>Scope:</strong> Need-finding research to understand how blind and low-vision (BLV) individuals experience digital mental health (DMH) tracking tools (e.g., mood, habits, wellness) and what they need from accessible DMH products. I led study design, recruitment, interviews, analysis, and translation of findings into recommendations for product and design.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-objective" mt={6}>
        <Heading as="h2" id="dmh-objective" size="md" mb={3}>
          Objective
        </Heading>
        <P>
          Digital mental health apps (for mood tracking, meditation, journaling,
          and self-care) are increasingly common, but many rely on visual
          interfaces, charts, and interactions that are inaccessible to blind
          and low-vision users. As one participant put it, &quot;sighted people
          have their pick of the litter.&quot; The goal was to define the
          problem space and research questions so that design and product teams
          could build more inclusive DMH tracking services.
        </P>
        <Heading as="h3" size="sm" mt={3} mb={2}>
          Research questions
        </Heading>
        <List as="ol" listStyleType="decimal" pl={6} spacing={2}>
          <ListItem>What do BLV individuals need from digital mental health tracking services?</ListItem>
          <ListItem>What barriers do they face with existing DMH tools, and how can research and design better include them?</ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="dmh-work" mt={6}>
        <Heading as="h2" id="dmh-work" size="md" mb={3}>
          Work
        </Heading>
        <P>
          I conducted research <strong>with and for</strong> the blind
          community using interviews and need-finding to capture lived
          experiences, barriers, and desired features in digital mental health
          tools. Analysis centered on community perspectives to produce
          actionable recommendations for more inclusive design and future
          development of accessible DMH tracking services.
        </P>
        <P mt={2}>
          <strong>Methods:</strong> User interviews and surveys with BLV participants; need-finding and problem definition; synthesis into personas/segments and evidence-based recommendations for product and design. Collaboration with academic advisor and community stakeholders throughout.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-result" mt={6}>
        <Heading as="h2" id="dmh-result" size="md" mb={3}>
          End result
        </Heading>
        <Heading as="h3" size="sm" mb={2}>
          Insights &amp; recommendations
        </Heading>
        <P mb={2}>
          Key findings and recommendations were synthesized and communicated in a CHI EA &apos;25 paper and supporting materials, informing how product and design teams can prioritize accessibility and inclusivity in DMH tracking features (e.g., screen reader support, non-visual feedback, reduced reliance on charts).
        </P>
        <Heading as="h3" size="sm" mb={2}>
          Impact
        </Heading>
        <P>
          The work surfaces unmet needs in an underserved domain and provides evidence-based direction for building DMH tools that support mental health access for BLV users. It demonstrates how need-finding with affected communities can directly shape product and design priorities.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-reflection" mt={6}>
        <Heading as="h2" id="dmh-reflection" size="md" mb={3}>
          Reflection
        </Heading>
        <P>
          Leading this project underscored how much product teams assume a sighted user by default. If I were to do it again, I would run a short diary study alongside interviews to capture in-the-moment barriers and pair the work with a lightweight design sprint to turn top recommendations into concrete design concepts for stakeholders.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-ux-skills" mt={6}>
        <Heading as="h2" id="dmh-ux-skills" size="md" mb={3}>
          Research skills demonstrated
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={1}>
          <ListItem>User interviews and surveys with underserved populations</ListItem>
          <ListItem>Need-finding and problem definition</ListItem>
          <ListItem>Synthesis into personas and evidence-based recommendations</ListItem>
          <ListItem>Translating research into actionable product and design insights</ListItem>
          <ListItem>Stakeholder collaboration throughout</ListItem>
        </List>
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
          Methods
        </Heading>
        <P>
          User interviews and surveys, need-finding, persona and segment understanding, actionable insights for product and design, stakeholder collaboration.
        </P>
      </Box>
    </Container>
  </Layout>
)

export default Project
