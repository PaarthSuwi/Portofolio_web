import { useRef, useEffect, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const expertise = [
  { label: 'Industrial Robotics', desc: 'FANUC & MELFA programming, workcell integration, PLC interfacing' },
  { label: 'Computer Vision', desc: 'MediaPipe, OpenCV, real-time perception pipelines' },
  { label: 'ROS2 & Simulation', desc: 'Robot operating system, Gazebo, digital twin environments' },
  { label: 'LLM Agents', desc: 'Tool-use agents, CAD analysis, autonomous reasoning systems' },
  { label: 'CAD & Fabrication', desc: 'SolidWorks, Fusion 360, mechanical design for Formula Student' },
  { label: 'Controls & MATLAB', desc: 'Trajectory optimization, Simulink modelling, 4-DOF systems' },
];

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '6+', label: 'Projects Shipped' },
  { value: 'Top 10', label: 'Formula Bharat 2025' },
  { value: 'Top 15', label: 'SUPRA SAE India 2025' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id='about' style={{ background: '#0D1117', padding: '5rem 0', borderTop: '1px solid #21262D' }}>
      <div className='container' ref={ref}>
        {/* Header */}
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          marginBottom: '3rem',
        }}>
          <div className='section-label'>About</div>
          <h2 className='section-title'>Who I am</h2>
          <p style={{ color: '#8B949E', fontSize: '1rem', maxWidth: '600px', lineHeight: 1.7 }}>
            B.Tech Robotics &amp; Automation student at Symbiosis Institute of Technology, Pune.
            Currently a Graduate Trainee Engineer at Bajaj Auto Ltd., working in the Manufacturing &amp; Automation Technology division.
            Former Formula Student Team Captain leading Wrench Wielders Racing.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px',
          background: '#21262D', border: '1px solid #21262D', borderRadius: '8px',
          overflow: 'hidden', marginBottom: '3rem',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: '#161B22', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#4FD1FF', marginBottom: '0.25rem' }}>{s.value}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#8B949E' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Expertise grid */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.875rem', fontWeight: 500,
            color: '#8B949E', letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '1.25rem',
            opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.2s',
          }}>Core Expertise</h3>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
            background: '#21262D', border: '1px solid #21262D', borderRadius: '8px', overflow: 'hidden',
          }}>
            {expertise.map((item, i) => (
              <div key={i} style={{
                background: '#161B22', padding: '1.25rem',
                transition: 'background 0.2s ease',
                opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(15px)',
                transitionDelay: (0.15 + i * 0.07) + 's',
                transitionProperty: 'opacity, transform',
                transitionDuration: '0.5s',
                transitionTimingFunction: 'ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1C2128'}
              onMouseLeave={e => e.currentTarget.style.background = '#161B22'}
              >
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#E6EDF3', marginBottom: '0.4rem' }}>{item.label}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#8B949E', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:nth-child(2) { grid-template-columns: repeat(2,1fr) !important; }
          #about .container > div:nth-child(3) > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
