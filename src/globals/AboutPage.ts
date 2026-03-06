import type { GlobalConfig } from 'payload'

// About page content — edit from /admin/globals/about-page
export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: 'About Page',
  admin: { description: 'Edit all content on the About page.' },
  access: { read: () => true },
  fields: [
    { name: 'introHeadline', type: 'text', label: 'Intro Headline', defaultValue: 'About Me' },
    { name: 'tagline', type: 'text', label: 'Tagline (below headline)', defaultValue: 'Graphic Designer based in Dubai' },
    { name: 'bio', type: 'richText', label: 'Biography / About Text' },
    { name: 'profileImage', type: 'upload', relationTo: 'media', label: 'Profile Photo' },
    { name: 'profileImageAlt', type: 'text', label: 'Profile Photo Alt Text' },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats / Numbers (e.g. 5+ Years, 80+ Projects)',
      fields: [
        { name: 'value', type: 'text', label: 'Value (e.g. 5+)' },
        { name: 'label', type: 'text', label: 'Label (e.g. Years Experience)' },
      ],
    },
    {
      name: 'timeline',
      type: 'array',
      label: 'Experience / Timeline',
      fields: [
        { name: 'year', type: 'text', label: 'Year (e.g. 2020 – 2024)' },
        { name: 'role', type: 'text', label: 'Role / Position' },
        { name: 'company', type: 'text', label: 'Company / Studio' },
        { name: 'description', type: 'textarea', label: 'Brief Description' },
      ],
    },
    {
      name: 'awards',
      type: 'array',
      label: 'Awards & Recognition',
      fields: [
        { name: 'year', type: 'text' },
        { name: 'award', type: 'text', label: 'Award Name' },
        { name: 'organisation', type: 'text', label: 'Organisation / Event' },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'About Page Gallery',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text' },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO for About Page',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
  ],
}
