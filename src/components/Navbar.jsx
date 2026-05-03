import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path ? 'active' : ''
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" onClick={closeMenu} className="brand" aria-label="Auctoritas home" style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1001 }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(255, 255, 255, 0.05)' }}>
            <img src="/logo.png" alt="Auctoritas Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/product" className={`nav-link ${isActive('/product')}`}>Product</Link>
          <Link to="/compliance" className={`nav-link ${isActive('/compliance')}`}>Compliance & Training</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Book Demo</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu" style={{ zIndex: 1001 }}>
          {isMobileMenuOpen ? <X color="white" size={32} /> : <Menu color="white" size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu} className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/product" onClick={closeMenu} className={`nav-link ${isActive('/product')}`}>Product</Link>
          <Link to="/compliance" onClick={closeMenu} className={`nav-link ${isActive('/compliance')}`}>Compliance</Link>
          <Link to="/about" onClick={closeMenu} className={`nav-link ${isActive('/about')}`}>About</Link>
          <Link to="/contact" onClick={closeMenu} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Book Demo</Link>
        </div>
      </div>
    </header>
  )
}
