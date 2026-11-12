import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo small />
        <div className="footer__links">
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <span>© {new Date().getFullYear()} VUnited</span>
        </div>
      </div>
    </footer>
  )
}
