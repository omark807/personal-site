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
        // Skip link styles
        'a[href="#main-content"]:focus': {
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: 9999,
            padding: '1em',
            backgroundColor: '#000',
            color: '#fff',
            textDecoration: 'none'
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
            color: mode('#D84315', '#FF8A50')(props),
            textUnderlineOffset: 3
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
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config, styles, components, fonts, colours
})

export default theme