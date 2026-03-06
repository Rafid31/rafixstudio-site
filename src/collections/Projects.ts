import type { CollectionConfig } from 'payload'

// Projects collection — add your portfolio work from /admin/collections/projects
export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'year', 'featured', 'order'],
    description: 'Add and manage your portfolio projects here.',
  },
  access: { read: () => true },
  versions: { drafts: true },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'URL Slug (e.g. brand-identity-xyz)',
      admin: { description: 'Used in the URL: /work/your-slug-here' },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Thumbnail Image',
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      options: [
        { label: 'Brand Identity', value: 'brand-identity' },
        { label: 'Print Design', value: 'print-design' },
        { label: 'Digital Design', value: 'digital-design' },
        { label: 'Packaging', value: 'packaging' },
        { label: 'Motion Graphics', value: 'motion' },
        { label: 'UI/UX', value: 'ui-ux' },
        { label: 'Other', value: 'other' },
      ],
    },
    { name: 'year', type: 'text', label: 'Year (e.g. 2024)' },
    { name: 'shortDescription', type: 'textarea', label: 'Short Description (shown on listing)' },
    { name: 'client', type: 'text', label: 'Client Name' },
    { name: 'services', type: 'text', label: 'Services (comma-separated, e.g. Branding, Typography)' },
    { name: 'externalUrl', type: 'text', label: 'External Project URL (optional)' },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Project Hero Image (large top image on project page)',
    },
    {
      name: 'caseStudy',
      type: 'richText',
      label: 'Case Study / Project Description',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Project Gallery',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text' },
      ],
    },
    {
      name: 'nextProject',
      type: 'relationship',
      relationTo: 'projects',
      label: 'Next Project (shown at bottom of project page)',
      admin: { description: 'Link to the next project in the series.' },
    },
    { name: 'featured', type: 'checkbox', label: 'Featured on Homepage?', defaultValue: false },
    { name: 'order', type: 'number', label: 'Sort Order (lower = first)', defaultValue: 99 },
  ],
}
