import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const palette = {
    bg: { light: '#FFF8ED', dark: '#15201E' },
    surface: { light: '#FFFFFF', dark: '#1A2624' },
    surfaceMuted: { light: '#FFF5EB', dark: '#1E2A28' },
    text: { light: '#1F2937', dark: '#F3F4F6' },
    brand: {
        DEFAULT: { light: '#0D9488', dark: '#5EEAD4' },
        hover: { light: '#0F766E', dark: '#99F6E4' },
        active: { light: '#14B8A6', dark: '#2DD4BF' },
        onBrand: { light: '#FFFFFF', dark: '#15201E' },
    },
}

const themed = (token, props) =>
    mode(palette[token.group][token.key].light, palette[token.group][token.key].dark)(props)

const brand = (key, props) => themed({ group: 'brand', key }, props)

const styles = {
    global: props => ({
        body: {
            bg: mode(palette.bg.light, palette.bg.dark)(props),
            color: mode(palette.text.light, palette.text.dark)(props)
        },
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
        '*:focus-visible': {
            outline: `2px solid ${brand('DEFAULT', props)}`,
            outlineOffset: '2px',
            borderRadius: '2px'
        },
        'a:not([href="#main-content"]):not(.chakra-link):not(.chakra-button):not(.life-card-link)': {
            color: brand('DEFAULT', props),
            textDecoration: 'underline',
            textUnderlineOffset: '3px'
        },
        'a:not([href="#main-content"]):not(.chakra-link):not(.chakra-button):not(.life-card-link):hover': {
            color: brand('hover', props),
        },
        '.life-card-link': {
            color: brand('DEFAULT', props),
            textDecoration: 'none',
        },
        '.life-card-link:hover': {
            color: brand('hover', props),
            textDecoration: 'none',
        },
        '.life-card-link:focus-visible': {
            outline: 'none',
        },
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
                textDecorationColor: brand('DEFAULT', props),
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            })
        }
    },
    Link: {
        baseStyle: props => ({
            color: brand('DEFAULT', props),
            textDecoration: 'underline',
            textUnderlineOffset: 3,
            textDecorationThickness: '1px',
            _hover: {
                color: brand('hover', props),
                textDecoration: 'underline'
            },
            _focus: {
                color: brand('DEFAULT', props)
            }
        })
    },
    Button: {
        variants: {
            brand: props => ({
                bg: brand('DEFAULT', props),
                color: brand('onBrand', props),
                _hover: {
                    bg: brand('hover', props),
                    textDecoration: 'none',
                },
                _active: {
                    bg: brand('active', props),
                },
            }),
            brandOutline: props => ({
                color: brand('DEFAULT', props),
                borderColor: brand('DEFAULT', props),
                _hover: {
                    bg: mode('accent.50', 'whiteAlpha.200')(props),
                    textDecoration: 'none',
                },
            }),
        },
    },
    Badge: {
        variants: {
            outline: props => ({
                borderColor: mode('accent.400', 'accent.300')(props),
                color: mode('accent.700', 'accent.200')(props),
            }),
        },
    },
    Tag: {
        variants: {
            subtle: props => ({
                container: {
                    bg: mode('accent.50', 'whiteAlpha.100')(props),
                    color: mode('accent.800', 'accent.200')(props),
                },
            }),
        },
    },
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}

const colors = {
    brand: {
        50: '#F0FDFA',
        100: '#CCFBF1',
        200: '#99F6E4',
        300: '#5EEAD4',
        400: '#2DD4BF',
        500: '#14B8A6',
        600: '#0D9488',
        700: '#0F766E',
        800: '#115E59',
        900: '#134E4A',
        DEFAULT: palette.brand.DEFAULT.light,
        hover: palette.brand.hover.light,
        muted: palette.brand.DEFAULT.dark,
        active: palette.brand.active.light,
    },
    accent: {
        50: '#FFF5EB',
        100: '#FFE8D4',
        200: '#FFD0A8',
        300: '#FFB877',
        400: '#F4A261',
        500: '#E08D4F',
        600: '#C96B4A',
        700: '#A84832',
        800: '#873728',
        900: '#6B2D22',
    },
}

const semanticTokens = {
    colors: {
        'bg.canvas': {
            default: palette.bg.light,
            _dark: palette.bg.dark,
        },
        'bg.surface': {
            default: palette.surface.light,
            _dark: palette.surface.dark,
        },
        'bg.surfaceMuted': {
            default: palette.surfaceMuted.light,
            _dark: palette.surfaceMuted.dark,
        },
        'bg.nav': {
            default: 'rgba(255, 248, 237, 0.92)',
            _dark: 'rgba(21, 32, 30, 0.92)',
        },
        'border.default': {
            default: 'gray.200',
            _dark: 'whiteAlpha.200',
        },
        'border.emphasis': {
            default: 'gray.300',
            _dark: 'gray.600',
        },
        'border.photo': {
            default: 'white',
            _dark: 'gray.700',
        },
        'text.muted': {
            default: 'gray.600',
            _dark: 'gray.400',
        },
        'text.subtle': {
            default: 'gray.500',
            _dark: 'gray.500',
        },
        'text.nav': {
            default: 'gray.800',
            _dark: 'whiteAlpha.900',
        },
        'interactive.hover': {
            default: 'accent.50',
            _dark: 'whiteAlpha.100',
        },
        'interactive.activeBg': {
            default: 'accent.50',
            _dark: 'whiteAlpha.200',
        },
    },
}

const theme = extendTheme({
    config, styles, components, fonts, colors, semanticTokens
})

export default theme
