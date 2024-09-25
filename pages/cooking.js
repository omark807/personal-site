import React from 'react';
import Head from 'next/head';
import { Container, Heading, Text, VStack, Box, Image } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';

const CookingPage = () => {
  const recipes = [
    { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish" },
    { id: 2, title: "Chicken Tikka Masala", description: "A flavorful Indian curry" },
    { id: 3, title: "Homemade Pizza", description: "Crispy crust with your favorite toppings" },
  ];

  return (
    <Layout title="Cooking">
      <Container>
        <Head>
          <title>Cooking Adventures</title>
          <meta name="description" content="Explore my culinary journey and favorite recipes" />
        </Head>

        <main>
          <Heading as="h1" fontSize={24} mb={4} textAlign="center" textTransform="lowercase">
            cooking adventures
          </Heading>
          <Text fontSize={16} mb={8} textAlign="center">
            Join me on my culinary journey as I explore flavors from around the world!
          </Text>

          <VStack spacing={8} align="stretch">
            {recipes.map((recipe) => (
              <Section key={recipe.id} delay={0.1 * recipe.id}>
                <Box borderWidth={1} borderRadius="lg" p={5}>
                  <Heading as="h3" fontSize={20} mb={2}>
                    {recipe.title}
                  </Heading>
                  <Text>{recipe.description}</Text>
                </Box>
              </Section>
            ))}
          </VStack>
        </main>
      </Container>
    </Layout>
  );
};

export default CookingPage;
