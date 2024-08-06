import { Container, Heading, Link,  Text, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import Paragraph from '../components/paragraph'

/**
 * Main page where a user cna find information about research I have done. 
 * @returns a page displaying ifnormation about works (mainly research)
 */
const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontsize={20} mb={4}>
                Research
            </Heading>
            Here, you can find more information on any publications and presentations I&apos;ve participatrd in. 

            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Conference and Journal Publications
                </Heading> 
                <Paragraph>
                    <b>[C1]</b> Chiang, Y.S, Khan, O., Bates, A., and Cobb, C. (2024). 
                    <b>More than just informed: The importance of consent facets in smart homes.</b> 
                    In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI ’24), May 11–16, 2024, Honolulu, HI, USA. ACM, New
                    York, NY, USA, 21 pages
                    <Link target="_blank" href='https://dl.acm.org/doi/10.1145/3613904.3642288'> [Link]</Link> 
                </Paragraph>
                <Divider my={3} />
                <Paragraph>
                    <b>[C2]</b> Mahmood, S., Zhao, M., Khan, O., Herman, G.L. (2020). 
                    <b>Caches as an Example of 
                    Machine-gradable Exam Questions for Complex Engineering Systems.</b> 
                    In Proceedings of the 49th ASEE/IEEE Frontiers in Education Conference, Uppsala, Sweden, Oct. 21-24.
                    <Link target="_blank" href='https://doi.org/10.1109/FIE44824.2020.9273822'> [Link]</Link> 
                </Paragraph>    

            </Section>


            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Posters and Presentations
                </Heading>
                <Paragraph>
                    <b>[P1]</b> Deep, H., Huang, J., Dembi, R., Khan, O., Angrave, L.. 
                    <b>Webcam Eye-Tracking Based Accessibility for ClassTranscribe.</b>
                    Virtual poster presentation: Illinois Undergraduate Research Symposium 2021
                </Paragraph> 
            </Section>

          
        </Container>
    </Layout>
)

export default Works