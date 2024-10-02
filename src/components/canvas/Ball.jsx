import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'



const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
     
      <directionalLight intensity={2} position={[-2,1,4]} color="white"/>
      <directionalLight intensity={1} position={[4,0,-2]} color="white"/>
      
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#915eff'
          polygonOffset
          polygonOffsetFactor={-5}
          metalness={0.6}
          roughness={0.5}
          flatShading
         />
        <Decal
        position={[0,0,1]}
        rotation={[2* Math.PI ,0,6.25]}
        scale={1}
        map={decal}
        flatShading />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>

  )
}

export default BallCanvas