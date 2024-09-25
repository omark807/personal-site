import { Container, Heading, SimpleGrid, Divider, Box, Text } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Link from 'next/link';

// import blogsImg from '../public/images/blog.webp';
// import booksImg from '../public/images/book.webp';
// import cookingImg from '../public/images/cooking.webp';


/**
 * Page where users can find information about personal interests and passions.
 * @returns a page showing links to personal interests and passions
 */

const LifePage = () => (
  <Layout title="Life">
    <Container>
      <Heading as="h1" fontSize={24} mb={4} textAlign="center" textTransform="lowercase">
        my life
      </Heading>
      <Heading as="h2" fontSize={16} mb={8} textAlign="center" textTransform="lowercase">
        some of my interests and passions, from my love for cats to my adventures in cooking.
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        <Section delay={0.3}>
          <Link href="/blogs" passHref>
            <Box as="a" p={5} borderWidth={1} borderRadius="lg">
              <Heading as="h3" fontSize={20} mb={2}>Blogs</Heading>
              <Text>blogs: scribbling thoughts!</Text>
            </Box>
          </Link>
        </Section>
        <Section delay={0.4}>
          <Link href="/cooking" passHref>
            <Box as="a" p={5} borderWidth={1} borderRadius="lg">
              <Heading as="h3" fontSize={20} mb={2}>Cooking</Heading>
              <Text>cooking: whipping up magic!</Text>
            </Box>
          </Link>
        </Section>
        <Section delay={0.5}>
          <Link href="/cat" passHref>
            <Box as="a" p={5} borderWidth={1} borderRadius="lg">
              <Heading as="h3" fontSize={20} mb={2}>Cat</Heading>
              <Text>cat content</Text>
            </Box>
          </Link>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default LifePage;