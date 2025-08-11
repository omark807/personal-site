import {
    Container,
    Heading,
    Link,
    Box,
    Text,
    VStack,
    SimpleGrid,
    Icon,
    Flex,
    Image,
    Button,
    HStack,
    Badge,
    useColorModeValue,
    Stack
} from '@chakra-ui/react'
import { FaAccessibleIcon, FaBrain, FaRobot, FaScroll, FaGavel, FaHeartbeat, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoSchoolSharp } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'

const InterestCard = ({ icon, title, description }) => {
    const cardBg = useColorModeValue('white', 'gray.800')
    const shadowColor = useColorModeValue('lg', 'dark-lg')
    const titleColor = useColorModeValue('gray.700', 'white')
    const descriptionColor = useColorModeValue('gray.600', 'gray.300')
    const iconBg = useColorModeValue('orange.50', 'orange.900')
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    
    return (
        <Box 
            p={6} 
            shadow={shadowColor}
            borderWidth="1px" 
            borderColor={borderColor}
            borderRadius="xl"
            bg={cardBg}
            _hover={{ 
                transform: 'translateY(-4px)', 
                shadow: 'xl',
                borderColor: useColorModeValue('orange.300', 'orange.400')
            }}
            transition="all 0.3s ease"
            cursor="pointer"
        >
            <Flex align="center" mb={3}>
                <Box
                    p={2}
                    borderRadius="lg"
                    bg={iconBg}
                    mr={3}
                >
                    <Icon as={icon} boxSize={6} color={useColorModeValue('orange.600', 'orange.300')} />
                </Box>
                <Heading as="h3" size="md" color={titleColor}>{title}</Heading>
            </Flex>
            <Text fontSize="sm" color={descriptionColor} lineHeight="tall">{description}</Text>
        </Box>
    )
}

/**
 * The main landing page for the website, containing a short intro and some quick bits about my interests. 
 * @returns the home page for the website
 */
const Page = () => {
    const bgGradient = useColorModeValue(
        'linear(to-r, orange.50, pink.50, yellow.50)',
        'linear(to-r, gray.800, gray.700, gray.800)'
    )
    
    const cardBg = useColorModeValue('white', 'gray.800')
    const shadowColor = useColorModeValue('lg', 'dark-lg')
    const heroTextColor = useColorModeValue('gray.600', 'gray.300')
    const aboutBg = useColorModeValue('orange.50', 'orange.900')
    const aboutTextColor = useColorModeValue('orange.700', 'orange.200')
    const aboutBorderColor = useColorModeValue('orange.500', 'orange.300')

    return(
        <Layout>
            <Container maxW="container.lg">
                <VStack spacing={16} alignItems="stretch">
                    {/* Enhanced Hero Section */}
                    <Box 
                        bgGradient={bgGradient}
                        borderRadius="2xl"
                        p={8}
                        textAlign="center"
                        position="relative"
                        overflow="hidden"
                    >
                        <VStack spacing={6}>
                            <Box>
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
                            </Box>
                            
                            <Badge
                                colorScheme="green"
                                borderRadius="full"
                                px={4}
                                py={2}
                                fontSize="sm"
                                fontWeight="semibold"
                            >
                                🎯 Available for Summer 2026 Internships
                            </Badge>
                            
                            <VStack spacing={3}>
                                <Heading as="h1" size="3xl" fontWeight="bold">
                                    Omar Khan
                                </Heading>
                                <Text fontSize="xl" fontWeight="medium" color={heroTextColor}>
                                    Ph.D. Candidate in Computer Science at UIUC
                                </Text>
                                <Text fontSize="lg" maxW="600px" lineHeight="tall" color={heroTextColor}>
                                    researcher and cat parent passionate about human-centered technology 
                                    design
                                </Text>
                                
                                <HStack spacing={4} pt={4}>
                                    <Badge colorScheme="orange" variant="subtle" px={3} py={1}>
                                        HCI Researcher
                                    </Badge>
                                    <Badge colorScheme="purple" variant="subtle" px={3} py={1}>
                                        Accessibility Advocate
                                    </Badge>
                                    <Badge colorScheme="green" variant="subtle" px={3} py={1}>
                                        PhD Candidate
                                    </Badge>
                                </HStack>
                            </VStack>

                            <HStack spacing={4} pt={4}>
                                <NextLink href="/about" passHref>
                                    <Button
                                        as="a"
                                        colorScheme="orange"
                                        size="lg"
                                        rightIcon={<ChevronRightIcon />}
                                        _hover={{ transform: 'translateY(-2px)' }}
                                        transition="all 0.2s"
                                    >
                                        Learn More About Me
                                    </Button>
                                </NextLink>
                                <NextLink href="/research" passHref>
                                    <Button
                                        as="a"
                                        variant="outline"
                                        size="lg"
                                        _hover={{ transform: 'translateY(-2px)' }}
                                        transition="all 0.2s"
                                    >
                                        View My Research
                                    </Button>
                                </NextLink>
                            </HStack>

                            <HStack spacing={6} pt={2}>
                                <Link href="mailto:omark807@gmail.com" isExternal>
                                    <Icon as={FaEnvelope} boxSize={6} color={useColorModeValue('gray.600', 'gray.400')} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }} />
                                </Link>
                                <Link href="https://linkedin.com/in/omark807" isExternal>
                                    <Icon as={FaLinkedin} boxSize={6} color={useColorModeValue('gray.600', 'gray.400')} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }} />
                                </Link>
                                <Link href="https://github.com/omark807" isExternal>
                                    <Icon as={FaGithub} boxSize={6} color={useColorModeValue('gray.600', 'gray.400')} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }} />
                                </Link>
                                <Link href="https://scholar.google.com/citations?user=T6f-cucAAAAJ&hl=en" isExternal>
                                    <Icon as={IoSchoolSharp} boxSize={6} color={useColorModeValue('gray.600', 'gray.400')} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }} />
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>

                    {/* Current Status Section */}
                    <Section>
                        <Box bg={cardBg} p={6} borderRadius="xl" shadow={shadowColor} borderWidth="1px" borderColor={useColorModeValue('gray.200', 'gray.600')}>
                            <Heading as="h2" size="lg" mb={4} color={useColorModeValue('orange.500', 'orange.300')}>
                                Currently, I am...
                            </Heading>
                            <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
                                <Box flex={1}>
                                    <Text fontWeight="semibold" mb={2} color={useColorModeValue('gray.700', 'white')}>🔬 Re-imagining scientific workflows</Text>
                                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
                                        Investigating <i>accessibility</i> and <i>usability</i> of existing scientific tools alongside the blind and low-vision community
                                    </Text>
                                </Box>
                                <Box flex={1}>
                                    <Text fontWeight="semibold" mb={2} color={useColorModeValue('gray.700', 'white')}>💼 Seeking internship opportunities</Text>
                                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
                                        Actively looking for research (research scientist, UX research), data science, and software engineering internships for Summer 2026; I am especially interested in opportunities within industry, non-profits, NGOs, and think tanks!
                                    </Text>
                                </Box>
                                <Box flex={1}>
                                    <Text fontWeight="semibold" mb={2} color={useColorModeValue('gray.700', 'white')}>📚 learning about learning...about technology</Text>
                                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
                                        Understanding the latest developments in human-AI interaction and assistive technologies, especially how different populations learn about and engage with AI.
                                    </Text>
                                </Box>
                            </Stack>
                        </Box>
                    </Section>

                    {/* About Section */}
                    <Section>
                        <Heading as="h2" size="xl" mb={4} color={useColorModeValue('gray.700', 'white')}>
                            hello!
                        </Heading>
                        <Paragraph>
                            I am a fourth-year Ph.D. candidate studying Computer Science at the <Link href='https://illinois.edu/' target='_blank'>University of Illinois
                            Urbana-Champaign (UIUC)</Link> advised by <Link href='https://jooyoungseo.github.io/' target='_blank'>Dr. JooYoung Seo</Link> in the <Link href='https://xabilitylab.ischool.illinois.edu/' target='_blank'>(x)Ability Design Lab</Link>. My interests lie broadly in human-computer interaction (HCI), 
                            and I am especially interested in the intersection of accessibility, human-AI interaction, and education, particularly how we can craft digital experiences that responsibly make use of emerging technologies, particularly with and for the blind and low-vision (BLV) community.
                        </Paragraph>
                        <Box 
                            mt={6} 
                            p={4} 
                            bg={aboutBg}
                            borderLeft="4px solid" 
                            borderColor={aboutBorderColor}
                            borderRadius="md"
                        >
                            <Text fontWeight="bold" color={aboutTextColor}>
                                🚀 I am actively seeking research-oriented and engineering-oriented internships for summer 2026!
                            </Text>
                        </Box>
                    </Section>

                    {/* Research Interests Section */}
                    <Section>
                        <Heading as="h2" size="xl" mb={6} textAlign="center" color={useColorModeValue('gray.700', 'white')}>
                            Current Research Interests
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            <InterestCard 
                                icon={FaAccessibleIcon}
                                title="Accessibility/Assistive Technologies"
                                description="Investigating the ease of use of existing digital platforms for those with disabilities, particularly the blind and low-vision (BLV) community"
                            />
                            <InterestCard 
                                icon={FaScroll}
                                title="Computing Education"
                                description="Exploring how we can make computing education more accessible and inclusive for those with disabilities, particularly the blind and low-vision (BLV) community"
                            />
                            <InterestCard 
                                icon={FaBrain}
                                title="Affective Computing"
                                description="Understanding the underlying emotions that those with disabilities and other historically underrepresented groups face in navigating the digital world"
                            />
                            <InterestCard 
                                icon={FaRobot}
                                title="Human-Centered AI"
                                description="Designing intelligent and accessible user experiences that leverage emerging technologies such as large language models (LLMs), and understanding user sentiment about personalized systems"
                            />
                        </SimpleGrid>
                    </Section>

                    {/* Other Academic Interests Section */}
                    <Section>
                        <Heading as="h2" size="xl" mb={6} textAlign="center" color={useColorModeValue('gray.700', 'white')}>
                            Other Academic Interests
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            <InterestCard
                                icon={FaGavel}
                                title="Tech Law and Policy"
                                description="Examining past, present, and future tech/Internet laws and policies across the world and identifying how/why they are shaped the way they are"
                            />
                            <InterestCard
                                icon={FaHeartbeat}
                                title="Mental Health and Well-Being Technologies" 
                                description="Exploring the rapid growth and development of digital mental health (DMH) tracking services and their lack of consideration for the broader disability community"
                            />
                        </SimpleGrid>
                    </Section>
                </VStack>
            </Container>
        </Layout>
    )
}

export default Page