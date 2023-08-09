import NextLink from 'next/link'
import {
    Container,
    Heading,
    Link,
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
                    <Paragraph>I am a second-year PhD student studying Computer Science at the University of Illinois
                        Urbana-Champaign (UIUC) advised by <Link href='https://camillec.com/' target='_blank'>Dr. Camille Cobb</Link>. My interests lie broadly in human-computer interaction (HCI), 
                        and I am especially interested in accessibility and usable seucirty and privacy. <b>I am actively seeking internships for summer 2024!</b>
                        
                        {/* <b>I am actively seeking research scientist, UX research and 
                        data scientist intern opportunities for summer 2024! I am also open to software engineering internships! </b>  */}
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
                        <BioYear>accessibility/assistive technologies</BioYear>
                        Investigating the ease of use of existing digital platforms for those with disabilities
                    </BioSection>
                    <BioSection>
                        <BioYear>usable security and privacy</BioYear>
                        Examining human factors in security/privacy and including those from historically underrepresented populations in 
                        conversations regarding security/privacy design; considering how security and privacy-related topics are conveyed to 
                        these groups 
                    </BioSection>
                  
                </Section>  
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        other academic interests
                    </Heading>
                    <BioSection>
                        <BioYear>tech law and policy</BioYear>
                        Examining past, present, and future tech/Internet laws and policies across the world and 
                        identifying how/why they are shaped the way they are
                    </BioSection>
                    <BioSection>
                        <BioYear>affective computing</BioYear>
                        Understanding the underlying emotions that those with disabilities and other historically 
                        underrepresented groups face in navigating the digital world
                    </BioSection>
                    <BioSection>
                        <BioYear>human-centered AI</BioYear>
                        Designing machine learning (ML) powered user experiences that are accessible and evaluating those that are not; understanding how users feel 
                        about artificial intelligence (AI) and designing systems that interact more naturally with users
                    </BioSection>
                </Section>                
            </Container>
        </Layout>
    )
}
export default Page