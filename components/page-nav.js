import { useState, useEffect } from 'react'
import { Box, Flex, Link, useColorModeValue } from '@chakra-ui/react'

const PageNav = ({ sections }) => {
    const [activeId, setActiveId] = useState(sections[0]?.id)
    const activeColor = useColorModeValue('#0F766E', '#5EEAD4')
    const inactiveColor = useColorModeValue('gray.600', 'gray.400')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find(e => e.isIntersecting)
                if (visible) setActiveId(visible.target.id)
            },
            { rootMargin: '-20% 0px -60% 0px' }
        )
        sections.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [sections])

    return (
        <Box
            as="nav"
            position="sticky"
            top="5rem"
            alignSelf="flex-start"
            flexShrink={0}
            w="100px"
            aria-label="Page sections"
        >
            <Flex
                direction="column"
                gap={1}
                borderLeftWidth="2px"
                borderColor={borderColor}
                pl={3}
            >
                {sections.map(({ id, label }) => (
                    <Link
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => {
                            e.preventDefault()
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        fontSize="xs"
                        py={1}
                        color={activeId === id ? activeColor : inactiveColor}
                        fontWeight={activeId === id ? '600' : '400'}
                        textDecoration="none"
                        _hover={{ color: activeColor, textDecoration: 'none' }}
                        transition="all 0.2s"
                        aria-current={activeId === id ? 'true' : undefined}
                    >
                        {label}
                    </Link>
                ))}
            </Flex>
        </Box>
    )
}

export default PageNav
