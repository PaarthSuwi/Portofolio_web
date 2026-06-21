const education = [
  {
    degree: 'B.Tech — Robotics & Automation',
    institution: 'Symbiosis Institute of Technology, Pune',
    period: 'Sep 2022 – 2026',
    color: '#6c63ff',
    highlights: ['Robotics', 'AI/ML', 'CAD', 'Sim-to-Real', 'Fabrication'],
    description: 'Comprehensive program covering industrial robotics, automation systems, artificial intelligence, computer vision, and mechanical engineering fundamentals.',
  },
  {
    degree: 'Higher Secondary — PCM + Computer Science',
    institution: 'Shree L. R. Tiwari College',
    period: 'Jun 2020 – 2022',
    color: '#00d4aa',
    highlights: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    description: 'Completed HSC with Physics, Chemistry, Mathematics and Computer Science, building strong analytical and technical foundations.',
  },
]

const achievements = [
  {
    icon: '🏎️',
    title: 'SUPRA SAE India 2025 — Top 15',
    desc: 'Secured a Top 15 finish out of 75+ teams, successfully completing the Endurance Event — one of the most demanding dynamic events, highlighting the vehicle reliability, performance, and team execution.',
    color: '#ffa94d',
  },
  {
    icon: '🏁',
    title: 'Formula Bharat 2025 — Top 10',
    desc: 'Qualified among the Top 10 teams at Formula Bharat 2025, demonstrating excellence in vehicle design, engineering, and technical evaluation.',
    color: '#69db7c',
  },
  {
    icon: '🔧',
    title: 'SUPRA SAE India 2024',
    desc: 'Participated in SUPRA SAE India 2024, contributing to the design, development, and validation of a Formula Student race car.',
    color: '#74c0fc',
  },
]

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <h2 className="section-title">Education & <span>Achievements</span></h2>
        <p className="section-subtitle">Academic background and competition achievements</p>
        <div className="section-divider" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* Education */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#6c63ff' }}>📚</span> Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px', border: `1px solid ${edu.color}33`, borderLeft: `4px solid ${edu.color}`, transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f0f8' }}>{edu.degree}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#7777aa' }}>{edu.period}</span>
                </div>
                <div style={{ color: edu.color, fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.7rem' }}>{edu.institution}</div>
                <p style={{ color: '#9999bb', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.8rem' }}>{edu.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {edu.highlights.map(h => (
                    <span key={h} style={{ padding: '0.2rem 0.7rem', background: edu.color + '15', border: `1px solid ${edu.color}33`, borderRadius: '4px', color: edu.color, fontSize: '0.78rem' }}>{h}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Certifications */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '1rem', marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#6c63ff' }}>🎓</span> Certifications
            </h3>
            {['Autodesk Fusion 360 Certified', 'SolidWorks Complete Design', 'Figma UI/UX Design', 'Mastering DSA in C/C++'].map(cert => (
              <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1rem', background: 'var(--bg-card)', borderRadius: '8px', marginBottom: '0.5rem', border: '1px solid var(--border)' }}>
                <span style={{ color: '#00d4aa', fontSize: '1rem' }}>✓</span>
                <span style={{ color: '#9999bb', fontSize: '0.9rem' }}>{cert}</span>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#6c63ff' }}>🏆</span> Achievements
            </h3>
            {achievements.map((ach, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px', border: `1px solid ${ach.color}33`, transition: 'transform 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = ach.color + '66' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = ach.color + '33' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>{ach.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '0.5rem' }}>{ach.title}</h4>
                    <p style={{ color: '#9999bb', fontSize: '0.88rem', lineHeight: 1.7 }}>{ach.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){#education .section-container > div:last-child{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>
    </section>
  )
}
