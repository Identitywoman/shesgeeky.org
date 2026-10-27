import type { Metadata } from 'next'
import Link from 'next/link'
import { img, nav, contactEmail } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  title: "She's Geeky",
  description: 'Since 2007, She’s Geeky has been creating space for women in technology to connect, collaborate, and lead.',
  icons: { icon: img('2026/03/sg_logo_bwsquare.png') },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="wrap header-row">
            <Link href="/" className="wordmark">She&rsquo;s Geeky</Link>
            <nav>
              {nav.slice(1).map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
              <Link href="/mailing-list/" className="btn btn-small">Mailing List</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="wrap footer-grid">
          <div>
            <p className="wordmark">She&rsquo;s Geeky</p>
            <p>
              We are a fiscally sponsored project of Planetwork NGO, a 501(c)(3), and your donations are tax deductible.
            </p>
            <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
          </div>
          <div>
            <h4>Navigate</h4>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
          <div>
            <h4>Join</h4>
            <Link href="/mailing-list/">Mailing List</Link>
            <a href="https://www.linkedin.com/groups/39189/">LinkedIn Group</a>
          </div>
          <div>
            <h4>Legal</h4>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms-of-services/">Terms of Services</Link>
          </div>
          <p className="copyright">Copyright © {new Date().getFullYear()} Shesgeeky.org. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
