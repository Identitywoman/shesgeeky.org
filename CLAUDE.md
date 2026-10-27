# shesgeeky.org - working instructions

Kaliya updates this site by asking Claude. Plan and decisions live in her vault:
`Kaliya Vault GitHub/Efforts/+ My Events/She's Geeky/She's Geeky Website - Move to GitHub Plan.md`

- Static Next.js export, deployed by `.github/workflows/deploy.yml` to GitHub Pages on every push to `main`.
- There is no Node on Kaliya's Mac. Builds run in GitHub Actions; check the run with `gh run watch` after pushing.
- `BASE_PATH` comes from the Pages setup step: `/shesgeeky.org` on the preview address, empty once the custom domain is set. Raw `<img src>` must go through `img()` or `base` from `src/lib/site.ts`; `next/link` adds it automatically.
- Keep page addresses stable (`/attend/`, `/sponsors/`, ...). Old URLs are redirected, not broken.
- Do not add a `CNAME` file or set the custom domain until Kaliya approves the switch. shesgeeky.org email runs on Google Workspace; DNS changes must keep the MX and SPF records.
- Text in this site is Kaliya's. Follow the vault's writing rules: no em-dashes, proofread every change.
