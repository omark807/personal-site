import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode('#ffcda6', '#512834')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#2a3eb8', '#FF00FF')(props),
            textUnderlineOffset: 3
        })
    } // #3d7aed = current cream
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colours = {
    pinkyPink: '#9137d1'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config, styles, components, fonts, colours
})

export default theme