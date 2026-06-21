const skillGroups = [
  {
    title: 'Robotics & Control',
    color: '#6c63ff',
    skills: ['ROS2', 'Inverse Kinematics', 'Path Planning', 'PID Control', 'HRI', 'FANUC Robots', 'MELFA SCARA'],
  },
  {
    title: 'AI, Agents & CV',
    color: '#00d4aa',
    skills: ['LLM Agents', 'OpenCV', 'MediaPipe', 'Gesture Recognition', 'Pose Estimation', 'OCR', 'Graph Analysis'],
  },
  {
    title: 'Simulation & Digital Twins',
    color: '#ff6b9d',
    skills: ['MATLAB', 'Simulink', 'Simscape', 'Visual Components', 'FEA', 'CFD', 'Simufact'],
  },
  {
    title: 'Software & Tools',
    color: '#ffa94d',
    skills: ['Python', 'C/C++', 'React', 'HTML/CSS', 'Git', 'Vite', 'VS Code'],
  },
  {
    title: 'CAD & Design',
    color: '#74c0fc',
    skills: ['SolidWorks', 'Autodesk Fusion 360', 'CAD Modeling', '3D Printing', 'Figma UI/UX'],
  },
  {
    title: 'Certifications',
    color: '#69db7c',
    skills: ['Autodesk Fusion 360 Certified', 'SolidWorks Complete Design', 'Figma UI/UX Design', 'Mastering DSA in C/C++'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <p className="section-subtitle">Technologies, tools, and domains I work with</p>
        <div className="section-divider" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {skillGroups.map(group => (
            <div key={group.title} style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--border)', transition: 'border-color 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = group.color + '55'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                <div style={{ width: '4px', height: '20px', background: group.color, borderRadius: '2px' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f0f8' }}>{group.title}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{
                    padding: '0.3rem 0.8rem',
                    background: group.color + '15',
                    border: `1px solid ${group.color}33`,
                    borderRadius: '6px',
                    color: group.color,
                    fontSize: '0.8rem',
                    fontWeight: 500,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Interests */}
        <div style={{ marginTop: '3rem', padding: '2rem', background: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,212,170,0.08))', borderRadius: '16px', border: '1px solid rgba(108,99,255,0.2)' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '1rem' }}>Technical Interests</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
            {['Industrial Robotics', 'Robotics Software', 'Computer Vision', 'Simulation Systems', 'Digital Twins', 'Engineering Automation', 'Autonomous Systems', 'Human-Robot Interaction'].map(interest => (
              <span key={interest} style={{ padding: '0.4rem 1rem', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.25)', borderRadius: '20px', color: '#9999bb', fontSize: '0.85rem' }}>
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
