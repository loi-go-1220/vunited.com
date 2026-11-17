import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Brand from './Brand.jsx'

const links = [
  { to: '/employers', label: 'For Employers' },
  { to: '/talent', label: 'For Talent' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="header">
      <div className="container header__inner">
        <Brand />
        <nav className={`nav${open ? ' nav--open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__link">{l.label}</NavLink>
          ))}
          <Link to="/contact?type=employer" className="btn btn--primary nav__cta">Hire talent</Link>
        </nav>
        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
