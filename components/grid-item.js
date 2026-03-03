import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, Link, LinkBox, LinkOverlay, useColorModeValue, Badge } from '@chakra-ui/react'
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

export const WorkGridItem = ({ children, id, title, thumbnail, role, tags = [] }) => {
  const tileBg = useColorModeValue('gray.100', 'whiteAlpha.100')
  const roleLabel = role === 'lead' ? 'Lead' : role === 'collaborator' ? 'Collaborator' : null
  return (
    <Box w="100%" textAlign="center" role="article" aria-labelledby={`work-grid-title-${id}`}>
      <Box
        position="relative"
        aspectRatio={1}
        overflow="hidden"
        borderRadius="12px"
        bg={tileBg}
        mb={2}
      >
        <Image
          src={thumbnail}
          alt={`Thumbnail for ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="work-grid-item-thumbnail"
          placeholder={typeof thumbnail === 'string' ? 'empty' : 'blur'}
          style={{ objectFit: 'contain' }}
        />
        {roleLabel && (
          <Badge
            position="absolute"
            top={2}
            right={2}
            colorScheme={role === 'lead' ? 'blue' : 'purple'}
            fontSize="xs"
            textTransform="none"
          >
            {roleLabel}
          </Badge>
        )}
      </Box>
      <Link as={NextLink} href={`/works/${id}`} display="inline-block" mt={2} fontSize={20} id={`work-grid-title-${id}`}>
        {title}
      </Link>
      {tags.length > 0 && (
        <Box mt={2}>
          {tags.map(tag => (
            <Badge key={`${id}-${tag}`} mr={1} mb={1} colorScheme="orange" variant="subtle" textTransform="none">
              {tag}
            </Badge>
          ))}
        </Box>
      )}
      <Text fontSize={14} mt={1}>{children}</Text>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
      .work-grid-item-thumbnail {
        object-fit: contain;
      }
    `}
  />
)