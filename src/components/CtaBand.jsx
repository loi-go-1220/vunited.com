import { Link } from 'react-router-dom'

export default function CtaBand({
  title = 'Ready to meet your next hire?',
  text = "Tell us about the role you're hiring for — or the US job you're looking for — and our team will be in touch.",
}) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2 className="h2">{title}</h2>
          <p className="cta__text">{text}</p>
        </div>
        <div className="cta__actions">
          <Link to="/contact?type=employer" className="btn btn--light btn--lg">Hire talent</Link>
          <Link to="/contact?type=candidate" className="btn btn--outline-light btn--lg">Find a US job</Link>
        </div>
      </div>
    </section>
  )
}
