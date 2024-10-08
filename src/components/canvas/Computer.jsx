import React from 'react'

import { useGLTF } from '@react-three/drei'

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    return (
  
      <mesh>
        <hemisphereLight intensity={5} groundColor='blue' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={2}  // Increase this
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={2} />  // Increase this too
        <ambientLight intensity={0.5} />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.47 : 0.75}
          position={isMobile ? [0, -2, -1.5] : [0, -3.45, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
  
    )
  }

  export default Computers