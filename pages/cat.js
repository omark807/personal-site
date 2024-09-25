import React from 'react';
import Head from 'next/head';
import { Container, Heading, Text, VStack, Box, Image } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';

const CatPage = () => {
  const catFacts = [
    { id: 1, fact: "Cats sleep for about 70% of their lives" },
    { id: 2, fact: "A group of cats is called a clowder" },
    { id: 3, fact: "Cats have over 20 vocalizations, including the purr" },
    { id: 4, fact: "Cats have a third eyelid called the 'haw'" },
    { id: 5, fact: "A cat's hearing is much more sensitive than a human's" },
  ];

  return (
    <Layout title="Cat">
      <Container>
        <Head>
          <title>Meow World | Cat Content</title>
          <meta name="description" content="Explore the wonderful world of cats and learn fascinating feline facts" />
        </Head>

        <main>
          <Heading as="h1" fontSize={28} mb={4} textAlign="center" textTransform="lowercase">
            meow world
          </Heading>
          <Text fontSize={18} mb={8} textAlign="center">
            Welcome to the purr-fect page for cat enthusiasts! Discover the magic of our feline friends.
          </Text>

          <VStack spacing={8} align="stretch">
            <Section delay={0.1}>
              <Box borderWidth={1} borderRadius="lg" p={5} bg="gray.50">
                <Heading as="h2" fontSize={24} mb={3}>
                  Why Cats Are Paw-some
                </Heading>
                <Text>
                  Cats are extraordinary companions. They're independent yet affectionate, playful yet calm, and have a unique way of bringing joy and tranquility to our lives. Whether they're curled up in a sunny spot or chasing a toy, cats have a special charm that captivates us.
                </Text>
              </Box>
            </Section>

            <Heading as="h2" fontSize={24} mb={4} textAlign="center">
              Fascinating Feline Facts
            </Heading>

            {catFacts.map((fact) => (
              <Section key={fact.id} delay={0.1 * fact.id}>
                <Box borderWidth={1} borderRadius="lg" p={5} bg="gray.50">
                  <Heading as="h3" fontSize={20} mb={2}>
                    Cat Fact #{fact.id}
                  </Heading>
                  <Text>{fact.fact}</Text>
                </Box>
              </Section>
            ))}
          </VStack>
        </main>
      </Container>
    </Layout>
  );
};

export default CatPage;

