import { useMemo, useState, useEffect } from 'react'
import {
  Heading,
  Link,
  Divider,
  Text,
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ResearchNav from '../components/research-nav'
import Paragraph from '../components/paragraph'
import { PublicationImpact } from '../components/publication-highlight'

const themeFilters = [
  { id: 'accessible-tooling', label: 'Accessible Tooling' },
  { id: 'human-ai', label: 'Human-AI & Inclusion' },
  { id: 'dmh', label: 'Digital Mental Health' },
]

const publicationTypes = [
  { id: 'conference', label: 'Conference & Journal Proceedings' },
  { id: 'white-paper', label: 'White Papers' },
  { id: 'wip', label: 'Posters & Works in Progress' },
]

const publications = [
  {
    id: 'c7',
    type: 'conference',
    themes: ['accessible-tooling'],
    impact:
      'Multimodal system and guidelines for BLV researchers to explore qualitative visualizations independently.',
    content: (
      <>
        <b>[C7]</b> <b>Omar Khan</b> and JooYoung Seo. 2026. QUARTZ: Qualitative Understanding via Accessible Representation and Visualization.
        {' '}To appear in the 28th International ACM SIGACCESS Conference on Computers and Accessibility, Porto, Portugal. ACM.
      </>
    ),
  },
  {
    id: 'c6',
    type: 'conference',
    themes: ['dmh'],
    impact:
      'Unpacks barriers in digital mental health apps and informs inclusive DMH product design.',
    content: (
      <>
        <b>[C6]</b> <b>Omar Khan</b> and JooYoung Seo. 2026. &quot;I Don&apos;t Want My Mental Health App To Give Me Mental Health Barriers&quot;: Unpacking The Need For Digital Mental Health Tracking Services With And For The Blind Community.
        {' '}To appear in the 28th International ACM SIGACCESS Conference on Computers and Accessibility, Porto, Portugal. ACM.
      </>
    ),
  },
  {
    id: 'c5',
    type: 'conference',
    themes: ['accessible-tooling'],
    impact:
      'Reimagines knowledge production workflows with BLV researchers as co-designers, not afterthoughts.',
    content: (
      <>
        <b>[C5]</b> <b>Omar Khan</b> and JooYoung Seo. 2026. &quot;I Don&apos;t Trust Any Professional Research Tool&quot;: A Re-Imagination of Knowledge Production Workflows by, with, and for Blind and Low-Vision Researchers.
        {' '}In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems, Barcelona, Spain. ACM, 24 pages.
        <Link target="_blank" href="https://doi.org/10.1145/3772318.3791242" rel="noopener noreferrer" aria-label="View DOI for CHI 2026 paper on knowledge production workflows (opens in new tab)"> [DOI]</Link> | <Link target="_blank" href="https://arxiv.org/abs/2602.08925" rel="noopener noreferrer" aria-label="View arXiv preprint for CHI 2026 paper on knowledge production workflows (opens in new tab)"> [arXiv]</Link>
      </>
    ),
  },
  {
    id: 'c4',
    type: 'conference',
    themes: ['accessible-tooling'],
    impact:
      'Co-designed VR boxing game built with, for, and by blind and low-vision players.',
    content: (
      <>
        <b>[C4]</b> Sanchita S. Kamath, <b>Omar Khan</b>, Anurag Choudhary, Jan Meyerhoff-Liang,
        Soyoung Choi, and JooYoung Seo. 2025. PunchPulse: A Physically Demanding Virtual Reality Boxing Game Designed with, for and by Blind and
        Low-Vision Players.
        {' '}<i>In the 27th International ACM SIGACCESS Conference on Computers and Accessibility</i>, Denver, CO, USA. ACM, 21 pages.
        <Link target="_blank" href="https://dl.acm.org/doi/10.1145/3663547.3746365" rel="noopener noreferrer" aria-label="View DOI for PunchPulse paper (opens in new tab)"> [DOI]</Link>
      </>
    ),
  },
  {
    id: 'c3',
    type: 'conference',
    themes: ['human-ai'],
    impact:
      'University students with disabilities share how generative AI affects learning and access.',
    content: (
      <>
        <b>[C3]</b> Alex Atcheson, <b>Omar Khan</b>, Brian Siemann, Anika Jain, and Karrie Karahalios. 2025.
        ”I&apos;d Never Actually Realized How Big An Impact It Had Until Now”: Perspectives of University Students with Disabilities on Generative Artificial Intelligence.
        {' '}<i>In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems.</i> ACM, Article 42, 1–22.
        <Link target="_blank" href="https://doi.org/10.1145/3706598.3714121" rel="noopener noreferrer" aria-label="View DOI for CHI 2025 paper on Generative AI perspectives (opens in new tab)"> [DOI]</Link>
      </>
    ),
  },
  {
    id: 'c2',
    type: 'conference',
    themes: ['human-ai'],
    impact:
      'Examines consent beyond disclosure in smart home contexts.',
    content: (
      <>
        <b>[C2]</b> Chiang, Y.S, <b>Khan, O.</b>, Bates, A., and Cobb, C. (2024).
        More than just informed: The importance of consent facets in smart homes.
        {' '}<i>In Proceedings of the CHI Conference on Human Factors in Computing Systems</i>, Honolulu, HI, USA. ACM, 21 pages.
        <Link target="_blank" href="https://dl.acm.org/doi/10.1145/3613904.3642288" rel="noopener noreferrer" aria-label="View DOI for CHI 2024 paper on smart home consent (opens in new tab)"> [DOI]</Link>
      </>
    ),
  },
  {
    id: 'c1',
    type: 'conference',
    themes: ['human-ai'],
    earlierWork: true,
    impact:
      'Early work on machine-gradable exam questions for engineering education.',
    content: (
      <>
        <b>[C1]</b> Mahmood, S., Zhao, M., <b>Khan, O.</b>, Herman, G.L. (2020).
        Caches as an Example of Machine-gradable Exam Questions for Complex Engineering Systems.
        {' '}<i>In Proceedings of the 49th ASEE/IEEE Frontiers in Education Conference</i>, Uppsala, Sweden.
        <Link target="_blank" href="https://doi.org/10.1109/FIE44824.2020.9273822" rel="noopener noreferrer" aria-label="View DOI for FIE 2020 paper on machine-gradable exam questions (opens in new tab)"> [DOI]</Link>
      </>
    ),
  },
  {
    id: 'w1',
    type: 'white-paper',
    themes: ['human-ai'],
    impact:
      'National AFB report on AI benefits, risks, and aspirations from a disability lens.',
    content: (
      <>
        <b>[W1]</b> A. M. Silverman, A. L. Whistler, A. Shock, C. H. Heydarian, S. J. Baguhn, W. E. Hanuschock, A. Hashimoto, <b>Omar Khan</b>, and M-L. Vader. 2026. The AI Quagmire: Benefits, Risks, and Aspirations Through a Disability Lens.
        {' '}American Foundation for the Blind.
        <Link target="_blank" href="https://afb.org/research-and-initiatives/ai-series/ai-quagmire" rel="noopener noreferrer" aria-label="View The AI Quagmire report on the AFB website (opens in new tab)"> [Report]</Link>
      </>
    ),
  },
  {
    id: 'p4',
    type: 'wip',
    themes: ['accessible-tooling'],
    impact:
      'Compares non-visual modalities for BLV learners exploring histogram concepts.',
    content: (
      <>
        <b>[P4]</b> Sanchita S. Kamath, <b>Omar Khan</b>, Aziz N. Zeidieh, and JooYoung Seo. 2025. Sensing the Shape of Data: Non-Visual Exploration of
        Statistical Concepts in Histograms with Blind and Low-Vision Learners.
        {' '}<i>arXiv preprint arXiv:2509.14452.</i> <Link target="_blank" href="https://arxiv.org/abs/2509.14452" rel="noopener noreferrer" aria-label="View arXiv preprint for Sensing the Shape of Data paper (opens in new tab)"> [arXiv]</Link>
      </>
    ),
  },
  {
    id: 'p3',
    type: 'wip',
    themes: ['dmh'],
    impact:
      'Need-finding study on digital mental health tracking for the blind community.',
    content: (
      <>
        <b>[P3]</b> <b>Omar Khan</b> and JooYoung Seo. 2025. &quot;Sighted People Have Their Pick Of The Litter&quot;: Unpacking The Need For Digital Mental Health (DMH) Tracking Services With And For The Blind Community.
        {' '}<i>In Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems.</i> ACM, Article 27, 1–13.
        <Link target="_blank" href="https://dl.acm.org/doi/10.1145/3706599.3719817" rel="noopener noreferrer" aria-label="View DOI for CHI EA 2025 paper on digital mental health tracking (opens in new tab)"> [DOI]</Link> | <Link target="_blank" href="https://arxiv.org/abs/2503.07415" rel="noopener noreferrer" aria-label="View arXiv preprint for digital mental health tracking paper (opens in new tab)"> [arXiv]</Link>
      </>
    ),
  },
  {
    id: 'p2',
    type: 'wip',
    themes: ['accessible-tooling'],
    subheading: 'Posters and presentations',
    impact:
      'Accessible VR table-tennis co-designed with blind and low-vision individuals.',
    content: (
      <>
        <b>[P2]</b> Sanchita S. Kamath, Aziz Zeidieh, <b>Omar Khan</b>, Dhruv Sethi, and JooYoung Seo. 2024. Playing Without Barriers: Crafting Playful and Accessible VR Table-Tennis with and for Blind and Low-Vision Individuals.
        {' '}<i>In Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility.</i> ACM, Article 88, 1–5.
        <Link target="_blank" href="https://dl.acm.org/doi/10.1145/3663548.3688526" rel="noopener noreferrer" aria-label="View DOI for ASSETS 2024 poster on accessible VR table-tennis (opens in new tab)"> [DOI]</Link>
      </>
    ),
  },
  {
    id: 'p1',
    type: 'wip',
    themes: ['accessible-tooling'],
    impact:
      'Undergraduate poster on webcam eye-tracking accessibility for ClassTranscribe.',
    content: (
      <>
        <b>[P1]</b> Deep, H., Huang, J., Dembi, R., <b>Khan, O.</b>, Angrave, L..
        Webcam Eye-Tracking Based Accessibility for ClassTranscribe.
        <i>Virtual poster presentation: Illinois Undergraduate Research Symposium 2021.</i>
      </>
    ),
  },
]

const PublicationEntry = ({ pub }) => (
  <>
    {pub.impact && <PublicationImpact>{pub.impact}</PublicationImpact>}
    <Paragraph>{pub.content}</Paragraph>
  </>
)

const Research = () => {
  const [activeThemes, setActiveThemes] = useState([])
  const [announcement, setAnnouncement] = useState('')

  const filteredPublications = useMemo(() => {
    if (activeThemes.length === 0) return publications
    return publications.filter((pub) =>
      pub.themes.some((theme) => activeThemes.includes(theme))
    )
  }, [activeThemes])

  const groupedPublications = useMemo(() => {
    return publicationTypes
      .map((type) => ({
        ...type,
        items: filteredPublications.filter(
          (pub) => pub.type === type.id && !pub.earlierWork
        ),
        earlierItems: filteredPublications.filter(
          (pub) => pub.type === type.id && pub.earlierWork
        ),
      }))
      .filter((group) => group.items.length > 0 || group.earlierItems.length > 0)
  }, [filteredPublications])

  const visiblePublicationTypes = useMemo(
    () => groupedPublications.map(({ id, label }) => ({ id, label })),
    [groupedPublications]
  )

  useEffect(() => {
    const count = filteredPublications.length
    if (count === 0) {
      setAnnouncement('No publications match the selected themes.')
    } else if (activeThemes.length === 0) {
      setAnnouncement(`Showing all ${count} publications.`)
    } else {
      const themeLabels = themeFilters
        .filter(({ id }) => activeThemes.includes(id))
        .map(({ label }) => label)
        .join(', ')
      setAnnouncement(`Showing ${count} publication${count === 1 ? '' : 's'} for ${themeLabels}.`)
    }
  }, [filteredPublications.length, activeThemes])

  const handleThemeToggle = (themeId) => {
    setActiveThemes((current) =>
      current.includes(themeId)
        ? current.filter((id) => id !== themeId)
        : [...current, themeId]
    )
  }

  const handleClearThemes = () => setActiveThemes([])

  return (
    <Layout title="Research" canonicalPath="/research">
        <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
          <ResearchNav
            themeFilters={themeFilters}
            activeThemes={activeThemes}
            onThemeToggle={handleThemeToggle}
            onClearThemes={handleClearThemes}
            publicationTypes={visiblePublicationTypes}
          />
          <Box flex={1} minW={0}>
            <Heading as="h1" variant="section-title" mb={4}>
              Research
            </Heading>
            <Text mb={4}>
              I study accessible research and product ecosystems with and for blind and low-vision communities. My work connects
              participatory UX research, multimodal interaction design, and product-relevant recommendations for inclusive systems.
            </Text>

            <Box role="status" aria-live="polite" aria-atomic="true" className="sr-only">
              {announcement}
            </Box>

            {groupedPublications.length === 0 ? (
              <Text color="gray.500">No publications match the selected themes.</Text>
            ) : (
              groupedPublications.map((group, groupIndex) => (
                <Section key={group.id} delay={0.1 * (groupIndex + 1)}>
                  <Divider my={groupIndex === 0 ? 4 : 6} />
                  <Heading as="h2" id={group.id} fontSize={20} mb={4}>
                    {group.label}
                  </Heading>
                  {group.items.map((pub, index) => (
                    <Box key={pub.id}>
                      {index > 0 && <Divider my={3} />}
                      {pub.subheading && (
                        <Heading as="h3" fontSize={18} mb={3} mt={index > 0 ? 2 : 0}>
                          {pub.subheading}
                        </Heading>
                      )}
                      <PublicationEntry pub={pub} />
                    </Box>
                  ))}
                  {group.earlierItems.length > 0 && (
                    <Accordion allowToggle mt={4}>
                      <AccordionItem border="none">
                        <AccordionButton px={0} _hover={{ bg: 'transparent' }}>
                          <Box flex="1" textAlign="left" fontWeight="semibold">
                            Earlier work
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel px={0} pb={0}>
                          {group.earlierItems.map((pub, index) => (
                            <Box key={pub.id}>
                              {index > 0 && <Divider my={3} />}
                              <PublicationEntry pub={pub} />
                            </Box>
                          ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  )}
                </Section>
              ))
            )}
          </Box>
        </Flex>
    </Layout>
  )
}

export default Research
