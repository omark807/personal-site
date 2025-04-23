import { Container, Heading, Link, Divider} from '@chakra-ui/react'
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
            Research is nothing if not for your collaborators, and I have had the tremendous opportunity to work with many amazing ones throughout my life. Here, you can find more information on publications and presentations I&apos;ve worked on with these folks. 

            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Conference and Journal Publications
                </Heading> 
                <Paragraph>
                    <b>[C1]</b> Alex Atcheson, <b>Omar Khan</b>, Brian Siemann, Anika Jain, and Karrie Karahalios. 2025. 
                    ”I’d Never Actually Realized How Big An Impact It Had Until Now”: Perspectives of University Students with Disabilities on Generative Artificial Intelligence.
                    <i> To appear. In CHI Conference on Human Factors in Computing Systems (CHI ’25), April 26–
                    May 01, 2025, Yokohama, Japan.</i> ACM, New York, NY, USA, 21 pages.
                    <Link target="_blank" href='https://doi.org/10.1145/3706598.3714121'> [Link]</Link> 
                </Paragraph>
                <Divider my={3} />
                <Paragraph>
                    <b>[C2]</b> Chiang, Y.S, <b>Khan, O.</b>, Bates, A., and Cobb, C. (2024). 
                    More than just informed: The importance of consent facets in smart homes.
                    <i>In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI ’24), May 11–16, 2024, Honolulu, HI, USA.</i> ACM, New
                    York, NY, USA, 21 pages.
                    <Link target="_blank" href='https://dl.acm.org/doi/10.1145/3613904.3642288'> [Link]</Link> 
                </Paragraph>
                <Divider my={3} />
                <Paragraph>
                    <b>[C3]</b> Mahmood, S., Zhao, M., <b>Khan, O.</b>, Herman, G.L. (2020). 
                    Caches as an Example of Machine-gradable Exam Questions for Complex Engineering Systems. 
                    <i>In Proceedings of the 49th ASEE/IEEE Frontiers in Education Conference, Uppsala, Sweden, Oct. 21-24.</i>
                    <Link target="_blank" href='https://doi.org/10.1109/FIE44824.2020.9273822'> [Link]</Link> 
                </Paragraph>    

            </Section>


            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Posters and Presentations
                </Heading>
                <Paragraph>
                    <b>[P1]</b> <b>Omar Khan</b> and JooYoung Seo. 2025. Playing Without Barriers: Crafting Playful and Accessible VR Table-Tennis with and for Blind and Low-Vision Individuals. <i>To appear. In Extended
                    Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA ’25), April 26‐May 1, 2025, Yokohama, Japan.</i> ACM, New York, NY, USA, 13 pages.
                     <Link target="_blank" href='https://dl.acm.org/doi/10.1145/3706599.3719817'> [Preprint Link]</Link> 
                </Paragraph>
                <Divider my={3} />

                <Paragraph>
                    <b>[P2]</b> Sanchita S. Kamath, Aziz Zeidieh, <b>Omar Khan</b>, Dhruv Sethi, and JooYoung Seo. 2024. Playing Without Barriers: Crafting Playful and Accessible VR Table-Tennis with and for Blind and Low-Vision Individuals. <i>In Proceedings of the 26th International ACM SIGACCESS Conference
                    on Computers and Accessibility (ASSETS ’24). Association for Computing Machinery, New York, NY, USA, Article 88, 1–5.</i>
                     <Link target="_blank" href='https://dl.acm.org/doi/10.1145/3663548.3688526'> [Link]</Link> 
                </Paragraph>
                <Divider my={3} />
                <Paragraph>
                    <b>[P3]</b> Deep, H., Huang, J., Dembi, R., <b>Khan, O.</b>, Angrave, L.. 
                    Webcam Eye-Tracking Based Accessibility for ClassTranscribe.
                    <i>Virtual poster presentation: Illinois Undergraduate Research Symposium 2021.</i>
                </Paragraph> 
            </Section>

          
        </Container>
    </Layout>
)

export default Works