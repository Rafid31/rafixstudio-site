import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Media / Image library — upload images from /admin/collections/media
export const Media: CollectionConfig = {
  slug: 'media',
  admin: { useAsTitle: 'filename' },
  access: { read: () => true },
  fields: [
    { name: 'alt', type: 'text', label: 'Alt Text (describe the image for accessibility)' },
    { name: 'caption', type: 'text', label: 'Caption (optional)' },
  ],
  upload: {
    staticDir: path.resolve(dirname, '../../public/media'),
    staticURL: '/media',
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 800, height: 600, position: 'centre' },
      { name: 'hero', width: 1920, height: 1080, position: 'centre' },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
}
