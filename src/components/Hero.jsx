import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
       <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-custom-blue '/>
        <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>  
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-custom-blue '>Farhan</span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> I develop 3D Visuals, User <br className='sm:block hidden'/> Interfaces and Web Applications</p>
        </div>
      </div>  
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-secondary border-4 flex justify-center items-start p-2'>
            <motion.div animate={{ y:[0,24,0]}} transition={{duration : 1.5, repeat:Infinity }} className="w-3 h-3 rounded-full bg-secondary"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero