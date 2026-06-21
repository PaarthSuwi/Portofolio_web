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

const projects = [
  {
    title: 'Gesture-Controlled Robotic Arm',
    desc: 'Real-time hand gesture recognition system using MediaPipe to control a 6-DOF robotic arm. Achieves sub-100ms latency for responsive teleoperation.',
    tags: ['Python', 'MediaPipe', 'ROS2', 'OpenCV', 'Kinematics'],
    category: 'Robotics',
    accent: '#4FD1FF',
    year: '2024',
  },
  {
    title: 'Human-Motion Controlled Dobot',
    desc: 'Full-body pose estimation mapped to Dobot Magician arm movements using skeletal tracking. Enables intuitive human-robot interaction for assembly tasks.',
    tags: ['MediaPipe', 'Python', 'Dobot SDK', 'Pose Estimation'],
    category: 'Computer Vision',
    accent: '#FF8A3D',
    year: '2024',
  },
  {
    title: 'CAD Analyzer Agents',
    desc: 'Multi-agent LLM system that analyzes SolidWorks CAD files, extracts design intent, identifies manufacturing constraints, and generates design reports autonomously.',
    tags: ['Python', 'LangChain', 'LLM Agents', 'SolidWorks API', 'CrewAI'],
    category: 'AI / LLM',
    accent: '#3FB950',
    year: '2025',
  },
  {
    title: 'Trajectory Optimization 4-DOF',
    desc: 'MATLAB-based trajectory planning and optimization for a 4-DOF robotic manipulator using inverse kinematics and Simulink simulation environment.',
    tags: ['MATLAB', 'Simulink', 'Inverse Kinematics', 'Trajectory Planning'],
    category: 'Simulation',
    accent: '#8B949E',
    year: '2023',
  },
];

const categories = ['All', 'Robotics', 'Computer Vision', 'AI / LLM', 'Simulation'];

export default function Projects() {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id='projects' style={{ background: '#161B22', padding: '5rem 0', borderTop: '1px solid #21262D' }}>
      <div className='container' ref={ref}>
        {/* Header */}
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          marginBottom: '2.5rem',
        }}>
          <div className='section-label'>Projects</div>
          <h2 className='section-title'>Selected Work</h2>
          <p style={{ color: '#8B949E', fontSize: '1rem', maxWidth: '480px' }}>
            Robotics, vision, and intelligent agent systems built from scratch.
          </p>
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2.25rem',
          opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.1s',
        }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              background: filter === cat ? '#0D1117' : 'transparent',
              border: '1px solid ' + (filter === cat ? '#4FD1FF' : '#30363D'),
              color: filter === cat ? '#4FD1FF' : '#8B949E',
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
              padding: '0.3rem 0.75rem', borderRadius: '4px', cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#30363D', borderRadius: '8px', overflow: 'hidden', border: '1px solid #30363D' }}>
          {filtered.map((proj, i) => (
            <div key={proj.title} style={{
              background: '#161B22', padding: '1.75rem',
              opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(15px)',
              transition: 'opacity 0.5s ease ' + (0.15 + i * 0.1) + 's, transform 0.5s ease ' + (0.15 + i * 0.1) + 's, background 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1C2128'}
            onMouseLeave={e => e.currentTarget.style.background = '#161B22'}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#484F58', padding: '0.15rem 0.5rem', background: '#0D1117', border: '1px solid #21262D', borderRadius: '3px' }}>{proj.year}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: proj.accent, padding: '0.15rem 0.5rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(0,0,0,0.5)', borderRadius: '3px' }}>{proj.category}</span>
              </div>

              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#E6EDF3', marginBottom: '0.6rem', lineHeight: 1.3 }}>{proj.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#8B949E', lineHeight: 1.65, marginBottom: '1.25rem' }}>{proj.desc}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', borderTop: '1px solid #21262D', paddingTop: '0.875rem' }}>
                {proj.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.67rem', padding: '0.15rem 0.45rem', borderRadius: '3px', background: '#0D1117', border: '1px solid #30363D', color: '#484F58' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#484F58', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem' }}>
            No projects in this category
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #projects .container > div:nth-child(4) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
