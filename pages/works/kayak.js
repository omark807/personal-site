import { Container, Badge, Link, List, ListItem, OrderedList, UnorderedList, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Kayak <Badge>2022</Badge>
            </Title>
            <WorkImage
                src="/images/works/kayak.png"
                alt="Kayak Home Page"
            />
            <Heading>Executive Summary</Heading>
            <P>
                Through a series of two user test sessions, the objective of this work was to determine whether experienced users of online travel booking sites are able to use kayak.com to book their flights, and what issues users may experience when trying to book their flights. 
                These sessions lasted 30-45 minutes and consisted of a set of 6 progressively difficult tasks where the user was observed  and their interactions with the site noted. Based on the results of the user tests, 
                I would recommend refining several usability issues on Kayak, such as aggregating filters, allowing for more precise selection of time, duration, and price of flight, and adding share functionalities to each itinerary as a button to streamline the sharing process.                 
            </P>
            <br/>
            <Heading>Introduction</Heading>
            <P>
            Kayak.com is an online travel booking site where users can reserve a variety of aspects in travel, including but not limited to flights, hotels, cars, public transportation, and packages that have all of the aforementioned bundled together (if a user does not want to go through the process of reserving each of these individually). 
            The main questions that this study aims to answer are the following:
            <br>
            </br>
            <UnorderedList>
                <ListItem>Can experienced users of online travel booking sites use the site, kayak.com, to plan their trips?</ListItem>
                <ListItem>What problems do users encounter when trying to use this site to plan their trips?</ListItem>
            </UnorderedList>
            <br>
            </br>
            These questions are essential to answer primarily due to the fact that if experienced travelers are unable to use these sites, one cannot reasonably expect novice travelers (or novice users of Kayak) to plan their trips. 
            It also aims to address fundamental accessibility principles that are important to capture in order to make the site as inclusive as possible.

            </P>
            <br>
            </br>

            <Heading>Methods</Heading>
            In order to answer the above, a specific recruiting criteria needed to be established. Since the  main audience for this test was experienced users of online travel booking sites, that is who was recruited. However, to capture the contrast between experienced and novice users, the latter was sought out as well. Therefore, the recruiting criteria is as follows:
            <UnorderedList>
                <ListItem>Has bought an online ticket within the past year</ListItem>
                <ListItem>Has not used Kayak before </ListItem>
            </UnorderedList>
            
            <br>
            </br>
            Within this population, we were interested in certain diversity criteria, in order to gain insight into how different types of users will experience Kayak. Thus, we also recruited participants who differed in the following ways:
            
            <UnorderedList>
                <ListItem>Flight preferences</ListItem>
                <UnorderedList>
                    <ListItem>Standard</ListItem>
                    <ListItem>Complex needs (dietary restrictions, traveling with an infant, etc.)</ListItem>
                </UnorderedList>
                   
                <ListItem>Frequency of online bookings</ListItem>
                <UnorderedList>
                    <ListItem>1-3 trips per year booked online</ListItem>
                    <ListItem>4 or more trips per year booked online</ListItem>
                </UnorderedList>
                    
            </UnorderedList>
        

            <br></br>
            <Heading>Findings and Recommendation</Heading>
         
            <br>
            </br>

            <Heading size="md">Summary Results</Heading>
            <P> Below are the results, findings, and general recommendations generated by the sessions. As you can see, there are a number of usability problems that users of Kayak may experience.</P>
            <br>
            </br>

            <Heading size="md">Key Findings</Heading>
            <br>
            </br>
            <Heading size="sm"><u>Finding 1</u></Heading>
            <P>
                User did not notice the filter bar at the top, and thus was not using it efficiently to find flights
            </P>

            <Heading size="sm">Severity: 3</Heading>
            <Link href="https://drive.google.com/file/d/1cMy4ZEcHS5dXNxAqZQWuZ5f3ZNW56n4F/view?usp=sharing">
                        Interface Component in Question
            </Link> <ExternalLinkIcon></ExternalLinkIcon>
            <Heading size="sm">Recommendation: </Heading>
            <P>
                Make adjacent to the search area at the top and prioritize these filters. As it stands, the filter section at the top takes up too much space. 
            </P>
            <br>
            </br>
            <Heading size="sm"><u>Finding 2</u></Heading>
            <P>
                Cannot efficiently adjust duration and price sliders
            </P>

            <Heading size="sm">Severity: 3</Heading>
            <Link href="https://drive.google.com/file/d/1VAej-T83fwJdhVO9K_t9waV9OV6yzwql/view?usp=sharing">
                        Interface Component in Question
            </Link> <ExternalLinkIcon></ExternalLinkIcon>           
            <Heading size="sm">Recommendation: </Heading>
            <P>
                Make adjacent to the search area at the top and prioritize these filters. As it stands, the filter section at the top takes up too much space. 
            </P>           
             <br>
            </br>
            <Heading size="sm"><u>Finding 3</u></Heading>
            <P>
                Users are unable to share travel itineraries efficiently because the button is not visible until you mouse over the itinerary 
            </P>

            <Heading size="sm">Severity: 2</Heading>
            <Link href="https://drive.google.com/file/d/1JkV1e5lZlH_ObvTgE_dEJD8oMcPQI11U/view?usp=sharing">
                        Interface Component in Question
            </Link> <ExternalLinkIcon></ExternalLinkIcon>           
            <Heading size="sm">Recommendation: </Heading>
            <P>
                Make adjacent to the search area at the top and prioritize these filters. As it stands, the filter section at the top takes up too much space. 
            </P>            
            <br>
            </br>
            <Heading>Limitations</Heading>
            <P>
                One major limitation with this study was that there were a very small number of participants (only two), so a much larger number of users should be gathered in order to make more definitive conclusions. 
                <br>
                </br>
                Another significant limitation to this study was that even though the skill level may have varied between the two users with regards to travel booking sites, both users were individuals who had significant computer usage knowledge, so a wider range of skill levels in this area should be captured (people who are not as familiar with computers). 
                It would also be worthwhile to interview different age demographics (senior citizens, younger adults) as well as ability level. 

            </P>

            <br>
            </br>
            <Heading>Conclusion</Heading>
  
            <P>
                This user test report demonstrates that the following are usability issues seen within Kayak that should be addressed: 
                <br>
                </br>
                <OrderedList>
                    <ListItem>The different search filters in different areas of the page</ListItem>
                    <ListItem>Challenges in accurately adjusting time, price, duration of flights</ListItem>
                    <ListItem>Ineffective ‘share’ button on itineraries</ListItem>
                </OrderedList>
            </P>

            <br>
            </br>

            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://docs.google.com/document/d/1ZwPsz2A0BAL0JUKBZRmvMIeZHLXvyGlYWwNeeh17I0o/edit?usp=sharing">
                        Document
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                {/* <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Google Docs</Link>
                </ListItem> */}
                <ListItem>
                    <Meta>Methods</Meta>
                    <Link>Interview Design, Usability Testing</Link>
                </ListItem>
            </List>
            <br/>
        </Container>
    </Layout>
)

export default Project