import {
  Container,
  Heading,
  Text,
  Box,
  Divider,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const content = `
This post is a work in progress. Check back soon!
`

const BlogPost = () => {
  const dateFg = useColorModeValue('gray.500', 'gray.400')

  return (
    <Layout title="My Steps (and Stumbles) Into Research">
      <Container as="article" maxW="container.md">
        <Box py={4}>
          <Heading as="h1" size="xl" mb={2}>
            My Steps (and Stumbles) Into Research
          </Heading>
          <Text fontSize="sm" color={dateFg} mb={6}>
            Coming soon
          </Text>
          <Divider mb={6} />

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ _node, ...props }) => <Paragraph {...props} />,
              a: ({ _node, ...props }) => <Link isExternal {...props} />,
              h2: ({ _node, ...props }) => (
                <Heading as="h2" size="lg" mt={8} mb={3} {...props} />
              ),
              h3: ({ _node, ...props }) => (
                <Heading as="h3" size="md" mt={6} mb={2} {...props} />
              ),
              ul: ({ _node, ...props }) => (
                <ul style={{ paddingLeft: '1.2em', marginBottom: '1em' }} {...props} />
              ),
              ol: ({ _node, ...props }) => (
                <ol style={{ paddingLeft: '1.2em', marginBottom: '1em' }} {...props} />
              ),
              blockquote: ({ _node, ...props }) => (
                <Box
                  as="blockquote"
                  borderLeftWidth="4px"
                  borderColor="gray.300"
                  pl={4}
                  py={2}
                  my={4}
                  fontStyle="italic"
                  {...props}
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </Box>
      </Container>
    </Layout>
  )
}

export default BlogPost
