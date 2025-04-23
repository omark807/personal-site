import { Container, Heading, Text, Box, Tag, TagLabel, TagCloseButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Section = motion(Box);

const NewsPage = () => {
    const newsItems = [
        {
            title: 'CHI 2025 In-Person Presentation',
            date: '03-31-2025',
            content: 'I will be presenting our Late-Breaking Work at CHI 2025 in Yokohama, Japan! I am excited to share our findings and engage with the broader CHI community.',
            tags: ['conference', 'presentation'],
        },
        {
            title: 'Late-Breaking Work Accepted to CHI 2025!',
            date: '02-22-2025',
            content:
                <>Our late-breaking work has been accepted to CHI 2025! You can find the preprint at
                <a href="https://arxiv.org/abs/2503.07415" target='__blank'> <u>this link</u></a>.
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

    const allTags = [...new Set(newsItems.map(item => item.tags).flat())];

    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                News
            </Heading>
            <InputGroup mb={4}>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input
                    placeholder='Search news...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </InputGroup>

            <Box mb={4}>
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
                    >
                        <TagLabel>{tag}</TagLabel>
                    </Tag>
                ))}
            </Box>

            {filters.length > 0 && (
                <Box mb={4}>
                    Active Filters:
                    {filters.map((tag) => (
                        <Tag
                            size="sm"
                            key={tag}
                            borderRadius="full"
                            variant="solid"
                            colorScheme="blue"
                            mr={2}
                            mb={2}
                        >
                            <TagLabel>{tag}</TagLabel>
                            <TagCloseButton onClick={() => handleRemoveFilter(tag)} />
                        </Tag>
                    ))}
                </Box>
            )}

            <Box position="relative" pl={4} ml={2} _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                borderLeft: '2px solid',
                borderColor: 'gray.300',
            }}>
                {filteredNewsItems.map((item, index) => (
                    <Section key={item.title} delay={0.1 * (index + 1)}>
                        <Box position="relative" mb={4} _before={{
                            content: '""',
                            position: 'absolute',
                            top: '0.5em',
                            left: '-1.1em',
                            width: '0.8em',
                            height: '0.8em',
                            borderRadius: '50%',
                            bg: 'teal.500',
                            border: '2px solid white',
                        }}>
                            <Heading as="h4" variant="section-title">
                                {item.date}: {item.title}
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
        </Container>
    );
};

export default NewsPage;
