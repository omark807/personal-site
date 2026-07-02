import {
  Heading,
  Link,
  Divider,
  Text,
  Box,
  Flex,
  List,
  ListItem,
  Button,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import PageNav from '../components/page-nav'
import Paragraph from '../components/paragraph'
import { CV_LONG_URL, CV_SHORT_URL } from '../lib/site'
import { PublicationImpact } from '../components/publication-highlight'
import ExperienceAccordion from '../components/experience-accordion'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'methods', label: 'Methods' },
  { id: 'selected-work', label: 'Selected work' },
  { id: 'talks', label: 'Talks' },
  { id: 'teaching', label: 'Teaching' },
]

const professionalExperience = [
  {
    period: '06/2025 – Present',
    title: 'Design Research Intern',
    org: 'Infosys · Center for Autonomous Learning · Remote',
    summary:
      'Investigating accessibility needs and design opportunities for autonomous delivery robots through interviews, observation, and synthesis with design teams.',
    link: '/news',
  },
  {
    period: '09/2025 – Present',
    title: 'Accessibility Tester (Contract)',
    org: 'Fable · Remote',
    details: [
      {
        items: [
          'Conducting accessibility testing (user interviews, prototype reviews, and compatibility assessments) for clients across the U.S., Canada, and the U.K.',
          'Partnering with cross-functional teams to translate findings into prioritized recommendations for inclusive design.',
        ],
      },
    ],
  },
  {
    period: '09/2025 – Present',
    title: 'Researcher (Volunteer)',
    org: 'American Foundation for the Blind · Remote',
    details: [
      {
        items: [
          'Conducted comparative thematic analysis across disabled and non-disabled survey respondents to characterize differential experiences with AI systems.',
          'Identified key accessibility gaps and designed evidence-based interventions.',
        ],
      },
    ],
  },
  {
    period: '05/2021 – 08/2021',
    title: 'Software Engineer Intern',
    org: 'Viasat · Carlsbad, CA',
    details: [
      {
        items: [
          'Designed and implemented a Slack app with two other interns using Python, SQLAlchemy, and Kubernetes that allows users to manually archive older Jira projects and automatically archive them by a given date.',
        ],
      },
    ],
  },
  {
    period: '06/2020 – 08/2020',
    title: 'Software Engineer Extern',
    org: "L'Oréal U.S.A. · Remote",
    details: [
      {
        items: [
          'Collaborated with a team of four externs in a product design competition, implementing a data-driven solution to reduce plastic used in L\'Oréal product packaging.',
        ],
      },
    ],
  },
]

const researchExperience = [
  {
    period: '05/2024 – Present',
    title: 'Graduate Research Assistant',
    org: '(x)Ability Design Lab · Champaign, IL',
    advisor: 'Advisor: Dr. JooYoung Seo',
    link: 'https://xabilitylab.ischool.illinois.edu/',
    details: [
      {
        heading: 'QUARTZ (Qualitative Understanding via Accessible Representation and VisualiZation)',
        items: [
          'Leading user research to understand barriers in qualitative data visualization, conducting 15+ co-design sessions.',
          'Designing user study protocols, including survey instruments, semi-structured interview protocols, and task-based usability testing.',
          'Managing global participant recruitment via BLV advocacy networks (e.g., World Blind Union).',
        ],
      },
      {
        heading: 'Re-Imagining Knowledge Production Workflows by, with, and for BLV Researchers',
        items: [
          'Led a mixed-methods global study with BLV researchers (survey n = 57; interviews n = 15) using activity theory to examine research tool barriers.',
          'Synthesized findings through reflexive thematic analysis to develop systemic design recommendations across literature review, analysis, and dissemination.',
        ],
      },
      {
        heading: 'LLM Fine-Tuning for Accessibility Applications',
        items: [
          'Fine-tuning large language models on distributed GPU clusters to develop accessibility-focused AI solutions for assistive technologies.',
        ],
      },
      {
        heading: 'Accessible Extended Reality (XR) Co-Design',
        items: [
          'Co-designed PunchPulse, an accessible VR boxing game with a five-person mixed-abilities team using the RITE framework over 16 weeks.',
        ],
      },
      {
        heading: 'Multimodal LLM-Based Data Visualization (MAIDR)',
        items: [
          'Collaborated with eight developers and three researchers to build, refine, and advance MAIDR, a multimodal AI-driven system for accessible data visualization.',
        ],
      },
    ],
  },
  {
    period: '08/2022 – 05/2024',
    title: 'Graduate Research Assistant',
    org: 'CROPS Lab · Champaign, IL',
    advisor: 'Advisor: Dr. Camille Cobb',
    details: [
      {
        heading: 'YouTube Influencer Ads and Privacy Promises',
        items: [
          'Led large-scale quantitative analysis of 300M YouTube influencer privacy technology advertisements, identifying top-advertised products and consumer misinformation risks.',
        ],
      },
      {
        heading: 'Smart Home Data Collection Consent Dynamics',
        items: [
          'Co-led mixed-methods analysis of a 360-participant survey examining consent dynamics in smart home environments, revealing 84% of users experienced consent violations.',
          'Developed stakeholder-specific recommendations for consentful smart home ecosystems.',
        ],
      },
    ],
  },
  {
    period: '08/2021 – 12/2021',
    title: 'Research Assistant',
    org: 'National Center for Supercomputing Applications · Champaign, IL',
    advisor: 'Advisors: Dr. Megan Dailey & Dr. Matthew Hudson',
    details: [
      {
        heading: 'Food Bank Marketplace Mobile App',
        items: [
          'Developed the initial software design specification for a mobile app to help food banks procure fresh produce from farmers at reduced cost, aiming to reduce food waste and insecurity.',
        ],
      },
    ],
  },
  {
    period: '01/2021 – 05/2021',
    title: 'Undergraduate Research Assistant',
    org: 'ORCHID Lab · Champaign, IL',
    advisor: 'Advisor: Dr. Brian P. Bailey',
    details: [
      {
        heading: 'Proximal Process Goal Accomplishment',
        items: [
          'Researched methodologies and visualizations to help individuals accomplish proximal process goals achievable in a short amount of time.',
        ],
      },
    ],
  },
  {
    period: '01/2021 – 05/2021',
    title: 'Undergraduate Research Assistant',
    org: 'Siebel School of Computing and Data Science · Champaign, IL',
    advisor: 'Advisor: Dr. Lawrence C. Angrave',
    details: [
      {
        heading: 'Webcam-Based Eye Tracking in ClassTranscribe',
        items: [
          'Investigated challenges of webcam-based eye tracking and an implementation in ClassTranscribe using WebGazer, a React.js-based framework developed by Brown University.',
        ],
      },
    ],
  },
  {
    period: '05/2019 – 08/2019',
    title: 'Undergraduate Research Assistant',
    org: 'Siebel School of Computing and Data Science · Champaign, IL',
    advisor: 'Advisor: Dr. Geoffrey L. Herman',
    details: [
      {
        heading: 'Computerized Exam for Computer Architecture',
        items: [
          'Designed, implemented, and deployed a computerized, multi-part exam on pipelining and cache analysis for CS 233, taken annually by 400+ students.',
          'Co-authored a publication on the implications of the implementation on engineering education beyond computing.',
        ],
      },
    ],
  },
]

const educationItems = [
  {
    period: '08/2022 – 12/2027 (expected)',
    title: 'PhD in Computer Science',
    subtitle: 'Certificate in Information Accessibility Design and Policy',
    detail: (
      <>
        <Text as="span" fontWeight="semibold">
          University of Illinois Urbana-Champaign
        </Text>{' '}
        · Advisor:{' '}
        <Link href="http://jooyoungseo.me/" isExternal>
          Dr. JooYoung Seo
        </Link>
      </>
    ),
  },
  {
    period: '2017 – 2021',
    title: 'BS Computer Science + Crop Sciences',
    detail: 'University of Illinois Urbana-Champaign',
  },
]

const selectedPublications = [
  {
    id: 'c5',
    label: '[C5]',
    title:
      'A Re-Imagination of Knowledge Production Workflows by, with, and for Blind and Low-Vision Researchers',
    venue: 'CHI 2026',
    impact:
      'Reimagines knowledge production workflows with BLV researchers as co-designers, not afterthoughts.',
  },
  {
    id: 'c7',
    label: '[C7]',
    title: 'QUARTZ: Qualitative Understanding via Accessible Representation and Visualization',
    venue: 'ASSETS 2026 (to appear)',
    impact:
      'Multimodal system and guidelines for BLV researchers to explore qualitative visualizations independently.',
  },
  {
    id: 'c6',
    label: '[C6]',
    title:
      'Unpacking The Need For Digital Mental Health Tracking Services With And For The Blind Community',
    venue: 'ASSETS 2026 (to appear)',
    impact:
      'Unpacks barriers in digital mental health apps and informs inclusive DMH product design.',
  },
  {
    id: 'w1',
    label: '[W1]',
    title: 'The AI Quagmire: Benefits, Risks, and Aspirations Through a Disability Lens',
    venue: 'American Foundation for the Blind, 2026',
    impact:
      'National report on AI use, risks, and aspirations from a disability lens (1,700+ survey respondents).',
  },
  {
    id: 'p3',
    label: '[P3]',
    title:
      'Unpacking The Need For Digital Mental Health (DMH) Tracking Services With And For The Blind Community',
    venue: 'CHI EA 2025',
    impact:
      'Need-finding study translating BLV community insights into product and design priorities.',
  },
]

const talks = [
  {
    year: '2026',
    title: 'CHI 2026',
    detail: (
      <>
        Presented knowledge production workflows research (
        <Link as={NextLink} href="/works/quartz">
          [C5]
        </Link>
        ) in Barcelona, Spain.
      </>
    ),
  },
  {
    year: '2025',
    title: 'CHI 2025',
    detail: (
      <>
        Presented digital mental health tracking research (
        <Link as={NextLink} href="/works/dmh">
          [P3]
        </Link>
        ) in Yokohama, Japan.
      </>
    ),
  },
]

const ExperiencePage = () => {
  const mutedColor = useColorModeValue('text.muted', 'text.muted')
  const borderColor = useColorModeValue('border.default', 'border.default')

  const DatedRow = ({ period, children, borderLeft = false }) => (
    <Flex
      justify="space-between"
      align="flex-start"
      gap={4}
      {...(borderLeft && {
        borderLeftWidth: '2px',
        borderColor,
        pl: 4,
      })}
    >
      <Box flex={1} minW={0}>
        {children}
      </Box>
      <Text
        fontSize="sm"
        color={mutedColor}
        textAlign="right"
        flexShrink={0}
        maxW={{ base: '40%', md: '11rem' }}
        lineHeight="short"
      >
        {period}
      </Text>
    </Flex>
  )

  return (
    <Layout
      title="Experience"
      description="Education, industry and research experience, methods, and selected publications for Omar Khan, PhD candidate in HCI and accessibility at UIUC."
      canonicalPath="/experience"
    >
        <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
          <PageNav sections={sections} />
          <Box flex={1} minW={0}>
            <Heading as="h1" variant="section-title" mb={4} id="overview">
              Experience
            </Heading>
            <Paragraph>
              I am a PhD candidate at UIUC studying HCI, human-AI interaction, and accessibility — mostly through
              co-design with blind and low-vision communities, with stints in industry research
              along the way.
            </Paragraph>

            <HStack spacing={3} mb={6} flexWrap="wrap">
              <Button
                as={Link}
                href={CV_LONG_URL}
                isExternal
                size="sm"
                variant="brand"
                aria-label="Open CV (Long-form) (opens in new tab)"
              >
                CV (Long-form)
              </Button>
              <Button
                as={Link}
                href={CV_SHORT_URL}
                isExternal
                size="sm"
                variant="brandOutline"
                aria-label="Open Resume (One-page) (opens in new tab)"
              >
                Resume (One-page)
              </Button>
            </HStack>

            <Section delay={0.1}>
              <Heading as="h2" id="education" variant="section-title">
                Education
              </Heading>
              <List spacing={4}>
                {educationItems.map((item) => (
                  <ListItem key={item.title}>
                    <DatedRow period={item.period}>
                      <Text fontWeight="semibold">{item.title}</Text>
                      {item.subtitle && (
                        <Text fontSize="sm" fontWeight="medium" mt={0.5}>
                          {item.subtitle}
                        </Text>
                      )}
                      <Text fontSize="sm" color={mutedColor} mt={1}>
                        {item.detail}
                      </Text>
                    </DatedRow>
                  </ListItem>
                ))}
              </List>
            </Section>

            <Section delay={0.15}>
              <Divider my={6} />
              <Heading as="h2" id="experience" variant="section-title">
                Experience
              </Heading>

              <Heading as="h3" fontSize={16} mb={3} fontWeight="semibold">
                Professional
              </Heading>
              <ExperienceAccordion items={professionalExperience} borderLeft />

              <Heading as="h3" fontSize={16} mt={6} mb={3} fontWeight="semibold">
                Research
              </Heading>
              <ExperienceAccordion items={researchExperience} borderLeft />
            </Section>

            <Section delay={0.2}>
              <Divider my={6} />
              <Heading as="h2" id="methods" variant="section-title">
                Methods and tools
              </Heading>
              <Paragraph>
                <strong>Methods:</strong> user interviews, participatory co-design, surveys,
                need-finding, thematic analysis, usability testing, within-subjects studies,
                mixed-methods analysis, stakeholder synthesis into product recommendations.
              </Paragraph>
              <Paragraph>
                <strong>Tools:</strong> Figma, NVivo, Python, screen reader testing, multimodal
                prototyping (sonification, tactile graphics), qualitative and quantitative analysis
                workflows.
              </Paragraph>
              <Paragraph>
                <strong>Accessibility practice:</strong> skip links, live regions, reduced-motion
                support, semantic HTML, and detailed alt text across this site and my research
                deliverables.
              </Paragraph>
            </Section>

            <Section delay={0.3}>
              <Divider my={6} />
              <Heading as="h2" id="selected-work" variant="section-title">
                Selected publications
              </Heading>
              <Text fontSize="sm" mb={3}>
                Highlights — full bibliography on{' '}
                <Link as={NextLink} href="/research">
                  Research
                </Link>
                .
              </Text>
              <List spacing={3}>
                {selectedPublications.map((pub) => (
                  <ListItem key={pub.id}>
                    <PublicationImpact>{pub.impact}</PublicationImpact>
                    <Text fontSize="sm">
                      <strong>{pub.label}</strong> {pub.title}. <i>{pub.venue}</i>
                    </Text>
                  </ListItem>
                ))}
              </List>
            </Section>

            <Section delay={0.35}>
              <Divider my={6} />
              <Heading as="h2" id="talks" variant="section-title">
                Talks and presentations
              </Heading>
              <List spacing={3}>
                {talks.map((talk) => (
                  <ListItem key={talk.title}>
                    <DatedRow period={talk.year}>
                      <Text fontWeight="semibold">{talk.title}</Text>
                      <Text fontSize="sm" color={mutedColor} mt={1}>
                        {talk.detail}
                      </Text>
                    </DatedRow>
                  </ListItem>
                ))}
              </List>
            </Section>

            <Section delay={0.4}>
              <Divider my={6} />
              <Heading as="h2" id="teaching" variant="section-title">
                Teaching and mentorship
              </Heading>
              <Paragraph>
                I design and teach an accessible high-performance computing (HPC)
                workshop series that introduces blind and low-vision researchers
                to the NCSA Delta cluster — a scaffolded, three-part curriculum
                grounded in Universal Design for Learning, constructivism, and
                adult learning theory. I designed and ran the first edition as a
                three-day series (March 30 – April 1, 2026) for 15 participants.
              </Paragraph>
              <Link as={NextLink} href="/teaching" fontSize="sm">
                See the full curriculum →
              </Link>
            </Section>
          </Box>
        </Flex>
    </Layout>
  )
}

export default ExperiencePage
