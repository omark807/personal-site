import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { FontSizeProvider } from '../components/theme-toggle-button'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <FontSizeProvider>
                <Layout router={router}>
                    <AnimatePresence exitBeforeEnter initial={true}>
                        <Component {...pageProps} key={router.route}/>
                        </AnimatePresence>
                </Layout>
            </FontSizeProvider>
        </ChakraProvider>
    )
}

export default Website