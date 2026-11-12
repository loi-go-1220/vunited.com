import { Link } from 'react-router-dom'

export default function Logo({ small }) {
  return (
    <Link to="/" className={`logo${small ? ' logo--small' : ''}`} aria-label="VUnited home">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="var(--ink)" />
        <path d="M8 9l8 15 8-15" fill="none" stroke="var(--accent-warm)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>VUnited</span>
    </Link>
  )
}
