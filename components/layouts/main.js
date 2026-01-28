import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react'
import { useFontSize } from '../theme-toggle-button'

const Main = ({ children, router }) => {
    const { fontSize } = useFontSize()
    const footerColor = useColorModeValue('gray.500', 'gray.400')
    
    return (
        <Box as="main" pb={8} fontSize={fontSize}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <a 
                href="#main-content" 
                style={{
                    position: 'absolute',
                    left: '-9999px',
                    zIndex: 999,
                    padding: '1em',
                    backgroundColor: '#000',
                    color: '#fff',
                    textDecoration: 'none'
                }}
                onFocus={(e) => {
                    e.target.style.left = '0';
                }}
                onBlur={(e) => {
                    e.target.style.left = '-9999px';
                }}
            >
                Skip to main content
            </a>

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