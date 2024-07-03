import React from 'react'
import { HERO_CONTENT } from '../constants'
import { motion } from "framer-motion"


const container = (delay) =>({

  hidden : {x:100 , opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
  }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    
                    <motion.h1 variants={container(0)}
                    initial="hidden"
                    whileInView="visible"
                    className='pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Vidhan Prajapati</motion.h1>

                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>FullStack Developer</motion.span>

                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    whileInView="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                </div>
              </div>

              <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                  <motion.img 
                  variants={container(1.5)}
                  initial="hidden"
                  whileInView="visible"
                  className='rounded-2xl' src='https://storage.googleapis.com/pai-images/0cc3e313d8d2461fbf4afd01843cc283.jpeg' alt='Vidhan Prajapati' />
                </div>
              </div>

        </div>
      
    </div>
  )
}

export default Hero
