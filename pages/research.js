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
            <Heading as="h1" fontSize={20} mb={4}>
                Research
            </Heading>
            Research is nothing if not for your collaborators, and I have had the tremendous opportunity to work with many amazing ones throughout my life. Here, you can find more information on publications and presentations I&apos;ve worked on with these folks. 

            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h2" fontSize={20} mb={4}>
                    Conference and Journal Publications
                </Heading> 
                <Paragraph>
                <b>[C6]</b> Omar Khan and JooYoung Seo. 2026. &quot;I Don’t Trust Any Professional Research Tool&quot;: A Re-Imagination of Knowledge Production Workflows by, with, and for Blind and Low-Vision Researchers. In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI ’26), April 13–17, 2026, Barcelona, Spain. ACM, New York, NY, USA, 24 pages. <Link target="_blank" href="https://doi.org/10.1145/3772318.3791242" rel="noopener noreferrer" aria-label="View DOI for CHI 2026 paper on knowledge production workflows (opens in new tab)"> [DOI]</Link>
                </Paragraph>
                <Divider my={3} />
                <Paragraph>
                    <b>[C5]</b> Sanchita S. Kamath, <b>Omar Khan</b>, Anurag Choudhary, Jan Meyerhoff-Liang,
                    Soyoung Choi, and JooYoung Seo. 2025. PunchPulse: A Physically Demanding Virtual Reality Boxing Game Designed with, for and by Blind and
                    Low-Vision Players. <i>In The 27th International ACM SIGACCESS Conference
                    on Computers and Accessibility (ASSETS ’25)</i>, October 26–29, 2025, Denver, CO,
                    USA. ACM, New York, NY, USA, 21 pages. <Link target="_blank" href="https://dl.acm.org/doi/10.1145/3663547.3746365" rel="noopener noreferrer" aria-label="View DOI for PunchPulse paper (opens in new tab)"> [DOI]</Link>
                </Paragraph>
                <Divider my={3} />
                <Paragraph>
                <b>[C4]</b> Sanchita S. Kamath, <b>Omar Khan</b>, Aziz N. Zeidieh, and JooYoung Seo. 2025. Sensing the Shape of Data: Non-Visual Exploration of
                Statistical Concepts in Histograms with Blind and Low-Vision Learners. <i>arXiv preprint arXiv:2509.14452.</i> <Link target="_blank" href="https://arxiv.org/abs/2509.14452" rel="noopener noreferrer" aria-label="View arXiv preprint for Sensing the Shape of Data paper (opens in new tab)"> [arxiv]</Link>
                </Paragraph>
                <Divider my={3} />
                <Paragraph>
                    <b>[C3]</b> Alex Atcheson, <b>Omar Khan</b>, Brian Siemann, Anika Jain, and Karrie Karahalios. 2025. 
                    ”I’d Never Actually Realized How Big An Impact It Had Until Now”: Perspectives of University Students with Disabilities on Generative Artificial Intelligence.
                    <i> In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI &apos;25).</i> Association for Computing Machinery, New York, NY, USA, Article 42, 1–22.
                    <Link target="_blank" href='https://doi.org/10.1145/3706598.3714121' rel="noopener noreferrer" aria-label="View DOI for CHI 2025 paper on Generative AI perspectives (opens in new tab)"> [DOI]</Link> 
                </Paragraph>
                <Divider my={3} />
                <Paragraph>
                    <b>[C2]</b> Chiang, Y.S, <b>Khan, O.</b>, Bates, A., and Cobb, C. (2024). 
                    More than just informed: The importance of consent facets in smart homes.
                    <i>In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI ’24), May 11–16, 2024, Honolulu, HI, USA.</i> ACM, New
                    York, NY, USA, 21 pages.
                    <Link target="_blank" href='https://dl.acm.org/doi/10.1145/3613904.3642288' rel="noopener noreferrer" aria-label="View DOI for CHI 2024 paper on smart home consent (opens in new tab)"> [DOI]</Link> 
                </Paragraph>
                <Divider my={3} />
                <Paragraph>
                    <b>[C1]</b> Mahmood, S., Zhao, M., <b>Khan, O.</b>, Herman, G.L. (2020). 
                    Caches as an Example of Machine-gradable Exam Questions for Complex Engineering Systems. 
                    <i>In Proceedings of the 49th ASEE/IEEE Frontiers in Education Conference, Uppsala, Sweden, Oct. 21-24.</i>
                    <Link target="_blank" href='https://doi.org/10.1109/FIE44824.2020.9273822' rel="noopener noreferrer" aria-label="View DOI for FIE 2020 paper on machine-gradable exam questions (opens in new tab)"> [DOI]</Link> 
                </Paragraph>    

            </Section>


            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h2" fontSize={20} mb={4}>
                    Works in Progress, Posters, and Presentations
                </Heading>
                <Paragraph>
                    <b>[P3]</b> <b>Omar Khan</b> and JooYoung Seo. 2025. &quot;Sighted People Have Their Pick Of The Litter&quot;: Unpacking The Need For Digital Mental Health (DMH) Tracking Services With And For The Blind Community. <i>In Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA &apos;25).</i> Association for Computing Machinery, New York, NY, USA,
                    Article 27, 1–13.
                     <Link target="_blank" href='https://dl.acm.org/doi/10.1145/3706599.3719817' rel="noopener noreferrer" aria-label="View DOI for CHI EA 2025 paper on digital mental health tracking (opens in new tab)"> [DOI]</Link>  | <Link target="_blank" href='https://arxiv.org/abs/2503.07415' rel="noopener noreferrer" aria-label="View arXiv preprint for digital mental health tracking paper (opens in new tab)"> [arxiv]</Link> 
                </Paragraph>
                <Divider my={3} />

                <Paragraph>
                    <b>[P2]</b> Sanchita S. Kamath, Aziz Zeidieh, <b>Omar Khan</b>, Dhruv Sethi, and JooYoung Seo. 2024. Playing Without Barriers: Crafting Playful and Accessible VR Table-Tennis with and for Blind and Low-Vision Individuals. <i>In Proceedings of the 26th International ACM SIGACCESS Conference
                    on Computers and Accessibility (ASSETS ’24). Association for Computing Machinery, New York, NY, USA, Article 88, 1–5.</i>
                     <Link target="_blank" href='https://dl.acm.org/doi/10.1145/3663548.3688526' rel="noopener noreferrer" aria-label="View DOI for ASSETS 2024 poster on accessible VR table-tennis (opens in new tab)"> [DOI]</Link> 
                </Paragraph>
                <Divider my={3} />
                <Paragraph>
                    <b>[P1]</b> Deep, H., Huang, J., Dembi, R., <b>Khan, O.</b>, Angrave, L.. 
                    Webcam Eye-Tracking Based Accessibility for ClassTranscribe.
                    <i>Virtual poster presentation: Illinois Undergraduate Research Symposium 2021.</i>
                </Paragraph> 
            </Section>

          
        </Container>
    </Layout>
)

export default Works