import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import SponsorForm from '@/components/SponsorForm'
import { img } from '@/lib/site'

export const metadata: Metadata = { title: "Sponsors | She's Geeky" }

const tiers = [
  { name: 'Compost', range: '$1,000 - $5,000', icon: '2026/03/compost.svg' },
  { name: 'Seed', range: '$5,000 - $10,000', icon: '2026/03/seed.svg' },
  { name: 'Garden', range: '$10,000 - $50,000', icon: '2026/03/garden.svg' },
]

export default function Sponsors() {
  return (
    <>
      <PageHero eyebrow="Sponsors" title="Sponsorships">
        <p>
          She&rsquo;s Geeky is a fiscally sponsored project of <a href="https://www.planetwork.net/">Planetwork NGO</a>, a
          501(c)(3), and your donations are tax deductible.
        </p>
      </PageHero>

      <section className="band">
        <div className="wrap">
          <h2>Financial Sponsor Tiers</h2>
          <div className="cards cards-3 tiers">
            {tiers.map((t) => (
              <div className="card tier" key={t.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img(t.icon)} alt="" />
                <h3>{t.name}</h3>
                <p className="range">{t.range}</p>
              </div>
            ))}
          </div>
          <p className="muted small">Each tier has 5 levels, denoted with 1-5 icons, when promoting our financial sponsors.</p>
        </div>
      </section>

      <section className="band band-paper">
        <div className="wrap narrow">
          <h2>In Kind Sponsors</h2>
          <p>
            We value our barter based sponsors in the same manner as our Financial Tiers. Each will be promoted based on the
            donation value aligning with tiers and levels.
          </p>
          <p>
            Examples of items include food, beverages, promotional schwag, advertising media, supportive event experiences,
            supportive technology, parking subsidies for participants, and event materials and supplies.
          </p>
        </div>
      </section>

      <section className="band" id="become-a-sponsor">
        <div className="wrap narrow">
          <h2>Become a She&rsquo;s Geeky Sponsor</h2>
          <p className="section-lede muted">Fill out the form below and we&rsquo;ll be in touch.</p>
          <SponsorForm />
        </div>
      </section>
    </>
  )
}
