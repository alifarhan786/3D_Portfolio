import React, { Suspense, useEffect, useState, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Lazy load the Computers component
const LazyComputers = lazy(() => import('./Computer')); // Adjust the import path as needed

export const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQuery = (event) => {
      setIsMobile(event.matches);
    };

    // Check for WebGL support
    if (!window.WebGLRenderingContext || !document.createElement('canvas').getContext('webgl')) {
      alert("Your device does not support WebGL");
    }

    mediaQuery.addEventListener('change', handleMediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuery);
    };
  }, []);

  return (
    <Canvas
    frameloop={isMobile ? 'demand' : 'always'}
      shadows={!isMobile}  // Disable shadows on mobile
      dpr={isMobile ? [0,1] : [1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ antialias: !isMobile}}
    >
      <Suspense fallback={<CanvasLoader isMobile={isMobile} />}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <LazyComputers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
