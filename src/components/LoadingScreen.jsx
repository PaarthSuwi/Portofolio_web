import { useEffect, useState } from 'react'

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = [
    'INITIALIZING SYSTEMS...',
    'LOADING 3D ENVIRONMENT...',
    'CALIBRATING SENSORS...',
    'CONNECTING TO NETWORK...',
    'SYSTEM ONLINE',
  ]

  useEffect(() => {
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 8 + 2
      if (p >= 100) {
        p = 100
        setProgress(100)
        clearInterval(interval)
        setTimeout(() => onFinish(), 800)
      } else {
        setProgress(Math.min(p, 100))
        setPhase(Math.floor((p / 100) * (phases.length - 1)))
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Orbitron, monospace', userSelect: 'none' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: '#444', marginBottom: '0.5rem' }}>PAARTH SRIVASTAVA</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '0.15em', background: 'linear-gradient(90deg, #00f0ff, #ef008f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>PORTFOLIO</div>
        <div style={{ fontSize: '0.55rem', letterSpacing: '0.4em', color: '#333', marginTop: '0.3rem' }}>ROBOTICS & AUTOMATION</div>
      </div>

      <div style={{ width: '300px', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#555' }}>LOADING</span>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#00f0ff' }}>{Math.round(progress)}%</span>
        </div>
        <div style={{ height: '2px', background: '#111', borderRadius: '1px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: progress + '%', background: 'linear-gradient(90deg, #00f0ff, #ef008f)', transition: 'width 0.1s ease', boxShadow: '0 0 10px #00f0ff88' }} />
        </div>
      </div>

      <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: '#444', height: '1.2em', textAlign: 'center' }}>
        {phases[phase]}
      </div>

      <div style={{ position: 'absolute', bottom: '2rem', fontSize: '0.5rem', letterSpacing: '0.2em', color: '#222' }}>
        v1.0.0 // REACT + THREE.JS
      </div>
    </div>
  )
}
