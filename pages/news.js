import { Container, Heading, Text, Box, Tag, TagLabel, TagCloseButton, Input, InputGroup, InputLeftElement, Divider } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import Section from '../components/section';

const NewsPage = () => {
    const [announcement, setAnnouncement] = useState('');
    const newsItems = [
        {
            title: 'New Paper Accepted to CHI 2026!',
            date: '01-28-2026',
            month: 'January 2026',
            content: <>Our paper on "I Don’t Trust Any Professional Research Tool": A Re-Imagination of Knowledge Production Workflows by, with, and for Blind and Low-Vision Researchers has been accepted to CHI 2026! You can find the preprint at <a href="https://arxiv.org/abs/2503.07415" target="_blank" rel="noopener noreferrer" aria-label="View arXiv preprint for late-breaking work (opens in new tab)"><u>this link</u></a>. I look forward to presenting this work at CHI 2026 in Barcelona, Spain in April!</>,
            tags: ['publication', 'conference'],
        },
        {
            title: 'ASSETS 2025 In-Person Attendance',
            date: '08-01-2025',
            month: 'August 2025',
            content: 'I will be attending ASSETS 2025 in Denver, CO in October! I am very much looking forward to connecting with fellow researchers and practitioners working across any and all work within accessibility.',
            tags: ['conference'],
        },
        {
            title: 'CHI 2025 In-Person Presentation',
            date: '03-31-2025',
            month: 'March 2025',
            content: 'I will be presenting our Late-Breaking Work at CHI 2025 in Yokohama, Japan! I am excited to share our findings and engage with the broader CHI community.',
            tags: ['conference', 'presentation'],
        },
        {
            title: 'Late-Breaking Work Accepted to CHI 2025!',
            date: '02-22-2025',
            month: 'February 2025',
            content:
                <>Our late-breaking work has been accepted to CHI 2025! You can find the preprint at
                <a href="https://arxiv.org/abs/2503.07415" target='_blank' rel="noopener noreferrer" aria-label="View arXiv preprint for late-breaking work (opens in new tab)"> <u>this link</u></a>.
                </>,
            tags: ['publication', 'conference'],
        },
    ];

    const [filters, setFilters] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleAddFilter = (tag) => {
        if (!filters.includes(tag)) {
            setFilters([...filters, tag]);
        }
    };

    const handleRemoveFilter = (tag) => {
        setFilters(filters.filter((t) => t !== tag));
    };

    const filteredNewsItems = newsItems.filter((item) => {
        const matchesFilters = filters.every((filter) => item.tags.includes(filter));
        const matchesSearchQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            String(item.content).toLowerCase().includes(searchQuery.toLowerCase());

        return matchesFilters && matchesSearchQuery;
    });

    // Update announcement when filters or search change
    useEffect(() => {
        const count = filteredNewsItems.length;
        if (count === 0) {
            setAnnouncement('No news items match your current filters.');
        } else {
            setAnnouncement(`${count} news item${count === 1 ? '' : 's'} found.`);
        }
    }, [filteredNewsItems.length]);

    const allTags = [...new Set(newsItems.map(item => item.tags).flat())];

    // Group news items by month
    const groupedNewsItems = filteredNewsItems.reduce((acc, item) => {
        if (!acc[item.month]) {
            acc[item.month] = [];
        }
        acc[item.month].push(item);
        return acc;
    }, {});

    return (
        <Container>
            <Heading as="h1" fontSize={20} mb={4}>
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
                        colorScheme={filters.includes(tag) ? 'blue' : 'gray'}
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
                                e.preventDefault();
                                handleAddFilter(tag);
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
                            colorScheme="blue"
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
                                        <Tag size="sm" key={tag} borderRadius="full" variant="subtle" colorScheme="gray" mr={2}>
                                            <TagLabel>{tag}</TagLabel>
                                        </Tag>
                                    ))}
                                </Box>
                            </Box>
                        </Section>
                    ))}
                </Box>
            ))}
        </Container>
    );
};

export default NewsPage;
