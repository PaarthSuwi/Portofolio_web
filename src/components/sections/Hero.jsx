import { useEffect, useState } from 'react';

const specializations = ['Robotics', 'Computer Vision', 'Autonomous Systems', 'LLM Agents'];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIdx(prev => (prev + 1) % specializations.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='hero' style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: '#0D1117', position: 'relative', overflow: 'hidden',
      paddingTop: '80px',
    }}>
      {/* Subtle grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(48,54,61,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(48,54,61,0.4) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 70% 70% at 20% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 20% 50%, black 30%, transparent 100%)',
      }} />

      <div className='container' style={{ position: 'relative', paddingTop: '2rem', paddingBottom: '4rem' }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(63,185,80,0.08)', border: '1px solid rgba(63,185,80,0.25)',
          borderRadius: '100px', padding: '0.3rem 0.75rem',
          marginBottom: '2.5rem',
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(10px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3FB950', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#3FB950', letterSpacing: '0.05em' }}>Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '0.5rem',
          color: '#E6EDF3',
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
        }}>
          Paarth
          <br />
          <span style={{ color: '#8B949E', fontWeight: 300 }}>Srivastava</span>
        </h1>

        {/* Rotating specialty */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem',
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
        }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: '#8B949E', fontWeight: 400 }}>
            Robotics &amp; Automation Engineer
          </span>
          <span style={{ color: '#30363D' }}>—</span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem',
            color: '#4FD1FF', padding: '0.2rem 0.6rem',
            background: 'rgba(79,209,255,0.06)', border: '1px solid rgba(79,209,255,0.2)',
            borderRadius: '4px',
            transition: 'opacity 0.4s ease',
          }}>
            {specializations[lineIdx]}
          </span>
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          color: '#8B949E', lineHeight: 1.65, maxWidth: '520px', marginBottom: '2.5rem',
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
        }}>
          Building intelligent systems that connect software, perception, and real-world automation.
          Currently at <span style={{ color: '#E6EDF3', fontWeight: 500 }}>Bajaj Auto Ltd.</span> — M&amp;AT Division.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem',
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
        }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#4FD1FF', color: '#0D1117', border: 'none',
              fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600,
              padding: '0.65rem 1.4rem', borderRadius: '6px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              transition: 'opacity 0.15s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View Projects
            <span style={{ fontSize: '0.8rem' }}>&#8594;</span>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent', color: '#E6EDF3', border: '1px solid #30363D',
              fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 500,
              padding: '0.65rem 1.4rem', borderRadius: '6px', cursor: 'pointer',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,209,255,0.5)'; e.currentTarget.style.color = '#4FD1FF'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#30363D'; e.currentTarget.style.color = '#E6EDF3'; }}
          >
            Get In Touch
          </button>
                    <a
                                  href='mailto:paarth.srivastava777@gmail.com?subject=Resume%20Request&body=Hi%20Paarth%2C%20I%20would%20like%20to%20receive%20your%20resume.'
                                  target='_blank' rel='noreferrer'
                                  style={{
                                                  background: 'transparent', color: '#3FB950', border: '1px solid rgba(63,185,80,0.35)',
                                                  fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 500,
                                                  padding: '0.65rem 1.4rem', borderRadius: '6px', cursor: 'pointer',
                                                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                                  transition: 'border-color 0.2s ease, background 0.2s ease',
                                  }}
                                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#3FB950'; e.currentTarget.style.background = 'rgba(63,185,80,0.06)'; }}
                                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(63,185,80,0.35)'; e.currentTarget.style.background = 'transparent'; }}
                                >
                                &#8595; Resume
                    </a>
        </div>

        {/* Social links */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1.5rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s',
        }}>
          {[
            { href: 'https://github.com/PaarthSuwi', label: 'GitHub' },
            { href: 'https://linkedin.com/in/paarth-srivastava-65806623b', label: 'LinkedIn' },
            { href: 'mailto:paarth.srivastava777@gmail.com', label: 'paarth.srivastava777@gmail.com' },
          ].map(link => (
            <a key={link.href} href={link.href} target='_blank' rel='noreferrer'
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#484F58', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.target.style.color = '#8B949E'}
              onMouseLeave={e => e.target.style.color = '#484F58'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right side decoration */}
      <div style={{
        position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem',
        opacity: 0.35, pointerEvents: 'none',
      }} className='hero-deco'>
        {['ROS2', 'FANUC', 'MELFA', 'OpenCV', 'MATLAB', 'Python'].map((t, i) => (
          <span key={t} style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#8B949E',
            padding: '0.2rem 0.5rem', border: '1px solid #21262D', borderRadius: '3px',
            background: '#161B22',
            animation: 'float 3s ease-in-out infinite',
            animationDelay: i * 0.2 + 's',
          }}>
            {t}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @media (max-width: 768px) {
          .hero-deco { display: none !important; }
        }
      `}</style>
    </section>
  );
}
