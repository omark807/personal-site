import NextLink from 'next/link'
import {
  List,
  ListItem,
  Heading,
  Box,
  Flex,
  Link,
} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import PageNav from '../../components/page-nav'

const sections = [
  { id: 'dmh-glance', label: 'At a glance' },
  { id: 'dmh-summary', label: 'Summary' },
  { id: 'dmh-project', label: 'Project' },
  { id: 'dmh-objective', label: 'Objective' },
  { id: 'dmh-work', label: 'Work' },
  { id: 'dmh-result', label: 'End result' },
  { id: 'dmh-reflection', label: 'Reflection' },
  { id: 'dmh-ux-skills', label: 'Skills' },
  { id: 'dmh-resources', label: 'Resources' },
  { id: 'dmh-meta', label: 'Methods' },
]

const Project = () => (
  <Layout title="Digital Mental Health & BLV" canonicalPath="/works/dmh">
    <Box as="main">
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
      <PageNav sections={sections} />
      <Box flex={1} minW={0}>
      <Title>Digital Mental Health (DMH)</Title>
      <WorkImage src="/images/dmh.png" alt="Digital mental health and accessibility" />

      <Box as="section" aria-labelledby="dmh-glance" mt={4}>
        <Heading as="h2" id="dmh-glance" variant="section-title">
          At a glance
        </Heading>
        <List spacing={2}>
          <ListItem><strong>Role:</strong> Lead researcher</ListItem>
          <ListItem><strong>Collaborator:</strong> JooYoung Seo (UIUC)</ListItem>
          <ListItem><strong>Methods:</strong> Explanatory sequential mixed methods — survey (n=93, Kruskal-Wallis) followed by semi-structured interviews (n=10)</ListItem>
          <ListItem><strong>Tools and outputs:</strong> CHI EA and ASSETS publications, arXiv preprint, design recommendations for inclusive DMH products</ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="dmh-summary" mt={6}>
        <Heading as="h2" id="dmh-summary" variant="section-title">
          Summary
        </Heading>
        <P>
          This project investigates how digital mental health tools exclude blind and low-vision users and what inclusive alternatives should look like. As lead researcher, I ran an explanatory sequential mixed-methods study — a survey of 93 BLV respondents (analyzed with Kruskal-Wallis tests) to establish where experiences diverged, followed by 10 semi-structured interviews to explain why — and turned the combined evidence into recommendations teams can use to design accessible DMH products.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-project" mt={4}>
        <Heading as="h2" id="dmh-project" variant="section-title">
          Project
        </Heading>
        <P>
          <strong>My role:</strong> Lead researcher. <strong>Collaborator:</strong> JooYoung Seo, University of Illinois Urbana-Champaign. <strong>Scope:</strong> A mixed-methods study of how blind and low-vision (BLV) individuals experience digital mental health (DMH) tracking tools (e.g., mood, habits, wellness) and what they need from accessible DMH products. I led study design, recruitment, the survey and its statistical analysis, the interviews, integration of the two strands, and translation of findings into recommendations for product and design.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-objective" mt={6}>
        <Heading as="h2" id="dmh-objective" variant="section-title">
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
        <Heading as="h2" id="dmh-work" variant="section-title">
          Work
        </Heading>
        <P>
          I ran the study <strong>with and for</strong> the blind community in
          two connected phases:
        </P>
        <List as="ol" listStyleType="decimal" pl={6} mt={2} spacing={1}>
          <ListItem>
            <strong>Quantitative phase.</strong> A survey of 93 BLV respondents
            about their use of and barriers with DMH tracking tools. I used
            Kruskal-Wallis tests to identify where responses differed
            significantly across groups, which pinpointed the barriers worth
            explaining in depth.
          </ListItem>
          <ListItem>
            <strong>Qualitative phase.</strong> 10 semi-structured interviews,
            sampled to follow up on the survey signals, to capture lived
            experiences and the &quot;why&quot; behind the numbers, analyzed
            with reflexive thematic analysis.
          </ListItem>
        </List>
        <P mt={2}>
          <strong>Methods:</strong> Explanatory sequential mixed methods; survey
          design and non-parametric analysis (Kruskal-Wallis); semi-structured
          interviews and reflexive thematic analysis; integration of quant and
          qual strands into evidence-based recommendations for product and
          design. Collaboration with academic advisor and community stakeholders
          throughout.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-result" mt={6}>
        <Heading as="h2" id="dmh-result" variant="section-title">
          End result
        </Heading>
        <Heading as="h3" size="sm" mb={2}>
          Insights &amp; recommendations
        </Heading>
        <P mb={2}>
          The survey established statistically distinct patterns in how BLV users
          experience DMH tools, and the interviews explained them — pointing to
          concrete design priorities like screen reader support, non-visual
          feedback for tracking and progress, and reduced reliance on charts.
          Findings were published as a CHI EA &apos;25 late-breaking work and a
          fuller ASSETS 2026 paper.
        </P>
        <Heading as="h3" size="sm" mb={2}>
          Impact
        </Heading>
        <P>
          Pairing quantitative signal with qualitative explanation gives product
          and design teams both the &quot;how many / how much&quot; and the
          &quot;why&quot; they need to prioritize accessibility work in an
          underserved domain. The study also demonstrates independent
          mixed-methods capability — survey design, non-parametric statistics,
          and qualitative integration — not qualitative research alone.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-reflection" mt={6}>
        <Heading as="h2" id="dmh-reflection" variant="section-title">
          Reflection
        </Heading>
        <P>
          Leading this project underscored how much product teams assume a sighted user by default. If I were to do it again, I would run a short diary study alongside interviews to capture in-the-moment barriers and pair the work with a lightweight design sprint to turn top recommendations into concrete design concepts for stakeholders.
        </P>
      </Box>

      <Box as="section" aria-labelledby="dmh-ux-skills" mt={6}>
        <Heading as="h2" id="dmh-ux-skills" variant="section-title">
          Research skills demonstrated
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={1}>
          <ListItem>Explanatory sequential mixed-methods study design</ListItem>
          <ListItem>Survey design and quantitative analysis (non-parametric / Kruskal-Wallis)</ListItem>
          <ListItem>Semi-structured interviews and reflexive thematic analysis</ListItem>
          <ListItem>Integration of quantitative and qualitative strands into evidence-based recommendations</ListItem>
          <ListItem>Stakeholder collaboration throughout</ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="dmh-resources" mt={6}>
        <Heading as="h2" id="dmh-resources" variant="section-title">
          Resources
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={2}>
          <ListItem>
            <Link as={NextLink} href="/research">
              Full bibliography: [P3] CHI EA 2025 · [C6] ASSETS 2026 (to appear)
            </Link>
          </ListItem>
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
        <Heading as="h2" id="dmh-meta" variant="section-title">
          Methods
        </Heading>
        <P>
          Explanatory sequential mixed methods: survey design and non-parametric analysis (Kruskal-Wallis), semi-structured interviews and reflexive thematic analysis, integration of quantitative and qualitative findings into product and design recommendations, stakeholder collaboration.
        </P>
      </Box>
      </Box>
      </Flex>
    </Box>
  </Layout>
)

export default Project
