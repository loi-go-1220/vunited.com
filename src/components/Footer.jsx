import { Link } from 'react-router-dom'
import Brand from './Brand.jsx'
import { site, fullAddress, mapsUrl } from '../site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <Brand light />
          <p>{site.description}</p>
        </div>
        <div>
          <h3 className="footer__title">Services</h3>
          <Link to="/employers">For Employers</Link>
          <Link to="/talent">For Talent</Link>
          <Link to="/contact?type=employer">Request talent</Link>
        </div>
        <div>
          <h3 className="footer__title">Company</h3>
          <Link to="/about">About us</Link>
          <Link to="/blog">Insights</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3 className="footer__title">Contact</h3>
          <a href={mapsUrl} target="_blank" rel="noreferrer">{fullAddress}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  )
}
