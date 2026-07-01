import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode('#FFFDF8', '#151A1E')(props),
            color: mode('#1F2937', '#F3F4F6')(props)
        },
        // Screen reader only class for accessibility
        '.sr-only': {
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: '0'
        },
        // Focus visible styles for keyboard navigation
        '*:focus-visible': {
            outline: `2px solid ${mode('#0F766E', '#5EEAD4')(props)}`,
            outlineOffset: '2px',
            borderRadius: '2px'
        },
        // All links: underline and high-contrast colors for light/dark mode
        'a:not([href="#main-content"]):not(.chakra-link):not(.chakra-button):not(.life-card-link)': {
            color: mode('#0F766E', '#5EEAD4')(props),
            textDecoration: 'underline',
            textUnderlineOffset: '3px'
        },
        'a:not([href="#main-content"]):not(.chakra-link):not(.chakra-button):not(.life-card-link):hover': {
            color: mode('#115E59', '#99F6E4')(props),
        },
        '.life-card-link': {
            color: mode('#0F766E', '#5EEAD4')(props),
            textDecoration: 'none',
        },
        '.life-card-link:hover': {
            color: mode('#115E59', '#99F6E4')(props),
            textDecoration: 'none',
        },
        '.life-card-link:focus-visible': {
            outline: 'none',
        },
        // Skip link styles (visible when focused for keyboard users)
        'a[href="#main-content"]:focus': {
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: 9999,
            padding: '1em',
            backgroundColor: '#000',
            color: '#fff',
            textDecoration: 'none'
        },
        'h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]': {
            scrollMarginTop: '5rem'
        },
        // Respect reduced motion preference (accessibility)
        '@media (prefers-reduced-motion: reduce)': {
            '*, *::before, *::after': {
                animationDuration: '0.01ms !important',
                animationIterationCount: '1 !important',
                transitionDuration: '0.01ms !important'
            }
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': props => ({
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: mode('#0F766E', '#5EEAD4')(props),
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            })
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#0F766E', '#5EEAD4')(props),
            textDecoration: 'underline',
            textUnderlineOffset: 3,
            textDecorationThickness: '1px',
            _hover: {
                color: mode('#115E59', '#99F6E4')(props),
                textDecoration: 'underline'
            },
            _focus: {
                color: mode('#0F766E', '#5EEAD4')(props)
            }
        })
    },
    Button: {
        variants: {
            brand: props => ({
                bg: mode('#0F766E', '#5EEAD4')(props),
                color: mode('white', '#151A1E')(props),
                _hover: {
                    bg: mode('#115E59', '#99F6E4')(props),
                    textDecoration: 'none',
                },
                _active: {
                    bg: mode('#0D9488', '#2DD4BF')(props),
                },
            }),
            brandOutline: props => ({
                color: mode('#0F766E', '#5EEAD4')(props),
                borderColor: mode('#0F766E', '#5EEAD4')(props),
                _hover: {
                    bg: mode('teal.50', 'whiteAlpha.200')(props),
                    textDecoration: 'none',
                },
            }),
        },
    },
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colours = {
    lightOrange: '#2DD4BF',
    darkOrange: '#0F766E',
    accent: {
        light: '#5EEAD4',
        dark: '#115E59'
    }
}

const config = {
    // Use a fixed initial mode so server and client render the same (avoids hydration error).
    // useSystemColorMode still applies system preference after hydration.
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const colors = {
    pinkyPink: '#E0F2FE',
    brand: {
        DEFAULT: '#0F766E',
        hover: '#115E59',
        muted: '#5EEAD4',
        active: '#0D9488',
    },
}

const theme = extendTheme({
    config, styles, components, fonts, colours, colors
})

export default theme