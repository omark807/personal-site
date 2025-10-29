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
                <title>Omar Khan - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
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