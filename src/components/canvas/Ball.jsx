/* eslint-disable react/no-unknown-property */
import { Suspense, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
} from '@react-three/drei';
import * as THREE from 'three';

// Create a shared material to ensure consistency
const createSphereMaterial = () => new THREE.MeshStandardMaterial({
  color: '#0a0a1a',
  emissive: '#0a0a1a',
  emissiveIntensity: 0.2,
  transparent: true,
  opacity: 0.95,
  metalness: 0.8,
  roughness: 0.2,
});

// The actual 3D ball component
// @ts-ignore
const Ball = ({ imgUrl }) => {
  const [decal, setDecal] = useState(null);
  const [error, setError] = useState(false);
  const meshRef = useRef();
  const sphereMaterial = createSphereMaterial();

  useEffect(() => {
    const loadTexture = async () => {
      try {
        const loader = new THREE.TextureLoader();
        const texture = await new Promise((resolve, reject) => {
          loader.load(
            imgUrl,
            (tex) => {
              tex.colorSpace = THREE.SRGBColorSpace;
              tex.needsUpdate = true;
              resolve(tex);
            },
            undefined,
            (err) => reject(err)
          );
        });
        setDecal(texture);
        setError(false);
      } catch (err) {
        console.error('Error loading texture:', err);
        setError(true);
      }
    };

    loadTexture();

    return () => {
      if (decal) {
        // @ts-ignore
        decal.dispose();
      }
    };
  }, [imgUrl, decal]);

  if (error) {
    return (
      <mesh 
// @ts-ignore
      ref={meshRef} scale={4.5}>
        <icosahedronGeometry args={[1, 1]} />
        <primitive object={sphereMaterial.clone()} />
      </mesh>
    );
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.25} />
      
      <mesh 
// @ts-ignore
      ref={meshRef} castShadow receiveShadow scale={4.5}>
        <icosahedronGeometry args={[1, 1]} />
        <primitive object={sphereMaterial.clone()} />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
          />
        )}
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

// Loading placeholder for 3D scene
const LoadingBall = () => (
  <mesh scale={4.5}>
    <icosahedronGeometry args={[1, 1]} />
    <primitive object={createSphereMaterial()} />
  </mesh>
);

// Main component that handles both 3D and fallback cases
// @ts-ignore
const BallCanvas = ({ icon }) => {
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGLFailed(true);
    } catch (e) {
      console.error("WebGL initialization failed:", e);
      setWebGLFailed(true);
    }
  }, []);

  // If WebGL is not available, render static image
  if (webGLFailed) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src={icon} 
          alt="technology"
          className="w-16 h-16 object-contain"
          style={{ filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.2))' }}
        />
      </div>
    );
  }

  // Render 3D scene
  return (
    <div className="w-full h-full">
      <Canvas
        frameloop="demand"
        shadows
        gl={{ 
          preserveDrawingBuffer: true,
          alpha: true,
          antialias: true
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<LoadingBall />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={5}
          />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;
