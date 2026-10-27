import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { img, mapsUrl, registerUrl } from '@/lib/site'

export const metadata: Metadata = { title: "Attend | She's Geeky" }

const unique = [
  {
    title: 'Open Space Technology',
    text: 'Using Open Space Technology, the agenda is created by participants on the day of the event. No preset speakers. No panels. Just real conversations led by real experts.',
  },
  {
    title: 'Peer-to-Peer Learning',
    text: 'Every attendee is both a teacher and a learner. Share your expertise, ask hard questions, and discover perspectives you won’t find in a keynote.',
  },
  {
    title: '200+ Women in One Room',
    text: 'The collective intelligence of 200+ women in technology creates an environment where breakthroughs happen naturally - through conversation, connection, and collaboration.',
  },
  {
    title: 'No Gatekeepers',
    text: 'You don’t need a title, a publication, or an invitation to lead a session. If you have something to share, there’s a room for you.',
  },
]

const faqs = [
  {
    q: 'What if I’m not technical?',
    a: 'Good. Some of the most important sessions at She’s Geeky events have come from women who bring perspectives from policy, education, healthcare, social justice, the arts, and lived experience. AI affects everyone. The conversation needs everyone.',
  },
  {
    q: 'What if I don’t know anyone?',
    a: 'Most people won’t. The format is designed to help you find your people fast. By mid-morning, you’ll be deep in conversation with women you didn’t know existed an hour before.',
  },
  {
    q: 'What if I’m overwhelmed by AI and don’t know where to start?',
    a: 'That might be the most valuable session someone proposes that day. You are not alone in feeling this way, and naming it in a room full of women who understand is exactly what this space is for.',
  },
  {
    q: 'Is this only for women?',
    a: 'She’s Geeky is designed as a space for women and non-binary people in technology. Our experience across 17 events is that women share, speak, and lead differently when they’re not the minority in the room. That difference is the point.',
  },
  {
    q: 'What’s the refund policy?',
    a: 'As a small non-profit organization we invite cancellations to consider becoming donations with a tax deductible receipt.',
  },
]

export default function Attend() {
  return (
    <>
      <PageHero eyebrow="Attend" title="The Room Is the Intelligence">
        <p>
          Join us if you care about the future that AI is shaping - bring what you know, and together we co-create our
          group intelligence.
        </p>
      </PageHero>

      <section className="band-tight">
        <div className="wrap">
          <div className="event-card">
            <div>
              <span className="label">When</span>
              <strong>Friday, May 14, 2027</strong>
              <span>Time to be announced</span>
            </div>
            <div>
              <span className="label">Where</span>
              <strong><a href={mapsUrl}>Mabuhay Gardens</a></strong>
              <span>North Beach, San Francisco</span>
            </div>
            <a className="btn" href={registerUrl}>Join us</a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <div className="prose">
            <h2>Why Now?</h2>
            <p>
              Women account for just 22% of AI talent globally. Harvard research shows women are adopting AI at lower rates -
              in part because they&rsquo;re the ones asking harder questions about whether it&rsquo;s being built
              responsibly. UC Berkeley researchers recently found that AI is actually increasing burnout, not reducing it.
              And the data shows women in many roles are most exposed to AI-driven displacement.
            </p>
            <p>
              So women are simultaneously being told &ldquo;learn AI or lose your job&rdquo; while being the ones raising
              the most important questions about how this technology is being deployed. That&rsquo;s an incredibly
              isolating position to be in.
            </p>
            <p className="pull">She&rsquo;s Geeky exists because isolation is not a strategy. Connection is.</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="framed" src={img('2026/03/sg-attend.png')} alt="She's Geeky: Connect. Share. Inspire. A session note reading 'As a result of She's Geeky Saturday I'm going to get back to learning to code', and four girls in She's Geeky shirts" />
        </div>
      </section>

      <section className="band band-dark">
        <div className="wrap">
          <h2>What Makes She&rsquo;s Geeky Unique?</h2>
          <p className="section-lede">Other events talk about women&rsquo;s wisdom. We trust it.</p>
          <div className="cards cards-4">
            {unique.map((u) => (
              <div className="card" key={u.title}>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap narrow">
          <h2>Questions You Might Have</h2>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="wrap">
          <h2>Claim Your Seat</h2>
          <p>Registration opens soon. Join 200+ women shaping the future of AI. Get on the mailing list to hear first.</p>
          <div className="actions">
            <a className="btn" href={registerUrl}>Join the Mailing List</a>
          </div>
        </div>
      </section>
    </>
  )
}
