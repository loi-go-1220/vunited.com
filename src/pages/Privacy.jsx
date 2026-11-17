import { site, fullAddress } from '../site.js'
import usePageMeta from '../usePageMeta.js'

export default function Privacy() {
  usePageMeta('Privacy Policy')

  return (
    <article className="container article">
      <p className="kicker">Legal</p>
      <h1 className="h1">Privacy Policy</h1>
      <p className="meta">Last updated: November 17, 2026</p>

      <div className="prose">
        <p>
          This policy explains how {site.name} (“we”, “us”) handles personal information when you visit this
          website or contact us about hiring or job opportunities.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li><strong>Information you send us</strong> — such as your name, email address, phone number, company, resume and any details you include when you email us.</li>
          <li><strong>Basic technical data</strong> — our hosting provider may record standard server logs (such as IP address, browser type and pages visited) to keep the site secure and working.</li>
        </ul>
        <p>This website does not use advertising or tracking cookies.</p>

        <h2>How we use your information</h2>
        <ul>
          <li>To respond to your inquiry.</li>
          <li>For candidates: to assess your profile and, with your agreement, share it with employers hiring for suitable roles.</li>
          <li>For employers: to understand your hiring needs and introduce suitable candidates.</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2>Sharing</h2>
        <p>
          We share candidate information with prospective employers only for the purpose of recruitment.
          We may also use trusted service providers (such as email and hosting) who process data on our behalf.
        </p>

        <h2>Retention</h2>
        <p>
          We keep your information only as long as needed for the purposes above, or as required by law.
          You can ask us to delete it at any time.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live (for example, California or the European Union), you may have the right
          to access, correct or delete your personal information, or to object to how we use it. To make a
          request, email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Contact</h2>
        <p>
          {site.name}<br />
          {fullAddress}<br />
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </article>
  )
}
