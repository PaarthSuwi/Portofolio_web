import { useRef, useEffect, useState } from 'react';

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const contacts = [
  { label: 'Email', value: 'paarth.srivastava777@gmail.com', href: 'mailto:paarth.srivastava777@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/paarth-srivastava-65806623b', href: 'https://linkedin.com/in/paarth-srivastava-65806623b' },
  { label: 'GitHub', value: 'github.com/PaarthSuwi', href: 'https://github.com/PaarthSuwi' },
  { label: 'Phone', value: 'Email for number', href: 'mailto:paarth.srivastava777@gmail.com?subject=Contact%20Number%20Request&body=Hi%20Paarth%2C%20could%20you%20share%20your%20contact%20number%3F' },
];

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id='contact' style={{ background: '#161B22', padding: '5rem 0', borderTop: '1px solid #21262D' }}>
      <div className='container' ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left: CTA */}
          <div style={{
            opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}>
            <div className='section-label'>Contact</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#E6EDF3', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Let us build something
              <br />
              <span style={{ color: '#4FD1FF' }}>intelligent together.</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#8B949E', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '400px' }}>
              Open to full-time roles, collaborations, and interesting robotics or AI projects.
              Drop a message and I will get back within 24 hours.
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(63,185,80,0.08)', border: '1px solid rgba(63,185,80,0.2)',
              borderRadius: '100px', padding: '0.3rem 0.75rem',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3FB950', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#3FB950' }}>Available for opportunities</span>
            </div>
          </div>

          {/* Right: Contact cards */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '0.75rem',
            opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
          }}>
            {contacts.map((c, i) => (
              <a key={i} href={c.href} target='_blank' rel='noreferrer'
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: '#1C2128', border: '1px solid #30363D', borderRadius: '7px',
                  padding: '0.875rem 1.25rem', textDecoration: 'none',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                  opacity: inView ? 1 : 0,
                  transitionDelay: (0.2 + i * 0.07) + 's',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,209,255,0.4)'; e.currentTarget.style.background = '#21262D'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#30363D'; e.currentTarget.style.background = '#1C2128'; }}
              >
                <div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#484F58', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#E6EDF3', fontWeight: 500 }}>{c.value}</div>
                </div>
                <span style={{ color: '#4FD1FF', fontSize: '0.9rem', opacity: 0.7 }}>&#8599;</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #21262D',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.5s',
        }}>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.875rem', color: '#E6EDF3', fontWeight: 600 }}>
            PS<span style={{ color: '#4FD1FF' }}>.</span>
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#484F58' }}>
            Paarth Srivastava &mdash; Pune, India
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#484F58' }}>
            &copy; 2025
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          #contact .container > div:first-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
