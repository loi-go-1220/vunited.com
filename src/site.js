// Company details used across the site. Edit here and every page updates.
export const site = {
  name: 'VUnited',
  tagline: 'Global talent for US companies',
  description:
    'VUnited connects skilled professionals from around the world with companies across the United States — startups, growing businesses and enterprises in every industry.',
  founded: 2025,
  email: 'michael@vunited.store',
  address: {
    street: '360 E 2nd St, 8th Floor',
    city: 'Los Angeles',
    region: 'CA',
    postal: '90012',
    country: 'United States',
  },
}

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}`
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`

export const industries = [
  'Technology & Software',
  'Healthcare',
  'Finance & Accounting',
  'Engineering',
  'Sales & Marketing',
  'Customer Support',
  'Operations & Logistics',
  'Design & Creative',
  'Administration',
  'Data & Analytics',
]
