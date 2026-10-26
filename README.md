# shesgeeky.org

The She's Geeky website. A static Next.js site published with GitHub Pages, set up the same way as agenticinternetworkshop.org.

Every push to `main` rebuilds and publishes the site (about 2 minutes). Watch it under the repo's **Actions** tab.

- Preview address (until the domain switch): https://identitywoman.github.io/shesgeeky.org/
- Live site today: https://shesgeeky.org (still WordPress on SiteGround)

## Where things are

| What | Where |
|---|---|
| Page text | `content/pages/<page>.html` (`index.html` is the homepage) |
| Page titles, signup script | `content/pages.json` |
| Images | `public/wp-content/uploads/...` (same paths as on WordPress) |
| Menu, header, footer | `src/lib/nav.ts`, `src/app/layout.tsx` |
| Colors and fonts | `src/app/globals.css` |
| Build and publish | `.github/workflows/deploy.yml` |

## History

- 2026-10-25: Repo created. The 8 WordPress pages (Home, Attend, Our Story, Conveners, Sponsors, Mailing List, Privacy Policy, Terms of Services) carried over as-is, at the same addresses, with all 41 images. The Email Octopus signup on Mailing List carries over. The Sponsors inquiry form was an Elementor (WordPress) form and is a placeholder until rebuilt.
