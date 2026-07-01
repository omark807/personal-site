import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Badge,
  Button,
  HStack,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'

const BlogsPage = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Layout title="Blogs" canonicalPath="/blogs">
        <Box as="main" py={8}>
          <VStack spacing={6} align="center" mb={10}>
            <Heading as="h1" size="2xl" textAlign="center">My blog</Heading>
            <Text fontSize="lg" textAlign="center" maxW="600px">
              I share longer-form writing on Substack. Website posts will appear here as they are published.
            </Text>

            <HStack spacing={4} mt={6} flexWrap="wrap" justify="center">
              <Button
                as={Link}
                href="https://substack.com/@winterydaphne?utm_source=user-menu"
                isExternal
                size="lg"
                variant="brand"
                rightIcon={<Icon as={FaExternalLinkAlt} />}
                _hover={{ textDecoration: 'none', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                Visit My Substack
              </Button>
              <Button
                as={Link}
                href="https://winterydaphne.substack.com/subscribe?next=https%3A%2F%2Fsubstack.com%2F%40winterydaphne%3Futm_source%3Duser-menu&utm_source=profile-page&utm_medium=web&utm_campaign=substack_profile&just_signed_up=true"
                isExternal
                variant="brandOutline"
                size="lg"
                rightIcon={<Icon as={FaNewspaper} />}
                _hover={{ textDecoration: 'none', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                Subscribe
              </Button>
            </HStack>
          </VStack>

          <Heading as="h2" size="xl" mb={6} textAlign="center">Website posts</Heading>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6} maxW="md" mx="auto">
            <Box
              borderWidth={1}
              borderRadius="lg"
              p={6}
              bg={cardBg}
              borderColor={borderColor}
            >
              <VStack align="start" spacing={3}>
                <Heading as="h3" size="lg">My Steps (and Stumbles) Into Research</Heading>
                <Badge colorScheme="gray" variant="outline">In progress</Badge>
                <Text color={mutedColor}>
                  I will (eventially) post this. In the meantime, read about mme on my <Link as={NextLink} href="/about">About</Link> page.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
    </Layout>
  )
}

export default BlogsPage
