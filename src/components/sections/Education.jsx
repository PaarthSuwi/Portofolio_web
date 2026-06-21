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

const achievements = [
  { place: 'Top 15 / 75+', event: 'SUPRA SAE India 2025', detail: 'Dynamic & static events', accent: '#FF8A3D' },
  { place: 'Top 10', event: 'Formula Bharat 2025', detail: 'Engineering design & business presentation', accent: '#4FD1FF' },
];

const certs = [
  { name: 'Autodesk Fusion 360', issuer: 'Autodesk' },
  { name: 'SolidWorks CSWA', issuer: 'Dassault Systems' },
  { name: 'Figma UI/UX Design', issuer: 'Figma' },
  { name: 'DSA in C/C++', issuer: 'Coding Ninjas' },
];

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id='education' style={{ background: '#0D1117', padding: '5rem 0', borderTop: '1px solid #21262D' }}>
      <div className='container' ref={ref}>
        {/* Header */}
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          marginBottom: '3rem',
        }}>
          <div className='section-label'>Education</div>
          <h2 className='section-title'>Academic Background</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {/* Degree */}
          <div style={{
            background: '#161B22', border: '1px solid #30363D', borderRadius: '8px', padding: '1.75rem',
            opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#484F58', padding: '0.15rem 0.5rem', background: '#0D1117', border: '1px solid #21262D', borderRadius: '3px' }}>2022 — 2026</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#3FB950' }}>In Progress</span>
            </div>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#E6EDF3', marginBottom: '0.3rem' }}>
              B.Tech Robotics &amp; Automation Engineering
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#4FD1FF', marginBottom: '0.75rem' }}>
              Symbiosis Institute of Technology, Pune
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#8B949E', lineHeight: 1.6 }}>
              Specializing in robotics systems, automation engineering, computer vision, and intelligent control systems.
              Active member of Formula Student team and robotics lab.
            </p>
          </div>

          {/* Achievements */}
          <div style={{
            background: '#161B22', border: '1px solid #30363D', borderRadius: '8px', padding: '1.75rem',
            opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
          }}>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#8B949E', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Competition Achievements</h3>
            {achievements.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 700, color: a.accent, minWidth: '72px', lineHeight: 1.2 }}>{a.place}</div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.87rem', color: '#E6EDF3', fontWeight: 500, marginBottom: '0.2rem' }}>{a.event}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#8B949E' }}>{a.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{
          marginTop: '1.5rem',
          opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.35s',
        }}>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#484F58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Certifications</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {certs.map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                background: '#161B22', border: '1px solid #30363D', borderRadius: '6px', padding: '0.5rem 0.875rem',
              }}>
                <span style={{ color: '#3FB950', fontSize: '0.75rem' }}>&#10003;</span>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#E6EDF3', fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.67rem', color: '#484F58' }}>{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #education .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
