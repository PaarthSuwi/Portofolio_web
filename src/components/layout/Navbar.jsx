import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
    ]

export default function Navbar() {
      const [scrolled, setScrolled] = useState(false)
      const [menuOpen, setMenuOpen] = useState(false)
      const [active, setActive] = useState('')

  useEffect(() => {
          const onScroll = () => {
                    setScrolled(window.scrollY > 50)
                    const secs = navLinks.map(l => l.href.slice(1))
                    for (let i = secs.length - 1; i >= 0; i--) {
                                const el = document.getElementById(secs[i])
                                if (el && window.scrollY >= el.offsetTop - 120) { setActive(secs[i]); break }
                    }
          }
          window.addEventListener('scroll', onScroll)
          return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
          e.preventDefault(); setMenuOpen(false)
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const nav = {
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(10,10,15,0.93)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(108,99,255,0.15)' : '1px solid transparent',
          transition: 'all 0.3s ease',
  }

  return (
          <>
                <nav style={nav}>
                        <a href="#hero" onClick={e => go(e, '#hero')} style={{ fontWeight: 800, fontSize: '1.3rem', background: 'linear-gradient(90deg,#6c63ff,#00d4aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>PS</a>a>
                        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }} className="nav-desktop">
                            {navLinks.map(l => (
                          <li key={l.href}>
                                        <a href={l.href} onClick={e => go(e, l.href)} style={{ color: active === l.href.slice(1) ? '#6c63ff' : '#9999bb', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s', borderBottom: active === l.href.slice(1) ? '2px solid #6c63ff' : '2px solid transparent', paddingBottom: '2px' }}>{l.label}</a>a>
                          </li>li>
                        ))}
                        </ul>ul>
                        <a href="https://linkedin.com/in/paarth-srivastava" target="_blank" rel="noreferrer" className="nav-cta" style={{ padding: '0.45rem 1.1rem', background: 'linear-gradient(135deg,#6c63ff,#00d4aa)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Connect</a>a>
                        <button onClick={() => setMenuOpen(m => !m)} className="nav-ham" style={{ display: 'none', background: 'none', border: 'none', color: '#f0f0f8', fontSize: '1.5rem', cursor: 'pointer' }}>{menuOpen ? '\u2715' : '\u2630'}</button>button>
                </nav>nav>
              {menuOpen && (
                      <div style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999, background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(16px)', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(108,99,255,0.15)' }}>
                          {navLinks.map(l => <a key={l.href} href={l.href} onClick={e => go(e, l.href)} style={{ display: 'block', padding: '0.8rem 0', color: '#9999bb', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{l.label}</a>a>)}
                      </div>div>
                )}
                <style>{`@media(max-width:768px){.nav-desktop{display:none!important}.nav-cta{display:none!important}.nav-ham{display:block!important}}`}</style>style>
          </>>
        )
}</>
 
