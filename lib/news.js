export const newsItems = [
  {
    title: 'Design Research Intern at Infosys',
    date: '04-02-2026',
    month: 'April 2026',
    excerpt:
      'Ongoing since June 2026: mixed-methods research on last-mile delivery robots — who their signals and cues actually work for, and who they leave behind.',
    content: <>Since June 2026, I have been at Infosys&apos; Center for Autonomous Learning as a Design Research Intern, conducting mixed-methods research on last-mile delivery robots (LMDRs). I am especially interested in how perceptible these systems&apos; signals and cues are — who they actually work for, and who they leave behind.</>,
    tags: ['internship', 'industry'],
    relatedLink: { href: '/experience', label: 'View experience' },
  },
  {
    title: 'AFB National Report on AI & Disability',
    date: '03-25-2026',
    month: 'March 2026',
    excerpt:
      'Co-authored AFB\'s national report on AI benefits, risks, and user aspirations through a disability lens.',
    content: <>I contributed as a co-author to the American Foundation for the Blind&apos;s national report, &quot;The AI Quagmire: Benefits, Risks, and User Aspirations Through a Disability Lens.&quot; Drawing on a survey of over 1,700 Americans with and without disabilities, the report examines how people are using AI, the barriers and risks disabled users face, and actionable recommendations for developers, employers, educators, and policymakers. You can read the full report on <a href="https://afb.org/research-and-initiatives/ai-series/ai-quagmire" target="_blank" rel="noopener noreferrer" aria-label="View The AI Quagmire report on the AFB website (opens in new tab)"><u>AFB&apos;s website</u></a>.</>,
    tags: ['publication', 'report'],
    relatedLink: { href: '/research', label: 'View publication [W1]' },
  },
  {
    title: 'New Paper Accepted to CHI 2026!',
    date: '01-28-2026',
    month: 'January 2026',
    excerpt:
      'Knowledge production workflows re-imagined by, with, and for blind and low-vision researchers — now published at CHI 2026.',
    content: <>Our paper on &quot;I Don’t Trust Any Professional Research Tool&quot;: A Re-Imagination of Knowledge Production Workflows by, with, and for Blind and Low-Vision Researchers has been accepted to CHI 2026! You can read the published paper on <a href="https://doi.org/10.1145/3772318.3791242" target="_blank" rel="noopener noreferrer" aria-label="View DOI for CHI 2026 paper on knowledge production workflows (opens in new tab)"><u>ACM Digital Library</u></a>. I look forward to presenting this work at CHI 2026 in Barcelona, Spain in April!</>,
    tags: ['publication', 'conference'],
    relatedLink: {
      href: 'https://doi.org/10.1145/3772318.3791242',
      label: 'Read on ACM',
      external: true,
    },
  },
  {
    title: 'ASSETS 2025 In-Person Attendance',
    date: '08-01-2025',
    month: 'August 2025',
    excerpt:
      'Attending ASSETS 2025 in Denver to connect with researchers and practitioners in accessibility.',
    content: 'I will be attending ASSETS 2025 in Denver, CO in October! I am very much looking forward to connecting with fellow researchers and practitioners working across any and all work within accessibility.',
    tags: ['conference'],
  },
  {
    title: 'CHI 2025 In-Person Presentation',
    date: '03-31-2025',
    month: 'March 2025',
    excerpt:
      'Presenting our Late-Breaking Work at CHI 2025 in Yokohama, Japan.',
    content: 'I will be presenting our Late-Breaking Work at CHI 2025 in Yokohama, Japan! I am excited to share our findings and engage with the broader CHI community.',
    tags: ['conference', 'presentation'],
    relatedLink: { href: '/works/dmh', label: 'View DMH case study' },
  },
  {
    title: 'Late-Breaking Work Accepted to CHI 2025!',
    date: '02-22-2025',
    month: 'February 2025',
    excerpt:
      'Our late-breaking work on digital mental health was accepted to CHI 2025.',
    content:
      <>Our late-breaking work has been accepted to CHI 2025! You can find the preprint at
      <a href="https://arxiv.org/abs/2503.07415" target='_blank' rel="noopener noreferrer" aria-label="View arXiv preprint for late-breaking work (opens in new tab)"> <u>this link</u></a>.
      </>,
    tags: ['publication', 'conference'],
    relatedLink: { href: '/works/dmh', label: 'View DMH case study' },
  },
]

export const getLatestNews = (count = 3) => newsItems.slice(0, count)

export const formatNewsLabel = (item) => {
  const tagLabel = item.tags[0].charAt(0).toUpperCase() + item.tags[0].slice(1)
  return `${tagLabel} · ${item.month}`
}
