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

      <Box as="section" aria-labelledby="maidr-project" mt={4}>
        <Heading as="h2" id="maidr-project" size="md" mb={3}>
          Project
        </Heading>
        <P>
          <strong>My role:</strong> Collaborator. <strong>Lead:</strong> JooYoung Seo, University of Illinois Urbana-Champaign. <strong>Scope:</strong> MAIDR (Multimodal Access and Interactive Data Representation) is an open-source system that makes statistical data visualizations accessible to blind and low-vision users via R and Python packages. I contributed to needs assessment, co-design with BLV participants, usability testing, and translation of research findings into design and product decisions for the packages and documentation.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-objective" mt={6}>
        <Heading as="h2" id="maidr-objective" size="md" mb={3}>
          Objective
        </Heading>
        <P>
          Statistical charts (bar plots, heat maps, box plots, scatter plots) are central to data communication but are often inaccessible to blind and low-vision users. The goal was to understand user needs, co-design multimodal representations (sonification, text, braille), and validate that BLV participants could accurately interpret and interact with charts through these modalities so the team could ship accessible R and Python tooling.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-work" mt={6}>
        <Heading as="h2" id="maidr-work" size="md" mb={3}>
          Work
        </Heading>
        <P>
          MAIDR augments visual charts into touchable, readable, and audible
          representations: <strong>sonification</strong> (audio), <strong>textual
          descriptions</strong> (screen readers), <strong>braille</strong>
          (tactile), and <strong>review mode</strong> (interactive exploration).
          Supported chart types include bar plots, heat maps, box plots, and
          scatter plots.
        </P>
        <P mt={3}>
          I contributed to needs assessment and co-design with BLV stakeholders,
          and to a user study with 11 blind participants that evaluated
          interpretation and interaction with MAIDR. Findings showed that
          MAIDR supported accurate interpretation and that participants
          combined modalities in varied ways, underscoring the importance of
          user autonomy in accessible design.
        </P>
        <P mt={2}>
          <strong>Methods:</strong> User research and needs assessment; co-design;
          usability testing with BLV participants; translating insights into
          design and product (R/Python packages, documentation). Cross-functional
          collaboration with lead investigator and partners.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-result" mt={6}>
        <Heading as="h2" id="maidr-result" size="md" mb={3}>
          End result
        </Heading>
        <Heading as="h3" size="sm" mb={2}>
          Insights &amp; recommendations
        </Heading>
        <P mb={2}>
          Research findings informed the design of multimodal representations
          and the prioritization of chart types and documentation. Key insight:
          users combined modalities in varied ways based on experience, so
          supporting flexibility and user choice (rather than a single prescribed
          modality) was recommended and reflected in the shipped packages.
        </P>
        <Heading as="h3" size="sm" mb={2}>
          Impact
        </Heading>
        <P>
          MAIDR is available as open-source R and Python packages and is
          designed to integrate into data curators&apos; workflows so that
          charts can be used by people with and without visual impairments.
          The work contributes to accessible data visualization infrastructure
          used by the broader research and data community.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-reflection" mt={6}>
        <Heading as="h2" id="maidr-reflection" size="md" mb={3}>
          Reflection
        </Heading>
        <P>
          Collaborating on MAIDR reinforced how usability testing with the
          right participants (BLV users) is non-negotiable for accessibility
          work. If I were to revisit this project, I would push for earlier
          inclusion of real workflows (e.g., analysts using the packages in
          their own projects) to validate adoption and uncover edge cases in
          documentation and API design.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-ux-skills" mt={6}>
        <Heading as="h2" id="maidr-ux-skills" size="md" mb={3}>
          Research skills demonstrated
        </Heading>
        <List as="ul" listStyleType="disc" pl={6} spacing={1}>
          <ListItem>Needs assessment and user research with BLV participants</ListItem>
          <ListItem>Co-design of multimodal representations</ListItem>
          <ListItem>Usability testing to validate interpretation and interaction</ListItem>
          <ListItem>Translating findings into actionable product decisions</ListItem>
          <ListItem>Cross-functional collaboration with lead investigator and partners</ListItem>
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
          User research and needs assessment, co-design, usability testing with BLV participants, translating insights to design and product, cross-functional collaboration.
        </P>
      </Box>
    </Container>
  </Layout>
)

export default Project
