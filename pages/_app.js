import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { FontSizeProvider } from '../components/theme-toggle-button'
import { useReducedMotion } from '../components/use-reduced-motion'
import { useState, useEffect } from 'react'

const Website = ({ Component, pageProps, router }) => {
    const [mounted, setMounted] = useState(false)
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
        setMounted(true)
    }, [])

    // Always render the same tree on server and first client render (AnimatePresence)
    // so hydration matches. Only after mount do we optionally skip animations.
    const skipAnimations = mounted && prefersReducedMotion

    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <FontSizeProvider>
                <Layout router={router}>
                    {skipAnimations ? (
                        <Component {...pageProps} key={router.route}/>
                    ) : (
                        <AnimatePresence mode="wait" initial={true}>
                            <Component {...pageProps} key={router.route}/>
                        </AnimatePresence>
                    )}
                </Layout>
            </FontSizeProvider>
        </ChakraProvider>
    )
}

export default Website