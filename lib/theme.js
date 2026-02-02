import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode('#FFFAF0', '#1A1A1A')(props)
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
            outline: `2px solid ${mode('#D84315', '#FF8A50')(props)}`,
            outlineOffset: '2px',
            borderRadius: '2px'
        },
        // All links: underline and high-contrast colors for light/dark mode
        'a:not([href="#main-content"]):not(.chakra-link)': {
            color: mode('#B71C1C', '#FFAB91')(props),
            textDecoration: 'underline',
            textUnderlineOffset: '3px'
        },
        'a:not([href="#main-content"]):not(.chakra-link):hover': {
            color: mode('#8B0000', '#FFCCBC')(props),
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
                textDecorationColor: mode('#D84315', '#FF8A50')(props),
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            })
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#B71C1C', '#FFAB91')(props),
            textDecoration: 'underline',
            textUnderlineOffset: 3,
            textDecorationThickness: '1px',
            _hover: {
                color: mode('#8B0000', '#FFCCBC')(props),
                textDecoration: 'underline'
            },
            _focus: {
                color: mode('#B71C1C', '#FFAB91')(props)
            }
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colours = {
    lightOrange: '#FFB74D',
    darkOrange: '#D84315',
    accent: {
        light: '#FF8A50',
        dark: '#BF360C'
    }
}

const config = {
    // Use a fixed initial mode so server and client render the same (avoids hydration error).
    // useSystemColorMode still applies system preference after hydration.
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const colors = {
    pinkyPink: '#FFE8E8'
}

const theme = extendTheme({
    config, styles, components, fonts, colours, colors
})

export default theme