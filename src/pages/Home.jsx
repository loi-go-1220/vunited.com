import { Link } from 'react-router-dom'
import { posts } from '../posts/index.js'
import { site, industries } from '../site.js'
import PostCard from '../components/PostCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Icon from '../components/Icon.jsx'
import usePageMeta from '../usePageMeta.js'

const steps = [
  { title: 'Tell us what you need', text: 'Share the role, skills, budget and working hours. We learn how your team works so we look in the right places.' },
  { title: 'We source & screen', text: 'We search our international network and assess candidates for skills, experience, English communication and fit.' },
  { title: 'You interview a shortlist', text: 'You meet only candidates who match your brief, at times that suit your schedule.' },
  { title: 'Hire with support', text: 'We help with offer, onboarding and the first weeks so your new hire gets up to speed quickly.' },
]

const reasons = [
  { icon: 'globe', title: 'A worldwide talent pool', text: 'Skilled professionals from many countries, ready to contribute to US teams.' },
  { icon: 'scale', title: 'Every company size', text: 'From a first hire at a startup to scaling teams at established enterprises.' },
  { icon: 'clock', title: 'Aligned to US hours', text: 'We match candidates to the working hours and time zones your team needs.' },
  { icon: 'chat', title: 'One point of contact', text: 'A dedicated contact who understands your business from first call to hire.' },
]

export default function Home() {
  usePageMeta()

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="kicker">Global talent · US opportunities</p>
            <h1 className="hero__title">Connecting the world’s talent with American companies</h1>
            <p className="lead">{site.description}</p>
            <div className="hero__actions">
              <Link to="/contact?type=employer" className="btn btn--primary btn--lg">Hire talent</Link>
              <Link to="/talent" className="btn btn--ghost btn--lg">Find a US job</Link>
            </div>
          </div>
          <img className="hero__img" src="/images/hero.jpg" alt="A recruiter interviewing a candidate at a desk" />
        </div>
      </section>

      <section className="facts">
        <div className="container facts__grid">
          <div className="fact"><Icon name="pin" /><div><strong>Los Angeles, CA</strong><span>Headquarters</span></div></div>
          <div className="fact"><Icon name="building" /><div><strong>Since {site.founded}</strong><span>Founded</span></div></div>
          <div className="fact"><Icon name="scale" /><div><strong>Small to enterprise</strong><span>Companies we serve</span></div></div>
          <div className="fact"><Icon name="globe" /><div><strong>Worldwide</strong><span>Talent network</span></div></div>
        </div>
      </section>

      <section className="section container">
        <div className="section__intro">
          <p className="kicker">What we do</p>
          <h2 className="h2">Two sides, one goal: the right match</h2>
        </div>
        <div className="audience">
          <Link to="/employers" className="audience__card">
            <img src="/images/employers.jpg" alt="" loading="lazy" />
            <div className="audience__body">
              <span className="audience__label"><Icon name="building" size={20} /> For Employers</span>
              <h3>Build your team with proven global professionals</h3>
              <p>Reach qualified candidates beyond your local market and fill roles faster — without lowering the bar.</p>
              <span className="text-link">How we help employers <Icon name="arrow" size={18} /></span>
            </div>
          </Link>
          <Link to="/talent" className="audience__card">
            <img src="/images/talent.jpg" alt="" loading="lazy" />
            <div className="audience__body">
              <span className="audience__label"><Icon name="user" size={20} /> For Talent</span>
              <h3>Take your career to the US job market</h3>
              <p>We introduce skilled professionals to US companies and support you from application to offer.</p>
              <span className="text-link">How we help candidates <Icon name="arrow" size={18} /></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="section__intro">
            <p className="kicker">How it works</p>
            <h2 className="h2">A simple, transparent hiring process</h2>
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
        </div>
      </section>

      <section className="section container split">
        <div>
          <p className="kicker">Industries</p>
          <h2 className="h2">Talent for every industry</h2>
          <p className="lead lead--sm">
            Whatever your sector, we look for people with the skills and experience your roles demand.
          </p>
        </div>
        <ul className="chips">
          {industries.map((i) => <li key={i} className="chip">{i}</li>)}
        </ul>
      </section>

      <section className="globe" style={{ backgroundImage: 'url(/images/global.jpg)' }}>
        <div className="container globe__inner">
          <p className="kicker kicker--light">Why VUnited</p>
          <h2 className="h2">Great people are everywhere. We bring them to you.</h2>
          <div className="reasons">
            {reasons.map((r) => (
              <div key={r.title} className="reason">
                <Icon name={r.icon} size={28} />
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section container">
          <div className="section__head">
            <div>
              <p className="kicker">Insights</p>
              <h2 className="h2">Guides for employers and job seekers</h2>
            </div>
            <Link to="/blog" className="text-link">View all <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="grid">
            {posts.slice(0, 3).map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}
