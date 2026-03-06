import type { CollectionConfig } from 'payload'

// Testimonials — manage client quotes from /admin/collections/testimonials
export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'clientName',
    defaultColumns: ['clientName', 'role', 'company'],
    description: 'Add client testimonials to display on your site.',
  },
  access: { read: () => true },
  fields: [
    { name: 'clientName', type: 'text', required: true, label: 'Client Name' },
    { name: 'role', type: 'text', label: 'Job Title / Role' },
    { name: 'company', type: 'text', label: 'Company Name' },
    { name: 'quote', type: 'textarea', required: true, label: 'Testimonial Quote' },
    { name: 'avatar', type: 'upload', relationTo: 'media', label: 'Client Photo (optional)' },
    { name: 'companyLogo', type: 'upload', relationTo: 'media', label: 'Company Logo (optional)' },
    { name: 'order', type: 'number', label: 'Sort Order', defaultValue: 99 },
  ],
}
