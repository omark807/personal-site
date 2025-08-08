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
import { FaAccessibleIcon, FaBrain, FaRobot, FaScroll, FaGavel, FaHeartbeat, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'

const InterestCard = ({ icon, title, description }) => {
    const cardBg = useColorModeValue('white', 'gray.800')
    const shadowColor = useColorModeValue('lg', 'dark-lg')
    
    return (
        <Box 
            p={6} 
            shadow={shadowColor}
            borderWidth="1px" 
            borderRadius="xl"
            bg={cardBg}
            _hover={{ 
                transform: 'translateY(-4px)', 
                shadow: 'xl',
                borderColor: 'blue.300'
            }}
            transition="all 0.3s ease"
            cursor="pointer"
        >
            <Flex align="center" mb={3}>
                <Box
                    p={2}
                    borderRadius="lg"
                    bg="blue.50"
                    mr={3}
                >
                    <Icon as={icon} boxSize={6} color="blue.500" />
                </Box>
                <Heading as="h3" size="md" color="gray.700">{title}</Heading>
            </Flex>
            <Text fontSize="sm" color="gray.600" lineHeight="tall">{description}</Text>
        </Box>
    )
}

/**
 * The main landing page for the website, containing a short intro and some quick bits about my interests. 
 * @returns the home page for the website
 */
const Page = () => {
    const bgGradient = useColorModeValue(
        'linear(to-r, blue.50, purple.50, pink.50)',
        'linear(to-r, blue.900, purple.900, pink.900)'
    )
    
    const cardBg = useColorModeValue('white', 'gray.800')
    const shadowColor = useColorModeValue('lg', 'dark-lg')

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
                                <Text fontSize="xl" fontWeight="medium" color="gray.600">
                                    PhD Candidate in Computer Science at UIUC
                                </Text>
                                <Text fontSize="lg" maxW="600px" lineHeight="tall">
                                    researcher, (over)thinker, and cat parent passionate about making technology 
                                    accessible and inclusive for everyone
                                </Text>
                                
                                <HStack spacing={4} pt={4}>
                                    <Badge colorScheme="blue" variant="subtle" px={3} py={1}>
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
                                        colorScheme="blue"
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
                                <Link href="mailto:okhan5@illinois.edu" isExternal>
                                    <Icon as={FaEnvelope} boxSize={6} color="gray.600" _hover={{ color: 'blue.500' }} />
                                </Link>
                                <Link href="https://linkedin.com/in/omar-khan-profile" isExternal>
                                    <Icon as={FaLinkedin} boxSize={6} color="gray.600" _hover={{ color: 'blue.500' }} />
                                </Link>
                                <Link href="https://github.com/omark807" isExternal>
                                    <Icon as={FaGithub} boxSize={6} color="gray.600" _hover={{ color: 'blue.500' }} />
                                </Link>
                                <Link href="https://twitter.com/your_handle" isExternal>
                                    <Icon as={FaTwitter} boxSize={6} color="gray.600" _hover={{ color: 'blue.500' }} />
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>

                    {/* Current Status Section */}
                    <Section>
                        <Box bg={cardBg} p={6} borderRadius="xl" shadow={shadowColor}>
                            <Heading as="h2" size="lg" mb={4} color="blue.500">
                                Currently Working On
                            </Heading>
                            <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
                                <Box flex={1}>
                                    <Text fontWeight="semibold" mb={2}>🔬 PhD Research</Text>
                                    <Text fontSize="sm" color="gray.600">
                                        Investigating accessibility in AI-powered educational tools for the blind and low-vision community
                                    </Text>
                                </Box>
                                <Box flex={1}>
                                    <Text fontWeight="semibold" mb={2}>💼 Seeking Opportunities</Text>
                                    <Text fontSize="sm" color="gray.600">
                                        Looking for research and engineering internships for Summer 2026
                                    </Text>
                                </Box>
                                <Box flex={1}>
                                    <Text fontWeight="semibold" mb={2}>📚 Learning</Text>
                                    <Text fontSize="sm" color="gray.600">
                                        Exploring the latest developments in human-AI interaction and assistive technologies
                                    </Text>
                                </Box>
                            </Stack>
                        </Box>
                    </Section>

                    {/* About Section */}
                    <Section>
                        <Heading as="h2" size="xl" mb={4}>
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
                            bg="blue.50" 
                            borderLeft="4px solid" 
                            borderColor="blue.500" 
                            borderRadius="md"
                        >
                            <Text fontWeight="bold" color="blue.700">
                                🚀 I am actively seeking research-oriented and engineering-oriented internships for summer 2026!
                            </Text>
                        </Box>
                    </Section>

                    <Section>
                        <Heading as="h2" size="xl" mb={6} textAlign="center">
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

                    <Section>
                        <Heading as="h2" size="xl" mb={6} textAlign="center">
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