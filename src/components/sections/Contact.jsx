export default function Contact() {
  const contacts = [
    {
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
      ),
      label: 'Email',
      value: 'paarth.srivastava777@gmail.com',
      href: 'mailto:paarth.srivastava777@gmail.com',
      color: '#6c63ff',
    },
    {
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/paarth-srivastava',
      href: 'https://linkedin.com/in/paarth-srivastava',
      color: '#00d4aa',
    },
    {
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      ),
      label: 'GitHub',
      value: 'github.com/PaarthSuwi',
      href: 'https://github.com/PaarthSuwi',
      color: '#ff6b9d',
    },
    {
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      ),
      label: 'Phone',
      value: '+91 90829 42788',
      href: 'tel:+919082942788',
      color: '#ffa94d',
    },
    {
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      ),
      label: 'Location',
      value: 'Pune, India',
      href: null,
      color: '#74c0fc',
    },
  ]

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">Let&apos;s connect and discuss opportunities</p>
        <div className="section-divider" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left - Message */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '1rem' }}>
              Let&apos;s Work Together
            </h3>
            <p style={{ color: '#9999bb', lineHeight: 1.8, marginBottom: '1rem' }}>
              I&apos;m currently a Graduate Trainee Engineer at Bajaj Auto and open to interesting opportunities in robotics, automation, AI engineering, and related domains.
            </p>
            <p style={{ color: '#9999bb', lineHeight: 1.8, marginBottom: '2rem' }}>
              Whether you want to discuss a project, collaboration, job opportunity, or just want to talk tech — feel free to reach out through any of the channels below.
            </p>

            {/* Availability */}
            <div style={{ padding: '1.2rem 1.5rem', background: 'rgba(0,212,170,0.08)', border: '1px solid rgba(0,212,170,0.25)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00d4aa', flexShrink: 0, boxShadow: '0 0 10px #00d4aa' }} />
              <div>
                <div style={{ fontWeight: 600, color: '#f0f0f8', fontSize: '0.95rem' }}>Available for Opportunities</div>
                <div style={{ color: '#9999bb', fontSize: '0.85rem', marginTop: '0.2rem' }}>Open to full-time roles in Robotics, AI & Automation</div>
              </div>
            </div>

            {/* Quick links */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://linkedin.com/in/paarth-srivastava" target="_blank" rel="noreferrer"
                style={{ padding: '0.7rem 1.5rem', background: 'linear-gradient(135deg,#6c63ff,#00d4aa)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform='none'}>
                Connect on LinkedIn
              </a>
              <a href="mailto:paarth.srivastava777@gmail.com"
                style={{ padding: '0.7rem 1.5rem', background: 'transparent', color: '#f0f0f8', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', border: '1px solid rgba(108,99,255,0.4)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(108,99,255,0.1)'; e.currentTarget.style.borderColor='#6c63ff' }}
                onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(108,99,255,0.4)' }}>
                Send Email
              </a>
            </div>
          </div>

          {/* Right - Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {contacts.map(c => (
              c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.2rem', background: 'var(--bg-card)', borderRadius: '10px', border: `1px solid ${c.color}22`, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.color + '55'; e.currentTarget.style.transform = 'translateX(4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = c.color + '22'; e.currentTarget.style.transform = 'none' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: c.color + '15', border: `1px solid ${c.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#7777aa', marginBottom: '0.1rem' }}>{c.label}</div>
                    <div style={{ fontSize: '0.9rem', color: '#f0f0f8', fontWeight: 500 }}>{c.value}</div>
                  </div>
                </a>
              ) : (
                <div key={c.label}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.2rem', background: 'var(--bg-card)', borderRadius: '10px', border: `1px solid ${c.color}22` }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: c.color + '15', border: `1px solid ${c.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#7777aa', marginBottom: '0.1rem' }}>{c.label}</div>
                    <div style={{ fontSize: '0.9rem', color: '#f0f0f8', fontWeight: 500 }}>{c.value}</div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '5rem', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <p style={{ color: '#444', fontSize: '0.85rem' }}>
          Built with React & Vite by Paarth Srivastava &nbsp;·&nbsp; 2026
        </p>
      </div>

      <style>{`@media(max-width:768px){#contact .section-container > div:last-child{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>
    </section>
  )
}
