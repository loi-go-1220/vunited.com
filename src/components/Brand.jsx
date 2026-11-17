import { Link } from 'react-router-dom'

export default function Brand({ light }) {
  return (
    <Link to="/" className={`brand${light ? ' brand--light' : ''}`} aria-label="VUnited home">
      <img src="/logo.png" alt="" width="40" height="40" />
      <span>VUnited</span>
    </Link>
  )
}
