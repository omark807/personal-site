import { Box, LinkBox, LinkOverlay, Image, Text } from '@chakra-ui/react';

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer" role="article" aria-labelledby={`work-title-${id}`}>
      <Image src={thumbnail} alt={`Thumbnail for ${title}`} className="grid-item-thumbnail" placeholder="blur" />
      <LinkOverlay href={`/works/${id}`} aria-label={`View details for ${title}`}>
        <Text mt={2} fontSize={20} textTransform="lowercase" id={`work-title-${id}`}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14} textTransform="lowercase">{children}</Text>
    </LinkBox>
  </Box>
);