import { useState, useEffect } from 'react'

interface NavbarProps {
  currentPage: string
  navigate: (page: string) => void
}

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [currentPage])

  const go = (page: string) => {
    navigate(page)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.3s, border-color 0.3s',
          background: scrolled ? 'rgba(8,13,26,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(34,211,238,0.08)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => go('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#e2e8f0' }}>
            Dave<span style={{ color: '#22d3ee' }}>.</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`nav-link${currentPage === l.id ? ' active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {l.label}
            </button>
          ))}
          <button className="btn-primary" onClick={() => go('contact')} style={{ padding: '0.45rem 1.1rem', fontSize: '0.8rem' }}>
            Let's Talk
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: '#94a3b8', display: 'none' }}
          aria-label="Toggle menu"
        >
          <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ height: 1.5, background: menuOpen ? '#22d3ee' : '#94a3b8', transition: 'all 0.25s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none', display: 'block' }} />
            <span style={{ height: 1.5, background: '#94a3b8', opacity: menuOpen ? 0 : 1, transition: 'all 0.25s', display: 'block' }} />
            <span style={{ height: 1.5, background: menuOpen ? '#22d3ee' : '#94a3b8', transition: 'all 0.25s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none', display: 'block' }} />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          background: 'rgba(8,13,26,0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          transition: 'opacity 0.25s, transform 0.25s',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        className="show-mobile"
      >
        {links.map(l => (
          <button
            key={l.id}
            onClick={() => go(l.id)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: currentPage === l.id ? '#22d3ee' : '#e2e8f0',
              transition: 'color 0.2s',
            }}
          >
            {l.label}
          </button>
        ))}
        <button className="btn-primary" onClick={() => go('contact')}>
          Let's Talk
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
