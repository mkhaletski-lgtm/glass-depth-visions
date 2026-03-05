import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  shape: 'icosahedron' | 'octahedron' | 'dodecahedron';
  color: string;
  speed?: number;
}

function FloatingShape({ position, rotation = [0, 0, 0], scale = 1, shape, color, speed = 1 }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * speed;
      meshRef.current.rotation.y += 0.003 * speed;
      meshRef.current.position.x = position[0] + mouse.x * 0.3;
      meshRef.current.position.y = position[1] + mouse.y * 0.3;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'icosahedron':
        return new THREE.IcosahedronGeometry(1, 0);
      case 'octahedron':
        return new THREE.OctahedronGeometry(1, 0);
      case 'dodecahedron':
        return new THREE.DodecahedronGeometry(1, 0);
      default:
        return new THREE.IcosahedronGeometry(1, 0);
    }
  }, [shape]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale} geometry={geometry}>
        <MeshTransmissionMaterial
          color={color}
          thickness={0.5}
          roughness={0}
          transmission={0.95}
          ior={1.5}
          chromaticAberration={0.06}
          backside
          samples={16}
          resolution={256}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 20;
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) points.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#e84393" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#e84393" />
        
        <FloatingShape position={[-4, 2, -2]} shape="icosahedron" color="#e84393" scale={0.8} speed={0.5} />
        <FloatingShape position={[4, -1, -3]} shape="icosahedron" color="#9b59b6" scale={1} speed={0.7} />
        <FloatingShape position={[-3, -2, -4]} shape="octahedron" color="#e84393" scale={0.6} speed={0.6} />
        <FloatingShape position={[3, 2.5, -2]} shape="dodecahedron" color="#fd79a8" scale={0.5} speed={0.8} />
        <FloatingShape position={[0, -3, -5]} shape="dodecahedron" color="#9b59b6" scale={1.2} speed={0.4} />
        
        <Particles count={500} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
