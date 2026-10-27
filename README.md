# shesgeeky.org

The She's Geeky website. A static Next.js site published with GitHub Pages, set up the same way as agenticinternetworkshop.org.

Every push to `main` rebuilds and publishes the site (about 2 minutes). Watch it under the repo's **Actions** tab.

- Preview address (until the domain switch): https://identitywoman.github.io/shesgeeky.org/
- Live site today: https://shesgeeky.org (still WordPress on SiteGround)

## Where things are

| What | Where |
|---|---|
| Page text | `src/app/<page>/page.tsx` (`src/app/page.tsx` is the homepage) |
| Privacy Policy, Terms text | `content/legal/<page>.html` |
| Registration link, contact email, menu | `src/lib/site.ts` |
| Mailing list signup, sponsor form | `src/components/` |
| Images | `public/wp-content/uploads/...` (same paths as on WordPress) |
| Header, footer | `src/app/layout.tsx` |
| Colors and fonts | `src/app/globals.css` |
| Build and publish | `.github/workflows/deploy.yml` |

## History

- 2026-10-25: Repo created. The 8 WordPress pages (Home, Attend, Our Story, Conveners, Sponsors, Mailing List, Privacy Policy, Terms of Services) carried over as-is, at the same addresses, with all 41 images. The Email Octopus signup on Mailing List carries over. The Sponsors inquiry form was an Elementor (WordPress) form and is a placeholder until rebuilt.
- 2026-10-26: Redesign. Every page rebuilt in the new design; WordPress page-builder markup removed. The sponsor form now opens the sponsor's email program with their answers filled in, addressed to kaliya@shesgeeky.org, until a form service is chosen.
