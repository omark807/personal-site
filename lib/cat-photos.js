/**
 * Drop matching files into public/images/cat/ then rebuild.
 * aspectRatio + objectPosition control each frame; export WebP ~1600px long edge.
 */
export const catPhotoManifest = [
  {
    id: 'hero',
    filename: 'daphne-hero.webp',
    alt: 'Daphne, a gray tabby cat, resting with her paws tucked under her chin',
    caption: 'Chief occupancy officer (COO)',
    role: 'hero',
    aspectRatio: 3 / 2,
    objectPosition: 'center center',
  },
  {
    id: 'kitten',
    filename: 'daphne-kitten.webp',
    alt: 'Daphne as a small kitten, sitting and looking at the camera',
    caption: 'Her first time letting me know she was in charge',
    role: 'gallery',
    aspectRatio: 1,
    objectPosition: 'center 35%',
  },
  {
    id: 'judging',
    filename: 'daphne-judging.webp',
    alt: 'Daphne staring directly at the camera with a serious expression',
    caption: 'Quality assurance for everything I do',
    role: 'gallery',
    aspectRatio: 3 / 4,
    objectPosition: 'center center',
  },
]

export const catPageIntro =
  'Daphne runs a tight ship (of sorts). She wants the world to know she&apos;s a calendar cat, and that you can pet her (sparingly).'
