export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'radial-gradient(ellipse at 60% 50%, rgba(108,99,255,0.08) 0%, transparent 70%), #0a0a0f',
      paddingTop: '80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(108,99,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '800px' }}>
          
          {/* Status badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.3)', borderRadius: '20px', marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00d4aa', boxShadow: '0 0 8px #00d4aa', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#00d4aa', fontSize: '0.8rem', fontWeight: 500 }}>Open to Opportunities</span>
          </div>

          {/* Name */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            <span style={{ color: '#f0f0f8' }}>Hi, I&apos;m </span>
            <span style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Paarth</span>
            <br />
            <span style={{ color: '#f0f0f8' }}>Srivastava</span>
          </h1>

          {/* Tagline */}
          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#9999bb', marginBottom: '1.5rem', fontWeight: 400, lineHeight: 1.5 }}>
            Robotics &amp; Automation Engineer
          </p>

          {/* Specializations */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Industrial Robotics', 'AI & LLM Agents', 'Computer Vision', 'Digital Twins', 'Simulation'].map(s => (
              <span key={s} style={{ padding: '0.35rem 0.9rem', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.25)', borderRadius: '20px', color: '#9999bb', fontSize: '0.82rem' }}>{s}</span>
            ))}
          </div>

          {/* Bio */}
          <p style={{ fontSize: '1rem', color: '#7777aa', marginBottom: '2.5rem', lineHeight: 1.8, maxWidth: '600px' }}>
            B.Tech Robotics student at Symbiosis Institute of Technology. Currently a Graduate Trainee Engineer at Bajaj Auto Ltd., building LLM agents, programming FANUC &amp; MELFA robots, and creating digital twin simulations. Former Formula Student Team Captain.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}) }}
              style={{ padding: '0.8rem 2rem', background: 'linear-gradient(135deg,#6c63ff,#00d4aa)', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 8px 25px rgba(108,99,255,0.4)' }}
              onMouseLeave={e => { e.target.style.transform='none'; e.target.style.boxShadow='none' }}>
              View Projects
            </a>
            <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}) }}
              style={{ padding: '0.8rem 2rem', background: 'transparent', color: '#f0f0f8', borderRadius: '10px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(108,99,255,0.4)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.borderColor='#6c63ff'; e.target.style.background='rgba(108,99,255,0.1)' }}
              onMouseLeave={e => { e.target.style.borderColor='rgba(108,99,255,0.4)'; e.target.style.background='transparent' }}>
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="https://github.com/PaarthSuwi" target="_blank" rel="noreferrer" style={{ color: '#9999bb', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='#f0f0f8'} onMouseLeave={e => e.currentTarget.style.color='#9999bb'}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <span style={{ color: '#333' }}>|</span>
            <a href="https://linkedin.com/in/paarth-srivastava" target="_blank" rel="noreferrer" style={{ color: '#9999bb', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='#f0f0f8'} onMouseLeave={e => e.currentTarget.style.color='#9999bb'}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <span style={{ color: '#333' }}>|</span>
            <a href="mailto:paarth.srivastava777@gmail.com" style={{ color: '#9999bb', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='#f0f0f8'} onMouseLeave={e => e.currentTarget.style.color='#9999bb'}>
              paarth.srivastava777@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', color: '#444' }}>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #6c63ff, transparent)' }} />
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </section>
  )
}
