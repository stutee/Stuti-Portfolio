import Image from 'next/image'
import { assets, eduList, toolsData } from '@/assets/assets'
import React from 'react'
import {motion} from "motion/react"

const Education = () => {
  return (
    <motion.div id = 'education' className='w-full px-[12%] py-10 scroll-mt-20'
    initial = {{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
      {/* <motion.h4 
        initial = {{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4> */}
      <motion.h2
        initial = {{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
        className='text-center text-5xl font-Ovo'>Education</motion.h2>
       
        <motion.div
        initial = {{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}        
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

            <motion.div
            initial = {{opacity:0,}}
            whileInView={{opacity:1,}}
            transition={{duration:0.6, delay:0.8}}        
            className='flex-1'>

                <motion.ul 
                initial = {{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8, delay:1}}        
                className='grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {eduList.map(({icon, title, description, universityName}, index)=>(
                        <motion.li 
                        whileHover={{scale:1.05}}          
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                        <div className="flex items-center gap-4"> 
                            <Image src={icon} alt={title} className='w-9 mt-1' />
                            {universityName && (
                                <h2 className="text-gray-600 text-lg font-bold">
                                    {universityName}
                                </h2>
                            )}
                        </div>  
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            
                            <p className="text-gray-600 text-sm">{description}</p>

                        </motion.li>
                    ))}
                </motion.ul>

            </motion.div>
        
        </motion.div>
    </motion.div>
  )
}

export default Education
