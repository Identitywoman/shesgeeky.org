import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { img } from '@/lib/site'

export const metadata: Metadata = { title: "Our Story | She's Geeky" }

const team = [
  {
    name: 'Kaliya Young',
    role: 'Founder & Lead Convener',
    photo: '2026/03/kaliya-headshot-e1773415330763.webp',
    bio: 'Known as Identity Woman, Kaliya is a leading expert in digital identity and self-sovereign identity. She founded She’s Geeky in 2007 and has facilitated over 17 unconferences bringing women in technology together.',
    url: 'https://unconference.net/',
  },
  {
    name: 'Tracey Rogers Brandt',
    role: 'Co-Convener',
    photo: '2026/03/Copy-of-TASTEROOM-BIZ-CASUAL-768x762-1.webp',
    bio: 'Tracey brings decades of experience in technology leadership and community building. She is passionate about creating inclusive spaces where women can share expertise and build meaningful connections.',
    url: 'https://www.circularpatterns.com/',
  },
]

export default function OurStory() {
  return (
    <>
      <PageHero eyebrow="Since 2007" title="Our Story">
        <p>Since 2007, She&rsquo;s Geeky has been creating space for women in technology to connect, collaborate, and lead.</p>
      </PageHero>

      <section className="band">
        <div className="wrap split split-wide-media">
          <div className="prose">
            <h2>Founded in 2007</h2>
            <p>
              Founded in 2007 at the Computer History Museum in Mountain View, California, She&rsquo;s Geeky convened 17
              events across the Bay Area, New York, Seattle, Washington DC, and the Twin Cities over the following decade -
              convening more than 2000 women in participant-driven gatherings.
            </p>
            <p>
              Women from Google, Microsoft, Yahoo, Mozilla and hundreds of startups who held titles from CTO to intern,
              engineer to activist, professor to middle school student, all joined us. Mothers brought daughters. Retired
              pioneers joined sharing their wisdom.
            </p>
            <p className="pull">
              Women who had been &ldquo;the only woman in the room&rdquo; for years found, sometimes for the first time, a
              room full of women like them.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="framed" src={img('2026/03/DSC_2069_FB_Cover.jpg')} alt="A She's Geeky circle of women" />
        </div>
      </section>

      <section className="band band-dark">
        <div className="wrap narrow center">
          <p className="eyebrow eyebrow-light">The Next Chapter</p>
          <h2>The AI Edition</h2>
          <p className="section-lede">
            Now we are back - because the conversation about AI cannot happen without the women who are living it.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Our Team</h2>
          <p className="section-lede muted">The women behind She&rsquo;s Geeky</p>
          <div className="cards cards-2">
            {team.map((t) => (
              <div className="card person" key={t.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img(t.photo)} alt={t.name} />
                <div>
                  <h3>{t.name}</h3>
                  <p className="role">{t.role}</p>
                  <p>{t.bio}</p>
                  <a href={t.url}>Website</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
