interface NotFoundProps {
  navigate: (page: string) => void
}

export default function NotFound({ navigate }: NotFoundProps) {
  return (
    <div style={{ paddingTop: 64, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '6rem', fontWeight: 700, color: 'rgba(34,211,238,0.12)', lineHeight: 1, marginBottom: '1rem' }}>404</div>
        <div className="section-label" style={{ marginBottom: '1rem' }}>// page not found</div>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: '#f1f5f9', marginBottom: '1rem' }}>
          This page doesn't exist.
        </h1>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>Let's get you back to somewhere useful.</p>
        <button className="btn-primary" onClick={() => { navigate('home'); window.scrollTo(0,0) }}>
          Go Home
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  )
}
