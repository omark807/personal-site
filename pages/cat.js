import { Container, Heading, Text, Box, VStack, Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'

const CatPage = () => {
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('gray.50', 'gray.800')

  return (
    <Layout title="Cat" canonicalPath="/cat">
      <Container maxW="container.md">
        <Box as="main" py={8}>
          <Heading as="h1" size="2xl" mb={4} textAlign="center">
            Daphne&apos;s world
          </Heading>
          <Text fontSize="lg" mb={8} textAlign="center">
            Daphne is her name, ruling over me is her game.
          </Text>

          <Box borderWidth={1} borderRadius="lg" p={6} bg={cardBg} textAlign="center">
            <VStack spacing={3}>
              <Text fontSize="4xl" aria-hidden="true">🐱</Text>
              <Heading as="h2" size="md">More cat content coming soon</Heading>
              <Text color={mutedColor}>
                I&apos;m building this section out with photos and stories about Daphne.
                Check back for updates, or follow along on my{' '}
                <Link as={NextLink} href="/life">Life</Link> page.
              </Text>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default CatPage
