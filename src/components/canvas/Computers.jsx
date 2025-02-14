/* eslint-disable react/no-unknown-property */
import { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Create a shared material to ensure consistency
const createSphereMaterial = () => new THREE.MeshStandardMaterial({
  color: 'rgb(16, 13, 37)',
  emissive: 'rgb(16, 13, 37)',
  emissiveIntensity: 0.5,
  transparent: true,
  opacity: 0.8,
  metalness: 0.2,
  roughness: 0.8,
});

const LoadingFallback = () => {
  return null; // Don't show anything during loading to prevent the solid sphere flash
};

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./planet/scene.gltf', true);
  const sphereMaterial = createSphereMaterial();

  useEffect(() => {
    if (computer?.scene) {
      computer.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = sphereMaterial;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [computer, sphereMaterial]);

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight 
        position={[10, 10, 10]}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.5}
        castShadow
      />
      
      {/* Add a plane to receive shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.4} />
      </mesh>

      <mesh castShadow receiveShadow>
        <primitive
          object={computer.scene}
          scale={isMobile ? 3 : 3.5}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
      </mesh>
    </group>
  );
};

Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        alpha: true,
        antialias: true
      }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
