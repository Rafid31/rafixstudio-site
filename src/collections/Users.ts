import type { CollectionConfig } from 'payload'

// Admin users — manage this from /admin/collections/users
export const Users: CollectionConfig = {
  slug: 'users',
  admin: { useAsTitle: 'email' },
  auth: true,
  fields: [
    { name: 'name', type: 'text', label: 'Full Name' },
  ],
}
