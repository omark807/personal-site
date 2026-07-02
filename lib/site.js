export const SITE_NAME = 'Omar Khan'

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://omarkhan83.com'

export const DEFAULT_DESCRIPTION =
  'Mixed-methods researcher and PhD candidate at UIUC researching accessible HCI with blind and low-vision communities — qualitative visualization and human-AI.'

// export const AVAILABILITY =
//   'Graduating December 2027 — seeking summer 2027 research internships and full-time research scientist / UX research roles thereafter.'

// export const PROOF_POINTS = [
//   'First-author CHI 2026 paper re-imagining knowledge-production workflows by, with, and for blind and low-vision researchers.',
//   'Built QUARTZ and evaluated it with 8 blind and low-vision researchers using RITE (12 tasks, 4 visualization types).',
//   'Industry and applied research at Infosys, Fable, and Viasat.',
// ]

export const CV_LONG_URL = '/Omar_Khan_CV.pdf'

export const CV_SHORT_URL = '/Omar_Khan_Resume.pdf'

export const SOCIAL_LINKS = {
  email: 'mailto:omark807@gmail.com',
  linkedin: 'https://www.linkedin.com/in/omark807/',
  github: 'https://github.com/omark807',
  scholar:
    'https://scholar.google.com/citations?user=T6f-cucAAAAJ&hl=en',
}

export const absoluteUrl = (path = '') => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
