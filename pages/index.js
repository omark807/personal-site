import Head from 'next/head'
import {
  Box,
  Heading,
  Link,
  Text,
  VStack,
  HStack,
  Icon,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaFileAlt, FaFilePdf } from 'react-icons/fa'
import { IoSchoolSharp } from 'react-icons/io5'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { PublicationImpact } from '../components/publication-highlight'
import Layout from '../components/layouts/article'
import {
  CV_LONG_URL,
  CV_SHORT_URL,
  SOCIAL_LINKS,
  absoluteUrl,
  // AVAILABILITY,
  // PROOF_POINTS,
} from '../lib/site'
import { getLatestNews, formatNewsLabel } from '../lib/news'

const latestNews = getLatestNews(3)

const profileLinks = [
  {
    href: SOCIAL_LINKS.github,
    label: "Visit Omar Khan's GitHub profile (opens in new tab)",
    icon: FaGithub,
    external: true,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "Visit Omar Khan's LinkedIn profile (opens in new tab)",
    icon: FaLinkedin,
    external: true,
  },
  {
    href: SOCIAL_LINKS.scholar,
    label: "Visit Omar Khan's Google Scholar profile (opens in new tab)",
    icon: IoSchoolSharp,
    external: true,
  },
  {
    href: CV_LONG_URL,
    label: 'Open CV (Long-form) (opens in new tab)',
    icon: FaFileAlt,
    external: true,
  },
  {
    href: CV_SHORT_URL,
    label: 'Open Resume (One-page) (opens in new tab)',
    icon: FaFilePdf,
    external: true,
  },
]

const NewsRelatedLink = ({ relatedLink }) => {
  if (relatedLink.external) {
    return (
      <Link
        href={relatedLink.href}
        isExternal
        fontSize="sm"
        mt={1}
        display="inline-block"
        aria-label={`${relatedLink.label} (opens in new tab)`}
      >
        {relatedLink.label} →
      </Link>
    )
  }

  return (
    <Link
      as={NextLink}
      href={relatedLink.href}
      fontSize="sm"
      mt={1}
      display="inline-block"
    >
      {relatedLink.label} →
    </Link>
  )
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Omar Khan',
  jobTitle: 'PhD Candidate in HCI and Accessibility',
  affiliation: {
    '@type': 'Organization',
    name: 'University of Illinois Urbana-Champaign',
  },
  url: absoluteUrl('/'),
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.github,
    SOCIAL_LINKS.scholar,
  ],
  description:
    'PhD candidate at UIUC researching accessible HCI with blind and low-vision communities.',
}

const Page = () => {
  const heroTextColor = useColorModeValue('text.muted', 'text.muted')
  const iconColor = useColorModeValue('text.muted', 'text.muted')
  const iconHoverColor = useColorModeValue('brand.DEFAULT', 'brand.muted')
  const photoBorderColor = useColorModeValue('border.photo', 'border.photo')

  return (
    <Layout canonicalPath="/">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <VStack spacing={8} alignItems="stretch">
        <Section delay={0}>
          <VStack spacing={4} align="center" textAlign="center">
            <Image
              src="/profpic.JPG"
              alt="Omar Khan"
              borderRadius="full"
              boxSize="140px"
              objectFit="cover"
              border="3px solid"
              borderColor={photoBorderColor}
              shadow="md"
              fallbackSrc="https://via.placeholder.com/140x140?text=OK"
            />

            <Heading as="h1" variant="section-title" id="page-title">
              Omar Khan
            </Heading>
            <Text fontSize="lg" fontWeight="medium">
              Mixed-methods HCI researcher who builds and evaluates accessible AI systems
            </Text>
            <Text fontSize="sm" color={heroTextColor}>
              PhD candidate at UIUC · accessibility + human-AI interaction
            </Text>
            {/* <Text fontSize="sm" color={heroTextColor} maxW="34rem">
              {AVAILABILITY}
            </Text> */}
            <HStack spacing={5} pt={1} role="list" aria-label="Profile and resume links">
              {profileLinks.map(({ href, label, icon, external }) => (
                <Link
                  key={href}
                  href={href}
                  {...(external && { isExternal: true, rel: 'noopener noreferrer' })}
                  aria-label={label}
                  role="listitem"
                  lineHeight={0}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Icon
                    as={icon}
                    boxSize={5}
                    color={iconColor}
                    _hover={{ color: iconHoverColor }}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </HStack>
          </VStack>
        </Section>

        <Section delay={0.1}>
          <Paragraph>
            I co-design with blind and low-vision (BLV) communities to build and evaluate the
            tools people rely on to make sense of data — and, increasingly, AI. I turn messy,
            real-world context into things people can <i>actually</i> use: accessible
            data-visualization systems, design guidelines, and empirical evidence that shape how
            products get built. My work shows up at venues like CHI and ASSETS — more on my{' '}
            <Link as={NextLink} href="/research">Research</Link> page.
          </Paragraph>
          {/* <List spacing={2} mt={2} aria-label="Highlights">
            {PROOF_POINTS.map((point) => (
              <ListItem key={point} display="flex" alignItems="flex-start">
                <ListIcon
                  as={CheckCircleIcon}
                  color={iconHoverColor}
                  mt={1}
                  aria-hidden="true"
                />
                <Text as="span">{point}</Text>
              </ListItem>
            ))}
          </List> */}
          <Paragraph>
            Outside research: cats, cooking, and too many parentheticals — more on{' '}
            <Link as={NextLink} href="/life">Life</Link>.
          </Paragraph>
        </Section>

        <Section delay={0.15}>
          <Heading as="h2" variant="section-title">
            Latest
          </Heading>
          <VStack align="stretch" spacing={3} mt={1}>
            {latestNews.map((item) => (
              <Box key={item.title}>
                <PublicationImpact>{formatNewsLabel(item)}</PublicationImpact>
                <Text fontWeight="semibold" mb={1}>
                  {item.title}
                </Text>
                <Text lineHeight="tall" color={heroTextColor}>
                  {item.excerpt}
                </Text>
                {item.relatedLink && (
                  <NewsRelatedLink relatedLink={item.relatedLink} />
                )}
              </Box>
            ))}
            <Link as={NextLink} href="/news" fontSize="sm" mt={1}>
              View all news →
            </Link>
          </VStack>
        </Section>
      </VStack>
    </Layout>
  )
}

export default Page
