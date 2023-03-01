import NextLink from 'next/link'
import {
    Container,
    Heading,
    Box,
    Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'

/**
 * The main landing page for the website, containing a short intro and some quick bits about my interests. 
 * @returns the home page for the website
 */
const Page = () => {
    return(
        <Layout>
            <Container>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Omar Khan
                        </Heading>
                        <p>aspiring researcher</p>
                        
                    </Box>
                </Box>
                <br/>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        hello!
                    </Heading>
                    <Paragraph>I am a graduate student studying Computer Science at the University of Illinois
                        Urbana-Champaign (UIUC). <b>I am actively seeking research, product and/or program manager, and 
                        software engineering internships for summer 2023! </b> 
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/research">
                            <Button righticon={<ChevronRightIcon/>} color="purple">
                                Research
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        current research interests
                    </Heading>
                    <BioSection>
                        <BioYear>Accessibility</BioYear>
                        Discovering ways to improve the design process so that thinking about accessibility 
                        is less of an afterthought and/or cognitive load -- I am particularly interested in exploring visual 
                        impairments
                    </BioSection>
                    <BioSection>
                        <BioYear>Usable security and privacy</BioYear>
                        Examining ways that security/privacy considerations may not fully protect those with visual impairments (and other disabilities)
                    </BioSection>
                    <BioSection>
                        <BioYear>Affective computing</BioYear>
                        Understanding the underlying emotions that those with disabilities and other historically 
                        underrepresented groups face in user interface accessibility, and how the integration of technologies 
                        such as virtual agents can aid in making these experiences more comfortable
                    </BioSection>
                </Section>  
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        other academic interests
                    </Heading>
                    <BioSection>
                        <BioYear>Tech law and policy</BioYear>
                        Examining past, present, and future tech/Internet laws and policies across the world and 
                        identifying how/why they are shaped the way they are
                    </BioSection>
                </Section>                
            </Container>
        </Layout>
    )
}
export default Page