// Site-wide links and helpers.

// Empty on shesgeeky.org; "/shesgeeky.org" on the GitHub preview address.
export const base = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Images carried over from WordPress keep their old paths under public/wp-content/uploads.
export const img = (p: string) => `${base}/wp-content/uploads/${p}`

export const registerUrl = 'https://luma.com/vno5lfhr'
export const contactEmail = 'kaliya@shesgeeky.org'
export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Mabuhay%20Gardens&query_place_id=ChIJHTm6UwCBhYARbw2sXLbjFgw'

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/attend/', label: 'Attend' },
  { href: '/our-story/', label: 'Our Story' },
  { href: '/conveners/', label: 'Conveners' },
  { href: '/sponsors/', label: 'Sponsors' },
]
