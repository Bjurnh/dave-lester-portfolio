import { useState } from 'react'

const allProjects = [
  {
    id: 'smart-plant',
    title: 'Smart Plant Monitor',
    category: 'IoT',
    categoryLabel: 'IoT / Embedded Systems',
    desc: 'An automated plant monitoring system built using an ESP32 microcontroller. The system monitors soil moisture, automatically waters plants when necessary, and stores monitoring data online.',
    tags: ['ESP32', 'IoT', 'Sensors', 'Automation', 'Cloud Data'],
    accent: '#10b981',
  },
  {
    id: 'campus-network',
    title: 'Campus Network Design',
    category: 'Networking',
    categoryLabel: 'Network Infrastructure',
    desc: 'A complete local network design for a college campus providing reliable and secure connectivity across offices and classrooms.',
    tags: ['Network Design', 'LAN', 'Routing', 'Switching', 'Network Security'],
    accent: '#8b5cf6',
  },
  {
    id: 'clinic-system',
    title: 'Clinic Management System',
    category: 'Systems',
    categoryLabel: 'Systems Analysis',
    desc: 'A clinic management solution designed to organize patient appointments, records, and payments using clear process and data-flow design.',
    tags: ['Systems Analysis', 'Data Flow', 'Database', 'Process Mapping'],
    accent: '#f59e0b',
  },
  {
    id: 'fashion-store',
    title: 'Online Fashion Store',
    category: 'Web',
    categoryLabel: 'Web Development',
    desc: 'A clean and responsive online storefront designed for a fashion boutique to showcase products across desktop and mobile devices.',
    tags: ['Web Development', 'UI/UX', 'Responsive Design', 'E-Commerce'],
    accent: '#22d3ee',
  },
]

const filters = ['All', 'Systems', 'Web', 'Networking', 'IoT']

interface ProjectsProps {
  navigate: (page: string) => void
}

export default function Projects({ navigate }: ProjectsProps) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active)

  const go = (id: string) => {
    sessionStorage.setItem('projectId', id)
    navigate('project-detail')
    window.scrollTo(0, 0)
  }

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Header */}
      <section style={{ position: 'relative', padding: '5rem 2rem 4rem', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>// portfolio</div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Projects &{' '}
            <span style={{ color: '#22d3ee' }}>Case Studies</span>
          </h1>
          <p style={{ color: '#64748b', lineHeight: 1.75 }}>
            A collection of work spanning IoT systems, network infrastructure, systems analysis, and web applications.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: '0 2rem 4rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  background: active === f ? '#22d3ee' : 'rgba(13,21,38,0.7)',
                  color: active === f ? '#080d1a' : '#94a3b8',
                  border: `1px solid ${active === f ? '#22d3ee' : 'rgba(34,211,238,0.12)'}`,
                  borderRadius: 6,
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.82rem',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(p => (
              <article
                key={p.id}
                onClick={() => go(p.id)}
                className="card-hover"
                style={{
                  border: '1px solid rgba(34,211,238,0.08)',
                  borderRadius: 12,
                  background: 'rgba(13,21,38,0.7)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                {/* Image placeholder with accent */}
                <div style={{ height: 160, background: `linear-gradient(135deg, rgba(13,21,38,0.9) 0%, ${p.accent}18 100%)`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(34,211,238,0.06)' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 12, background: `${p.accent}15`, border: `1px solid ${p.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.8rem' }}>
                      {p.category === 'IoT' ? '◎' : p.category === 'Networking' ? '◉' : p.category === 'Systems' ? '◈' : '◫'}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', top: 12, left: 12 }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: p.accent, background: `${p.accent}15`, border: `1px solid ${p.accent}30`, padding: '2px 8px', borderRadius: 4 }}>
                      {p.categoryLabel.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#f1f5f9', marginBottom: '0.75rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {p.tags.map(t => (
                      <span key={t} className="tag" style={{ color: p.accent, borderColor: `${p.accent}30`, background: `${p.accent}0d` }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#22d3ee', fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
                    View Project
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
