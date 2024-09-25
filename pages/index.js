import {
    Container,
    Heading,
    Link,
    Box,
    Text,
    VStack,
    SimpleGrid,
    Icon,
    Flex
} from '@chakra-ui/react'
import { FaAccessibleIcon, FaBrain, FaRobot, FaHeartbeat } from 'react-icons/fa'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'

const InterestCard = ({ icon, title, description }) => (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Flex align="center" mb={2}>
            <Icon as={icon} boxSize={6} mr={2} color="blue.500" />
            <Heading as="h3" size="md">{title}</Heading>
        </Flex>
        <Text fontSize="sm">{description}</Text>
    </Box>
)

/**
 * The main landing page for the website, containing a short intro and some quick bits about my interests. 
 * @returns the home page for the website
 */
const Page = () => {
    return(
        <Layout>
            <Container maxW="container.md">
                <VStack spacing={10} alignItems="stretch">
                    <Box textAlign="center" py={10}>
                        <Heading as="h1" size="2xl" mb={2}>
                            Omar Khan
                        </Heading>
                        <Text fontSize="xl" fontWeight="medium" color="gray.600">
                            researcher in training, human in the making
                        </Text>
                    </Box>

                    <Section>
                        <Heading as="h2" size="xl" mb={4}>
                            hello!
                        </Heading>
                        <Paragraph>
                            I am a third-year PhD student studying Computer Science at the <Link href='https://illinois.edu/' target='_blank'>University of Illinois
                            Urbana-Champaign (UIUC)</Link> advised by <Link href='https://jooyoungseo.github.io/' target='_blank'>Dr. JooYoung Seo</Link> in the <Link href='https://xabilitylab.ischool.illinois.edu/' target='_blank'>(x)Ability Design Lab</Link>. My interests lie broadly in human-computer interaction (HCI), 
                            and I am especially interested in the intersection of accessibility and mental health, and how we can create inclusive digital mental health services that responsibly make use of emerging technologies.
                        </Paragraph>
                        <Text fontWeight="bold" mt={4} color="blue.500">
                            I am actively seeking internships for summer 2025!
                        </Text>
                    </Section>

                    <Section>
                        <Heading as="h2" size="xl" mb={6}>
                            Current Research Interests
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            <InterestCard 
                                icon={FaAccessibleIcon}
                                title="Accessibility/Assistive Technologies"
                                description="Investigating the ease of use of existing digital platforms for those with disabilities, particularly the blind and low-vision (BLV) community"
                            />
                            <InterestCard 
                                icon={FaHeartbeat}
                                title="Mental Health and Well-being Technologies"
                                description="Exploring the rapid growth and development of digital mental health (DMH) tracking services and their lack of consideration for the broader disability community"
                            />
                            <InterestCard 
                                icon={FaBrain}
                                title="Affective Computing"
                                description="Understanding the underlying emotions that those with disabilities and other historically underrepresented groups face in navigating the digital world"
                            />
                            <InterestCard 
                                icon={FaRobot}
                                title="Human-centered AI"
                                description="Designing intelligent and accessible user experiences that leverage emerging technologies such as large language models (LLMs), and understanding user sentiment about personalized systems"
                            />
                        </SimpleGrid>
                    </Section>

                    <Section>
                        <Heading as="h2" size="xl" mb={4}>
                            Other Academic Interests
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                                <Heading as="h3" size="md" mb={2}>Tech Law and Policy</Heading>
                                <Text fontSize="sm">Examining past, present, and future tech/Internet laws and policies across the world and identifying how/why they are shaped the way they are</Text>
                            </Box>
                            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                                <Heading as="h3" size="md" mb={2}>Usable Security and Privacy</Heading>
                                <Text fontSize="sm">Examining human factors in security/privacy and including those from historically underrepresented populations in conversations regarding security/privacy design; considering how security and privacy-related topics are conveyed to these groups</Text>
                            </Box>
                        </SimpleGrid>
                    </Section>
                </VStack>
            </Container>
        </Layout>
    )
}

export default Page