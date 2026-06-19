import { useState } from 'react'
const zoneData = {
  about: { title: 'ABOUT ME', color: '#00f0ff', content: [{ label: 'Name', value: 'Paarth Srivastava' }, { label: 'Role', value: 'Robotics & Automation Student' }, { label: 'Focus', value: 'CAD, Control Systems, AI-driven Robotics' }, { label: 'Status', value: 'Active & Available' }, { label: 'Location', value: 'Earth // Internet' }], description: 'A driven engineer blending mechanical design with intelligent software to build solutions that bridge pure code and the physical world.' },
  skills: { title: 'TECH STACK', color: '#9d00ff', content: [{ label: 'CAD', value: 'SolidWorks, Fusion 360' }, { label: 'Programming', value: 'Python, C++, JavaScript' }, { label: 'Robotics', value: 'ROS2, Arduino, Raspberry Pi' }, { label: 'AI/ML', value: 'PyTorch, TensorFlow' }, { label: 'Web', value: 'React, Three.js, Vite' }], description: 'Equipped with a versatile stack spanning from low-level firmware to full-stack web and AI integration.' },
  projects: { title: 'PROJECTS', color: '#ef008f', content: [{ label: 'Robot Arm', value: 'AI vision-guided 6-DOF manipulator' }, { label: 'Portfolio', value: 'This interactive 3D site' }, { label: 'Autonomous RC', value: 'Self-driving model car with SLAM' }, { label: 'Control System', value: 'PID-based drone stabilizer' }, { label: 'ML Pipeline', value: 'Real-time object detection' }], description: 'From CAD-to-code pipelines to AI-powered robots, I build things that move, think, and interact with the real world.' },
  contact: { title: 'CONTACT', color: '#39ff14', content: [{ label: 'Email', value: 'paarthsuwi@gmail.com' }, { label: 'GitHub', value: 'github.com/PaarthSuwi' }, { label: 'LinkedIn', value: 'linkedin.com/in/paarthsuwi' }, { label: 'Status', value: 'Open to collaborations' }], description: 'Looking to connect on robotics projects, internships, or just cool engineering ideas.' },
}
export default function UI({ activeZone, onClose }) {
  if (!activeZone || !zoneData[activeZone]) return null
  const zone = zoneData[activeZone]
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }} onClick={onClose}>
      <div style={{ background: 'rgba(8,8,8,0.98)', border: '1px solid ' + zone.color + '44', borderTop: '3px solid ' + zone.color, borderRadius: '16px', padding: '2.5rem', maxWidth: '500px', width: '90vw', boxShadow: '0 0 60px ' + zone.color + '22, inset 0 0 20px ' + zone.color + '08', position: 'relative' }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: 'transparent', border: 'none', color: '#555', fontSize: '1.4rem', cursor: 'pointer', lineHeight: 1, padding: '0.2rem 0.5rem', borderRadius: '4px', transition: 'all 0.2s' }}>x</button>
        <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: '#444', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// ZONE_DATA.LOADED</p>
        <h2 style={{ fontFamily: 'Orbitron, monospace', fontSize: '1.8rem', fontWeight: 900, color: zone.color, letterSpacing: '0.08em', marginBottom: '1.5rem', margin: '0 0 1.5rem' }}>{zone.title}</h2>
        <div style={{ marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          {zone.content.map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.7rem 1rem', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', gap: '1rem' }}>
              <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>{item.label}</span>
              <span style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: '#d0d0d0', textAlign: 'right' }}>{item.value}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#666', lineHeight: 1.7, borderLeft: '2px solid ' + zone.color + '55', paddingLeft: '1rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>{zone.description}</p>
        <p style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: '#333', textAlign: 'center', letterSpacing: '0.15em', marginTop: '1rem' }}>[ CLICK OUTSIDE TO CLOSE ]</p>
      </div>
    </div>
  )
}
