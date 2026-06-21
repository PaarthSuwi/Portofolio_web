import { useState } from 'react'

const experiences = [
  {
    company: 'Bajaj Auto Ltd.',
    role: 'Graduate Trainee Engineer — M&AT Division',
    period: 'Jan 2026 – Present',
    type: 'Full-time',
    color: '#6c63ff',
    bullets: [
      'Engineered CAD Analyzer & Schematic Checker Agents using LLM, OCR, and graph-based validation pipelines for automated drawing and schematic verification.',
      'Programmed FANUC articulated and MELFA SCARA robots, configured robot logic, and built Visual Components digital twins for reachability, cycle-time analysis, and virtual commissioning.',
      'Developed a computer vision robot-interaction PoC using MediaPipe gesture recognition and 24V I/O triggering for contactless robotic control.',
    ],
    tags: ['LLM Agents', 'FANUC', 'MELFA', 'Visual Components', 'MediaPipe', 'Python'],
  },
  {
    company: 'Bajaj Auto Ltd.',
    role: 'Intern — M&AT Division',
    period: 'Jan 2026 – Jul 2026',
    type: 'Internship',
    color: '#6c63ff',
    bullets: [
      'Contributed to CAD analysis automation and robot programming initiatives.',
      'Worked on digital twin development and simulation validation workflows.',
    ],
    tags: ['Internship', 'CAD Analysis', 'Robotics', 'Simulation'],
  },
  {
    company: 'Wrench Wielders Racing — Formula Student',
    role: 'Team Captain (Design Trainee → Co-Head → Head → Captain)',
    period: 'Feb 2023 – Nov 2025',
    type: 'Leadership',
    color: '#00d4aa',
    bullets: [
      'Led 25+ members across mechanical and software sub-teams; directed complete vehicle architecture overhaul via CAD/CFD/FEA.',
      'Managed sponsorships, budgets, and compliance for SUPRA SAE competitions.',
      'Achieved Top 15 finish out of 75+ teams at SUPRA SAE India 2025 (Endurance Event). Qualified Top 10 at Formula Bharat 2025.',
    ],
    tags: ['Team Leadership', 'CAD', 'CFD', 'FEA', 'SUPRA SAE', 'Formula Student'],
  },
  {
    company: 'Independent Consultant',
    role: 'Freelancer & Robotics Instructor',
    period: 'Jun 2018 – Sep 2024',
    type: 'Freelance',
    color: '#ffa94d',
    bullets: [
      'Collaborated with clients and small businesses across multiple domains: web development, graphic design, CAD-based product prototyping, and digital branding.',
      'Built websites using HTML/CSS/JSON, created 3D-print-ready CAD models, designed visual assets for branding and social media.',
      'Served as a Robotics Instructor, teaching fundamental and advanced robotics concepts.',
    ],
    tags: ['Web Dev', 'CAD', 'Graphic Design', 'Robotics Instructor', 'Freelance'],
  },
]

export default function Experience() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <h2 className="section-title">Professional <span>Experience</span></h2>
        <p className="section-subtitle">My professional journey and roles</p>
        <div className="section-divider" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'start' }}>
          {/* Timeline */}
          <div style={{ position: 'sticky', top: '100px' }}>
            {experiences.map((exp, i) => (
              <button key={i} onClick={() => setExpanded(i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '1rem 1.2rem',
                  background: expanded === i ? 'rgba(108,99,255,0.1)' : 'transparent',
                  border: expanded === i ? `1px solid ${exp.color}44` : '1px solid transparent',
                  borderLeft: `3px solid ${expanded === i ? exp.color : 'transparent'}`,
                  borderRadius: '8px', cursor: 'pointer', marginBottom: '0.5rem',
                  transition: 'all 0.2s',
                }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: expanded === i ? '#f0f0f8' : '#9999bb' }}>{exp.company}</div>
                <div style={{ fontSize: '0.78rem', color: expanded === i ? exp.color : '#555', marginTop: '0.2rem' }}>{exp.period}</div>
              </button>
            ))}
          </div>

          {/* Details */}
          <div style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '2rem', border: `1px solid ${experiences[expanded].color}33` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f0f0f8' }}>{experiences[expanded].role}</h3>
                <div style={{ color: experiences[expanded].color, fontWeight: 600, marginTop: '0.2rem' }}>{experiences[expanded].company}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ padding: '0.3rem 0.8rem', background: experiences[expanded].color + '20', border: `1px solid ${experiences[expanded].color}44`, borderRadius: '20px', color: experiences[expanded].color, fontSize: '0.78rem', fontWeight: 500 }}>{experiences[expanded].type}</span>
                <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', color: '#9999bb', fontSize: '0.78rem' }}>{experiences[expanded].period}</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0' }}>
              {experiences[expanded].bullets.map((bullet, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', color: '#9999bb', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  <span style={{ color: experiences[expanded].color, marginTop: '0.3rem', flexShrink: 0 }}>▶</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {experiences[expanded].tags.map(tag => (
                <span key={tag} style={{ padding: '0.25rem 0.7rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', color: '#7777aa', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.08)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){#experience .section-container > div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
