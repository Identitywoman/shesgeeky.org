import type { Metadata } from 'next'
import EmailOctopusForm from '@/components/EmailOctopusForm'
import PageHero from '@/components/PageHero'
import { img } from '@/lib/site'

export const metadata: Metadata = { title: "Mailing List | She's Geeky" }

export default function MailingList() {
  return (
    <>
      <PageHero eyebrow="Mailing List" title="Join our Mailing List">
        <p>Don&rsquo;t miss out! Join our mailing list to stay up to date with our latest news, offers, and inspiration.</p>
      </PageHero>

      <section className="band-tight">
        <div className="wrap narrow">
          <div className="form-card">
            <EmailOctopusForm />
          </div>
        </div>
      </section>

      <section className="venue">
        <div className="wrap venue-grid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img('2026/03/sg-mabimage2-1024x712-1.webp')} alt="Mabuhay Gardens on Broadway in North Beach: the MAB is back" />
          <div>
            <p className="eyebrow">San Francisco</p>
            <h2>Mabuhay Gardens</h2>
            <p>
              She&rsquo;s Geeky, AI Edition is honored to convene at Mabuhay Gardens in San Francisco&rsquo;s iconic North
              Beach neighborhood.
            </p>
            <ul className="venue-lines">
              <li>Punk was born here</li>
              <li>Comedy sharpened here</li>
              <li>Movements found their voice here</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
