export default function About() {
  const items = [
    { icon: '🤖', label: 'Industrial Robotics', desc: 'FANUC & MELFA programming, robot logic, path planning' },
    { icon: '🧠', label: 'AI & LLM Agents', desc: 'CAD Analyzer, Schematic Checker using OCR & graph analysis' },
    { icon: '👁', label: 'Computer Vision', desc: 'MediaPipe gesture recognition, pose estimation, OpenCV' },
    { icon: '🌐', label: 'Digital Twins', desc: 'Visual Components simulations, virtual commissioning' },
    { icon: '⚙️', label: 'Simulation & CAD', desc: 'MATLAB, Simulink, Simscape, FEA/CFD, SolidWorks, Fusion360' },
    { icon: '🏎️', label: 'Formula Student', desc: 'Team Captain leading 25+ members, SUPRA SAE Top 15/75+ teams' },
  ]

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="section-divider" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left - Bio */}
          <div>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg,#6c63ff,#00d4aa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem', boxShadow: '0 0 30px rgba(108,99,255,0.3)' }}>
              PS
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#f0f0f8' }}>
              Robotics & Automation Engineer
            </h3>

            <p style={{ color: '#9999bb', lineHeight: 1.8, marginBottom: '1rem' }}>
              I&apos;m a final-year B.Tech Robotics & Automation student at Symbiosis Institute of Technology, Pune, with hands-on experience spanning industrial automation, AI-driven systems, computer vision, and simulation engineering.
            </p>

            <p style={{ color: '#9999bb', lineHeight: 1.8, marginBottom: '1rem' }}>
              Currently working as a Graduate Trainee Engineer at <strong style={{ color: '#f0f0f8' }}>Bajaj Auto Ltd.</strong> (M&AT Division), where I engineer CAD analyzer agents using LLMs, program industrial robots, and build digital twin simulations for virtual commissioning.
            </p>

            <p style={{ color: '#9999bb', lineHeight: 1.8, marginBottom: '2rem' }}>
              Previously served as Team Captain of <strong style={{ color: '#f0f0f8' }}>Wrench Wielders Racing</strong>, leading 25+ members to a Top 15 finish at SUPRA SAE India 2025 out of 75+ teams.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { num: '3+', label: 'Years Experience' },
                { num: 'Top 15', label: 'SUPRA SAE 2025' },
                { num: '4+', label: 'Major Projects' },
                { num: '5+', label: 'Tech Domains' },
              ].map(s => (
                <div key={s.label} style={{ padding: '1rem', background: 'var(--bg-card)', borderRadius: '10px', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, background: 'linear-gradient(135deg,#6c63ff,#00d4aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.num}</div>
                  <div style={{ fontSize: '0.8rem', color: '#7777aa', marginTop: '0.2rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Expertise Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {items.map(item => (
              <div key={item.label} style={{ padding: '1.2rem', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border)', transition: 'border-color 0.2s, transform 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(108,99,255,0.5)'; e.currentTarget.style.transform='translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='none' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f0f0f8', marginBottom: '0.3rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.8rem', color: '#7777aa', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){#about .section-container > div{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>
    </section>
  )
}
