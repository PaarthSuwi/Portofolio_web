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

const experiences = [
  {
    role: 'Graduate Trainee Engineer',
    company: 'Bajaj Auto Ltd.',
    division: 'M&AT Division',
    period: 'Jan 2026 — Present',
    type: 'Full-time',
    accent: '#4FD1FF',
    points: [
      'Programming and integrating FANUC and MELFA industrial robots',
      'Building LLM-powered agents for CAD analysis and automation workflows',
      'Developing digital twin simulations for manufacturing process optimization',
      'Collaborating with cross-functional teams on production line automation',
    ],
    tags: ['FANUC', 'MELFA', 'LLM Agents', 'Digital Twins', 'PLC'],
  },
  {
    role: 'Formula Student Team Captain',
    company: 'Wrench Wielders Racing',
    division: 'SIT Pune',
    period: '2023 — 2025',
    type: 'Competition',
    accent: '#FF8A3D',
    points: [
      'Led a 30+ member team in designing and building a Formula Student race car',
      'Managed technical and business presentation documentation',
      'Achieved Top 15/75+ at SUPRA SAE India 2025 and Top 10 at Formula Bharat 2025',
      'Oversaw suspension, chassis, and powertrain systems engineering',
    ],
    tags: ['Team Leadership', 'SolidWorks', 'Fusion 360', 'ADAMS', 'Vehicle Dynamics'],
  },
  {
    role: 'Freelance Engineer',
    company: 'Independent',
    division: 'Remote',
    period: 'Jun 2018 — Sep 2024',
    type: 'Freelance',
    accent: '#3FB950',
    points: [
      'Delivered automation and robotics solutions for small-scale clients',
      'Built computer vision applications using OpenCV and MediaPipe',
      'Developed custom ROS2 packages for motion control and perception',
      'Designed and prototyped mechanical systems using CAD tools',
    ],
    tags: ['ROS2', 'OpenCV', 'Python', 'CAD', 'MediaPipe'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);

  const exp = experiences[active];

  return (
    <section id='experience' style={{ background: '#0D1117', padding: '5rem 0', borderTop: '1px solid #21262D' }}>
      <div className='container' ref={ref}>
        {/* Header */}
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          marginBottom: '3rem',
        }}>
          <div className='section-label'>Experience</div>
          <h2 className='section-title'>Where I have worked</h2>
          <p style={{ color: '#8B949E', fontSize: '1rem', maxWidth: '480px' }}>
            From industrial robot programming to formula racing — real-world engineering experience.
          </p>
        </div>

        {/* Layout */}
        <div style={{
          display: 'grid', gridTemplateColumns: '220px 1fr', gap: '0',
          background: '#30363D', border: '1px solid #30363D', borderRadius: '8px', overflow: 'hidden',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
        }}>
          {/* Tab list */}
          <div style={{ background: '#161B22', borderRight: '1px solid #30363D' }}>
            {experiences.map((e, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: active === i ? '#1C2128' : 'transparent',
                border: 'none', borderLeft: active === i ? '2px solid ' + e.accent : '2px solid transparent',
                padding: '1rem 1.25rem', cursor: 'pointer',
                borderBottom: i < experiences.length - 1 ? '1px solid #21262D' : 'none',
                transition: 'background 0.2s ease, border-color 0.2s ease',
              }}>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem', fontWeight: 600, color: active === i ? '#E6EDF3' : '#8B949E', marginBottom: '0.15rem', transition: 'color 0.2s ease' }}>{e.company}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: active === i ? e.accent : '#484F58', transition: 'color 0.2s ease' }}>{e.type}</div>
              </button>
            ))}
          </div>

          {/* Content pane */}
          <div style={{ background: '#161B22', padding: '1.75rem 2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#E6EDF3', marginBottom: '0.2rem' }}>{exp.role}</h3>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: exp.accent, fontWeight: 500 }}>{exp.company}</span>
                <span style={{ color: '#484F58', margin: '0 0.4rem' }}>·</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#8B949E' }}>{exp.division}</span>
              </div>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#484F58', padding: '0.2rem 0.6rem', background: '#0D1117', border: '1px solid #21262D', borderRadius: '4px', whiteSpace: 'nowrap' }}>{exp.period}</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0' }}>
              {exp.points.map((pt, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', alignItems: 'flex-start' }}>
                  <span style={{ color: exp.accent, marginTop: '0.3rem', fontSize: '0.6rem', flexShrink: 0 }}>&#9654;</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#8B949E', lineHeight: 1.6 }}>{pt}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid #21262D', paddingTop: '1rem' }}>
              {exp.tags.map(tag => (
                <span key={tag} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', padding: '0.2rem 0.55rem', borderRadius: '3px', background: '#0D1117', border: '1px solid #30363D', color: '#8B949E' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #experience .container > div:last-child { grid-template-columns: 1fr !important; }
          #experience .container > div:last-child > div:first-child { display: flex !important; overflow-x: auto; border-right: none !important; border-bottom: 1px solid #30363D; }
          #experience .container > div:last-child > div:first-child > button { flex-shrink: 0; border-left: none !important; border-bottom: 2px solid transparent; }
        }
      `}</style>
    </section>
  );
}
