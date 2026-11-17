import { Link } from 'react-router-dom'
import { industries } from '../site.js'
import CtaBand from '../components/CtaBand.jsx'
import Icon from '../components/Icon.jsx'
import usePageMeta from '../usePageMeta.js'

const offers = [
  { icon: 'globe', title: 'Access to global talent', text: 'Reach qualified professionals beyond your local market, across many countries and specialties.' },
  { icon: 'check', title: 'Screened candidates', text: 'We review experience, test relevant skills and check English communication before you meet anyone.' },
  { icon: 'clock', title: 'Time-zone alignment', text: 'We match candidates to the hours your team works, whether you need full overlap or partial.' },
  { icon: 'scale', title: 'Flexible engagement', text: 'Full-time, part-time or contract roles — structured around what works for your business.' },
  { icon: 'chat', title: 'Dedicated contact', text: 'One person who knows your requirements and keeps the search moving.' },
  { icon: 'shield', title: 'Support after the hire', text: 'We stay in touch through onboarding and the first weeks to make sure the match works.' },
]

const sizes = [
  { title: 'Startups', text: 'Make your first key hires without the cost and delay of a long local search.' },
  { title: 'Small & mid-sized businesses', text: 'Grow your team steadily with people who fit your culture and budget.' },
  { title: 'Enterprises', text: 'Add capacity across departments and fill hard-to-find specialist roles.' },
]

export default function Employers() {
  usePageMeta('For Employers', 'Hire skilled professionals from around the world for your US company — startups, mid-sized businesses and enterprises.')

  return (
    <>
      <section className="page-hero">
        <div className="container split">
          <div>
            <p className="kicker">For Employers</p>
            <h1 className="h1">Hire skilled professionals from around the world</h1>
            <p className="lead">
              VUnited helps US companies of every size find, assess and hire international talent —
              so you can grow your team with confidence.
            </p>
            <div className="hero__actions hero__actions--row">
              <Link to="/contact?type=employer" className="btn btn--primary btn--lg">Request talent</Link>
            </div>
          </div>
          <img className="split__img" src="/images/employers.jpg" alt="Business handshake after a successful hire" />
        </div>
      </section>

      <section className="section container">
        <div className="section__intro">
          <p className="kicker">What you get</p>
          <h2 className="h2">Everything you need to hire well</h2>
        </div>
        <div className="features">
          {offers.map((o) => (
            <div key={o.title} className="feature">
              <span className="feature__icon"><Icon name={o.icon} /></span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="section__intro">
            <p className="kicker">Who we work with</p>
            <h2 className="h2">Built for companies of every size</h2>
          </div>
          <div className="tiles">
            {sizes.map((s) => (
              <div key={s.title} className="tile">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container split">
        <div>
          <p className="kicker">Roles & industries</p>
          <h2 className="h2">From specialists to whole teams</h2>
          <p className="lead lead--sm">
            Tell us what you need. We recruit across industries and functions, for individual roles or
            larger hiring plans.
          </p>
        </div>
        <ul className="chips">
          {industries.map((i) => <li key={i} className="chip">{i}</li>)}
        </ul>
      </section>

      <CtaBand title="Tell us about your open role" text="Share what you're hiring for and we'll explain how we can help — no obligation." />
    </>
  )
}
