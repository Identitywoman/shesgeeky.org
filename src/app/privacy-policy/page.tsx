import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { legalHtml } from '@/lib/legal'

export const metadata: Metadata = { title: "Privacy Policy | She's Geeky" }

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="band">
        <div className="wrap narrow legal" dangerouslySetInnerHTML={{ __html: legalHtml('privacy-policy') }} />
      </section>
    </>
  )
}
