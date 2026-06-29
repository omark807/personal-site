import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'

const ExperienceAccordion = ({ items, borderLeft = false }) => {
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')
  const hoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')

  return (
    <Accordion allowMultiple reduceMotion>
      {items.map((item) => (
        <AccordionItem
          key={`${item.period}-${item.title}`}
          border="none"
          borderLeftWidth={borderLeft ? '2px' : 0}
          borderLeftColor={borderColor}
          pl={borderLeft ? 4 : 0}
          mb={3}
        >
          <AccordionButton
            px={0}
            py={2}
            _hover={{ bg: hoverBg }}
            _expanded={{ pb: 1 }}
          >
            <Flex flex={1} align="flex-start" justify="space-between" gap={4} textAlign="left">
              <Box flex={1} minW={0}>
                <Text fontWeight="semibold">{item.title}</Text>
                <Text fontSize="sm" color={mutedColor}>
                  {item.org}
                </Text>
                {item.advisor && (
                  <Text fontSize="xs" color={mutedColor} mt={0.5}>
                    {item.advisor}
                  </Text>
                )}
              </Box>
              <Text
                fontSize="sm"
                color={mutedColor}
                textAlign="right"
                flexShrink={0}
                maxW={{ base: '40%', md: '11rem' }}
                lineHeight="short"
                pr={2}
              >
                {item.period}
              </Text>
            </Flex>
            <AccordionIcon flexShrink={0} aria-hidden="true" />
          </AccordionButton>
          <AccordionPanel px={0} pb={3} pt={0}>
            {item.summary && (
              <Text fontSize="sm" mb={item.details?.length ? 2 : 0}>
                {item.summary}
              </Text>
            )}
            {item.details?.map((group) => (
              <Box key={group.heading || group.items[0]} mb={group.heading ? 3 : 0}>
                {group.heading && (
                  <Text fontSize="sm" fontWeight="semibold" mb={1}>
                    {group.heading}
                  </Text>
                )}
                <List as="ul" spacing={1.5} styleType="disc" pl={5} fontSize="sm">
                  {group.items.map((bullet) => (
                    <ListItem key={bullet}>{bullet}</ListItem>
                  ))}
                </List>
              </Box>
            ))}
            {item.link && (
              <Text fontSize="sm" mt={2}>
                {item.link.startsWith('/') ? (
                  <Link as={NextLink} href={item.link}>
                    Learn more
                  </Link>
                ) : (
                  <Link href={item.link} isExternal>
                    Learn more
                  </Link>
                )}
              </Text>
            )}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default ExperienceAccordion
