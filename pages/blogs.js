import React from 'react';
import Head from 'next/head';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  SimpleGrid, 
  Badge, 
  Button, 
  HStack,
  Icon,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';
import Layout from '../components/layouts/article';

const BlogsPage = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  
  return (
    <Layout title="Blogs">
      <Container maxW="container.lg">
        <Head>
          <title>my blogs</title>
          <meta name="description" content="some thoughts I have about things" />
        </Head>

        <Box as="main" py={8}>
          <VStack spacing={6} align="center" mb={10}>
            <Heading as="h1" size="2xl" textAlign="center">my blog</Heading>
            <Text fontSize="lg" textAlign="center" maxW="600px">
              I think sometimes -- read those thoughts below. You can find my posts here on my website 
              or subscribe to my Substack for the latest updates.
            </Text>
            
            {/* Substack Call-to-Action */}
            <HStack spacing={4} mt={6}>
              <Button
                as={Link}
                href="https://substack.com/@winterydaphne?utm_source=user-menu"
                isExternal
                colorScheme="orange"
                size="lg"
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
                variant="outline"
                colorScheme="orange"
                size="lg"
                rightIcon={<Icon as={FaNewspaper} />}
                _hover={{ textDecoration: 'none', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                Subscribe
              </Button>
            </HStack>
          </VStack>

          {/* Website Blog Posts */}
          <Heading as="h2" size="xl" mb={6} textAlign="center">Website Posts</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {[1, 2].map((index) => (
              <Box 
                key={index} 
                borderWidth={1} 
                borderRadius="lg" 
                p={6} 
                bg={cardBg}
                borderColor={borderColor}
                _hover={{ transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                <VStack align="start" spacing={3}>
                  <Heading as="h3" size="lg">Coming Soon</Heading>
                  <Badge colorScheme="orange">TBD</Badge>
                  <Text color="gray.500" fontStyle="italic">
                    Stay tuned!
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  );
};

export default BlogsPage;
