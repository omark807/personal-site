import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
// import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Omar's homepage" />
                <meta name="author" content="Omar" />
                <meta property="og:site_name" content="Omar's homepage" />
                <meta property="og:type" content="website" />
                <title>Hi, I&apos;m Omar!</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                { children }
            {/* <Footer/> */}
            </Container>
        </Box>
    )
}

export default Main