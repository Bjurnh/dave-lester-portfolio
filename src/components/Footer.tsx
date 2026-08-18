interface FooterProps {
  navigate: (page: string) => void
}

export default function Footer({ navigate }: FooterProps) {
  const go = (page: string) => {
    navigate(page)
    window.scrollTo(0, 0)
  }

  return (
    <footer style={{
      borderTop: '1px solid rgba(34,211,238,0.08)',
      background: '#060b16',
      padding: '3rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
              Dave<span style={{ color: '#22d3ee' }}>.</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.7, maxWidth: 220 }}>
              Systems Analyst & Developer building practical technology solutions.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em', color: '#22d3ee', marginBottom: '1rem' }}>
              NAVIGATE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['home','about','projects','skills','contact'].map(p => (
                <button key={p} onClick={() => go(p)} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '0.85rem', color: '#64748b', fontFamily: 'Inter, sans-serif', transition: 'color 0.2s', padding: 0 }}
                  onMouseOver={e => (e.currentTarget.style.color = '#94a3b8')}
                  onMouseOut={e => (e.currentTarget.style.color = '#64748b')}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em', color: '#22d3ee', marginBottom: '1rem' }}>
              CONNECT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'GitHub', href: '#' },
                { label: 'Email', href: '#' },
              ].map(s => (
                <a key={s.label} href={s.href} style={{ fontSize: '0.85rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#94a3b8')}
                  onMouseOut={e => (e.currentTarget.style.color = '#64748b')}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(34,211,238,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'Inter, sans-serif' }}>
            © 2026 Dave Lester Lopecillo. All rights reserved.
          </span>
          <span style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', color: '#334155' }}>
            Systems Analyst & Developer
          </span>
        </div>
      </div>
    </footer>
  )
}
