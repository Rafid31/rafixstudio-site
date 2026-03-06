import type { GlobalConfig } from 'payload'

// Home page content — edit from /admin/globals/home-page
export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  admin: { description: 'Edit all content on the home page.' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'headline', type: 'text', label: 'Main Headline', defaultValue: 'GRAPHIC DESIGNER' },
        { name: 'subheadline', type: 'text', label: 'Sub Headline / Tagline', defaultValue: 'Crafting bold visual identities' },
        { name: 'availabilityText', type: 'text', label: 'Availability Badge Text', defaultValue: 'Available for projects' },
        { name: 'heroImage', type: 'upload', relationTo: 'media', label: 'Hero Background Image (optional)' },
        { name: 'ctaLabel', type: 'text', label: 'CTA Button Label', defaultValue: 'See my work' },
        { name: 'ctaUrl', type: 'text', label: 'CTA Button URL', defaultValue: '/work' },
      ],
    },
    {
      name: 'marqueeText',
      type: 'text',
      label: 'Marquee / Ticker Text (repeating strip)',
      defaultValue: 'GRAPHIC DESIGNER · BASED IN DUBAI · BRAND IDENTITY · PRINT DESIGN · PACKAGING · AVAILABLE ·',
    },
    {
      name: 'selectedWorksTitle',
      type: 'text',
      label: 'Selected Works Section Title',
      defaultValue: 'Selected Work',
    },
    {
      name: 'servicesTitle',
      type: 'text',
      label: 'Services Section Title',
      defaultValue: 'What I Do',
    },
    {
      name: 'servicesIntro',
      type: 'textarea',
      label: 'Services Intro Text',
      defaultValue: 'I help brands stand out through thoughtful design — from identity systems to print and digital.',
    },
    {
      name: 'testimonialsTitle',
      type: 'text',
      label: 'Testimonials Section Title',
      defaultValue: 'Client Words',
    },
    {
      name: 'contactTitle',
      type: 'text',
      label: 'Contact Section Heading',
      defaultValue: "Let's Work Together",
    },
    {
      name: 'contactSubtext',
      type: 'textarea',
      label: 'Contact Section Subtext',
      defaultValue: "I'm available for freelance projects and collaborations. Drop me a line and let's create something great.",
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO for Home Page',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
  ],
}
