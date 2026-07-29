import NextLink from 'next/link'
import {
  Heading,
  Text,
  Box,
  Flex,
  List,
  ListItem,
  Divider,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import PageNav from '../components/page-nav'
import Paragraph from '../components/paragraph'

const sections = [
  { id: 'teaching-overview', label: 'Overview' },
  { id: 'teaching-workshop', label: 'Workshop' },
  { id: 'teaching-appointments', label: 'Appointments' },
]

const teachingAppointments = [
  {
    period: 'Spring 2024',
    role: 'Graduate Teaching Assistant',
    course: 'CS 467: Social Visualization',
    org: 'UIUC',
  },
  {
    period: 'Fall 2023, Fall 2024',
    role: 'Graduate Teaching Assistant',
    course: 'CS 210/211: Ethical & Professional Issues/Conduct in CS',
    org: 'UIUC',
  },
  {
    period: 'Fall 2019 – Spring 2021',
    role: 'Undergraduate Course Assistant',
    course: 'CS 233: Computer Architecture',
    org: 'UIUC',
  },
  {
    period: 'Fall 2018 – Fall 2019',
    role: 'Undergraduate Course Assistant',
    course: 'CS 196-25: Freshman Honors',
    org: 'UIUC',
  },
  {
    period: 'Fall 2018, Spring 2019',
    role: 'Undergraduate Course Assistant',
    course: 'CS 125: Introduction to Computer Science',
    org: 'UIUC',
  },
]

const mentoring = [
  {
    period: '2025 – Present',
    detail: 'Soundarya Kumar Pradhan · UIUC MCS',
  },
]

const principles = [
  {
    heading: 'Learner-centered and problem-focused',
    body: 'Every new skill is framed as the solution to a real research problem (e.g., "how do I run my analysis on a machine with more power?") rather than an abstract feature tour.',
  },
  {
    heading: 'Command-line first, GUI as a complement',
    body: 'The command line is the most powerful, universal, and scriptable way to work with HPC, so it comes first. The web-based Open OnDemand portal is introduced later as an accessible complement, not a replacement.',
  },
  {
    heading: 'Verbalize, don\u2019t just visualize',
    body: 'Concepts usually shown visually \u2014 directory trees, cluster diagrams, data plots \u2014 are re-expressed in clear, structured language so nothing depends on a single visual modality.',
  },
  {
    heading: 'Build a community of practice',
    body: 'Sessions are designed as a space where participants learn from the instructor and each other, trading tips and building a durable support network.',
  },
]

const workshops = [
  {
    title: 'Workshop 1 — The lay of the land: connecting and navigating',
    time: '1.5 hours (60 min instruction + 30 min Q&A)',
    goal: 'Confidently connect to the NCSA Delta cluster, understand the remote environment, and perform basic file and directory work.',
    topics: [
      'What HPC is, via a laptop-vs-supercomputer analogy and the login-node vs compute-node distinction.',
      'Connecting over SSH, plus an accessibility setup pass: terminal contrast and font size, screen reader verbosity, and confirming command output is read correctly.',
      'A quick CLI refresher oriented around HPC-specific locations (scratch space, project directories, storage quotas).',
      'Introducing the Slurm scheduler with a "deli-counter ticket system" analogy for jobs, partitions, nodes, and cores, and what shared nodes actually mean.',
      'A hands-on first interactive job: requesting resources with salloc, running commands on the allocated node, checking status with squeue, and exiting cleanly.',
    ],
  },
  {
    title: 'Workshop 2 — Doing the work: editing files and running jobs',
    time: '1.5 hours (60 min instruction + 30 min Q&A)',
    goal: 'Write and edit files on the cluster and submit a first computational job through Slurm.',
    topics: [
      'Connecting and editing with VS Code Remote-SSH, and initializing a project in the remote Explorer.',
      'The anatomy of a Slurm batch script: the shebang, SBATCH directives (job name, nodes/tasks, walltime, partition, output/error, mail), and structuring scripts with clear, commented sections.',
      'Submitting and managing jobs (sbatch, squeue, scancel, sacct) from the integrated terminal, and reading Slurm output files.',
      'Using GitHub Copilot as an interpreter \u2014 generating commands from natural language, explaining cryptic errors, and lowering the cognitive load of memorizing syntax.',
    ],
  },
  {
    title: 'Workshop 3 — Scaling up: software, version control, and fine-tuning',
    time: '1.5 hours (60 min instruction + 30 min Q&A)',
    goal: 'Access software, organize a research workflow, and understand the pathway to running your own models.',
    topics: [
      'Environment modules (module avail / load / list / purge) to manage software accessibly.',
      'GPU computing basics: CPU vs GPU, requesting GPU resources in a batch script, and checking status with nvidia-smi.',
      'Research workflow development: project structure (data / scripts / results) and file transfer via VS Code or rsync.',
      'A conceptual path to fine-tuning a model end to end \u2014 preparing a Python script, writing a Slurm job that loads modules and requests a GPU, submitting, monitoring, and analyzing results.',
      'The GUI complement: Open OnDemand for file management and interactive sessions, evaluated for screen reader navigation and keyboard shortcuts.',
    ],
  },
]

const frameworks = [
  {
    heading: 'Universal Design for Learning (UDL)',
    body: 'The three UDL principles are built in from the outset rather than bolted on. Multiple means of representation show up as verbal analogies and multi-format materials ("verbalize, don\u2019t just visualize"). Multiple means of action and expression appear as the command-line and Open OnDemand options plus hands-on exercises across assistive technologies. Multiple means of engagement come from the problem-focused framing, the community of practice, and the scaffolded three-part structure.',
  },
  {
    heading: 'Constructivism',
    body: 'Participants build a mental model of an HPC system through experience rather than memorizing a command list. The hands-on exercises \u2014 making directories, navigating, writing and submitting a real Slurm script \u2014 are the experiences through which that understanding is constructed, and the try-listen-decide loop is constructivism in action.',
  },
  {
    heading: 'Andragogy (adult learning theory)',
    body: 'The design answers Knowles\u2019 conditions for adult learners: the problem-focused approach explains the "why," support for different tools respects self-direction, the exercises are experiential, and the whole curriculum is of immediate value to researchers who need to use Delta.',
  },
]

const instructorPractices = [
  'Pace slower than feels necessary, leaving ample time to type commands and listen to output.',
  'Narrate every command explicitly ("I am typing L S space dash L") instead of "I\u2019ll list the files."',
  'Avoid ambiguous language like "over here" or "like you see"; use concrete references such as "in your home directory" or "the first column of the ls -l output."',
  'Provide an accessible plain-text cheat sheet of key commands with a short description for each session.',
]

const DatedRow = ({ period, children, mutedColor }) => (
  <Flex justify="space-between" align="flex-start" gap={4}>
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

const CurriculumPanel = ({ title, children }) => (
  <AccordionItem border="none" borderTopWidth="1px" borderColor="border.default">
    <AccordionButton px={0} py={3} _hover={{ bg: 'transparent' }}>
      <Box flex="1" textAlign="left" fontWeight="semibold">
        {title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel px={0} pb={4} pt={0}>
      {children}
    </AccordionPanel>
  </AccordionItem>
)

const Teaching = () => {
  const mutedColor = useColorModeValue('text.muted', 'text.muted')

  return (
    <Layout
      title="Teaching"
      description="Teaching and mentorship by Omar Khan, including an accessible HPC workshop series for blind and low-vision researchers (primary instructor; advised by Dr. JooYoung Seo) and course appointments at UIUC."
      canonicalPath="/teaching"
    >
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
        <PageNav sections={sections} />
        <Box flex={1} minW={0}>
          <Heading as="h1" variant="section-title" mb={4} id="teaching-overview">
            Teaching and mentorship
          </Heading>
          <Paragraph>
            I teach and mentor across accessibility-focused workshops and CS
            courses at UIUC. My most recent teaching design work is an accessible
            high-performance computing (HPC) workshop series for blind and
            low-vision researchers; I have also served as a graduate teaching
            assistant and undergraduate course assistant across several CS
            courses, and I mentor an MCS student.
          </Paragraph>

          <Section delay={0.1}>
            <Divider my={6} />
            <Heading as="h2" id="teaching-workshop" variant="section-title">
              Accessible HPC workshop series
            </Heading>
            <Paragraph>
              As primary instructor, advised by{' '}
              <Link href="http://jooyoungseo.me/" isExternal>
                Dr. JooYoung Seo
              </Link>
              , I designed and taught a three-part workshop series that introduces
              blind and low-vision (BLV) researchers to the NCSA Delta cluster. It
              grew out of a simple gap: HPC is increasingly essential to modern
              research, but its tooling and documentation assume a sighted user by
              default. The first edition ran March 30 \u2013 April 1, 2026, with 15
              participants.
            </Paragraph>
            <Paragraph>
              The curriculum is grounded in Universal Design for Learning,
              constructivism, and adult learning theory. Expand a section below for
              the full design detail.
            </Paragraph>

            <Accordion allowMultiple reduceMotion mt={2}>
              <CurriculumPanel title="Workshop philosophy">
                <Paragraph>
                  The curriculum rests on four principles that keep the learning
                  environment effective and empowering:
                </Paragraph>
                <List spacing={4} mt={2}>
                  {principles.map((item) => (
                    <ListItem key={item.heading}>
                      <Text fontWeight="semibold">{item.heading}</Text>
                      <Text color={mutedColor}>{item.body}</Text>
                    </ListItem>
                  ))}
                </List>
                <Paragraph>
                  Participants also receive a pre-workshop checklist a week ahead
                  \u2014 screen reader and terminal setup, SSH client, and
                  ACCESS/NCSA account activation \u2014 so everyone can start
                  hands-on from the first session.
                </Paragraph>
              </CurriculumPanel>

              <CurriculumPanel title="Three-part series">
                <Paragraph>
                  The series is scaffolded from foundational skills to
                  goal-oriented research tasks, so each session builds on the last.
                </Paragraph>
                {workshops.map((workshop, index) => (
                  <Box key={workshop.title} mt={index === 0 ? 4 : 6}>
                    <Heading as="h3" fontSize={18} mb={1}>
                      {workshop.title}
                    </Heading>
                    <Text fontSize="sm" color={mutedColor} mb={2}>
                      {workshop.time}
                    </Text>
                    <Text mb={2}>
                      <Text as="span" fontWeight="semibold">
                        Goal:
                      </Text>{' '}
                      {workshop.goal}
                    </Text>
                    <List as="ul" listStyleType="disc" pl={6} spacing={1}>
                      {workshop.topics.map((topic) => (
                        <ListItem key={topic}>{topic}</ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </CurriculumPanel>

              <CurriculumPanel title="Theoretical frameworks">
                <Paragraph>
                  The design is grounded in three complementary learning theories,
                  which keep it rigorous rather than ad hoc:
                </Paragraph>
                <List spacing={4} mt={2}>
                  {frameworks.map((item) => (
                    <ListItem key={item.heading}>
                      <Text fontWeight="semibold">{item.heading}</Text>
                      <Text color={mutedColor}>{item.body}</Text>
                    </ListItem>
                  ))}
                </List>
              </CurriculumPanel>

              <CurriculumPanel title="Instructor practices">
                <Paragraph>
                  A few teaching habits do most of the accessibility work in a
                  live, non-visual session:
                </Paragraph>
                <List as="ul" listStyleType="disc" pl={6} spacing={2} mt={2}>
                  {instructorPractices.map((practice) => (
                    <ListItem key={practice}>{practice}</ListItem>
                  ))}
                </List>
              </CurriculumPanel>
            </Accordion>
          </Section>

          <Section delay={0.2}>
            <Divider my={6} />
            <Heading as="h2" id="teaching-appointments" variant="section-title">
              Course appointments
            </Heading>
            <List spacing={3}>
              {teachingAppointments.map((item) => (
                <ListItem key={`${item.course}-${item.period}`}>
                  <DatedRow period={item.period} mutedColor={mutedColor}>
                    <Text fontWeight="semibold">{item.role}</Text>
                    <Text fontSize="sm" color={mutedColor} mt={1}>
                      {item.course} · {item.org}
                    </Text>
                  </DatedRow>
                </ListItem>
              ))}
            </List>
            <Heading as="h3" fontSize={18} mt={6} mb={3}>
              Mentoring
            </Heading>
            <List spacing={3}>
              {mentoring.map((item) => (
                <ListItem key={item.detail}>
                  <DatedRow period={item.period} mutedColor={mutedColor}>
                    <Text>{item.detail}</Text>
                  </DatedRow>
                </ListItem>
              ))}
            </List>
            <Paragraph>
              For related research, see my{' '}
              <Link as={NextLink} href="/research">
                Research
              </Link>{' '}
              page.
            </Paragraph>
          </Section>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Teaching
