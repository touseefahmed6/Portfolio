import { createContext, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';

const CanvasContext = createContext(null);

export const useCanvas = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }
  return context;
};

export const CanvasProvider = ({ children }) => {
  const canvasRef = useRef(null);

  return (
    <div className="w-full h-full">
      <Canvas
        ref={canvasRef}
        frameloop='demand'
        gl={{ 
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance',
          antialias: true
        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <CanvasContext.Provider value={canvasRef.current}>
          {children}
        </CanvasContext.Provider>
      </Canvas>
    </div>
  );
};

CanvasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
