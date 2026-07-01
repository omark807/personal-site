import NextLink from 'next/link'
import { Heading, Text, Box, SimpleGrid, Link, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import CatFigure from '../components/cat-figure'
import { catPageIntro } from '../lib/cat-photos'
import { getAvailableCatPhotos } from '../lib/get-cat-photos'

const CatPage = ({ hero, gallery, hasPhotos }) => {
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('gray.50', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Layout title="Cat" canonicalPath="/cat">
      <Box as="main" py={4}>
        <Heading as="h1" fontSize={24} mb={4} textAlign="center" textTransform="lowercase">
          daphne&apos;s world
        </Heading>
        <Text fontSize={16} mb={6} textAlign="center" textTransform="lowercase">
          
        </Text>

        <Paragraph>{catPageIntro}</Paragraph>

        {hasPhotos ? (
          <Box mt={8}>
            {hero && (
              <Box mb={8} maxW="40rem" mx={{ base: 0, md: 'auto' }}>
                <CatFigure
                  src={hero.src}
                  alt={hero.alt}
                  caption={hero.caption}
                  priority
                  sizes="(max-width: 768px) 100vw, 40rem"
                  aspectRatio={hero.aspectRatio ?? 3 / 2}
                  objectPosition={hero.objectPosition ?? 'center center'}
                />
              </Box>
            )}

            {gallery.length > 0 && (
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} alignItems="start">
                {gallery.map((photo) => (
                  <CatFigure
                    key={photo.id}
                    src={photo.src}
                    alt={photo.alt}
                    caption={photo.caption}
                    aspectRatio={photo.aspectRatio ?? 4 / 3}
                    objectPosition={photo.objectPosition ?? 'center center'}
                  />
                ))}
              </SimpleGrid>
            )}
          </Box>
        ) : (
          <Box
            mt={8}
            borderWidth={1}
            borderRadius="lg"
            borderColor={borderColor}
            p={6}
            bg={cardBg}
            textAlign="center"
          >
            <Text fontSize="4xl" mb={3} aria-hidden="true">
              🐱
            </Text>
            <Text color={mutedColor}>
              I&apos;m adding photos of Daphne here soon. For now, she&apos;s also listed on my{' '}
              <Link as={NextLink} href="/about">About</Link> page under interests (cat parenting,
              naturally).
            </Text>
          </Box>
        )}

        <Text mt={10} fontSize="sm" color={mutedColor} textAlign="center">
          <Link as={NextLink} href="/life">
            Back to Life
          </Link>
        </Text>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const { hero, gallery, hasPhotos } = getAvailableCatPhotos()
  return {
    props: {
      hero,
      gallery,
      hasPhotos,
    },
  }
}

export default CatPage
