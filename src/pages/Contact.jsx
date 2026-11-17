import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { site, fullAddress, mapsUrl, mapsEmbed } from '../site.js'
import Icon from '../components/Icon.jsx'
import usePageMeta from '../usePageMeta.js'

export default function Contact() {
  usePageMeta('Contact', `Contact VUnited in Los Angeles — hire international talent or find a US job. Email ${site.email}.`)
  const [params] = useSearchParams()
  const [type, setType] = useState(params.get('type') === 'candidate' ? 'candidate' : 'employer')
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const isEmployer = type === 'employer'
    const subject = isEmployer
      ? `Hiring inquiry — ${f.get('company') || f.get('name')}`
      : `Candidate application — ${f.get('name')}`
    const lines = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      isEmployer ? `Company: ${f.get('company')}` : `Desired role: ${f.get('company')}`,
      f.get('phone') ? `Phone: ${f.get('phone')}` : '',
      '',
      f.get('message'),
      '',
      isEmployer ? '' : '(Please attach your resume to this email.)',
    ].filter((l) => l !== null)
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
    setSent(true)
  }

  return (
    <section className="section container">
      <div className="contact-grid">
        <div>
          <p className="kicker">Contact us</p>
          <h1 className="h1">Let’s talk</h1>
          <p className="lead">
            Whether you are hiring or looking for your next role, we’d like to hear from you.
          </p>
          <ul className="contact-list">
            <li><Icon name="mail" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Icon name="pin" /><a href={mapsUrl} target="_blank" rel="noreferrer">{fullAddress}</a></li>
          </ul>
          <iframe
            className="map"
            title="VUnited office location"
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <form className="form" onSubmit={onSubmit}>
          <div className="toggle" role="tablist" aria-label="I am">
            <button type="button" role="tab" aria-selected={type === 'employer'}
              className={type === 'employer' ? 'is-active' : ''} onClick={() => setType('employer')}>
              I’m hiring
            </button>
            <button type="button" role="tab" aria-selected={type === 'candidate'}
              className={type === 'candidate' ? 'is-active' : ''} onClick={() => setType('candidate')}>
              I’m looking for a job
            </button>
          </div>

          <label>Full name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>
            {type === 'employer' ? 'Company' : 'Role you are looking for'}
            <input name="company" required={type === 'employer'} autoComplete={type === 'employer' ? 'organization' : 'off'} />
          </label>
          <label><span>Phone <span className="optional">(optional)</span></span><input name="phone" type="tel" autoComplete="tel" /></label>
          <label>
            {type === 'employer' ? 'Tell us about the role(s) you need to fill' : 'Tell us about your experience'}
            <textarea name="message" rows="5" required />
          </label>

          <button type="submit" className="btn btn--primary btn--lg">
            {type === 'employer' ? 'Send hiring inquiry' : 'Send application'}
          </button>
          <p className="form__note">
            This opens your email app with your message ready to send to {site.email}.
            {type === 'candidate' && ' Please attach your resume before sending.'}
          </p>
          {sent && (
            <p className="form__sent">
              If your email app didn’t open, email us directly at <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
