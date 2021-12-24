import { Container, Heading, Link,  Text, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import Paragraph from '../components/paragraph'

//ToDo: Finish editing these into displaying top projects. Possible custom API to pull info
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
                    Publications
                </Heading> 
                <Paragraph>
                    Mahmood, S., Zhao, M., Khan, O., Herman, G.L. (2020). <Text fontWeight='bold'>Caches as an Example of 
                    Machine-gradable Exam Questions for Complex Engineering Systems. </Text> In Proceedings 
                    of the 49th ASEE/IEEE Frontiers in Education Conference, Uppsala, Sweden, Oct. 21-24.
                    <Link href='https://doi.org/10.1109/FIE44824.2020.9273822'> https://doi.org/10.1109/FIE44824.2020.9273822</Link> 
                </Paragraph>    

            </Section>


            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Presentations
                </Heading>
                <Paragraph>
                Deep, H., Huang, J., Dembi, R., Khan, O., Angrave, L.. <Text fontWeight='bold'>Webcam Eye-Tracking Based Accessibility for ClassTranscribe. </Text>
                Virtual poster presentation: Illinois Undergraduate Research Symposium 2021
                </Paragraph> 
            </Section>

          
        </Container>
    </Layout>
)

export default Works