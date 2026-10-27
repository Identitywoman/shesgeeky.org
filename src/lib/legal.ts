import fs from 'fs'
import path from 'path'

// Legal pages are long-form text, kept as plain HTML in content/legal/<slug>.html.
export function legalHtml(slug: 'privacy-policy' | 'terms-of-services'): string {
  return fs.readFileSync(path.join(process.cwd(), 'content', 'legal', `${slug}.html`), 'utf8')
}
