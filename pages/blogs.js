import React from 'react';
import Head from 'next/head';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Badge } from '@chakra-ui/react';

const BlogsPage = () => {
  return (
    <Container maxW="container.xl">
      <Head>
        <title>my blogs</title>
        <meta name="description" content="some thoughts I have about things" />
      </Head>

      <Box as="main" py={8}>
        <Heading as="h1" size="2xl" mb={6}>my blog</Heading>
        <Text fontSize="lg" mb={6}>I think sometimes -- read those thoughts below.</Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {[1, 2].map((index) => (
            <Box key={index} borderWidth={1} borderRadius="lg" p={6} bg="gray.50">
              <VStack align="start" spacing={3}>
                <Heading as="h2" size="lg">Coming Soon</Heading>
                <Badge colorScheme="blue">TBD</Badge>
                <Text color="gray.500" fontStyle="italic">
                  Stay tuned!
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default BlogsPage;
