/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

// Create the dark material for the Earth
const createEarthMaterial = () => new THREE.MeshStandardMaterial({
  color: 'rgb(16, 13, 37)',
  emissive: 'rgb(16, 13, 37)',
  emissiveIntensity: 0.5,
  transparent: true,
  opacity: 0.8,
  metalness: 0.2,
  roughness: 0.8,
});

const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf');
  const earthMaterial = createEarthMaterial();

  useEffect(() => {
    if (earth?.scene) {
      earth.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = earthMaterial;
        }
      });
    }
  }, [earth, earthMaterial]);

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
      />
      <pointLight 
        position={[10, 10, 10]}
        intensity={1}
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.5}
      />

      <primitive 
        object={earth.scene}
        scale={2}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

useGLTF.preload('/planet/scene.gltf');

export default EarthCanvas;
