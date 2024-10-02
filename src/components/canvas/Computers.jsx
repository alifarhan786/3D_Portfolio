import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (

    <mesh>
      <hemisphereLight intensity={3.5} groundColor='blue' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile? 0.45: 0.75}
        position={isMobile?[0,-1.5,-1.5]:[0, -3.45, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>

  )
}

export const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width:500px)")
    setIsMobile(mediaQuery.matches)
    const handleMediaQuery =(event)=>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQuery)
    return()=>{
      mediaQuery.removeEventListener('change',handleMediaQuery)
    }
  },[])
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
