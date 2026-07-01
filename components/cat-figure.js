import Image from 'next/image'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const CatFigure = ({
  src,
  alt,
  caption,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  aspectRatio = 4 / 3,
  objectPosition = 'center center',
}) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const captionColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box as="figure" m={0} h="full" display="flex" flexDirection="column" alignItems="center">
      <Box
        position="relative"
        overflow="hidden"
        borderWidth={1}
        borderColor={borderColor}
        borderRadius="lg"
        aspectRatio={aspectRatio}
        w="full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: 'cover', objectPosition }}
        />
      </Box>
      {caption && (
        <Text
          as="figcaption"
          fontSize="sm"
          color={captionColor}
          mt={2}
          lineHeight="short"
          textAlign="center"
          w="full"
        >
          {caption}
        </Text>
      )}
    </Box>
  )
}

export default CatFigure
