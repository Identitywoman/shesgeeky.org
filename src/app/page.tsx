import Link from 'next/link'
import { img, registerUrl } from '@/lib/site'

const youAre = [
  'Working in AI',
  'Working alongside AI',
  'Feeling isolated, overwhelmed, or unsure - and looking for women who understand',
  'Thinking critically about AI - its impact on our community, our children, our planet',
  'Carrying expertise - technical, lived, cultural, strategic - that this conversation needs',
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Friday, May 14, 2027 &middot; A Human + Tech Week Partner Event</p>
            <h1>
              She&rsquo;s Geeky
              <em>AI Edition</em>
            </h1>
            <p className="lede">
              AI is being shaped by whoever talks loudest and ships fastest. We&rsquo;re creating a different kind of space.
            </p>
            <div className="actions">
              <a className="btn" href={registerUrl}>Join us</a>
              <Link className="btn btn-ghost" href="/mailing-list/">Join our mailing list</Link>
            </div>
          </div>
          <figure className="hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img('2026/03/DSC_2069_FB_Cover.jpg')} alt="A She's Geeky circle: women seated in a large ring as the day's agenda is opened" />
          </figure>
        </div>
      </section>

      <section className="format">
        <div className="wrap">
          <ul className="format-facts">
            <li>One day.</li>
            <li>200+ women.</li>
            <li>No keynotes.</li>
            <li>No panels.</li>
          </ul>
          <div className="format-lines">
            <p className="big">You set the agenda. You lead the conversation.</p>
            <p>No obsolete agendas set six months ago. No curated talking points.</p>
            <p>You arrive. We connect. We co-create the space and agenda.</p>
            <p>You find your people. You follow your curiosity. You leave changed.</p>
          </div>
        </div>
      </section>

      <section className="room">
        <div className="wrap room-grid">
          <div>
            <h2>You should be in the room if you are&hellip;</h2>
            <p>
              She&rsquo;s Geeky uses the Open Space unconference format - a proven methodology where participants create the
              agenda in real time. There are no preset speakers, no panels, and no passive listening.
            </p>
            <p className="note">
              You do not need to be an AI expert. If you care about the future that AI is shaping, bring what you know into
              the room when you join us!
            </p>
            <a className="btn" href={registerUrl}>Join us</a>
          </div>
          <ol className="you-are">
            {youAre.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="quote" style={{ backgroundImage: `url(${img('2026/03/home-block2-background-1024x462-1.webp')})` }}>
        <div className="wrap">
          <blockquote>
            <p>
              &ldquo;At a $2,000 conference, you sit in a chair and absorb what someone else decided you needed to hear six
              months ago. AI moves too fast for that. At She&rsquo;s Geeky, the women in the room - their questions, their
              expertise, their lived experience - become the program.&rdquo;
            </p>
            <footer>Kaliya Young, She&rsquo;s Geeky Founder</footer>
          </blockquote>
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
            <a className="btn" href={registerUrl}>Join us</a>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="wrap">
          <h2>The Room Is the Intelligence</h2>
          <p>
            Join 200+ women in technology for a day of authentic conversation, peer-to-peer learning, and collective
            intelligence. The future of AI needs your voice.
          </p>
          <div className="actions">
            <a className="btn" href={registerUrl}>Join the Mailing List</a>
            <Link className="btn btn-ghost" href="/our-story/">Our Story</Link>
          </div>
        </div>
      </section>
    </>
  )
}
