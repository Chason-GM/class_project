import React from 'react'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import { DeskCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className=" w-5 h-5 rounded-full bg-red-700"/>
          <div className="w-1 sm:h-80 h-40 red-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`} >
          <span className="text-red-700">Yo</span>oo<span className="text-red-700">oo</span>oo<span className="text-red-700">o</span>o!
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white font-bold`}>
            This is <span className='text-yellow-500 font-bold'>K</span><span className='font-bold'>-DAI</span><br className='sm:block hidden'/> Face - Recognition Project
          </p>
        </div>
      </div>
      <DeskCanvas />

    </section>
  )
}

export default Hero