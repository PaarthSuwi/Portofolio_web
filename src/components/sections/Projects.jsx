import { useState } from 'react'

const projects = [
  {
    title: 'Gesture-Controlled Robotic Arm Simulator',
    category: 'Robotics Software',
    color: '#6c63ff',
    tags: ['ROS2', 'URDF', 'MediaPipe', 'Python'],
    description: 'Six-gesture MediaPipe fingertip system drives a URDF robotic arm in ROS2 for sim-validated contactless control. Multi-frame debouncing reduces false activations.',
    highlights: ['ROS2 integration with URDF model', 'MediaPipe hand landmark detection', 'Multi-frame gesture debouncing', 'Sim-validated control pipeline'],
    type: 'Academic / Personal',
  },
  {
    title: 'Human-Motion Controlled Dobot Magician',
    category: 'Computer Vision',
    color: '#00d4aa',
    tags: ['ROS2', 'OpenCV', 'MediaPipe', 'IK'],
    description: 'Real-time body-to-joint mapping using body landmarks and custom IK to mirror operator motion to robot joint angles naturally.',
    highlights: ['Real-time pose estimation', 'Custom Inverse Kinematics solver', 'Body landmark-to-joint mapping', 'Natural motion mirroring'],
    type: 'Academic',
  },
  {
    title: 'CAD Analyzer & Schematic Checker Agents',
    category: 'AI & LLM Agents',
    color: '#ff6b9d',
    tags: ['LLM', 'Python', 'OCR', 'Graph Analysis'],
    description: 'Deployed at Bajaj Auto: OCR extracts drafting annotations for IS standard checks; graph tracing detects open circuits and mismatches in schematics.',
    highlights: ['Production deployment at Bajaj Auto', 'OCR-based annotation extraction', 'Graph-based circuit validation', 'IS standard compliance checking'],
    type: 'Professional',
  },
  {
    title: 'Trajectory Optimization — 4-DOF Manipulator',
    category: 'Simulation',
    color: '#ffa94d',
    tags: ['MATLAB', 'Simulink', 'Simscape', 'PID'],
    description: 'Benchmarked A*, RRT, and Dijkstra path planning on a CAD-to-sim framework; PID tuning validated against kinematics.',
    highlights: ['A*, RRT, Dijkstra comparison', 'CAD-to-simulation workflow', 'PID controller tuning', 'Kinematic validation'],
    type: 'Academic',
  },
]

const categories = ['All', 'Robotics Software', 'Computer Vision', 'AI & LLM Agents', 'Simulation']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-subtitle">Key projects demonstrating my technical capabilities</p>
        <div className="section-divider" />

        {/* Filter buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              style={{
                padding: '0.4rem 1rem',
                background: filter === cat ? 'linear-gradient(135deg,#6c63ff,#00d4aa)' : 'transparent',
                border: filter === cat ? 'none' : '1px solid rgba(108,99,255,0.3)',
                borderRadius: '20px', color: filter === cat ? 'white' : '#9999bb',
                fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filtered.map(project => (
            <div key={project.title}
              style={{ background: 'var(--bg-card)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', transition: 'all 0.25s', display: 'flex', flexDirection: 'column' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = project.color + '55'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${project.color}20` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
              
              {/* Top bar */}
              <div style={{ height: '4px', background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }} />
              
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <span style={{ padding: '0.25rem 0.7rem', background: project.color + '20', borderRadius: '4px', color: project.color, fontSize: '0.75rem', fontWeight: 600 }}>{project.category}</span>
                  <span style={{ fontSize: '0.75rem', color: '#555', padding: '0.25rem 0.6rem', background: 'rgba(255,255,255,0.04)', borderRadius: '4px' }}>{project.type}</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '0.8rem', lineHeight: 1.4 }}>{project.title}</h3>
                <p style={{ color: '#9999bb', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>{project.description}</p>

                {/* Highlights */}
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.2rem' }}>
                  {project.highlights.map(h => (
                    <li key={h} style={{ display: 'flex', gap: '0.5rem', color: '#7777aa', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
                      <span style={{ color: project.color }}>✓</span>{h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: '#7777aa', fontSize: '0.78rem', border: '1px solid rgba(255,255,255,0.08)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://github.com/PaarthSuwi" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 2rem', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '10px', color: '#6c63ff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.2)'; e.currentTarget.style.borderColor = '#6c63ff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.3)' }}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
