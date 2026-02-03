import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Box,
  Image,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
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

      <P>
        <strong>QUARTZ</strong> (Qualitative Understanding via Accessible
        Representation and VisualiZation) is an accessible, multimodal system
        that enables blind and low-vision (BLV) practitioners to create,
        explore, and analyze qualitative visualizations, such as knowledge
        graphs, concept maps, and coding hierarchies, through complementary
        modalities.
      </P>

      <Box as="section" aria-labelledby="quartz-problem" mt={6}>
        <Heading as="h2" id="quartz-problem" size="md" mb={3}>
          The problem
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
      </Box>

      <Box as="section" aria-labelledby="quartz-approach" mt={6}>
        <Heading as="h2" id="quartz-approach" size="md" mb={3}>
          Approach
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
      </Box>

      <Box as="section" aria-labelledby="quartz-interface" mt={6}>
        <Heading as="h2" id="quartz-interface" size="md" mb={3}>
          System interface
        </Heading>
        <P>
          The QUARTZ interface combines a visual network graph with a controls
          panel for filtering, display options, and readability metrics. Users can
          add and edit nodes, filter by importance, size nodes by importance,
          and optionally color by community. Network and readability metrics
          (e.g., occlusion, crossings, tunneling) help assess layout quality.
        </P>
        <Box mt={4} mb={4}>
          <Image
            src="/images/quartz_network_graph.png"
            alt={QUARTZ_NETWORK_GRAPH_ALT}
            borderRadius="lg"
            w="full"
            loading="lazy"
            decoding="async"
          />
        </Box>
      </Box>

      <Box as="section" aria-labelledby="quartz-questions" mt={6}>
        <Heading as="h2" id="quartz-questions" size="md" mb={3}>
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

      <Box as="section" aria-labelledby="quartz-contributions" mt={6}>
        <Heading as="h2" id="quartz-contributions" size="md" mb={3}>
          Contributions
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={1}>
          <ListItem>
            Design guidelines for accessible multimodal representations of
            qualitative data structures.
          </ListItem>
          <ListItem>
            Technical approaches for AI-assisted natural language description
            generation of relational data structures.
          </ListItem>
          <ListItem>
            The QUARTZ open-source system integrating visual, textual, and
            auditory modalities for qualitative data exploration.
          </ListItem>
          <ListItem>
            Empirical findings from user studies on how multimodal
            representations support analytical reasoning.
          </ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="quartz-impact" mt={6}>
        <Heading as="h2" id="quartz-impact" size="md" mb={3}>
          Impact
        </Heading>
        <P>
          This work advances multimodal information access beyond traditional
          chart types and contributes open-source tooling that extends
          accessibility infrastructure for the broader research community. As
          qualitative methods increasingly inform business intelligence, policy
          analysis, and AI training data curation, ensuring these analytical
          tools are accessible determines who can participate in data-driven
          decision-making. QUARTZ aims to enable BLV practitioners to conduct
          independent qualitative analysis, a significant barrier documented by
          prior work.
        </P>
      </Box>

      <Box as="section" aria-labelledby="quartz-ux-skills" mt={6}>
        <Heading as="h2" id="quartz-ux-skills" size="md" mb={3}>
          Research skills demonstrated
        </Heading>
        <P>
          This project reflects competencies that UX research hiring managers
          look for: <strong>participatory co-design and user interviews</strong> with
          BLV practitioners to define problems and needs; <strong>qualitative
          analysis and thematic coding</strong> to surface patterns; <strong>usability-oriented
          evaluation</strong> of multimodal representations and analytical reasoning
          tasks; and <strong>translating research into actionable design
          guidelines</strong> and system requirements. Work was conducted in close
          <strong> collaboration</strong> with an academic partner and community
          stakeholders, with findings directly informing product direction and
          open-source deliverables.
        </P>
      </Box>

      <Box as="section" aria-labelledby="quartz-meta" mt={6}>
        <Heading as="h2" id="quartz-meta" size="md" mb={3}>
          Project details
        </Heading>
        <List spacing={2}>
          <ListItem>
            <Meta>Collaborator</Meta>
            Dr. JooYoung Seo, Assistant Professor, School of Information
            Sciences, University of Illinois Urbana-Champaign
          </ListItem>
          <ListItem>
            <Meta>Methods</Meta>
            User research &amp; interviews, participatory co-design, usability
            testing &amp; task analysis, qualitative analysis &amp; thematic
            coding, translating insights to design guidelines
          </ListItem>
        </List>
      </Box>
    </Container>
  </Layout>
)

export default Project
