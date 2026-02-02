import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
    return(
        <Container>
            <Heading as="h1">Error 404: Page Not Found</Heading>
                <Text>
                    The page you are looking for was not found
                </Text>
                <Divider my={6}/>
                <Box my={6} align="center">
                    <Button as={NextLink} href="/" aria-label="Return to homepage">
                        Return to Home
                    </Button>
                </Box>
        </Container>
    )
}

export default NotFound