/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = () => {
  const ref = useRef(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(8000), { radius: 1.75 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#915EFF"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={1}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [contextLost, setContextLost] = useState(false);

  if (contextLost) {
    return (
      <div className='w-full h-auto absolute inset-0 z-[-1] bg-primary'>
        <div className='text-white text-center pt-4'>
          WebGL context lost. Please refresh the page.
        </div>
      </div>
    );
  }

  return (
    <div className='absolute inset-0' style={{ 
      position: 'fixed',
      background: 'rgb(5, 7, 22)',
      zIndex: 0
    }}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance',
          antialias: true,
        }}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', () => {
            console.warn('WebGL context lost');
            setContextLost(true);
          });
          gl.domElement.addEventListener('webglcontextrestored', () => {
            console.log('WebGL context restored');
            setContextLost(false);
          });
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
