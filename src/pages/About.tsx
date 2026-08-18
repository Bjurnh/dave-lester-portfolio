const steps = ['Understand', 'Analyze', 'Design', 'Build', 'Improve']

const whatIDo = [
  { title: 'Systems Analysis', icon: '◈', desc: 'Mapping processes, data flows, and requirements to design effective system architectures.' },
  { title: 'Application Development', icon: '⌥', desc: 'Building functional and reliable software from requirements to deployment.' },
  { title: 'Network Design', icon: '◉', desc: 'Designing secure, reliable local area networks for offices and campuses.' },
  { title: 'Database Design', icon: '⊞', desc: 'Structuring data models and relational databases that scale cleanly.' },
  { title: 'Web Development', icon: '◫', desc: 'Creating responsive, modern web applications users can actually use.' },
  { title: 'IoT / Embedded Systems', icon: '◎', desc: 'Developing smart device systems with microcontrollers, sensors, and automation.' },
]

export default function About() {
  return (
    <div style={{ paddingTop: 64 }}>
      {/* Header */}
      <section style={{ position: 'relative', padding: '5rem 2rem 4rem', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>// about me</div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Building Technology<br />Around{' '}
            <span style={{ color: '#22d3ee' }}>Real Problems</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.8, maxWidth: 600 }}>
            Dave Lester Lopecillo is a Systems Analyst and Developer who designs practical technology solutions — from smart devices to complete web applications. He focuses on understanding business needs and building easy-to-use systems that solve everyday problems.
          </p>
        </div>
      </section>

      {/* Who I Am */}
      <section style={{ padding: '3rem 2rem 5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>who i am</div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: '#f1f5f9', marginBottom: '1.25rem' }}>
              Analyst First, Developer Second
            </h2>
            <div style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                My work begins long before the first line of code. I study the problem space — the users, the workflows, the data, the constraints — and only then decide what technology is the right fit.
              </p>
              <p>
                This approach means the systems I build actually solve the right problem, not just the obvious one. Whether it's a campus network, a clinic management system, or an IoT sensor array, the process is always the same: understand first, build second.
              </p>
            </div>
          </div>

          {/* Decorative terminal block */}
          <div style={{ border: '1px solid rgba(34,211,238,0.15)', borderRadius: 10, overflow: 'hidden', background: 'rgba(6,11,22,0.8)' }}>
            <div style={{ background: 'rgba(34,211,238,0.06)', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(34,211,238,0.1)', display: 'flex', gap: '6px', alignItems: 'center' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', opacity: 0.7 }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', opacity: 0.7 }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', opacity: 0.7 }} />
              <span style={{ marginLeft: '0.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#475569' }}>profile.md</span>
            </div>
            <div style={{ padding: '1.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', lineHeight: 1.9 }}>
              {[
                ['name:', 'Dave Lester Lopecillo'],
                ['role:', 'Systems Analyst & Developer'],
                ['focus:', 'Practical tech solutions'],
                ['approach:', 'Understand → Build'],
                ['location:', 'Philippines'],
                ['available:', 'Open to opportunities'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#22d3ee', minWidth: 90 }}>{k}</span>
                  <span style={{ color: '#94a3b8' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(6,11,22,0.6)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>what i do</div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.7rem', color: '#f1f5f9' }}>
              Areas of Practice
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {whatIDo.map(item => (
              <div key={item.title} className="card-hover" style={{ border: '1px solid rgba(34,211,238,0.08)', borderRadius: 10, padding: '1.75rem', background: 'rgba(13,21,38,0.6)', display: 'flex', gap: '1rem' }}>
                <div style={{ fontSize: '1.25rem', color: '#22d3ee', fontFamily: 'monospace', lineHeight: 1, paddingTop: 2, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Timeline */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>my approach</div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.7rem', color: '#f1f5f9' }}>
              How Every Project Runs
            </h2>
          </div>

          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            {/* Line */}
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)', transform: 'translateY(-50%)', zIndex: 0 }} />

            {steps.map((step, i) => (
              <div key={step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  border: '1px solid rgba(34,211,238,0.4)',
                  background: i === 2 ? 'rgba(34,211,238,0.15)' : 'rgba(13,21,38,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#22d3ee',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(6,11,22,0.6)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.04) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>philosophy</div>
          <blockquote style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#f1f5f9', lineHeight: 1.4, marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            "Good technology should solve a problem, not create another one."
          </blockquote>
          <div style={{ width: 40, height: 1, background: '#22d3ee', margin: '0 auto', opacity: 0.5 }} />
        </div>
      </section>
    </div>
  )
}
