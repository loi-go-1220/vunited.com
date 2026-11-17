import { Link } from 'react-router-dom'
import usePageMeta from '../usePageMeta.js'

export default function NotFound() {
  usePageMeta('Page not found')

  return (
    <section className="section container" style={{ textAlign: 'center' }}>
      <p className="kicker">404</p>
      <h1 className="h1">Page not found</h1>
      <p className="lead" style={{ margin: '16px auto 32px' }}>The page you’re looking for doesn’t exist or has moved.</p>
      <Link to="/" className="btn btn--primary btn--lg">Back to home</Link>
    </section>
  )
}
