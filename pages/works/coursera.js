import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Coursera <Badge>2022</Badge>
            </Title>
            <WorkImage
                src="/images/works/coursera.png"
                alt="Coursera Logo"
            />
            <P>
                This mini-project invovled making use of heuristic evaluation, a technique where the user interface 
                is evaluated against a list of high-priority usability principles, The list of principles that I used for this 
                project were created by the <Link href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Nielsen Norman Group website (opens in new tab)">Nielsen Norman Group</Link>, and can be found <Link href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank" rel="noopener noreferrer" aria-label="View ten usability heuristics article (opens in new tab)">here</Link>. 
            </P>


            <br>
            </br>

            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link target="_blank" href="https://docs.google.com/document/d/1IkyyjPdFBilIQL4dvq7tIBhv6H22HnstM8nFNfcc-pA/edit?usp=sharing" rel="noopener noreferrer" aria-label="View Coursera project document (opens in new tab)">
                        Document
                    </Link> <ExternalLinkIcon aria-hidden="true" />
                </ListItem>
  
                <ListItem>
                    <Meta>Methods</Meta>
                    Heuristic Evaluation, Usability Testing
                </ListItem>
            </List>
            <br/>
        </Container>
    </Layout>
)

export default Project