import { Link } from 'react-router-dom'
import { site } from '../site.js'
import CtaBand from '../components/CtaBand.jsx'
import Icon from '../components/Icon.jsx'
import usePageMeta from '../usePageMeta.js'

const steps = [
  { title: 'Send us your resume', text: 'Email your resume in English and tell us the kind of role you want.' },
  { title: 'Get to know us', text: 'If your profile matches what our clients need, we schedule a call to learn about your experience and goals.' },
  { title: 'Meet US employers', text: 'We introduce you to companies hiring for roles that fit, and help you prepare for each interview.' },
  { title: 'Start your new role', text: 'We support you through the offer and your first weeks on the job.' },
]

const lookFor = [
  'Proven experience in your field',
  'Professional English communication',
  'Reliable internet and a quiet place to work (for remote roles)',
  'Willingness to work hours that overlap with US teams',
  'A clear, honest resume and verifiable work history',
]

export default function Talent() {
  usePageMeta('For Talent', 'Skilled professional outside the US? VUnited connects you with US companies hiring across many industries.')

  return (
    <>
      <section className="page-hero">
        <div className="container split">
          <div>
            <p className="kicker">For Talent</p>
            <h1 className="h1">Your skills, the US job market</h1>
            <p className="lead">
              We connect experienced professionals around the world with US companies looking for people
              like you — and support you every step of the way.
            </p>
            <div className="hero__actions hero__actions--row">
              <Link to="/contact?type=candidate" className="btn btn--primary btn--lg">Apply now</Link>
            </div>
          </div>
          <img className="split__img" src="/images/talent.jpg" alt="A professional standing in a modern office" />
        </div>
      </section>

      <section className="section container">
        <div className="section__intro">
          <p className="kicker">How it works</p>
          <h2 className="h2">From application to offer</h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="band">
        <div className="container split split--top">
          <div>
            <p className="kicker">What we look for</p>
            <h2 className="h2">Who we work with</h2>
            <p className="lead lead--sm">
              Our clients range from startups to large enterprises, so we work with professionals at many
              levels. Strong candidates usually have:
            </p>
          </div>
          <ul className="checklist">
            {lookFor.map((item) => (
              <li key={item}><Icon name="check" size={22} /> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section container">
        <div className="notice">
          <Icon name="shield" size={28} />
          <div>
            <h3>We never charge candidates</h3>
            <p>
              VUnited will never ask you for money to apply, interview or get a job. Official emails from us come
              only from <a href={`mailto:${site.email}`}>{site.email}</a>. If someone claiming to represent
              VUnited asks you for payment, please do not pay and let us know.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Ready for your next role?" text="Send us your resume and tell us what you're looking for." />
    </>
  )
}
