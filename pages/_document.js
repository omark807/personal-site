import { ColorModeScript } from "@chakra-ui/color-mode";
import theme from "../lib/theme";
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument{
    render(){
        return(
            <Html lang="en">
                <Head>
                    {/* Optimized Google Fonts loading - preconnect and font link */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link 
                        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap" 
                        rel="stylesheet"
                    />
                    
                    {/* Favicon and app icons */}
                    <link rel="icon" type="image/png" sizes="32x32" href="/ok_logo_transparent.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/ok_logo_transparent.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/ok_logo_transparent.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    
                    {/* Theme and meta */}
                    <meta name="theme-color" content="#D84315" />
                    <meta name="description" content="Omar Khan - PhD Candidate in Computer Science at UIUC, HCI Researcher focused on accessibility and human-AI interaction" />
                    <meta name="author" content="Omar Khan" />
                    <meta name="keywords" content="Omar Khan, HCI, accessibility, human-computer interaction, UIUC, PhD, research" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}