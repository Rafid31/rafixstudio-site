import type { CollectionConfig } from 'payload'

// Services — what you offer, shown on homepage
export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
    description: 'Define the services you offer.',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Service Title (e.g. Brand Identity)' },
    { name: 'description', type: 'textarea', label: 'Short Description' },
    { name: 'icon', type: 'text', label: 'Icon / Number Label (e.g. 01, 02)' },
    { name: 'order', type: 'number', label: 'Sort Order', defaultValue: 99 },
  ],
}
