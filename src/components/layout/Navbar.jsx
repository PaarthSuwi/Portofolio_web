import { useState, useEffect } from 'react';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const current = sections.reverse().find(s => s.getBoundingClientRect().top <= 120);
      setActiveSection(current ? current.id : '');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(13,17,23,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #30363D' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <nav style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#E6EDF3', letterSpacing: '-0.01em' }}>
            PS
            <span style={{ color: '#4FD1FF', marginLeft: '2px' }}>.</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0 }} className='nav-desktop'>
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: activeSection === link.id ? 500 : 400,
                  color: activeSection === link.id ? '#4FD1FF' : '#8B949E',
                  padding: '0.375rem 0.75rem', borderRadius: '5px',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <span style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '16px', height: '1.5px', background: '#4FD1FF', borderRadius: '2px', display: 'block' }} />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('contact')}
          className='nav-desktop'
          style={{
            background: 'transparent', border: '1px solid #30363D', color: '#E6EDF3',
            fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 500,
            padding: '0.4rem 1rem', borderRadius: '6px', cursor: 'pointer',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => { e.target.style.borderColor = '#4FD1FF'; e.target.style.color = '#4FD1FF'; }}
          onMouseLeave={e => { e.target.style.borderColor = '#30363D'; e.target.style.color = '#E6EDF3'; }}
        >
          Connect
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='nav-mobile'
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'none' }}
        >
          <svg width='22' height='22' viewBox='0 0 22 22' fill='none'>
            {menuOpen
              ? <path d='M4 4L18 18M18 4L4 18' stroke='#E6EDF3' strokeWidth='1.8' strokeLinecap='round'/>
              : (<>
                  <line x1='3' y1='6' x2='19' y2='6' stroke='#E6EDF3' strokeWidth='1.8' strokeLinecap='round'/>
                  <line x1='3' y1='11' x2='19' y2='11' stroke='#E6EDF3' strokeWidth='1.8' strokeLinecap='round'/>
                  <line x1='3' y1='16' x2='19' y2='16' stroke='#E6EDF3' strokeWidth='1.8' strokeLinecap='round'/>
                </>)}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#161B22', borderTop: '1px solid #30363D', padding: '1rem 2rem 1.5rem' }}>
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} style={{
              display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: activeSection === link.id ? 500 : 400,
              color: activeSection === link.id ? '#4FD1FF' : '#8B949E', padding: '0.6rem 0',
              borderBottom: '1px solid #21262D',
            }}>
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
