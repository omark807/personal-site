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
            outline: `2px solid ${mode('#7C3AED', '#A78BFA')(props)}`,
            outlineOffset: '2px',
            borderRadius: '2px'
        },
        // All links: underline and high-contrast colors for light/dark mode
        'a:not([href="#main-content"]):not(.chakra-link):not(.chakra-button)': {
            color: mode('#0F766E', '#5EEAD4')(props),
            textDecoration: 'underline',
            textUnderlineOffset: '3px'
        },
        'a:not([href="#main-content"]):not(.chakra-link):not(.chakra-button):hover': {
            color: mode('#115E59', '#99F6E4')(props),
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
    }
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
    pinkyPink: '#E0F2FE'
}

const theme = extendTheme({
    config, styles, components, fonts, colours, colors
})

export default theme