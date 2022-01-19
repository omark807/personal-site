import NextLink from 'next/link'
import {
    Container,
    Heading,
    Img,
    Box,
    Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return(
        <Layout>
            <Container>
                {/* <Box borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center">
                    To view the project file for this, check out the Github button, 
                    otherwise find my favourite projects in &quot;Works&quot;!
                </Box> */}
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Omar Khan
                        </Heading>
                        <p>aspiring researcher, computer scientist</p>
                        
                    </Box>
                </Box>
                {/* <Box boxSize='sm'>
                    <Img src='pages/bunny.jpeg' alt='Omar Khan' />
                </Box> */}
                <br/>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        hello!
                    </Heading>
                    <Paragraph>I am a recent graduate from  the University of Illinois at Urbana-Champaign with a B.S in Computer Science 
                        + Crop Sciences. I am currently applying to Ph.D. programs in Computer Science, hoping to focus on user inteface design
                        that addresses accessibility, particularly for those with disabilities (especially visual impairments), as well as affective 
                        computing, wanting to understand the emotions that are generated as a result of inadequate interface design through technologies 
                        such as virtual agents. 
                    </Paragraph>

                    <Paragraph> I am also interested in any front-end development opportunities to continue furthering my knowledge in such technologies 
                        (especially React, React Native, Typescript, Javascript, Next.js, etc.), as well as research engineering and assistant positions where I can hone my 
                        skills as a researcher. 
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
                        Developing greater intution on what makes technology, and user interfaces in particular, so inaccessible 
                        to underrepresented populations, and how we can refine the design process to become more inclusive of these groups
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