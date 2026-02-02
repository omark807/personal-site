import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { useFontSize } from '../theme-toggle-button'

const Main = ({ children, router }) => {
    const { fontSize } = useFontSize()
    const footerColor = useColorModeValue('gray.500', 'gray.400')
    
    return (
        <Box as="main" pb={8} fontSize={fontSize}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Link
                href="#main-content"
                position="absolute"
                left="-9999px"
                zIndex={999}
                p={4}
                bg="black"
                color="white"
                _focus={{
                    left: 0,
                    position: 'fixed',
                    top: 0,
                    outline: '2px solid',
                    outlineColor: 'orange.400',
                    outlineOffset: '2px'
                }}
                _focusVisible={{
                    left: 0,
                    position: 'fixed',
                    top: 0
                }}
            >
                Skip to main content
            </Link>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14} id="main-content" tabIndex={-1}>
                {children}
                
                {/* Subtle Copyright Footer */}
                <Box mt={16} mb={4} textAlign="center">
                    <Text fontSize="sm" color={footerColor}>
                        © {new Date().getFullYear()} Omar Khan. All rights reserved.
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}

export default Main