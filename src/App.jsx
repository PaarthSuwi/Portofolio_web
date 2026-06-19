import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useRef } from 'react'
import Scene from './components/Scene'
import UI from './components/UI'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [activeZone, setActiveZone] = useState(null)

  return (
    <div className="app">
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}
      <Canvas
        camera={{ position: [0, 5, 12], fov: 60 }}
        gl={{ antialias: true }}
        shadows
        style={{ width: '100vw', height: '100vh' }}
      >
        <Suspense fallback={null}>
          <Scene onZoneClick={setActiveZone} />
        </Suspense>
      </Canvas>
      <UI activeZone={activeZone} onClose={() => setActiveZone(null)} />
    </div>
  )
}
