import { Container, Heading, Text, Box, VStack, Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'

const CookingPage = () => {
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('orange.50', 'gray.800')

  return (
    <Layout title="Cooking" canonicalPath="/cooking">
      <Container maxW="container.md">
        <Box as="main" py={8}>
          <Heading as="h1" size="2xl" mb={4} textAlign="center">
            My food
          </Heading>
          <Text fontSize="lg" mb={8} textAlign="center">
            I like food, so I make it sometimes.
          </Text>

          <Box borderWidth={1} borderRadius="lg" p={6} bg={cardBg} textAlign="center">
            <VStack spacing={3}>
              <Text fontSize="4xl" aria-hidden="true">🍳</Text>
              <Heading as="h2" size="md">Recipes in progress</Heading>
              <Text color={mutedColor}>
                I&apos;m collecting favorite recipes to share here. For now, cooking is listed
                among my interests on my <Link as={NextLink} href="/about">About</Link> page.
              </Text>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default CookingPage
