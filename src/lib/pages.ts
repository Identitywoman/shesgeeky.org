import fs from 'fs'
import path from 'path'

// Page bodies live in content/pages/<slug>.html (carried over from the
// WordPress site on 2026-10-25). content/pages.json holds each page's title
// and any signup script it needs.

const contentDir = path.join(process.cwd(), 'content')

export type PageMeta = { title: string; script: string | null }

export const base = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function allPages(): Record<string, PageMeta> {
  return JSON.parse(fs.readFileSync(path.join(contentDir, 'pages.json'), 'utf8'))
}

export function pageHtml(slug: string): string {
  const raw = fs.readFileSync(path.join(contentDir, 'pages', `${slug}.html`), 'utf8')
  return raw
    .replaceAll('{{BASE}}', base)
    // Links between pages of this site, so they work on the preview address too.
    .replace(/href="https?:\/\/(www\.)?shesgeeky\.org\/?/g, `href="${base}/`)
}
