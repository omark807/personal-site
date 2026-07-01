import fs from 'fs'
import path from 'path'
import { catPhotoManifest } from './cat-photos'

const CAT_IMAGE_DIR = path.join(process.cwd(), 'public/images/cat')

export function getAvailableCatPhotos() {
  if (!fs.existsSync(CAT_IMAGE_DIR)) {
    return { hero: null, gallery: [], hasPhotos: false }
  }

  const filesOnDisk = new Set(fs.readdirSync(CAT_IMAGE_DIR))

  const available = catPhotoManifest
    .filter(({ filename }) => filesOnDisk.has(filename))
    .map(({ filename, ...rest }) => ({
      ...rest,
      filename,
      src: `/images/cat/${filename}`,
    }))

  const hero = available.find((photo) => photo.role === 'hero') ?? null
  const gallery = available.filter((photo) => photo.role === 'gallery')

  return {
    hero,
    gallery,
    hasPhotos: available.length > 0,
  }
}
