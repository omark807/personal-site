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
  <Layout title="MAIDR">
    <Container as="main" maxW="container.md">
      <Title>
        MAIDR <Badge>Project</Badge>
      </Title>
      <WorkImage src="/images/maidr_logo.svg" alt="MAIDR logo" />

      <Box as="section" aria-labelledby="maidr-summary" mt={4}>
        <Heading as="h2" id="maidr-summary" size="md" mb={3}>
          Contribution overview
        </Heading>
        <P>
          I co-authored <strong>Sensing the Shape of Data</strong>, a study on how blind and low-vision (BLV) learners interpret histogram concepts through non-visual modalities. I contributed to study design, in-person data collection, and mixed-method analysis.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-glance" mt={6}>
        <Heading as="h2" id="maidr-glance" size="md" mb={3}>
          At a glance
        </Heading>
        <List spacing={2}>
          <ListItem><strong>Role:</strong> Collaborator</ListItem>
          <ListItem><strong>Lead:</strong> JooYoung Seo (UIUC)</ListItem>
          <ListItem><strong>Study:</strong> Within-subjects multimodal histogram study with 7 BLV participants</ListItem>
          <ListItem><strong>Methods:</strong> Task-based evaluation, confidence and timing measures, and qualitative gesture analysis</ListItem>
          <ListItem><strong>Representations:</strong> STGs (swell-touch tactile graphics), BDPs (braille data patterns), and sonification</ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="maidr-project" mt={4}>
        <Heading as="h2" id="maidr-project" size="md" mb={3}>
          Paper context
        </Heading>
        <P>
          <strong>My role:</strong> Co-author and collaborator. <strong>Lead:</strong> JooYoung Seo, University of Illinois Urbana-Champaign. <strong>Scope:</strong> We evaluated learnability (not just accessibility) for three histogram concepts: skewness, modality, and kurtosis.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-objective" mt={6}>
        <Heading as="h2" id="maidr-objective" size="md" mb={3}>
          Research objective
        </Heading>
        <P>
          Measure how representation choice affects BLV learners&apos; <strong>accuracy</strong>, <strong>efficiency</strong>, and <strong>confidence</strong> while interpreting histogram concepts using STG, BDP, and sonification.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-work" mt={6}>
        <Heading as="h2" id="maidr-work" size="md" mb={3}>
          What I did
        </Heading>
        <P>
          Designed and ran an in-person, within-subjects user study comparing
          <strong> STGs</strong>, <strong>BDPs</strong>, and <strong>sonification</strong>
          for non-visual interpretation of histogram patterns.
        </P>
        <P mt={3}>
          Led mixed-method analysis combining quantitative metrics (accuracy,
          confidence, response time) with qualitative gesture coding (for example,
          whole-to-part vs part-to-whole exploration).
        </P>
        <P mt={2}>
          <strong>Methods:</strong> Within-subjects protocol, multimodal task
          evaluation, non-parametric analysis, and qualitative interaction coding.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-result" mt={6}>
        <Heading as="h2" id="maidr-result" size="md" mb={3}>
          Findings and impact
        </Heading>
        <Heading as="h3" size="sm" mb={2}>
          Key findings
        </Heading>
        <P mb={2}>
          BDPs showed the highest accuracy trend, sonification enabled faster
          completion, and STGs supported stronger confidence. Participants
          switched strategies across modalities rather than relying on one method.
        </P>
        <Heading as="h3" size="sm" mb={2}>
          Why it matters
        </Heading>
        <P>
          The work extends MAIDR from accessibility to <strong>learnability</strong>,
          informing inclusive statistics teaching and future multimodal tools.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-reflection" mt={6}>
        <Heading as="h2" id="maidr-reflection" size="md" mb={3}>
          Reflection
        </Heading>
        <P>
          This work reinforced that accessibility studies must include BLV
          participants from the start. Next, I would add more real-world analysis
          workflows to test transfer and adoption.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-ux-skills" mt={6}>
        <Heading as="h2" id="maidr-ux-skills" size="md" mb={3}>
          Skills demonstrated
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={1}>
          <ListItem>Within-subjects study design with BLV participants</ListItem>
          <ListItem>Multimodal evaluation (STG, BDP, sonification)</ListItem>
          <ListItem>Mixed-method analysis (quant + qualitative coding)</ListItem>
          <ListItem>Research translation to accessible learning/tool design</ListItem>
          <ListItem>Cross-functional collaboration in accessibility research</ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="maidr-publications" mt={6}>
        <Heading as="h2" id="maidr-publications" size="md" mb={3}>
          Publications and resources
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={2}>
          <ListItem>
            <Link
              href="https://github.com/xability/maidr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MAIDR on GitHub (opens in new tab)"
            >
              MAIDR on GitHub
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://ischool.illinois.edu/research/projects/maidr-multimodal-access-and-interactive-data-representation"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MAIDR project page at Illinois iSchool (opens in new tab)"
            >
              MAIDR project page (Illinois iSchool)
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://arxiv.org/abs/2509.14452"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Paper on non-visual exploration of statistical concepts in histograms with BLV learners on arXiv (opens in new tab)"
            >
              Sensing the Shape of Data (arXiv)
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://arxiv.org/abs/2403.00717"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MAIDR paper on arXiv (opens in new tab)"
            >
              MAIDR: Making Statistical Visualizations Accessible (arXiv)
            </Link>
          </ListItem>
        </List>
      </Box>

      <Box as="section" aria-labelledby="maidr-meta" mt={6}>
        <Heading as="h2" id="maidr-meta" size="md" mb={3}>
          Methods
        </Heading>
        <P>
          Within-subjects study design, multimodal task evaluation, non-parametric analysis, qualitative gesture coding, and cross-functional collaboration.
        </P>
      </Box>
    </Container>
  </Layout>
)

export default Project
