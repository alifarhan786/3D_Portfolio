import React from 'react'
import { Html, useProgress } from '@react-three/drei'
import {FaBoltLightning} from 'react-icons/fa6'

const Loader = ({isMobile}) => {
  const {progress} = useProgress()
  return (
     
    <Html>
      <span className='canvas-load'></span>
   
      <p className='text-custom-blue text-2xl mt-10 flex'>{progress.toFixed(2)}<FaBoltLightning className='mt-1 ml-1'/></p>
    </Html>
  )
}

export default Loader
