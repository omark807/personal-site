import NextLink from 'next/link'
import {
  List,
  ListItem,
  Heading,
  Box,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Text,
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
  // { id: 'quartz-demo', label: 'Demo' },
  { id: 'quartz-result', label: 'End result' },
  { id: 'quartz-reflection', label: 'Reflection' },
  { id: 'quartz-ux-skills', label: 'Skills' },
  { id: 'quartz-resources', label: 'Resources' },
  { id: 'quartz-meta', label: 'Methods' },
]

const LANDING_ALT =
  'QUARTZ landing page: the QUARTZ logo and title with the tagline "Qualitative Understanding via Accessible Representation and VisualiZation," and three cards — Sample Data (explore with example data), Import Data (upload your own data), and Learn More (view tutorial).'

const VIZ_TYPES = [
  {
    src: '/images/network_graph.png',
    caption:
      'Network graph: code co-occurrence from interview data, with sonification and keyboard navigation.',
    alt: 'QUARTZ network graph view titled "Code Co-occurrence Network," showing co-occurrence relationships between qualitative codes from interview data about coping and adaptation. Seven red nodes — Frustration, Peer Support, Adaptation, Coping Strategies, Support-Seeking, Isolation, and Resilience — are linked by twelve grey edges, with the Frustration node keyboard-focused. Status: 7 nodes, 12 edges, Sonification ON.',
  },
  {
    src: '/images/concept_map.png',
    caption: 'Concept map: a hierarchical view of themes and sub-themes.',
    alt: 'QUARTZ concept map view titled "Remote Work Analysis," a hierarchical tree of 19 concepts across 3 levels. A root concept branches into color-coded main concepts, sub-concepts, and examples, each labeled with an importance percentage and child count; Sonification ON.',
  },
  {
    src: '/images/sankey_diagram.png',
    caption: 'Sankey diagram: participant flow through a process, with audio.',
    alt: 'QUARTZ Sankey diagram titled "Job Search Participant Journey," showing participant flow from job-search initiation through methods (online applications, networking, skills training), interviews, and outcomes such as hired, rejection, and career pivot, with Sound On enabled.',
  },
  {
    src: '/images/coding_stripes.png',
    caption:
      'Coding stripes: overlapping thematic codes over an interview transcript.',
    alt: 'QUARTZ coding-stripes view titled "Job Search Interview — Coded Transcript," an interview transcript with colored stripes marking eight thematic codes (such as Job Search Strategy, Emotional Response, Social Support, and Barrier) across overlapping text segments.',
  },
]

const GUIDANCE_ALT =
  'QUARTZ "Why Concept Map?" guidance panel. It reports the detected data structure (19 concepts across 3 levels), explains why a concept map fits hierarchical data, shows a table mapping the user\u2019s data to visual elements (root theme, main themes, sub-themes, hierarchical relationships, and node depth mapped to a sonification tone), and notes complexity constraints such as node count within the recommended range.'

const ARCHITECTURE_ALT =
  'QUARTZ software architecture diagram with four layers following clean architecture: Presentation (visualizations, import/export, and accessibility features like sonification hooks, focus trap, and keyboard navigation), Application (manage visualization, transform data, navigate graph), Domain (entities, service and repository ports, domain errors), and Infrastructure (parsers and analysis, transformers, sonification engine). Arrows show dependencies pointing inward toward the domain.'

const EVAL_ALT =
  'QUARTZ evaluation panel for a concept map showing publication readiness of 4 out of 5 ("Good, 5 of 6 checks passed"), export readiness, a structure summary, statistics (19 nodes, 0 edges, max depth 3), and quality checks such as reasonable complexity, labels present on all nodes, appropriate hierarchy depth, and root concept exists.'

const Figure = ({ src, alt, caption, ...props }) => (
  <Box
    borderWidth="1px"
    borderColor="border.default"
    borderRadius="lg"
    overflow="hidden"
    {...props}
  >
    <Image
      src={src}
      alt={alt}
      w="full"
      display="block"
      loading="lazy"
      decoding="async"
    />
    <Text
      fontSize="sm"
      color="text.subtle"
      textAlign="center"
      px={3}
      py={2}
      mb={0}
      borderTopWidth="1px"
      borderTopColor="border.default"
    >
      {caption}
    </Text>
  </Box>
)

const Project = () => (
  <Layout title="QUARTZ" canonicalPath="/works/quartz">
    <Box as="main">
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
      <PageNav sections={sections} />
      <Box flex={1} minW={0}>
      <Title>QUARTZ</Title>
      <WorkImage
        src="/images/quartz_logo.png"
        alt="QUARTZ logo: a stylized letter Q formed from purple crystal facets with a crystal shard, above the word QUARTZ."
      />

      <Box as="section" aria-labelledby="quartz-glance" mt={4}>
        <Heading as="h2" id="quartz-glance" variant="section-title">
          At a glance
        </Heading>
        <List spacing={2}>
          <ListItem><strong>Role:</strong> Lead researcher</ListItem>
          <ListItem><strong>Collaborator:</strong> Dr. JooYoung Seo (UIUC)</ListItem>
          <ListItem><strong>Methods:</strong> Interviews, participatory co-design, qualitative analysis, RITE evaluation (8 BLV participants, 12 tasks, 4 visualization types)</ListItem>
          <ListItem><strong>Tools and outputs:</strong> QUARTZ interface, multimodal representations, design guidelines</ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="quartz-summary" mt={6}>
        <Heading as="h2" id="quartz-summary" variant="section-title">
          Summary
        </Heading>
        <P>
          QUARTZ closes an accessibility gap in qualitative visualization workflows for blind and low-vision researchers. As lead researcher, I ran co-design and a RITE (Rapid Iterative Testing and Evaluation) study with 8 BLV researchers across 12 tasks and 4 visualization types, iterating the system between rounds so each research finding drove a concrete design change. The result: an open-source multimodal system and design guidelines built with, not just for, BLV researchers.
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
          supports four core visualization types: network graphs, concept maps,
          Sankey diagrams, and coding-stripe annotated text.
        </P>
        <P mt={3}>
          <strong>Methods:</strong> Participatory co-design and user interviews with BLV practitioners; qualitative analysis and thematic coding; and a RITE evaluation with 8 BLV researchers spanning 12 tasks across all 4 supported visualization types (network graphs, concept maps, Sankey diagrams, and coding stripes). RITE is iterative by design: after each round I coded what broke down, changed the system, and re-tested with the next participants, so the evaluation itself is the record of research driving design decisions rather than a one-shot usability check.
        </P>
        <Figure
          src="/images/landing_page.png"
          alt={LANDING_ALT}
          caption="The QUARTZ landing page: users start from sample data, import their own, or learn more."
          my={4}
        />

        <Heading as="h3" size="sm" mt={5} mb={2}>
          The four visualization types
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
          {VIZ_TYPES.map((viz) => (
            <Figure
              key={viz.src}
              src={viz.src}
              alt={viz.alt}
              caption={viz.caption}
            />
          ))}
        </SimpleGrid>

        <Heading as="h3" size="sm" mt={6} mb={2}>
          AI-assisted guidance
        </Heading>
        <P>
          QUARTZ inspects the shape of a user&apos;s data, recommends a fitting
          visualization type, and explains why — mapping each part of the data to
          a visual and auditory element and flagging complexity constraints.
        </P>
        <Figure
          src="/images/why_this_type.png"
          alt={GUIDANCE_ALT}
          caption="The guidance panel detects the data structure and explains the recommended visualization."
          my={4}
        />

        <Heading as="h3" size="sm" mt={6} mb={2}>
          System design
        </Heading>
        <P>
          I built QUARTZ as a Next.js application on a clean, layered
          architecture, treating accessibility concerns — sonification, focus
          management, and keyboard navigation — as first-class parts of the
          system rather than add-ons.
        </P>
        <Figure
          src="/images/architecture-diagram.png"
          alt={ARCHITECTURE_ALT}
          caption="QUARTZ's four-layer architecture: presentation, application, domain, and infrastructure."
          my={4}
        />
      </Box>

      {/* Temporarily hidden until the sonification audio asset is ready.
      <Box as="section" aria-labelledby="quartz-demo" mt={6}>
        <Heading as="h2" id="quartz-demo" variant="section-title">
          Hear it: sonification
        </Heading>
        <P>
          A short audio clip of QUARTZ sonifying a thematic network, so you can
          hear how topology and relationships are conveyed without sight.
        </P>
        <Box
          as="audio"
          controls
          preload="none"
          w="full"
          mt={2}
          aria-label="QUARTZ sonification audio demo"
        >
          <source src="/audio/quartz-sonification.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.{' '}
          <Link
            href="/audio/quartz-sonification.mp3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download the audio clip
          </Link>
          .
        </Box>
        <P fontSize="sm" color="text.subtle" mt={2}>
          Audio: QUARTZ sonifying a three-node thematic network (concepts and a
          research paper) as the user navigates it.
        </P>
        <Heading as="h3" size="sm" mt={4} mb={2}>
          What you are hearing
        </Heading>
        <P>
          [Placeholder description - refine with the actual mappings.] Pitch
          encodes a node's position or importance in the network; rhythm
          conveys how densely connected a node is; and spatial (left/right) audio
          indicates direction to neighboring nodes. As the user moves through the
          graph, each step is announced and paired with these cues so structure
          and relationships are perceivable by ear.
        </P>
      </Box>
      */}

      <Box as="section" aria-labelledby="quartz-result" mt={6}>
        <Heading as="h2" id="quartz-result" variant="section-title">
          End result
        </Heading>
        <Heading as="h3" size="sm" mb={2}>
          How the research changed the design
        </Heading>
        <P mb={2}>
          Across the RITE rounds with 8 BLV researchers, findings from each round
          were translated into design changes before the next, so the study is a
          record of research driving iteration rather than a single usability
          score:
        </P>
        <List as="ul" listStyleType="disc" pl={6} spacing={1} mb={3}>
          <ListItem>
            Participants lost their place in large network graphs, so keyboard
            navigation was redesigned to announce position, neighbors, and depth
            on every move rather than reading nodes in a flat order.
          </ListItem>
          <ListItem>
            Early sonification mappings were ambiguous when several relationships
            overlapped, so pitch, rhythm, and spatial cues were re-scoped to
            encode topology one dimension at a time and made toggleable.
          </ListItem>
          <ListItem>
            Structured text descriptions were too verbose at the overview level,
            so they were reorganized into navigable semantic tiers (summary to
            detail) that researchers could drill into on demand.
          </ListItem>
          <ListItem>
            AI-generated summaries needed trust and correction, so a
            human-in-the-loop refinement step was added so researchers could
            verify and edit descriptions.
          </ListItem>
        </List>
        <Heading as="h3" size="sm" mb={2}>
          Outcomes
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={1} mb={3}>
          <ListItem>
            An open-source multimodal system covering all 4 visualization types,
            shipped with the design changes above.
          </ListItem>
          <ListItem>
            Design guidelines for accessible multimodal representations of
            qualitative data structures, grounded in the RITE findings.
          </ListItem>
          <ListItem>
            Technical approaches for AI-assisted natural language description
            generation of relational data structures.
          </ListItem>
          <ListItem>
            A built-in evaluation view that scores publication readiness and runs
            structural quality checks on a visualization.
          </ListItem>
        </List>
        <Figure
          src="/images/eval.png"
          alt={EVAL_ALT}
          caption="The evaluation panel reports publication readiness and structural quality checks."
          my={4}
        />
        <Heading as="h3" size="sm" mb={2}>
          Impact
        </Heading>
        <P>
          The RITE study showed BLV researchers completing qualitative analysis
          tasks — pattern identification and theme development across network
          graphs, concept maps, Sankey diagrams, and coding-stripe transcripts —
          that mouse- and vision-dependent tools like NVivo had made impossible
          for them. Because qualitative methods increasingly feed business
          intelligence, policy analysis, and AI training-data curation,
          accessible tooling determines who gets to do this work; QUARTZ and its
          guidelines give teams a concrete, evidence-backed way to include BLV
          analysts.
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
              CHI &apos;26 preprint
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
