import React from 'react';
import Head from 'next/head';
import { Container, Heading, Text, SimpleGrid, Box, VStack, Badge } from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const CatPage = () => {
  return (
    <Layout title="Cat">
      <Container maxW="container.xl">
        <Head>
          <title>Meow World | Cat Content</title>
          <meta name="description" content="Explore the wonderful world of cats and learn fascinating feline facts" />
        </Head>

        <Box as="main" py={8}>
          <Heading as="h1" size="2xl" mb={4} textAlign="center" textTransform="lowercase">
            daphne&apos;s world
          </Heading>
          <Text fontSize="lg" mb={8} textAlign="center">
            Daphne is her name, ruling over me is her game. 
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {[1, 2].map((index) => (
              <Box key={index} borderWidth={1} borderRadius="lg" p={6} bg="gray.50">
                <VStack align="start" spacing={3}>
                  <Heading as="h2" size="lg">cat content soon</Heading>
                  <Badge colorScheme="purple">TBD</Badge>
                  <Text color="gray.600" fontStyle="italic">
                    hang tight!
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

export default CatPage;

