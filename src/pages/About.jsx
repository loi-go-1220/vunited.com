import { site, fullAddress, mapsUrl } from '../site.js'
import CtaBand from '../components/CtaBand.jsx'
import Icon from '../components/Icon.jsx'
import usePageMeta from '../usePageMeta.js'

const values = [
  { icon: 'shield', title: 'Integrity', text: 'Honest advice to employers and candidates, even when it is not what they hoped to hear.' },
  { icon: 'check', title: 'Quality over volume', text: 'We would rather send three right candidates than thirty maybes.' },
  { icon: 'globe', title: 'Opportunity without borders', text: 'Talent is everywhere. Access to great jobs should be too.' },
  { icon: 'chat', title: 'Clear communication', text: 'Everyone knows where things stand at every stage of the process.' },
]

export default function About() {
  usePageMeta('About Us', `VUnited is a Los Angeles talent company founded in ${site.founded}, connecting professionals worldwide with US employers.`)

  return (
    <>
      <section className="page-hero">
        <div className="container split">
          <div>
            <p className="kicker">About VUnited</p>
            <h1 className="h1">Uniting global talent with American opportunity</h1>
            <p className="lead">
              VUnited was founded in {site.founded} in Los Angeles with a simple belief: great people are
              everywhere, and companies in the United States should be able to find and hire them.
            </p>
          </div>
          <img className="split__img" src="/images/los-angeles.jpg" alt="Downtown Los Angeles skyline at night" />
        </div>
      </section>

      <section className="section container split split--top">
        <div>
          <p className="kicker">Our mission</p>
          <h2 className="h2">Open the US job market to the world’s best talent</h2>
        </div>
        <div className="prose prose--plain">
          <p>
            Many US companies struggle to fill roles locally, while skilled professionals around the world
            are looking for the chance to work with American teams. VUnited exists to bring these two
            sides together.
          </p>
          <p>
            We work with companies of every size — startups, small and mid-sized businesses and large
            enterprises — across a wide range of industries. For each role, we look for candidates with the
            right skills, experience and communication, and support both sides through the hiring process.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="section__intro">
            <p className="kicker">Our values</p>
            <h2 className="h2">What we stand for</h2>
          </div>
          <div className="features features--4">
            {values.map((v) => (
              <div key={v.title} className="feature">
                <span className="feature__icon"><Icon name={v.icon} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container split">
        <div>
          <p className="kicker">Where we are</p>
          <h2 className="h2">Headquartered in Los Angeles</h2>
          <ul className="contact-list">
            <li><Icon name="pin" /><a href={mapsUrl} target="_blank" rel="noreferrer">{fullAddress}</a></li>
            <li><Icon name="mail" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
        <img className="split__img" src="/images/global.jpg" alt="Earth at night showing city lights around the world" />
      </section>

      <CtaBand />
    </>
  )
}
