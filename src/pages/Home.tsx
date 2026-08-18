interface HomeProps {
  navigate: (page: string) => void
}

const projects = [
  {
    id: 'smart-plant',
    title: 'Smart Plant Monitor',
    category: 'IoT / Embedded Systems',
    desc: 'An automated plant monitoring system built using an ESP32 microcontroller that monitors soil moisture and waters plants automatically.',
    tags: ['ESP32', 'IoT', 'Sensors', 'Automation'],
    color: '#10b981',
  },
  {
    id: 'campus-network',
    title: 'Campus Network Design',
    category: 'Network Infrastructure',
    desc: 'A complete local network design for a college campus providing reliable and secure connectivity across offices and classrooms.',
    tags: ['Network Design', 'LAN', 'Routing', 'Security'],
    color: '#8b5cf6',
  },
  {
    id: 'clinic-system',
    title: 'Clinic Management System',
    category: 'Systems Analysis',
    desc: 'A clinic management solution designed to organize patient appointments, records, and payments using clear process and data-flow design.',
    tags: ['Systems Analysis', 'Database', 'Process Mapping'],
    color: '#f59e0b',
  },
  {
    id: 'fashion-store',
    title: 'Online Fashion Store',
    category: 'Web Development',
    desc: 'A clean and responsive online storefront designed for a fashion boutique to showcase products across desktop and mobile devices.',
    tags: ['Web Dev', 'UI/UX', 'Responsive', 'E-Commerce'],
    color: '#22d3ee',
  },
]

function TechIllustration() {
  return (
    <svg viewBox="0 0 440 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 440, height: 'auto' }}>
      {/* Grid background */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(34,211,238,0.06)" strokeWidth="0.5"/>
        </pattern>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="440" height="380" fill="url(#grid)"/>

      {/* Glow orbs */}
      <ellipse cx="220" cy="190" rx="140" ry="120" fill="url(#glow1)"/>
      <ellipse cx="340" cy="80" rx="80" ry="60" fill="url(#glow2)"/>

      {/* Connection lines */}
      <line x1="220" y1="190" x2="80" y2="80" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="220" y1="190" x2="360" y2="80" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="220" y1="190" x2="80" y2="310" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="220" y1="190" x2="360" y2="310" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="220" y1="190" x2="220" y2="40" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="4 4"/>

      {/* Center Node - ESP32/Microcontroller */}
      <rect x="178" y="160" width="84" height="60" rx="6" fill="rgba(13,21,38,0.9)" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5"/>
      <text x="220" y="186" textAnchor="middle" fill="#22d3ee" fontSize="8" fontFamily="JetBrains Mono" fontWeight="500">ESP32</text>
      <text x="220" y="199" textAnchor="middle" fill="#94a3b8" fontSize="6.5" fontFamily="JetBrains Mono">MCU</text>
      {/* pins */}
      {[170,176,182,188,194,200,206].map((y,i) => (
        <rect key={i} x="174" y={y} width="4" height="2.5" rx="0.5" fill="rgba(34,211,238,0.4)"/>
      ))}
      {[170,176,182,188,194,200,206].map((y,i) => (
        <rect key={i} x="262" y={y} width="4" height="2.5" rx="0.5" fill="rgba(34,211,238,0.4)"/>
      ))}

      {/* Top Node - Cloud */}
      <rect x="185" y="20" width="70" height="36" rx="18" fill="rgba(13,21,38,0.9)" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5"/>
      <text x="220" y="41" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="JetBrains Mono">Cloud</text>

      {/* Top-left - Soil Sensor */}
      <rect x="38" y="56" width="72" height="38" rx="5" fill="rgba(13,21,38,0.9)" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5"/>
      <text x="74" y="73" textAnchor="middle" fill="#34d399" fontSize="7.5" fontFamily="JetBrains Mono">Soil Sensor</text>
      <text x="74" y="85" textAnchor="middle" fill="#64748b" fontSize="6" fontFamily="JetBrains Mono">analog in</text>

      {/* Top-right - Network */}
      <rect x="330" y="56" width="72" height="38" rx="5" fill="rgba(13,21,38,0.9)" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5"/>
      <text x="366" y="73" textAnchor="middle" fill="#22d3ee" fontSize="7.5" fontFamily="JetBrains Mono">Network</text>
      <text x="366" y="85" textAnchor="middle" fill="#64748b" fontSize="6" fontFamily="JetBrains Mono">WiFi / LAN</text>

      {/* Bottom-left - Database */}
      <rect x="38" y="290" width="72" height="38" rx="5" fill="rgba(13,21,38,0.9)" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5"/>
      <text x="74" y="307" textAnchor="middle" fill="#fbbf24" fontSize="7.5" fontFamily="JetBrains Mono">Database</text>
      <text x="74" y="319" textAnchor="middle" fill="#64748b" fontSize="6" fontFamily="JetBrains Mono">SQL / Storage</text>

      {/* Bottom-right - Web App */}
      <rect x="330" y="290" width="72" height="38" rx="5" fill="rgba(13,21,38,0.9)" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5"/>
      <text x="366" y="307" textAnchor="middle" fill="#22d3ee" fontSize="7.5" fontFamily="JetBrains Mono">Web App</text>
      <text x="366" y="319" textAnchor="middle" fill="#64748b" fontSize="6" fontFamily="JetBrains Mono">React / UI</text>

      {/* Node dots */}
      {[[220,38],[74,75],[366,75],[74,309],[366,309]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#22d3ee" opacity="0.6"/>
      ))}

      {/* Animated pulse ring on center */}
      <circle cx="220" cy="190" r="52" stroke="rgba(34,211,238,0.1)" strokeWidth="1" fill="none"/>
      <circle cx="220" cy="190" r="68" stroke="rgba(34,211,238,0.05)" strokeWidth="1" fill="none"/>

      {/* Code snippet */}
      <rect x="280" y="155" width="130" height="70" rx="4" fill="rgba(6,11,22,0.85)" stroke="rgba(34,211,238,0.12)" strokeWidth="1"/>
      <text x="294" y="173" fill="#475569" fontSize="6.5" fontFamily="JetBrains Mono">// monitor loop</text>
      <text x="294" y="185" fill="#22d3ee" fontSize="6.5" fontFamily="JetBrains Mono">moisture = read();</text>
      <text x="294" y="197" fill="#94a3b8" fontSize="6.5" fontFamily="JetBrains Mono">if (moisture &lt; 40) {"{"}</text>
      <text x="294" y="209" fill="#34d399" fontSize="6.5" fontFamily="JetBrains Mono">  pump.activate();</text>
      <text x="294" y="221" fill="#94a3b8" fontSize="6.5" fontFamily="JetBrains Mono">{"}"}</text>
    </svg>
  )
}

export default function Home({ navigate }: HomeProps) {
  const go = (page: string) => {
    navigate(page)
    window.scrollTo(0, 0)
  }

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>
              // systems analyst & developer
            </div>
            <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.1, color: '#f1f5f9', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Designing Practical Technology Solutions for{' '}
              <span style={{ color: '#22d3ee' }}>Real-World Problems.</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 480 }}>
              I'm Dave Lester Lopecillo, a Systems Analyst and Developer focused on understanding business needs and turning them into practical, reliable, and easy-to-use technology solutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => go('projects')}>
                View My Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="btn-outline" onClick={() => go('contact')}>
                Let's Work Together
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TechIllustration />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-illo { display: none; }
          }
        `}</style>
      </section>

      {/* Approach */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(6,11,22,0.6)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>approach</div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#f1f5f9' }}>
              Technology With a Purpose
            </h2>
            <p style={{ color: '#64748b', maxWidth: 520, margin: '1rem auto 0', lineHeight: 1.75, fontSize: '0.95rem' }}>
              Every solution starts with understanding the actual problem before deciding what technology to use.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                num: '01',
                title: 'Analyze',
                desc: 'Understand requirements, workflows, users, and business problems before writing a single line of code.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                ),
              },
              {
                num: '02',
                title: 'Design',
                desc: 'Create practical systems, architectures, networks, and interfaces that match how users actually work.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                ),
              },
              {
                num: '03',
                title: 'Build',
                desc: 'Develop reliable and easy-to-use technology solutions — from smart hardware to full web applications.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                ),
              },
            ].map(card => (
              <div key={card.num} className="card-hover" style={{ border: '1px solid rgba(34,211,238,0.1)', borderRadius: 10, padding: '2rem', background: 'rgba(13,21,38,0.6)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(34,211,238,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {card.icon}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#22d3ee', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>
                  {card.num}
                </div>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#f1f5f9', marginBottom: '0.75rem' }}>
                  {card.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.75 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>portfolio</div>
              <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#f1f5f9' }}>
                Selected Projects
              </h2>
            </div>
            <button className="btn-outline" onClick={() => go('projects')}>
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {projects.map(p => (
              <div
                key={p.id}
                className="card-hover"
                onClick={() => { navigate('project-detail'); window.scrollTo(0,0); sessionStorage.setItem('projectId', p.id) }}
                style={{ border: '1px solid rgba(34,211,238,0.08)', borderRadius: 10, overflow: 'hidden', background: 'rgba(13,21,38,0.7)', cursor: 'pointer' }}
              >
                <div style={{ height: 8, background: p.color, opacity: 0.7 }} />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', color: p.color, letterSpacing: '0.1em', marginBottom: '0.75rem', opacity: 0.9 }}>
                    {p.category.toUpperCase()}
                  </div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', marginBottom: '0.75rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.tags.map(t => <span key={t} className="tag" style={{ borderColor: `${p.color}30`, color: p.color, background: `${p.color}0d` }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(6,11,22,0.6)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.05) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>// ready to collaborate</div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#f1f5f9', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            Let's Build Something Useful.
          </h2>
          <p style={{ color: '#64748b', lineHeight: 1.75, marginBottom: '2rem' }}>
            Have a business problem, system idea, or technology project? Let's talk about how it can be turned into a practical solution.
          </p>
          <button className="btn-primary" onClick={() => go('contact')} style={{ padding: '0.75rem 2rem', fontSize: '0.95rem' }}>
            Get In Touch
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </section>
    </div>
  )
}
