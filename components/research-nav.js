import { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Link,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const ResearchNav = ({
  themeFilters,
  activeThemes,
  onThemeToggle,
  onClearThemes,
  publicationTypes,
}) => {
  const [activeSectionId, setActiveSectionId] = useState(publicationTypes[0]?.id)
  const activeColor = useColorModeValue('#0F766E', '#5EEAD4')
  const inactiveColor = useColorModeValue('gray.600', 'gray.400')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')
  const labelColor = useColorModeValue('gray.500', 'gray.500')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiveSectionId(visible.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )
    publicationTypes.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [publicationTypes])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const renderThemeButtons = (direction = 'column') => (
    <Flex direction={direction} gap={1} flexWrap="wrap" role="group" aria-label="Filter by research theme">
      <Button
        size="xs"
        variant={activeThemes.length === 0 ? 'solid' : 'ghost'}
        colorScheme="teal"
        onClick={onClearThemes}
        aria-pressed={activeThemes.length === 0}
        whiteSpace="normal"
        textAlign="left"
        h="auto"
        py={1.5}
        flexShrink={0}
      >
        All themes
      </Button>
      {themeFilters.map(({ id, label }) => {
        const isActive = activeThemes.includes(id)
        return (
          <Button
            key={id}
            size="xs"
            variant={isActive ? 'solid' : 'ghost'}
            colorScheme="teal"
            onClick={() => onThemeToggle(id)}
            aria-pressed={isActive}
            whiteSpace="normal"
            textAlign="left"
            h="auto"
            py={1.5}
            flexShrink={0}
          >
            {label}
          </Button>
        )
      })}
    </Flex>
  )

  const renderSectionLinks = (direction = 'column') => (
    <Flex
      direction={direction}
      gap={1}
      borderLeftWidth={direction === 'column' ? '2px' : 0}
      borderColor={borderColor}
      pl={direction === 'column' ? 3 : 0}
      flexWrap="wrap"
      role="group"
      aria-label="Jump to publication type"
    >
      {publicationTypes.map(({ id, label }) => (
        <Link
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(id)
          }}
          fontSize="xs"
          py={1}
          color={activeSectionId === id ? activeColor : inactiveColor}
          fontWeight={activeSectionId === id ? '600' : '400'}
          textDecoration="none"
          _hover={{ color: activeColor, textDecoration: 'none' }}
          transition="all 0.2s"
          aria-current={activeSectionId === id ? 'true' : undefined}
          whiteSpace={direction === 'column' ? 'normal' : 'nowrap'}
        >
          {label}
        </Link>
      ))}
    </Flex>
  )

  return (
    <>
      <Box
        as="nav"
        display={{ base: 'none', md: 'block' }}
        position="sticky"
        top="5rem"
        alignSelf="flex-start"
        flexShrink={0}
        w="148px"
        aria-label="Research filters and sections"
      >
        <Text fontSize="2xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" color={labelColor} mb={2}>
          Filter by theme
        </Text>
        {renderThemeButtons('column')}

        <Text fontSize="2xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" color={labelColor} mt={6} mb={2}>
          Jump to
        </Text>
        {renderSectionLinks('column')}
      </Box>

      <Box display={{ base: 'block', md: 'none' }} mb={4} w="full">
        <Text fontSize="xs" fontWeight="semibold" color={labelColor} mb={2}>
          Filter by theme
        </Text>
        {renderThemeButtons('row')}
        <Text fontSize="xs" fontWeight="semibold" color={labelColor} mt={4} mb={2}>
          Jump to
        </Text>
        {renderSectionLinks('row')}
      </Box>
    </>
  )
}

export default ResearchNav
