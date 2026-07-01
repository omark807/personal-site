export const SITE_NAME = 'Omar Khan'

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://omark807.netlify.app'

export const DEFAULT_DESCRIPTION =
  'PhD candidate at UIUC researching accessible HCI with blind and low-vision communities — qualitative visualization, digital mental health, and human-AI.'

export const CV_LONG_URL =
  'https://drive.google.com/file/d/1cAUcYLSET9oTVi57cWeootpquQ7zJqYj/view?usp=sharing'

export const CV_SHORT_URL =
  'https://drive.google.com/file/d/1SLNPY8m6YRH22bDSagzfqtUcuEt29Mim/view?usp=sharing'

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
