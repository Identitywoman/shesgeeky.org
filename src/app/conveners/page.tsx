import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { img, registerUrl } from '@/lib/site'

export const metadata: Metadata = { title: "Conveners | She's Geeky" }

const conveners = [
  {
    name: 'Christy Foulger',
    photo: '2026/03/Frame-2147204161.png',
    linkedin: 'https://www.linkedin.com/in/christyfoulger/',
    bio: 'Compassionate Technologist from Fractional CTO, Distinguished Software Engineer, Architect, Data Scientist to Chocolate Maker, Regenerative Earth Innovator, Food Forest Tender, Heart Energy Activator & Warm Data Lab Host',
    topic: 'TBD Day of Event',
  },
  {
    name: 'Jessica Groopman',
    photo: '2026/03/Frame-2147204163.png',
    linkedin: 'https://www.linkedin.com/in/jessicagroopman/',
    bio: 'Founder of the Regenerative Technology Project, Regen Bridge, Senior Innovation Advisor at Intentional Futures; Innovation Strategist, Researcher, Speaker, Author, Start-up Advisor',
    topic: 'Regenerative Technology, Warm Data and Systems Design',
  },
  {
    name: 'Nicole Lazzaro',
    photo: '2026/03/Frame-2147204160.png',
    linkedin: 'https://www.linkedin.com/in/nicolelazzaro/',
    bio: 'President & Founder XEODesign, Inc. | Developing Follow the White Rabbit Tales, an XR Mystery Adventure about a magician whose magic one day suddenly works!',
    topic: 'Unlocking Human Potential Through Play',
  },
  {
    name: 'Shwetha Rao',
    photo: '2026/03/Frame-2147204159.png',
    // The WordPress page linked here to Christy Foulger's LinkedIn by mistake; her own link is still needed.
    linkedin: null,
    bio: 'Driving Operations & Strategy in Impactful Tech. Operator in consumer AI Neurotech, Cognitive health and performance.',
    topic: 'The Invisible Infrastructure of AI Products',
  },
  {
    name: 'Kelly Mackin',
    photo: '2026/04/Kelly-Mackin-746x1024.jpg',
    linkedin: null,
    bio: 'Technology Entrepreneur & Inventor | CEO Tranxition | Linux Nerd & Tech Writer | Patent Law Advocate Fighting for Software Innovation | 25+ Years Making Computing More Human Through Profile Migration & User-Centered Design',
    topic: 'Innovation Under Siege: Software Patents, User Agency, and the Future of Portable Digital Identity',
  },
  {
    name: 'Lisa Dusseault',
    photo: '2026/05/Lisa-pic.png',
    linkedin: 'https://www.linkedin.com/in/lisadusseault/',
    bio: 'CTO at DTI. Chair of IETF Modpod and OCM. Data engineering software architecture: see github.com/lisad/phaser',
    topic: 'Protocols for safe data access authorization, AI/Internet Standards, AI Data portability as a right: your conversations are yours, Trust and AI and data access',
  },
  {
    name: 'Claudia Dommaschk',
    photo: '2026/03/Frame-2147204162.png',
    linkedin: 'https://www.linkedin.com/in/claudia-dommaschk-39301213/',
    bio: 'Psychotherapist & Coach | Author | Community Facilitator. New Book: A Return To Belonging in A World Pulling Us Apart: The Communal Heart, available September 2026.',
    topic: 'From Code to Care: The Future of Belonging in the Age of AI',
  },
]

const themes = [
  {
    title: 'Meta Relational AI',
    text: 'Exploring AI systems designed around relationships, context, and human connection rather than pure optimization.',
  },
  {
    title: 'AI Based on Indigenous Knowledge Systems',
    text: 'How indigenous wisdom and knowledge frameworks can inform more ethical, sustainable approaches to AI development.',
  },
  {
    title: 'AI Serving Nature-Based Solutions',
    text: 'Leveraging AI to address environmental challenges, support biodiversity, and advance nature-positive outcomes.',
  },
]

const topics = [
  'Meta-Relational AI',
  'Regenerative Technology',
  'The Invisible Infrastructure of AI Products',
  'From Code to Care: The Future of Belonging in the Age of AI',
  'Techno-Cultural Maturity for Collective Flourishing',
  'Unlocking Human Potential Through Play',
  'Warm Data and Systems Design',
  'Tech and Belonging',
  'Personal AI - Ideas and inspiration from scifi',
  'How do we intentionally design our relationship with AIs so they enhance us rather than replace us?',
]

export default function Conveners() {
  return (
    <>
      <PageHero eyebrow="Conveners" title="Conveners">
        <p>
          She&rsquo;s Geeky, AI Edition is convened by Kaliya Young, who founded She&rsquo;s Geeky in 2007 and co-founded
          the Internet Identity Workshop (IIW), the world&rsquo;s longest-running identity unconference. She is joined by a
          growing list of women who are attending, possibly leading and definitely inviting their networks and friends.
        </p>
      </PageHero>

      <section className="band-tight">
        <div className="wrap">
          <div className="event-card">
            <div>
              <span className="label">A Human + Tech Week Partner Event</span>
              <strong>She&rsquo;s Geeky, AI Edition</strong>
              <span>Friday, May 14, 2027 | San Francisco</span>
            </div>
            <div>
              <span className="label">An Open Space Unconference</span>
              <strong>Where The Room Is The Intelligence</strong>
            </div>
            <a className="btn" href={registerUrl}>Join the Room!</a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="people">
            {conveners.map((c) => (
              <article className="convener" key={c.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img(c.photo)} alt={c.name} />
                <div>
                  <h3>
                    {c.linkedin ? <a href={c.linkedin}>{c.name}</a> : c.name}
                  </h3>
                  <p className="role">Convener</p>
                  <p className="bio">{c.bio}</p>
                  <p className="topic"><span>Topic</span>{c.topic}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-dark">
        <div className="wrap">
          <h2>A Human + Tech Week Partner Event</h2>
          <p className="section-lede">These are starting points - the community will shape the final agenda.</p>
          <div className="cards cards-3">
            {themes.map((t) => (
              <div className="card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <div className="prose">
            <p className="eyebrow">The Open Space Method</p>
            <h2>Open Space unConference Format Fosters Organic, Collaborative Intelligence</h2>
            <p>
              At the start, the whole group will gather together and be guided through creating an agenda using open space
              technology. The exact process is not important to understand in advance - the process will become clear as it
              happens. The important part is that all those gathered will have the opportunity to put conference sessions on
              the agenda. No session will be voted off or &lsquo;won&rsquo;t happen&rsquo; for some other reason. All
              sessions are welcome.
            </p>
            <p>
              Learn more about our long history facilitating open space Unconference events at{' '}
              <a href="https://unconference.net/">unconference.net</a>, and a PDF overview is available too!
            </p>
            <a className="btn btn-ghost" href="https://unconference.net/wp-content/uploads/How-to-Prepare-for-an-Unconference-1.pdf">
              Download PDF Guide
            </a>
          </div>
          <div>
            <h3>Possible Session Topics</h3>
            <ul className="tags">
              {topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
