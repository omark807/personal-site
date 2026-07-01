import {
  Heading,
  Text,
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  Link,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { newsItems } from '../lib/news'

const NewsPage = () => {
  const [announcement, setAnnouncement] = useState('')
  const [filters, setFilters] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const handleAddFilter = (tag) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag])
    }
  }

  const handleRemoveFilter = (tag) => {
    setFilters(filters.filter((t) => t !== tag))
  }

  const filteredNewsItems = newsItems.filter((item) => {
    const matchesFilters = filters.every((filter) => item.tags.includes(filter))
    const matchesSearchQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.content).toLowerCase().includes(searchQuery.toLowerCase())

    return matchesFilters && matchesSearchQuery
  })

  useEffect(() => {
    const count = filteredNewsItems.length
    if (count === 0) {
      setAnnouncement('No news items match your current filters.')
    } else {
      setAnnouncement(`${count} news item${count === 1 ? '' : 's'} found.`)
    }
  }, [filteredNewsItems.length])

  const allTags = [...new Set(newsItems.map(item => item.tags).flat())]

  const groupedNewsItems = filteredNewsItems.reduce((acc, item) => {
    if (!acc[item.month]) {
      acc[item.month] = []
    }
    acc[item.month].push(item)
    return acc
  }, {})

  return (
    <Layout title="News" canonicalPath="/news">
        <Heading as="h1" variant="section-title" mb={4}>
          News
        </Heading>
        <InputGroup mb={4}>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' aria-hidden="true" />
          </InputLeftElement>
          <Input
            placeholder='Search news...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search news articles"
            id="news-search-input"
          />
        </InputGroup>

        <Box mb={4} role="group" aria-label="Filter tags">
          {allTags.map((tag) => (
            <Tag
              size="sm"
              key={tag}
              borderRadius="full"
              variant="solid"
              colorScheme={filters.includes(tag) ? 'accent' : 'gray'}
              mr={2}
              mb={2}
              cursor="pointer"
              onClick={() => handleAddFilter(tag)}
              role="button"
              tabIndex={0}
              aria-label={`Filter by ${tag} tag`}
              aria-pressed={filters.includes(tag)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleAddFilter(tag)
                }
              }}
            >
              <TagLabel>{tag}</TagLabel>
            </Tag>
          ))}
        </Box>

        {filters.length > 0 && (
          <Box mb={4} role="group" aria-label="Active filters">
            <Text as="span" fontWeight="semibold" mr={2}>Active Filters:</Text>
            {filters.map((tag) => (
              <Tag
                size="sm"
                key={tag}
                borderRadius="full"
                variant="solid"
                colorScheme="accent"
                mr={2}
                mb={2}
                role="listitem"
              >
                <TagLabel>{tag}</TagLabel>
                <TagCloseButton
                  onClick={() => handleRemoveFilter(tag)}
                  aria-label={`Remove ${tag} filter`}
                />
              </Tag>
            ))}
          </Box>
        )}

        <Box role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {announcement}
        </Box>

        {Object.entries(groupedNewsItems).map(([month, items]) => (
          <Box key={month} mb={6} position="relative" role="region" aria-labelledby={`news-month-${month}`}>
            <Heading as="h2" fontSize="lg" fontWeight="bold" mb={2} id={`news-month-${month}`}>{month}</Heading>
            <Divider mb={4} />
            {items.map((item, index) => (
              <Section key={item.title} delay={0.1 * (index + 1)}>
                <Box position="relative" mb={4}>
                  <Heading as="h3" variant="section-title">
                    {item.title}
                  </Heading>
                  <Text>{item.content}</Text>
                  <Box mt={2}>
                    {item.tags.map((tag) => (
                      <Tag
                        size="sm"
                        key={tag}
                        borderRadius="full"
                        variant="subtle"
                        colorScheme="accent"
                        mr={2}
                      >
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                  </Box>
                  {item.relatedLink && (
                    <Link as={NextLink} href={item.relatedLink.href} fontSize="sm" mt={2} display="inline-block">
                      {item.relatedLink.label} →
                    </Link>
                  )}
                </Box>
              </Section>
            ))}
          </Box>
        ))}
    </Layout>
  )
}

export default NewsPage
