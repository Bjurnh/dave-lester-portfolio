import { useState } from 'react'

type FormState = 'idle' | 'success'

interface Field {
  value: string
  error: string
}

function Input({ label, id, type = 'text', placeholder, field, onChange }: {
  label: string
  id: string
  type?: string
  placeholder: string
  field: Field
  onChange: (val: string) => void
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label htmlFor={id} style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={field.value}
        onChange={e => onChange(e.target.value)}
        className={field.error ? 'error' : ''}
      />
      {field.error && <span style={{ fontSize: '0.73rem', color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>{field.error}</span>}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: { value: '', error: '' },
    email: { value: '', error: '' },
    subject: { value: '', error: '' },
    message: { value: '', error: '' },
  })
  const [state, setState] = useState<FormState>('idle')

  const set = (field: keyof typeof form) => (val: string) =>
    setForm(prev => ({ ...prev, [field]: { value: val, error: '' } }))

  const validate = () => {
    const errors = {
      name: !form.name.value.trim() ? 'Name is required.' : '',
      email: !form.email.value.trim() ? 'Email is required.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value) ? 'Please enter a valid email.' : '',
      subject: !form.subject.value.trim() ? 'Subject is required.' : '',
      message: !form.message.value.trim() ? 'Message is required.' : form.message.value.trim().length < 20 ? 'Message should be at least 20 characters.' : '',
    }
    setForm(prev => ({
      name: { ...prev.name, error: errors.name },
      email: { ...prev.email, error: errors.email },
      subject: { ...prev.subject, error: errors.subject },
      message: { ...prev.message, error: errors.message },
    }))
    return Object.values(errors).every(e => !e)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setState('success')
    }
  }

  const reset = () => {
    setForm({ name: { value: '', error: '' }, email: { value: '', error: '' }, subject: { value: '', error: '' }, message: { value: '', error: '' } })
    setState('idle')
  }

  const contactInfo = [
    { label: 'Email', value: 'your.email@example.com', icon: '✉' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', icon: '◈' },
    { label: 'GitHub', value: 'github.com/yourusername', icon: '◎' },
    { label: 'Location', value: 'Philippines', icon: '◉' },
  ]

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Header */}
      <section style={{ position: 'relative', padding: '5rem 2rem 4rem', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>// get in touch</div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#f1f5f9', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Let's Build Something{' '}
            <span style={{ color: '#22d3ee' }}>Useful.</span>
          </h1>
          <p style={{ color: '#64748b', lineHeight: 1.75 }}>
            Have a business problem, system idea, or technology project? Let's talk about how it can be turned into a practical solution.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ padding: '2rem 2rem 6rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>

          {/* Form */}
          <div style={{ border: '1px solid rgba(34,211,238,0.1)', borderRadius: 12, overflow: 'hidden', background: 'rgba(13,21,38,0.7)' }}>
            <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid rgba(34,211,238,0.07)', background: 'rgba(6,11,22,0.5)' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#475569', letterSpacing: '0.08em' }}>contact.form</span>
            </div>

            {state === 'success' ? (
              <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.4rem' }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#f1f5f9', marginBottom: '0.75rem' }}>
                  Message sent successfully.
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button className="btn-outline" onClick={reset}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <Input label="Full Name" id="name" placeholder="Dave Lester" field={form.name} onChange={set('name')} />
                  <Input label="Email Address" id="email" type="email" placeholder="your@email.com" field={form.email} onChange={set('email')} />
                </div>
                <Input label="Subject" id="subject" placeholder="Project inquiry, collaboration..." field={form.subject} onChange={set('subject')} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}>Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Describe your project, problem, or idea..."
                    value={form.message.value}
                    onChange={e => set('message')(e.target.value)}
                    className={form.message.error ? 'error' : ''}
                    style={{ resize: 'vertical', minHeight: 140 }}
                  />
                  {form.message.error && <span style={{ fontSize: '0.73rem', color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>{form.message.error}</span>}
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="section-label" style={{ marginBottom: '0.5rem' }}>contact details</div>
            {contactInfo.map(info => (
              <div key={info.label} style={{ border: '1px solid rgba(34,211,238,0.08)', borderRadius: 10, padding: '1.25rem', background: 'rgba(13,21,38,0.5)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: 7, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', color: '#22d3ee', flexShrink: 0 }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', color: '#475569', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{info.label.toUpperCase()}</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'Inter, sans-serif' }}>{info.value}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '0.5rem', padding: '1.25rem', border: '1px solid rgba(34,211,238,0.08)', borderRadius: 10, background: 'rgba(13,21,38,0.5)' }}>
              <div style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', color: '#475569', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>AVAILABILITY</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
                <span style={{ fontSize: '0.84rem', color: '#94a3b8', fontFamily: 'Inter, sans-serif' }}>Open to new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
