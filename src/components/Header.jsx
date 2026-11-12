import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Header() {
  return (
    <header className="container header">
      <Logo />
      <nav className="nav">
        <NavLink to="/blog" className="nav__link">Blog</NavLink>
        <NavLink to="/about" className="nav__link">About</NavLink>
        <Link to="/about#contact" className="btn btn--outline">Contact us</Link>
      </nav>
    </header>
  )
}
