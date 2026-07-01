import { Text, useColorModeValue } from '@chakra-ui/react'

export const formatPubLabel = (id) => {
  const match = id.match(/^([cwp])(\d+)$/i)
  if (!match) return id
  return `[${match[1].toUpperCase()}${match[2]}]`
}

export const PublicationImpact = ({ children }) => {
  const color = useColorModeValue('brand.hover', 'brand.muted')
  const borderColor = useColorModeValue('brand.DEFAULT', 'brand.muted')

  return (
    <Text
      fontSize="xs"
      fontWeight="medium"
      color={color}
      borderLeftWidth="2px"
      borderLeftColor={borderColor}
      pl={2}
      mb={1.5}
      lineHeight="short"
    >
      {children}
    </Text>
  )
}
