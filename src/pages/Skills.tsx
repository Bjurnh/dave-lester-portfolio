const skillGroups = [
  {
    category: 'Systems Analysis',
    accent: '#22d3ee',
    icon: '◈',
    skills: ['Requirements Analysis', 'Process Mapping', 'Data Flow Diagrams', 'System Design', 'Business Process Analysis', 'Use Case Modeling', 'Entity Relationship Diagrams'],
  },
  {
    category: 'Software Development',
    accent: '#8b5cf6',
    icon: '⌥',
    skills: ['Web Development', 'Frontend Development', 'Backend Development', 'Responsive Design', 'REST APIs', 'Version Control (Git)'],
  },
  {
    category: 'Database',
    accent: '#f59e0b',
    icon: '⊞',
    skills: ['SQL', 'Database Design', 'Data Normalization', 'Data Management', 'Relational Modeling', 'Query Optimization'],
  },
  {
    category: 'Networking',
    accent: '#ec4899',
    icon: '◉',
    skills: ['Network Architecture', 'LAN Design', 'Routing', 'Switching', 'VLANs', 'Network Security', 'Cisco IOS'],
  },
  {
    category: 'Hardware / IoT',
    accent: '#10b981',
    icon: '◎',
    skills: ['ESP32', 'Microcontrollers', 'Sensors & Actuators', 'Automation Logic', 'IoT Systems', 'Embedded C / Arduino', 'MQTT Protocol'],
  },
]

const tools = [
  'VS Code', 'Figma', 'Packet Tracer', 'Arduino IDE', 'MySQL Workbench',
  'Git / GitHub', 'Postman', 'Linux CLI', 'Microsoft Office', 'draw.io',
]

export default function Skills() {
  return (
    <div style={{ paddingTop: 64 }}>
      {/* Header */}
      <section style={{ position: 'relative', padding: '5rem 2rem 4rem', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>// expertise</div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Skills &{' '}
            <span style={{ color: '#22d3ee' }}>Technologies</span>
          </h1>
          <p style={{ color: '#64748b', lineHeight: 1.75 }}>
            A broad technical foundation across analysis, development, networking, and embedded systems — applied through practical project work.
          </p>
        </div>
      </section>

      {/* Skill Groups */}
      <section style={{ padding: '2rem 2rem 5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {skillGroups.map(group => (
            <div key={group.category} style={{ border: '1px solid rgba(34,211,238,0.08)', borderRadius: 12, overflow: 'hidden', background: 'rgba(13,21,38,0.6)' }}>
              {/* Group header */}
              <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid rgba(34,211,238,0.07)', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(6,11,22,0.4)' }}>
                <div style={{ width: 36, height: 36, borderRadius: 7, background: `${group.accent}12`, border: `1px solid ${group.accent}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: group.accent }}>
                  {group.icon}
                </div>
                <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#f1f5f9' }}>
                  {group.category}
                </h2>
              </div>

              {/* Skills grid */}
              <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {group.skills.map(skill => (
                  <div
                    key={skill}
                    style={{
                      padding: '0.5rem 1rem',
                      border: `1px solid ${group.accent}20`,
                      borderRadius: 6,
                      background: `${group.accent}08`,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.84rem',
                      color: '#94a3b8',
                      transition: 'all 0.2s',
                      cursor: 'default',
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.background = `${group.accent}15`
                      e.currentTarget.style.borderColor = `${group.accent}40`
                      e.currentTarget.style.color = group.accent
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = `${group.accent}08`
                      e.currentTarget.style.borderColor = `${group.accent}20`
                      e.currentTarget.style.color = '#94a3b8'
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section style={{ padding: '4rem 2rem 5rem', background: 'rgba(6,11,22,0.6)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>tooling</div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: '#f1f5f9' }}>
              Tools & Environment
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {tools.map(t => (
              <div key={t} style={{ padding: '0.5rem 1.1rem', border: '1px solid rgba(34,211,238,0.1)', borderRadius: 6, background: 'rgba(13,21,38,0.7)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#64748b', transition: 'all 0.2s' }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)'; e.currentTarget.style.color = '#94a3b8' }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(34,211,238,0.1)'; e.currentTarget.style.color = '#64748b' }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section style={{ padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.04) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.1rem', color: '#64748b', lineHeight: 1.8, fontStyle: 'italic' }}>
            "The right tool for the right problem — not the most impressive tool for every problem."
          </p>
        </div>
      </section>
    </div>
  )
}
