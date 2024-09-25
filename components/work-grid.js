import { Box, LinkBox, LinkOverlay, Image, Text } from '@chakra-ui/react';

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" />
      <LinkOverlay href={`/works/${id}`}>
        <Text mt={2} fontSize={20} textTransform="lowercase">{title}</Text>
      </LinkOverlay>
      <Text fontSize={14} textTransform="lowercase">{children}</Text>
    </LinkBox>
  </Box>
);