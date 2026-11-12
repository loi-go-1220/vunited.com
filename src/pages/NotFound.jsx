import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container section" style={{ textAlign: 'center' }}>
      <h1 className="h1">Page not found</h1>
      <p className="lead" style={{ margin: '16px auto 32px' }}>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn--primary">Back home</Link>
    </section>
  )
}
