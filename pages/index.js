import {
    Container,
    Heading,
    //Image,
    Link,
    Box
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'

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
                        <p>researcher in training, human in the making</p>
                        
                    </Box>
                </Box>
                <br/>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        hello!
                    </Heading>
                    <Paragraph>I am a third-year PhD student studying Computer Science at the <Link href='https://illinois.edu/' target='_blank'>University of Illinois
                        Urbana-Champaign (UIUC)</Link> advised by <Link href='https://jooyoungseo.github.io/' target='_blank'>Dr. JooYoung Seo</Link> in the <Link href='https://xabilitylab.ischool.illinois.edu/' target='_blank'>(x)Ability Design Lab</Link>. My interests lie broadly in human-computer interaction (HCI), 
                        and I am especially interested in the intersection of accessibility and mental health, and how we can create inclusive digital mental health services that responsibly make use of emerging technologies. <b>I am actively seeking internships for summer 2025!</b>
                    </Paragraph>
                    
                
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        current research interests
                    </Heading>
                    <BioSection>
                        <BioYear>accessibility/assistive technologies</BioYear>
                        Investigating the ease of use of existing digital platforms for those with disabilities, 
                        particularly the blind and low-vision (BLV) community 
                    </BioSection>
                    <BioSection>
                        <BioYear>mental health and well-being technologies</BioYear>
                        Exploring the rapid growth and development of digital mental health (DMH) tracking services and their lack of 
                        consideration for the broader disability community 
                    </BioSection>
                    <BioSection>
                        <BioYear>affective computing</BioYear>
                        Understanding the underlying emotions that those with disabilities and other historically 
                        underrepresented groups face in navigating the digital world
                    </BioSection>
                    <BioSection>
                        <BioYear>human-centered AI</BioYear>
                        Designing intelligent and accessible user experiences that leverage emerging technologies such as large language models (LLMs), and understanding user sentiment 
                        about personalized systems 
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
                        <BioYear>usable security and privacy</BioYear>
                        Examining human factors in security/privacy and including those from historically underrepresented populations in 
                        conversations regarding security/privacy design; considering how security and privacy-related topics are conveyed to 
                        these groups 
                    </BioSection>
                </Section>                
            </Container>
        </Layout>
    )
}
export default Page