import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars, Float, Text3D, Center, Environment, MeshDistortMaterial, Sphere, Box, Cylinder, Torus, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { gsap } from 'gsap'

// Island/Zone component
function Island({ position, color, label, onClick, zoneKey }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.15
    }
  })

  return (
    <group position={position}>
      {/* Island base */}
      <mesh
        ref={meshRef}
        onClick={() => onClick(zoneKey)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[2, 2.5, 0.5, 8]} />
        <meshStandardMaterial color={hovered ? '#ffffff' : color} roughness={0.3} metalness={0.4} />
      </mesh>
      {/* Top surface */}
      <mesh position={[0, 0.3, 0]} onClick={() => onClick(zoneKey)} castShadow>
        <cylinderGeometry args={[2, 2, 0.15, 8]} />
        <meshStandardMaterial color={hovered ? '#a8f0ff' : '#7ee8a2'} roughness={0.5} />
      </mesh>
      {/* Glow ring */}
      <mesh position={[0, -0.2, 0]}>
        <torusGeometry args={[2.4, 0.05, 8, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={hovered ? 3 : 1} />
      </mesh>
    </group>
  )
}

// Floating particles
function Particles() {
  const points = useRef()
  const positions = new Float32Array(500 * 3)
  for (let i = 0; i < 500 * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 40
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={500} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#88ccff" transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

// Orbiting rings
function OrbitRing({ radius, speed, color }) {
  const ringRef = useRef()
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed
      ringRef.current.rotation.x = Math.PI / 4
    }
  })
  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.02, 8, 64]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} transparent opacity={0.6} />
    </mesh>
  )
}

// Central glowing orb
function CentralOrb() {
  const orbRef = useRef()
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      orbRef.current.material.distort = 0.3 + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })
  return (
    <Sphere ref={orbRef} args={[1.2, 64, 64]} position={[0, 2, 0]}>
      <MeshDistortMaterial
        color="#4488ff"
        emissive="#2244ff"
        emissiveIntensity={0.8}
        distort={0.3}
        speed={2}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  )
}

// Decorative objects on islands
function IslandDecor({ position, type }) {
  const ref = useRef()
  useFrame(s => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.5
  })
  
  const decors = {
    about: (
      <mesh ref={ref} position={[0, 1.2, 0]}>
        <octahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#ff6b6b" emissive="#ff3333" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
    ),
    projects: (
      <mesh ref={ref} position={[0, 1.2, 0]}>
        <dodecahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#ffd93d" emissive="#ffaa00" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
    ),
    skills: (
      <mesh ref={ref} position={[0, 1.2, 0]}>
        <icosahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#6bcb77" emissive="#00aa44" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
    ),
    contact: (
      <mesh ref={ref} position={[0, 1.2, 0]}>
        <torusKnotGeometry args={[0.4, 0.15, 64, 8]} />
        <meshStandardMaterial color="#c77dff" emissive="#9900ff" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
    ),
  }
  return <group position={position}>{decors[type]}</group>
}

// Floating labels
function IslandLabel({ position, text }) {
  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
      <mesh position={[position[0], position[1] + 2.2, position[2]]}>
        <planeGeometry args={[2.5, 0.5]} />
        <meshBasicMaterial color="#000022" transparent opacity={0.7} />
      </mesh>
    </Float>
  )
}

export default function Scene({ onZoneClick }) {
  const { camera } = useThree()

  const zones = [
    { key: 'about', position: [-6, 0, 0], color: '#ff6b6b', label: 'ABOUT' },
    { key: 'projects', position: [6, 0, 0], color: '#ffd93d', label: 'PROJECTS' },
    { key: 'skills', position: [0, 0, -7], color: '#6bcb77', label: 'SKILLS' },
    { key: 'contact', position: [0, 0, 7], color: '#c77dff', label: 'CONTACT' },
  ]

  const handleZoneClick = (key) => {
    const zone = zones.find(z => z.key === key)
    if (zone) {
      gsap.to(camera.position, {
        x: zone.position[0] * 0.7,
        y: zone.position[1] + 4,
        z: zone.position[2] * 0.7 + 5,
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => onZoneClick(key)
      })
    }
  }

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow color="#ffffff" />
      <pointLight position={[0, 5, 0]} intensity={2} color="#4488ff" />
      <pointLight position={[-8, 3, 0]} intensity={1} color="#ff6b6b" />
      <pointLight position={[8, 3, 0]} intensity={1} color="#ffd93d" />
      <pointLight position={[0, 3, -8]} intensity={1} color="#6bcb77" />
      <pointLight position={[0, 3, 8]} intensity={1} color="#c77dff" />

      {/* Background */}
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0.5} fade speed={1} />
      <color attach="background" args={['#020b18']} />
      <fog attach="fog" args={['#020b18', 25, 60]} />

      {/* Central orb */}
      <CentralOrb />

      {/* Orbit rings */}
      <OrbitRing radius={4} speed={0.3} color="#4488ff" />
      <OrbitRing radius={6} speed={-0.2} color="#8844ff" />
      <OrbitRing radius={8} speed={0.1} color="#44aaff" />

      {/* Floating particles */}
      <Particles />

      {/* Islands */}
      {zones.map(zone => (
        <group key={zone.key}>
          <Island
            position={zone.position}
            color={zone.color}
            label={zone.label}
            onClick={handleZoneClick}
            zoneKey={zone.key}
          />
          <IslandDecor position={zone.position} type={zone.key} />
        </group>
      ))}

      {/* Ground plane */}
      <mesh position={[0, -3, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#020b18" transparent opacity={0} />
      </mesh>

      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        minDistance={5}
        maxDistance={30}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  )
}
