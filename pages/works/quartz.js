import NextLink from 'next/link'
import {
  List,
  ListItem,
  Heading,
  Box,
  Flex,
  Image,
  Link,
} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import PageNav from '../../components/page-nav'

const sections = [
  { id: 'quartz-glance', label: 'At a glance' },
  { id: 'quartz-summary', label: 'Summary' },
  { id: 'quartz-project', label: 'Project' },
  { id: 'quartz-objective', label: 'Objective' },
  { id: 'quartz-work', label: 'Work' },
  { id: 'quartz-result', label: 'End result' },
  { id: 'quartz-reflection', label: 'Reflection' },
  { id: 'quartz-ux-skills', label: 'Skills' },
  { id: 'quartz-resources', label: 'Resources' },
  { id: 'quartz-meta', label: 'Methods' },
]

const QUARTZ_NETWORK_GRAPH_ALT =
  'QUARTZ system interface showing a thematic network visualization. Three nodes form a triangle: Qualitative Research Methods and Data Visualization (orange, concepts) and Accessibility Research (blue, research paper). Controls panel on the right includes filter by importance, size by importance, color by community, and network metrics: 3 nodes, 3 edges, 100% density, 0% occlusion, 0% crossings, 0% tunneling, readability EXCELLENT. Legend: blue for Research Papers, orange for Concepts. Status: Sonification OFF, Keyboard Nav ACTIVE.'

const Project = () => (
  <Layout title="QUARTZ" canonicalPath="/works/quartz">
    <Box as="main">
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
      <PageNav sections={sections} />
      <Box flex={1} minW={0}>
      <Title>QUARTZ</Title>
      <WorkImage src="/images/quartz_logo.png" alt="QUARTZ logo" />

      <Box as="section" aria-labelledby="quartz-glance" mt={4}>
        <Heading as="h2" id="quartz-glance" variant="section-title">
          At a glance
        </Heading>
        <List spacing={2}>
          <ListItem><strong>Role:</strong> Lead researcher</ListItem>
          <ListItem><strong>Collaborator:</strong> Dr. JooYoung Seo (UIUC)</ListItem>
          <ListItem><strong>Methods:</strong> Interviews, participatory co-design, qualitative analysis, usability-oriented evaluation</ListItem>
          <ListItem><strong>Tools and outputs:</strong> QUARTZ interface, multimodal representations, design guidelines</ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="quartz-summary" mt={6}>
        <Heading as="h2" id="quartz-summary" variant="section-title">
          Summary
        </Heading>
        <P>
          QUARTZ closes an accessibility gap in qualitative visualization workflows for blind and low-vision researchers. As lead researcher, I ran co-design and evaluation that produced design guidelines and an open-source multimodal system built with BLV researchers.
        </P>
      </Box>

      <Box as="section" aria-labelledby="quartz-project" mt={4}>
        <Heading as="h2" id="quartz-project" variant="section-title">
          Project
        </Heading>
        <P>
          <strong>My role:</strong> Lead researcher. <strong>Collaborator:</strong> Dr. JooYoung Seo, University of Illinois Urbana-Champaign. <strong>Scope:</strong> QUARTZ (Qualitative Understanding via Accessible Representation and VisualiZation) is an accessible, multimodal system that enables blind and low-vision (BLV) practitioners to create, explore, and analyze qualitative visualizations (e.g., knowledge graphs, concept maps, coding hierarchies) through complementary modalities. I led research and co-design with BLV practitioners and contributed to system design and evaluation.
        </P>
      </Box>

      <Box as="section" aria-labelledby="quartz-objective" mt={6}>
        <Heading as="h2" id="quartz-objective" variant="section-title">
          Objective
        </Heading>
        <P>
          While accessibility for quantitative charts has improved, qualitative
          data visualizations remain largely inaccessible to BLV researchers.
          These structures encode rich semantic relationships rather than
          numerical values, lack predictable grid layouts, and are built
          iteratively during analysis. Mainstream qualitative data analysis
          software (QDAS) such as NVivo relies on mouse-dependent interactions,
          produces visual-only outputs, and lacks screen reader compatibility.
          With approximately 2.2 billion people worldwide experiencing vision
          impairment, inaccessible tooling excludes qualified BLV analysts from
          consequential data work in business intelligence, AI development, and
          document analysis.
        </P>
        <Heading as="h3" size="sm" mt={3} mb={2}>
          Research questions
        </Heading>
        <List as="ol" listStyleType="decimal" pl={6} spacing={2}>
          <ListItem>
            How can multimodal representations (structured text, sonification,
            interactive navigation, and AI-generated descriptions) effectively
            convey qualitative visualization semantics?
          </ListItem>
          <ListItem>
            How do these representations support analytical reasoning tasks
            such as pattern identification and theme development?
          </ListItem>
          <ListItem>
            What recommendations do BLV researchers make to enable accessible
            qualitative visualization authoring?
          </ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="quartz-work" mt={6}>
        <Heading as="h2" id="quartz-work" variant="section-title">
          Work
        </Heading>
        <P>
          QUARTZ integrates three multimodal representation strategies, each
          augmented by AI-assisted description generation:
        </P>
        <List as="ul" listStyleType="disc" pl={6} mt={2} spacing={1}>
          <ListItem>
            <strong>Structured textual descriptions</strong>, hierarchical,
            navigable text adapted from semantic levels in prior research.
          </ListItem>
          <ListItem>
            <strong>Sonification</strong>, mappings that encode network topology
            and inter-code relationships through pitch, rhythm, and spatial
            audio.
          </ListItem>
          <ListItem>
            <strong>Interactive navigation</strong>, keyboard-driven exploration
            of graph structures, with screen reader–compatible feedback.
          </ListItem>
        </List>
        <P mt={3}>
          AI-generated natural language summaries provide overviews and
          contextual descriptions with human-in-the-loop refinement. The system
          supports three core visualization types: network graphs (thematic
          networks and knowledge graphs), concept maps, and annotated text views
          with coding stripes.
        </P>
        <P mt={3}>
          <strong>Methods:</strong> Participatory co-design and user interviews with BLV practitioners; qualitative analysis and thematic coding; usability-oriented evaluation of multimodal representations. Findings directly informed design guidelines and system requirements.
        </P>
        <Box mt={4} mb={2}>
          <Image
            src="/images/quartz_network_graph.png"
            alt={QUARTZ_NETWORK_GRAPH_ALT}
            borderRadius="lg"
            w="full"
            loading="lazy"
            decoding="async"
          />
        </Box>
        <P fontSize="sm" color="text.subtle">
          The QUARTZ interface: a visual network graph with controls for filtering, display options, and readability metrics.
        </P>
      </Box>

      <Box as="section" aria-labelledby="quartz-result" mt={6}>
        <Heading as="h2" id="quartz-result" variant="section-title">
          End result
        </Heading>
        <Heading as="h3" size="sm" mb={2}>
          Insights &amp; recommendations
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={1} mb={3}>
          <ListItem>
            Design guidelines for accessible multimodal representations of
            qualitative data structures.
          </ListItem>
          <ListItem>
            Technical approaches for AI-assisted natural language description
            generation of relational data structures.
          </ListItem>
          <ListItem>
            Empirical findings from user studies on how multimodal
            representations support analytical reasoning; recommendations
            informed the QUARTZ open-source system (visual, textual, and
            auditory modalities).
          </ListItem>
        </List>
        <Heading as="h3" size="sm" mb={2}>
          Impact
        </Heading>
        <P>
          This work advances multimodal information access beyond traditional
          chart types and contributes open-source tooling that extends
          accessibility infrastructure. As qualitative methods increasingly
          inform business intelligence, policy analysis, and AI training data
          curation, accessible tooling determines who can participate in
          data-driven decision-making. QUARTZ enables BLV practitioners to
          conduct independent qualitative analysis, addressing a barrier
          documented by prior work.
        </P>
      </Box>

      <Box as="section" aria-labelledby="quartz-reflection" mt={6}>
        <Heading as="h2" id="quartz-reflection" variant="section-title">
          Reflection
        </Heading>
        <P>
          Leading research with BLV practitioners reinforced how critical
          co-design and lived experience are for accessibility work. If I were
          to revisit this project, I would invest earlier in structured
          usability benchmarks and iterate on sonification mappings with
          more participants to strengthen generalizability of the guidelines.
        </P>
      </Box>

      <Box as="section" aria-labelledby="quartz-ux-skills" mt={6}>
        <Heading as="h2" id="quartz-ux-skills" variant="section-title">
          Research skills demonstrated
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={1}>
          <ListItem>User interviews and participatory co-design</ListItem>
          <ListItem>Qualitative analysis and thematic coding</ListItem>
          <ListItem>Usability evaluation and task analysis</ListItem>
          <ListItem>Synthesizing co-design findings into design guidelines</ListItem>
          <ListItem>Cross-functional collaboration with academic and community stakeholders</ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="quartz-resources" mt={6}>
        <Heading as="h2" id="quartz-resources" variant="section-title">
          Resources
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={2}>
          <ListItem>
            <Link as={NextLink} href="/research">
              Full bibliography: [C5] CHI 2026 · [C7] ASSETS 2026 (to appear)
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://doi.org/10.1145/3772318.3791242" target="_blank" rel="noopener noreferrer" aria-label="View DOI for QUARTZ-related CHI 2026 paper (opens in new tab)">
              CHI &apos;26 publication [DOI]
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://arxiv.org/abs/2602.08925" target="_blank" rel="noopener noreferrer" aria-label="View arXiv preprint for QUARTZ-related CHI 2026 paper (opens in new tab)">
              arXiv preprint
            </Link>
          </ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="quartz-meta" mt={6}>
        <Heading as="h2" id="quartz-meta" variant="section-title">
          Methods
        </Heading>
        <P>
          User research and interviews, participatory co-design, usability testing and task analysis, qualitative analysis and thematic coding, translating insights to design guidelines.
        </P>
      </Box>
      </Box>
      </Flex>
    </Box>
  </Layout>
)

export default Project
