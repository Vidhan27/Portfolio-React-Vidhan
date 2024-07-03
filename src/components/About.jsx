import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"


const About = () => {
  return (
    <div className='botder-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span> </motion.h2>

        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 , x:-100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src='data:image/jpeg;base64,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' alt=''/>
                </div>
                
            </motion.div>
            <div className='w-full lg:w-1/2 '>
                    <div className='flex justif-center lg:justify-start'>
                        <motion.p
                        whileInView={{opacity:1 , x:0}}
                        initial={{opacity:0 , x:-100}}
                        transition={{duration:0.5}}
                        className='my-10  max-w-xl py-6'>{ABOUT_TEXT}</motion.p>
                    </div>
                </div>
        </div>
      
    </div>
  )
}

export default About
