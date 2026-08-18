const projectData: Record<string, {
  title: string
  category: string
  summary: string
  accent: string
  problem: string
  objective: string
  solution: string
  features: string[]
  challenges: string[]
  results: string
  technologies: string[]
  diagram?: React.ReactNode
}> = {
  'smart-plant': {
    title: 'Smart Plant Monitor',
    category: 'IoT / Embedded Systems',
    summary: 'An automated plant monitoring system built using an ESP32 microcontroller that checks soil moisture and activates watering when necessary.',
    accent: '#10b981',
    problem: 'Plants require regular monitoring and watering, which can be difficult to manage consistently — especially for users who travel or have multiple plants to track.',
    objective: 'Design an automated system that continuously monitors soil moisture, triggers watering when needed, and logs all monitoring data to a cloud service for remote viewing.',
    solution: 'An ESP32-based system reads an analog soil moisture sensor at regular intervals. When moisture drops below a configurable threshold, the system activates a relay-controlled water pump. All sensor readings are pushed to an online data store via WiFi.',
    features: [
      'Real-time soil moisture monitoring via analog sensor',
      'Automatic water pump activation on threshold breach',
      'WiFi-enabled cloud data logging',
      'Configurable moisture threshold via serial interface',
      'Visual status LED indicators on the controller board',
    ],
    challenges: [
      'Calibrating the soil moisture sensor across different soil types',
      'Managing pump power draw within the ESP32 supply constraints',
      'Handling intermittent WiFi disconnections gracefully',
    ],
    results: 'The system achieved consistent automated watering with zero missed cycles during a 30-day test period. Cloud data logging allowed remote monitoring and revealed optimal watering schedules per plant type.',
    technologies: ['ESP32', 'C++ / Arduino', 'Soil Moisture Sensor', 'Relay Module', 'MQTT / HTTP', 'Cloud Storage', 'IoT Automation'],
  },
  'campus-network': {
    title: 'Campus Network Design',
    category: 'Network Infrastructure',
    summary: 'A complete local network design for a college campus providing reliable and secure connectivity across offices, labs, and classrooms.',
    accent: '#8b5cf6',
    problem: 'An aging network infrastructure was causing connectivity issues across campus, with inconsistent access speeds in classrooms and no clear security segmentation between administrative and student zones.',
    objective: 'Design a scalable, secure, and maintainable campus network that supports current user density and can grow with the institution.',
    solution: 'A hierarchical three-tier network design (core, distribution, access) with VLAN segmentation separating administration, faculty, students, and guest networks. Inter-VLAN routing is handled at the distribution layer with proper ACLs.',
    features: [
      'Three-tier hierarchical network architecture',
      'VLAN segmentation for Admin, Faculty, Students, and Guests',
      'Redundant uplinks between distribution and core switches',
      'Centralized wireless controller for AP management',
      'Firewall and DMZ for internet-facing services',
    ],
    challenges: [
      'Balancing port density requirements with budget constraints at the access layer',
      'Designing wireless coverage that eliminates dead zones across building floors',
      'Ensuring VLAN isolation without breaking cross-department services',
    ],
    results: 'The network design document was adopted as the campus upgrade blueprint. Simulation testing showed a 94% reduction in broadcast domain size and clean isolation between network segments.',
    technologies: ['Cisco IOS', 'VLANs', 'STP / RSTP', 'OSPF', 'ACLs', 'WPA2-Enterprise', 'Network Security', 'Packet Tracer'],
  },
  'clinic-system': {
    title: 'Clinic Management System',
    category: 'Systems Analysis',
    summary: 'A clinic management solution designed to organize patient appointments, records, and payments using clear process and data-flow analysis.',
    accent: '#f59e0b',
    problem: 'A small clinic was managing appointments, patient records, and billing with paper logs and spreadsheets, leading to scheduling conflicts, lost records, and billing errors.',
    objective: 'Analyze the clinic\'s existing workflows, identify inefficiencies, and produce a complete system design ready for development — including DFDs, ERDs, and process flows.',
    solution: 'A structured systems analysis produced a complete set of design artifacts: context diagrams, level-1 DFDs, entity-relationship diagrams, and normalized database schemas. The logical design maps cleanly to a three-tier web application architecture.',
    features: [
      'Patient registration and profile management',
      'Appointment scheduling with conflict detection',
      'Medical records organized by visit and diagnosis',
      'Billing and payment tracking per patient',
      'Doctor and staff account management',
    ],
    challenges: [
      'Capturing the informal knowledge staff held in paper-based workflows',
      'Normalizing the data model without losing the flexibility clinic staff expected',
      'Designing appointment logic that handles walk-ins alongside scheduled visits',
    ],
    results: 'The design deliverables were handed off to a development team. The normalized database schema reduced data redundancy by an estimated 60% compared to the original spreadsheet structure.',
    technologies: ['Systems Analysis', 'DFDs', 'ERD', 'Database Design', 'SQL', 'Process Mapping', 'Use Case Modeling'],
  },
  'fashion-store': {
    title: 'Online Fashion Store',
    category: 'Web Development',
    summary: 'A clean and responsive online storefront designed for a fashion boutique to showcase products across desktop and mobile.',
    accent: '#22d3ee',
    problem: 'A local fashion boutique had no online presence, limiting its reach to walk-in customers and forcing manual handling of product inquiries via social media DMs.',
    objective: 'Design and build a polished e-commerce storefront that showcases the brand\'s aesthetic, displays products clearly, and provides a frictionless browsing experience on all devices.',
    solution: 'A responsive web application with a product catalog, individual product pages, category filtering, and a shopping cart flow. The design prioritizes visual hierarchy and large product imagery, adapting cleanly from desktop to mobile.',
    features: [
      'Responsive product catalog with category filters',
      'Product detail pages with image gallery',
      'Shopping cart with quantity management',
      'Clean checkout flow',
      'Mobile-first responsive layout',
    ],
    challenges: [
      'Translating the boutique\'s in-store aesthetic to a digital experience',
      'Ensuring fast image loading without sacrificing visual quality',
      'Designing a cart experience that doesn\'t interrupt the browsing flow',
    ],
    results: 'The storefront provided the boutique with a professional online presence. Product browsing sessions averaged 4.2 pages per visit during initial testing, indicating strong catalog engagement.',
    technologies: ['HTML / CSS', 'JavaScript', 'Responsive Design', 'UI/UX Design', 'E-Commerce Patterns', 'Mobile-first CSS'],
  },
}

function FlowDiagram({ nodes, accent }: { nodes: string[], accent: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', padding: '1.5rem', background: 'rgba(6,11,22,0.8)', border: '1px solid rgba(34,211,238,0.1)', borderRadius: 10 }}>
      {nodes.map((node, i) => (
        <div key={node} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ padding: '0.5rem 1rem', background: `${accent}12`, border: `1px solid ${accent}30`, borderRadius: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: accent, whiteSpace: 'nowrap' }}>
            {node}
          </div>
          {i < nodes.length - 1 && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          )}
        </div>
      ))}
    </div>
  )
}

const diagramByProject: Record<string, string[]> = {
  'smart-plant': ['Soil Sensor', 'ESP32 ADC', 'Decision Logic', 'Relay / Pump', 'Plant'],
  'campus-network': ['Access Layer', 'Distribution', 'Core Switch', 'Firewall', 'Internet'],
  'clinic-system': ['Patient Input', 'Reception', 'Records System', 'Billing', 'Reports'],
  'fashion-store': ['Catalog Browse', 'Product Page', 'Add to Cart', 'Checkout', 'Order Confirm'],
}

interface ProjectDetailProps {
  navigate: (page: string) => void
}

export default function ProjectDetail({ navigate }: ProjectDetailProps) {
  const projectId = sessionStorage.getItem('projectId') || 'smart-plant'
  const p = projectData[projectId] || projectData['smart-plant']
  const flowNodes = diagramByProject[projectId] || []

  const goBack = () => {
    navigate('projects')
    window.scrollTo(0, 0)
  }

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Header */}
      <section style={{ position: 'relative', padding: '4rem 2rem 3rem', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: p.accent, opacity: 0.7 }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          <button onClick={goBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.82rem', fontFamily: 'Inter, sans-serif', marginBottom: '2rem', padding: 0, transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = '#94a3b8')}
            onMouseOut={e => (e.currentTarget.style.color = '#64748b')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Projects
          </button>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.12em', color: p.accent, background: `${p.accent}15`, border: `1px solid ${p.accent}30`, padding: '3px 10px', borderRadius: 4 }}>
              {p.category.toUpperCase()}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            {p.title}
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.75, maxWidth: 600 }}>
            {p.summary}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '3rem 2rem 6rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

          {/* Problem / Objective */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { label: 'The Problem', content: p.problem, icon: '⚠' },
              { label: 'Objective', content: p.objective, icon: '◎' },
            ].map(block => (
              <div key={block.label} style={{ border: '1px solid rgba(34,211,238,0.1)', borderRadius: 10, padding: '1.5rem', background: 'rgba(13,21,38,0.6)' }}>
                <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{block.icon}</div>
                <div className="section-label" style={{ marginBottom: '0.75rem' }}>{block.label}</div>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.75 }}>{block.content}</p>
              </div>
            ))}
          </div>

          {/* Solution */}
          <div>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Solution</div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '1rem' }}>
              How It Was Solved
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.5rem' }}>{p.solution}</p>
            <FlowDiagram nodes={flowNodes} accent={p.accent} />
          </div>

          {/* Technologies */}
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Technologies Used</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {p.technologies.map(t => (
                <span key={t} className="tag" style={{ color: p.accent, borderColor: `${p.accent}30`, background: `${p.accent}0d`, fontSize: '0.75rem' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Features & Challenges */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ border: '1px solid rgba(34,211,238,0.08)', borderRadius: 10, padding: '1.5rem', background: 'rgba(13,21,38,0.6)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Key Features</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.6 }}>
                    <span style={{ color: p.accent, flexShrink: 0, marginTop: 1 }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ border: '1px solid rgba(34,211,238,0.08)', borderRadius: 10, padding: '1.5rem', background: 'rgba(13,21,38,0.6)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Challenges</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {p.challenges.map(c => (
                  <li key={c} style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.6 }}>
                    <span style={{ color: '#f59e0b', flexShrink: 0, marginTop: 1 }}>◈</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results */}
          <div style={{ border: `1px solid ${p.accent}25`, borderRadius: 10, padding: '2rem', background: `${p.accent}08`, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: p.accent, borderRadius: '10px 0 0 10px' }} />
            <div className="section-label" style={{ marginBottom: '0.75rem', color: p.accent }}>Results & Outcome</div>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.9rem' }}>{p.results}</p>
          </div>

          {/* Back button */}
          <div style={{ paddingTop: '1rem' }}>
            <button className="btn-outline" onClick={goBack}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
