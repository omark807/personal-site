import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Snowfall from '../snowfall.js'  // Changed 'Snowfall.js' to 'snowfall.js'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Omar Khan - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <Snowfall />  {/* Add this line */}
                {children}
            </Container>
        </Box>
    )
}

export default Main