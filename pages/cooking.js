import React from 'react';
import Head from 'next/head';
import { Container, Heading, Text, SimpleGrid, Box, VStack, Badge } from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const CookingPage = () => {
  return (
    <Layout title="Cooking">
      <Container maxW="container.xl">
        <Head>
          <title>my food</title>
          <meta name="description" content="Explore my culinary journey and favorite recipes" />
        </Head>

        <Box as="main" py={8}>
          <Heading as="h1" size="2xl" mb={4} textAlign="center">
            my food
          </Heading>
          <Text fontSize="lg" mb={8} textAlign="center">
            I like food, so I make it sometimes. 
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {[1, 2].map((index) => (
              <Box key={index} borderWidth={1} borderRadius="lg" p={6} bg="orange.50">
                <VStack align="start" spacing={3}>
                  <Heading as="h2" size="lg">Recipe Coming Soon</Heading>
                  <Badge colorScheme="orange">Delicious dish in the works!</Badge>
                  <Text color="gray.600" fontStyle="italic">
                    We&apos;re perfecting a new recipe. Check back soon for a culinary treat!
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

export default CookingPage;
