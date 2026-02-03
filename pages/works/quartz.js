import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Box,
  Image,
} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const QUARTZ_NETWORK_GRAPH_ALT =
  'QUARTZ system interface showing a thematic network visualization. Three nodes form a triangle: Qualitative Research Methods and Data Visualization (orange, concepts) and Accessibility Research (blue, research paper). Controls panel on the right includes filter by importance, size by importance, color by community, and network metrics: 3 nodes, 3 edges, 100% density, 0% occlusion, 0% crossings, 0% tunneling, readability EXCELLENT. Legend: blue for Research Papers, orange for Concepts. Status: Sonification OFF, Keyboard Nav ACTIVE.'

const Project = () => (
  <Layout title="QUARTZ">
    <Container as="main" maxW="container.md">
      <Title>
        QUARTZ <Badge>Project</Badge>
      </Title>
      <WorkImage src="/images/quartz_logo.png" alt="QUARTZ logo" />

      <Box as="section" aria-labelledby="quartz-project" mt={4}>
        <Heading as="h2" id="quartz-project" size="md" mb={3}>
          Project
        </Heading>
        <P>
          <strong>My role:</strong> Lead researcher. <strong>Collaborator:</strong> Dr. JooYoung Seo, University of Illinois Urbana-Champaign. <strong>Scope:</strong> QUARTZ (Qualitative Understanding via Accessible Representation and VisualiZation) is an accessible, multimodal system that enables blind and low-vision (BLV) practitioners to create, explore, and analyze qualitative visualizations (e.g., knowledge graphs, concept maps, coding hierarchies) through complementary modalities. I led research and co-design with BLV practitioners and contributed to system design and evaluation.
        </P>
      </Box>

      <Box as="section" aria-labelledby="quartz-objective" mt={6}>
        <Heading as="h2" id="quartz-objective" size="md" mb={3}>
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
        <Heading as="h2" id="quartz-work" size="md" mb={3}>
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
        <P fontSize="sm" color="gray.500">
          The QUARTZ interface: a visual network graph with controls for filtering, display options, and readability metrics.
        </P>
      </Box>

      <Box as="section" aria-labelledby="quartz-result" mt={6}>
        <Heading as="h2" id="quartz-result" size="md" mb={3}>
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
        <Heading as="h2" id="quartz-reflection" size="md" mb={3}>
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
        <Heading as="h2" id="quartz-ux-skills" size="md" mb={3}>
          Research skills demonstrated
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={1}>
          <ListItem>User interviews and participatory co-design</ListItem>
          <ListItem>Qualitative analysis and thematic coding</ListItem>
          <ListItem>Usability evaluation and task analysis</ListItem>
          <ListItem>Translating research into actionable design guidelines</ListItem>
          <ListItem>Cross-functional collaboration with academic and community stakeholders</ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="quartz-meta" mt={6}>
        <Heading as="h2" id="quartz-meta" size="md" mb={3}>
          Methods
        </Heading>
        <P>
          User research and interviews, participatory co-design, usability testing and task analysis, qualitative analysis and thematic coding, translating insights to design guidelines.
        </P>
      </Box>
    </Container>
  </Layout>
)

export default Project
