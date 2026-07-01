import {
  Heading,
  SimpleGrid,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from 'next/link'
import { getAvailableCatPhotos } from '../lib/get-cat-photos'

const LifeCard = ({ href, children, hasTopMedia = false }) => {
  const borderColor = useColorModeValue('border.emphasis', 'border.emphasis')
  const hoverBorderColor = useColorModeValue('brand.DEFAULT', 'brand.muted')
  const hoverBg = useColorModeValue('interactive.hover', 'interactive.hover')
  const focusRing = useColorModeValue(
    '0 0 0 3px rgba(13, 148, 136, 0.28)',
    '0 0 0 3px rgba(94, 234, 212, 0.35)'
  )
  const bodyColor = useColorModeValue('text.muted', 'text.muted')

  return (
    <Box
      as={NextLink}
      href={href}
      className="life-card-link"
      display="block"
      h="full"
      textDecoration="none"
      borderWidth="1px"
      borderStyle="solid"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      transition="border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        textDecoration: 'none',
        borderColor: hoverBorderColor,
        bg: hoverBg,
        transform: 'translateY(-2px)',
      }}
      _focusVisible={{
        outline: 'none',
        borderColor: hoverBorderColor,
        boxShadow: focusRing,
      }}
      _active={{
        transform: 'translateY(0)',
      }}
      {...(hasTopMedia ? { px: 5, pb: 5, pt: 0 } : { p: 5 })}
      sx={{
        '& p': { color: bodyColor },
      }}
    >
      {children}
    </Box>
  )
}

const LifePage = ({ catPreviewSrc }) => {
  const subtitleColor = useColorModeValue('accent.700', 'accent.300')

  return (
  <Layout title="Life">
    <Heading as="h1" fontSize={24} mb={4} textAlign="center" textTransform="lowercase">
      my life
    </Heading>
    <Heading as="h2" fontSize={16} mb={8} textAlign="center" textTransform="lowercase" color={subtitleColor}>
      some of my interests and passions, from my love for cats to my adventures in cooking.
    </Heading>
    <SimpleGrid columns={[1, 2, 3]} gap={6} alignItems="stretch">
      <Section delay={0.3}>
        <Box h="full">
          <LifeCard href="/blogs">
            <Heading as="h3" fontSize={20} mb={2}>
              Blogs
            </Heading>
            <Text>some other things I enjoy writing about</Text>
          </LifeCard>
        </Box>
      </Section>
      <Section delay={0.4}>
        <Box h="full">
          <LifeCard href="/cooking">
            <Heading as="h3" fontSize={20} mb={2}>
              Cooking
            </Heading>
            <Text>food is nice, and sometimes, my camera eats it fist</Text>
          </LifeCard>
        </Box>
      </Section>
      <Section delay={0.5}>
        <Box h="full">
          <LifeCard href="/cat" hasTopMedia={Boolean(catPreviewSrc)}>
            {catPreviewSrc && (
              <Box
                position="relative"
                aspectRatio={16 / 9}
                mb={3}
                mx={-5}
                overflow="hidden"
              >
                <Image
                  src={catPreviewSrc}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  aria-hidden="true"
                />
              </Box>
            )}
            <Heading as="h3" fontSize={20} mb={2}>
              Cat
            </Heading>
            <Text>daphne content</Text>
          </LifeCard>
        </Box>
      </Section>
    </SimpleGrid>
  </Layout>
  )
}

export async function getStaticProps() {
  const { hero } = getAvailableCatPhotos()
  return {
    props: {
      catPreviewSrc: hero?.src ?? null,
    },
  }
}

export default LifePage
