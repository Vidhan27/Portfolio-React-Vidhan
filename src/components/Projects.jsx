import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div 
    whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:1.5}}
    className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>Projects</h2>
        <div>{PROJECTS.map((project,index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                <img src={project.image} width={150} height={150} className='mb-6 rounded' alt='project title'/>
                </div>
                <div className='w-full max-w-xl lg:-3/4'>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                            {tech}
                        </span>
                    
                    ))}
                </div>
            </div>
        ))}</div>
    </motion.div>
  )
}

export default Projects
