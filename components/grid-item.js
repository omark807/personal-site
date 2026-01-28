import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer" role="article" aria-labelledby={`grid-title-${title}`}>
      <Image
        src={thumbnail}
        alt={`Thumbnail for ${title}`}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} (opens in new tab)`}>
        <Text mt={2} id={`grid-title-${title}`}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} passHref>
      <LinkBox as="a" cursor="pointer" role="article" aria-labelledby={`work-grid-title-${id}`}>
        <Image
          src={thumbnail}
          alt={`Thumbnail for ${title}`}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <Text mt={2} fontSize={20} id={`work-grid-title-${id}`}>
          {title}
        </Text>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)