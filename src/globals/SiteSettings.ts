import type { GlobalConfig } from 'payload'

// Global site settings — edit from /admin/globals/site-settings
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: { description: 'Global settings for your site — logo, contact info, social links.' },
  access: { read: () => true },
  fields: [
    { name: 'siteTitle', type: 'text', label: 'Site Title', defaultValue: 'Rafid — Graphic Designer' },
    { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo Image (optional)' },
    { name: 'logoText', type: 'text', label: 'Logo Text', defaultValue: 'RAFID.' },
    { name: 'email', type: 'email', label: 'Contact Email', defaultValue: 'hello@rafid.design' },
    { name: 'phone', type: 'text', label: 'Phone (optional)' },
    { name: 'location', type: 'text', label: 'Location Display', defaultValue: 'Dubai, UAE' },
    { name: 'availabilityText', type: 'text', label: 'Availability Status', defaultValue: 'Available for new projects' },
    { name: 'footerText', type: 'text', label: 'Footer Copyright Text', defaultValue: '© 2025 Rafid. All rights reserved.' },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Instagram', value: 'instagram' },
            { label: 'Behance', value: 'behance' },
            { label: 'Dribbble', value: 'dribbble' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Twitter / X', value: 'twitter' },
            { label: 'Other', value: 'other' },
          ],
        },
        { name: 'label', type: 'text', label: 'Display Label' },
        { name: 'url', type: 'text', label: 'URL' },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'Default SEO',
      fields: [
        { name: 'metaTitle', type: 'text', label: 'Default Meta Title' },
        { name: 'metaDescription', type: 'textarea', label: 'Default Meta Description' },
        { name: 'ogImage', type: 'upload', relationTo: 'media', label: 'Default OG Image' },
      ],
    },
  ],
}
