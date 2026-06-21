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

const skillGroups = [
  {
    category: 'Robotics & Automation',
    color: '#4FD1FF',
    skills: ['ROS2', 'FANUC Robotics', 'MELFA', 'Industrial Automation', 'PLC Programming', 'Workcell Integration'],
  },
  {
    category: 'Computer Vision',
    color: '#FF8A3D',
    skills: ['OpenCV', 'MediaPipe', 'Gesture Recognition', 'Real-time Detection', 'Depth Sensing', 'Image Processing'],
  },
  {
    category: 'Programming',
    color: '#3FB950',
    skills: ['Python', 'C++', 'C', 'MATLAB', 'JavaScript', 'Shell Scripting'],
  },
  {
    category: 'AI & LLM',
    color: '#8B949E',
    skills: ['LLM Agents', 'Tool-use Systems', 'CrewAI', 'LangChain', 'Prompt Engineering', 'Autonomous Agents'],
  },
  {
    category: 'Simulation & CAD',
    color: '#4FD1FF',
    skills: ['Simulink', 'Gazebo', 'SolidWorks', 'Fusion 360', 'Digital Twins', 'ADAMS'],
  },
  {
    category: 'Tools & Platforms',
    color: '#FF8A3D',
    skills: ['Git', 'Linux', 'Docker', 'VS Code', 'Figma', 'Vercel'],
  },
];

const certifications = [
  { name: 'Autodesk Fusion 360', issuer: 'Autodesk' },
  { name: 'SolidWorks CSWA', issuer: 'Dassault Systems' },
  { name: 'Figma UI/UX Design', issuer: 'Figma' },
  { name: 'DSA in C/C++', issuer: 'Coding Ninjas' },
];

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id='skills' style={{ background: '#161B22', padding: '5rem 0', borderTop: '1px solid #21262D' }}>
      <div className='container' ref={ref}>
        {/* Header */}
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          marginBottom: '3rem',
        }}>
          <div className='section-label'>Skills</div>
          <h2 className='section-title'>Technical Stack</h2>
          <p style={{ color: '#8B949E', fontSize: '1rem', maxWidth: '480px' }}>
            Tools, languages, and frameworks I use to build intelligent robotic systems.
          </p>
        </div>

        {/* Skill groups */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
          background: '#30363D', border: '1px solid #30363D', borderRadius: '8px', overflow: 'hidden',
          marginBottom: '3rem',
        }}>
          {skillGroups.map((group, gi) => (
            <div key={gi} style={{
              background: '#161B22', padding: '1.5rem',
              opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(15px)',
              transition: 'opacity 0.5s ease ' + (0.1 + gi * 0.07) + 's, transform 0.5s ease ' + (0.1 + gi * 0.07) + 's, background 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1C2128'}
            onMouseLeave={e => e.currentTarget.style.background = '#161B22'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: group.color, display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#E6EDF3' }}>{group.category}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
                    padding: '0.2rem 0.55rem', borderRadius: '3px',
                    background: '#0D1117', border: '1px solid #30363D',
                    color: '#8B949E',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{
          opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.4s',
        }}>
          <h3 style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 500,
            color: '#484F58', letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>Certifications</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {certifications.map((cert, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                background: '#0D1117', border: '1px solid #30363D', borderRadius: '6px',
                padding: '0.5rem 0.875rem',
              }}>
                <span style={{ color: '#3FB950', fontSize: '0.75rem' }}>&#10003;</span>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#E6EDF3', fontWeight: 500 }}>{cert.name}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#484F58' }}>{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
