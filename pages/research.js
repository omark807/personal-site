import { Container, Heading, Link,  SimpleGrid, Text, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

//import placeholderImg from '../public/images/works/placeholder.png'

import Paragraph from '../components/paragraph'

//ToDo: Finish editing these into displaying top projects. Possible custom API to pull info
const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontsize={20} mb={4}>
                Research
            </Heading>
            Here, you can find more information on any publications and presentations I've participatrd in. 

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

            {/* <SimpleGrid columns={[1, 1, 3]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem id="rechat" title="ReChat" thumbnail={rechatImg}>
                        This project acts as an alternative messaging service
                        while retaining common features. Login via Google/Facebook
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="whispr" title="Whispr" thumbnail={whisprImg}>
                        WIP: Social media application frontend, middleware and backend
                        with functionality of User accounts, posting and friendship
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="recipeapp" title="Recipe App" thumbnail={recipeappImg}>
                        This project takes any given dish or ingredient and will
                        return a recipe and photos thanks to Edamame services
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="covidtracker" title="COVID Tracker" thumbnail={covidTrackerImg}>
                        This project provides a dashboard for the UK COVID19
                        statistics and a breakdown of regional updates
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="photography" title="Photography" thumbnail={photographyImg}>
                        This is a website showcasing design elements and to
                        be a blog/portfolio for a photographer
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="fashion" title="Fashion" thumbnail={fashionImg}>
                        This is a basic website for an ecommerce store and 
                        mostly serves as a design template/demo
                    </WorkGridItem>
                </Section>
            </SimpleGrid> */}

            {/* <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Dart/Flutter Projects
                </Heading>
            </Section>  */}

            {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.1}>
                    <WorkGridItem id="raincheck" title="RainCheck" thumbnail={raincheckImg}>
                        A Flutter based weather application. 
                        Utilising the OpenWeatherMaps API and Flutter Geolocation service.
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="quizsy" title="Quizsy" thumbnail={quizsyImg}>
                        A Flutter based quiz application. 
                        Utilising the OpenTrivaDB API for questions.
                    </WorkGridItem>
                </Section>
            </SimpleGrid> */}

            {/* <Section delay={0.4}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Notable University Works
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.5}>
                    <WorkGridItem id="aivision" title="AI Vision" thumbnail={uohImg}>
                        This was a self-guided project in which I decided to 
                        research and develop a self-driving algorithm. Demo video
                        available.
                    </WorkGridItem>
                </Section>
                <Section delay={0.5}>
                    <WorkGridItem id="monitoringstation" title="Monitoring Station" thumbnail={uohImg}>
                        This was a project to demonstrate knowledge of distributed
                        and client server systems as well as synchronisation between
                        them seamlessly.
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem id="largemon" title="Largemon" thumbnail={uohImg}>
                        This was an assignment to recreate a &quot;Pokemon&quot; series game in C++
                        utilising concepts such as polymorphism, inheritance and concepts 
                        that were practiced as a part of the C++ module.
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem id="auctionroom" title="Auction Room" thumbnail={uohImg}>
                        This was another Java + JavaSpaces application in order to 
                        recreate an auctioning website like eBay. It functions as clients
                        logged in and allows them to add, browse and sell items.
                    </WorkGridItem>
                </Section>
            </SimpleGrid> */}
        </Container>
    </Layout>
)

export default Works