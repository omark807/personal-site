import {
  Container,
  Heading,
  Text,
  Box,
  Divider,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const BlogPost = () => {
  const dateFg = useColorModeValue('gray.500', 'gray.400')

  return (
    <Layout title="My Steps (and Stumbles) Into Research" canonicalPath="/blog/my-pathway-to-ux-research">
      <Container as="article" maxW="container.md">
        <Box py={4}>
          <Heading as="h1" size="xl" mb={2}>
            My Steps (and Stumbles) Into Research
          </Heading>
          <Text fontSize="sm" color={dateFg} mb={6}>
            In progress
          </Text>
          <Divider mb={6} />

          <Paragraph>
            This post is being drafted. For now, you can read about my background and research
            direction on my <Link as={NextLink} href="/about">About</Link> page, scan credentials
            on <Link as={NextLink} href="/experience">Experience</Link>, or follow my writing on{' '}
            <Link href="https://substack.com/@winterydaphne" isExternal>Substack</Link>.
          </Paragraph>
        </Box>
      </Container>
    </Layout>
  )
}

export default BlogPost
