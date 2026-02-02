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
  <Layout title="MAIDR">
    <Container as="main" maxW="container.md">
      <Title>
        MAIDR <Badge>Project</Badge>
      </Title>
      <WorkImage src="/images/maidr_logo.svg" alt="MAIDR logo" />

      <P>
        <strong>MAIDR</strong> (Multimodal Access and Interactive Data
        Representation) is an open-source system that makes statistical data
        visualizations accessible to blind and low-vision users. MAIDR is
        available as an <strong>R package</strong> (r_maidr) and a{' '}
        <strong>Python package</strong>, and is designed to integrate into data
        curators’ reproducible workflows so that charts can be equally used by
        people with and without visual impairments.
      </P>

      <Box as="section" aria-labelledby="maidr-modalities" mt={6}>
        <Heading as="h2" id="maidr-modalities" size="md" mb={3}>
          Multimodal representation
        </Heading>
        <P>
          MAIDR augments visual charts into touchable, readable, and audible
          representations:
        </P>
        <List as="ul" listStyleType="disc" pl={6} mt={2} spacing={1}>
          <ListItem>
            <strong>Sonification</strong>—audio representation of data
          </ListItem>
          <ListItem>
            <strong>Textual descriptions</strong>—readable summaries for screen
            readers
          </ListItem>
          <ListItem>
            <strong>Braille</strong>—tactile representation
          </ListItem>
          <ListItem>
            <strong>Review mode</strong>—interactive exploration with
            complementary modalities
          </ListItem>
        </List>
        <P mt={3}>
          Supported chart types include bar plots, heat maps, box plots, and
          scatter plots. A user study with 11 blind participants showed that
          MAIDR supported accurate interpretation of statistical visualizations;
          participants combined modalities in varied ways based on their
          experience, underscoring the importance of user autonomy in accessible
          design.
        </P>
      </Box>

      <Box as="section" aria-labelledby="maidr-funding" mt={6}>
        <Heading as="h2" id="maidr-funding" size="md" mb={3}>
          Project and funding
        </Heading>
        <P>
          MAIDR is led by JooYoung Seo at the University of Illinois. The work
          is funded by the Institute of Museum and Library Services (IMLS) with
          $649,921 in support (2023–present). Project partners include the
          National Center for Supercomputing Applications, Posit (formerly RStudio),
          the Chart2Music open-source project, the Data Curation Network, and
          the National Federation of the Blind.
        </P>
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
          Project details
        </Heading>
        <List spacing={2}>
          <ListItem>
            <Meta>Lead</Meta>
            JooYoung Seo, University of Illinois Urbana-Champaign
          </ListItem>
          <ListItem>
            <Meta>Methods</Meta>
            Accessible visualization, multimodal representation (sonification,
            text, braille), R and Python package development, needs assessment,
            co-design, user studies with blind and low-vision participants
          </ListItem>
          <ListItem>
            <Meta>Funding</Meta>
            Institute of Museum and Library Services, 2023–present
          </ListItem>
        </List>
      </Box>
    </Container>
  </Layout>
)

export default Project
