import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { legalHtml } from '@/lib/legal'

export const metadata: Metadata = { title: "Terms of Services | She's Geeky" }

export default function TermsOfServices() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Services" />
      <section className="band">
        <div className="wrap narrow legal" dangerouslySetInnerHTML={{ __html: legalHtml('terms-of-services') }} />
      </section>
    </>
  )
}
