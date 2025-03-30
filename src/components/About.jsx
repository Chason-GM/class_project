import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[240px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.8)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-3 px-4 min-h-[280px] 
                    flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-64 h-64 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <span className='text-orange-600 font-bold'>Face</span> recognition is a widely used technology in <span className='text-red-600 font-bold'>security</span>, <span className='text-green
        text-green-600 font-bold'>authentication</span>, and <span className='text-sky-600 font-bold'>access</span> control systems. This project focuses on developing a face recognition system from Data Science and AI Platform class.  Given the limited time, instead of reusing our previous projects like the <span className='text-blue-500 font-bold'>PM2.5</span> regression model or the <span className='text-red-600 font-bold'>Default</span> prediction classification model, we decided to explore something new. We wanted to solve a real problem, so we came up with the idea of using <span className='text-yellow-500 font-bold'>face recognition</span> to verify our friends’ identities. <span className='text-green-600 font-bold'>For example</span>, on the 7th floor, we need to use student cards to enter, but some of us have lost our cards. So we thought why not use face recognition instead? Since we've already learned about <span className='text-green-500 font-bold'>neural networks</span>, this would be a great opportunity to <span className='text-red-600 font-bold'>apply</span> them.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')