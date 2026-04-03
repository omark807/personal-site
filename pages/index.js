import {
  Container,
  Heading,
  Link,
  Box,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Image,
  Button,
  HStack,
  Badge,
  useColorModeValue,
  Stack,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoSchoolSharp } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const PathwayCard = ({ title, description, cta, href }) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const titleColor = useColorModeValue('gray.700', 'white')
  const descriptionColor = useColorModeValue('gray.600', 'gray.300')
  const primaryBg = 'orange.700'
  const primaryColor = 'white'
  const primaryHoverBg = 'orange.800'
  const primaryActiveBg = 'orange.900'

  return (
    <Box p={6} borderRadius="xl" borderWidth="1px" borderColor={borderColor} bg={cardBg} transition="all 0.2s" _hover={{ borderColor: useColorModeValue('orange.300', 'orange.400') }} _focusWithin={{ borderColor: useColorModeValue('orange.400', 'orange.300') }}>
      <Heading as="h3" size="md" mb={3} color={titleColor}>
        {title}
      </Heading>
      <Text fontSize="sm" color={descriptionColor} mb={4}>
        {description}
      </Text>
      <Button
        as={NextLink}
        href={href}
        size="sm"
        rightIcon={<ChevronRightIcon />}
        w="full"
        h="auto"
        py={2.5}
        whiteSpace="normal"
        textAlign="center"
        lineHeight="short"
        bg={primaryBg}
        color={primaryColor}
        _hover={{ bg: primaryHoverBg }}
        _active={{ bg: primaryActiveBg }}
      >
        {cta}
      </Button>
    </Box>
  )
}

const FeaturedProjectCard = ({ title, role, summary, outcome, href }) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const mutedColor = useColorModeValue('gray.600', 'gray.300')
  const secondaryColor = useColorModeValue('orange.700', 'orange.200')
  const secondaryBorderColor = useColorModeValue('orange.700', 'orange.200')
  const secondaryHoverBg = useColorModeValue('orange.50', 'whiteAlpha.200')

  return (
    <Box p={6} borderRadius="xl" borderWidth="1px" borderColor={borderColor} bg={cardBg} transition="all 0.2s" _hover={{ borderColor: useColorModeValue('orange.300', 'orange.400') }} _focusWithin={{ borderColor: useColorModeValue('orange.400', 'orange.300') }}>
      <HStack justify="space-between" align="start" mb={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Badge colorScheme={role === 'Lead' ? 'blue' : 'purple'} textTransform="none">
          {role}
        </Badge>
      </HStack>
      <Text fontSize="sm" color={mutedColor} mb={2}>
        {summary}
      </Text>
      <Text fontSize="sm" mb={4}>
        <strong>Outcome:</strong> {outcome}
      </Text>
      <Button
        as={NextLink}
        href={href}
        size="sm"
        variant="outline"
        color={secondaryColor}
        borderColor={secondaryBorderColor}
        _hover={{ bg: secondaryHoverBg }}
      >
        View case study
      </Button>
    </Box>
  )
}

const Page = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, orange.50, pink.50, yellow.50)',
    'linear(to-r, gray.800, gray.700, gray.800)'
  )
  const heroTextColor = useColorModeValue('gray.600', 'gray.300')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const primaryBg = 'orange.700'
  const primaryColor = 'white'
  const primaryHoverBg = 'orange.800'
  const primaryActiveBg = 'orange.900'
  const secondaryColor = useColorModeValue('orange.700', 'orange.200')
  const secondaryBorderColor = useColorModeValue('orange.700', 'orange.200')
  const secondaryHoverBg = useColorModeValue('orange.50', 'whiteAlpha.200')

  return (
    <Layout>
      <Container maxW="container.lg">
        <VStack spacing={14} alignItems="stretch">
          <Box bgGradient={bgGradient} borderRadius="2xl" p={8} textAlign="center">
            <VStack spacing={5}>
              <Image
                src="/profpic.JPG"
                alt="Omar Khan"
                borderRadius="full"
                boxSize="180px"
                objectFit="cover"
                border="4px solid"
                borderColor="white"
                shadow="xl"
                mx="auto"
                fallbackSrc="https://via.placeholder.com/180x180?text=OK"
              />

              {/* <Badge colorScheme="green" borderRadius="full" px={4} py={2} fontSize="sm">
                Available for Summer 2026 internships
              </Badge> */}

              <Heading as="h1" size="3xl" fontWeight="bold" id="page-title">
                Omar Khan
              </Heading>
              <Text fontSize="xl" fontWeight="medium" color={heroTextColor}>
                Mixed-methods UX researcher and PhD candidate
              </Text>
              <Text fontSize="lg" maxW="700px" lineHeight="tall" color={heroTextColor}>
                I design equitable digital tools with blind and low-vision communities across
                UX research, design research, product strategy, and academic collaboration.
              </Text>

              <HStack spacing={3} pt={2} flexWrap="wrap" justify="center">
                <Badge colorScheme="orange" variant="subtle" px={3} py={1}>
                  Accessible tooling for BLV researchers
                </Badge>
                <Badge colorScheme="purple" variant="subtle" px={3} py={1}>
                  Digital mental health access
                </Badge>
                <Badge colorScheme="green" variant="subtle" px={3} py={1}>
                  Mixed-methods UX research
                </Badge>
              </HStack>

              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={3}>
                <Button
                  as={NextLink}
                  href="/projects"
                  rightIcon={<ChevronRightIcon />}
                  bg={primaryBg}
                  color={primaryColor}
                  _hover={{ bg: primaryHoverBg }}
                  _active={{ bg: primaryActiveBg }}
                >
                  Explore Projects
                </Button>
                <Button
                  as={NextLink}
                  href="/research"
                  variant="outline"
                  color={secondaryColor}
                  borderColor={secondaryBorderColor}
                  _hover={{ bg: secondaryHoverBg }}
                >
                  View Publications
                </Button>
                <Button as={NextLink} href="/about" variant="ghost">
                  About Me
                </Button>
              </Stack>

              <HStack spacing={6} pt={2} role="list" aria-label="Social media links">
                <Link href="mailto:omark807@gmail.com" aria-label="Send email to Omar Khan (opens email client)" role="listitem">
                  <Icon as={FaEnvelope} boxSize={6} color={heroTextColor} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }} aria-hidden="true" />
                  <span className="sr-only">Email</span>
                </Link>
                <Link href="https://linkedin.com/in/omark807" isExternal aria-label="Visit Omar Khan's LinkedIn profile (opens in new tab)" role="listitem">
                  <Icon as={FaLinkedin} boxSize={6} color={heroTextColor} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }} aria-hidden="true" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://github.com/omark807" isExternal aria-label="Visit Omar Khan's GitHub profile (opens in new tab)" role="listitem">
                  <Icon as={FaGithub} boxSize={6} color={heroTextColor} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }} aria-hidden="true" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://scholar.google.com/citations?user=T6f-cucAAAAJ&hl=en" isExternal aria-label="Visit Omar Khan's Google Scholar profile (opens in new tab)" role="listitem">
                  <Icon as={IoSchoolSharp} boxSize={6} color={heroTextColor} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }} aria-hidden="true" />
                  <span className="sr-only">Google Scholar</span>
                </Link>
              </HStack>
            </VStack>
          </Box>

          <Section>
            <Heading as="h2" size="xl" mb={5}>
              Audience pathways
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              <PathwayCard
                title="For UX and design teams"
                description="See how I run accessible, mixed-method research and turn insights into clear design direction."
                cta="See UX case studies"
                href="/projects"
              />
              <PathwayCard
                title="For product leaders"
                description="Review projects that connect user needs, prioritization, and practical product outcomes."
                cta="View product-facing work"
                href="/projects"
              />
              <PathwayCard
                title="For academic collaborators"
                description="Explore publications, study designs, and ongoing research questions across HCI and accessibility."
                cta="Read research"
                href="/research"
              />
            </SimpleGrid>
          </Section>

          <Section>
            <Heading as="h2" size="xl" mb={5}>
              Featured projects
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              <FeaturedProjectCard
                title="QUARTZ"
                role="Lead"
                summary="How might BLV researchers independently explore qualitative visualizations?"
                outcome="Produced multimodal design guidelines and an open-source system informed by user studies."
                href="/works/quartz"
              />
              <FeaturedProjectCard
                title="Digital Mental Health and BLV"
                role="Lead"
                summary="What do BLV users need from digital mental health tracking tools?"
                outcome="Generated evidence-based recommendations for inclusive DMH product design."
                href="/works/dmh"
              />
              <FeaturedProjectCard
                title="MAIDR"
                role="Collaborator"
                summary="How can statistical charts be accessible across modalities and workflows?"
                outcome="Contributeed to usability studies with BLV participates to understand multimodal interaction with statistical charts."
                href="/works/maidr"
              />
            </SimpleGrid>
          </Section>

          <Section>
            <Box p={6} borderRadius="xl" borderWidth="1px" borderColor={borderColor} bg={cardBg} transition="all 0.2s" _hover={{ borderColor: useColorModeValue('orange.300', 'orange.400') }} _focusWithin={{ borderColor: useColorModeValue('orange.400', 'orange.300') }}>
              <Heading as="h2" size="lg" mb={4}>
                How I work
              </Heading>
              <UnorderedList spacing={3} pl={5}>
                <ListItem>I co-design <i>with</i> diverse stakeholders rather than designing <i>for</i> them.</ListItem>
                <ListItem>I prioritize accessibility from scoping through delivery, including non-visual interaction support.</ListItem>
                <ListItem>I combine rigorous methods with practical product recommendations teams can act on quickly.</ListItem>
                <ListItem> I colleaborate with cross-functional teams to deliver accessible products.</ListItem>
                <ListItem>I document trade-offs and reflect on what I would change in future iterations.</ListItem>
              </UnorderedList>
              {/* <List spacing={1} mt={4} fontSize="sm">
                <ListItem>
                  <b>Looking for Summer 2026 opportunities in UX research, design research, and product research!</b>
                </ListItem>
              </List> */}
            </Box>
          </Section>
        </VStack>
      </Container>
    </Layout>
  )
}

export default Page