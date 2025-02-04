import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import linkedin_logo from "../assets/linkedin_logo.png";
import email_logo from "../assets/email_logo.jpg";
import github_logo from "../assets/github_logo.png";

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial = {{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100 }}>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
        </motion.div>
        <motion.h3 
        initial = {{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity:1 }}
        transition={{duration: 0.6, delay:0.3}}className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Stuti Kafle <Image src={assets.hand_icon} alt='' className='w-6' />
        </motion.h3>

        <motion.h1 
        initial = {{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity:1 }}
        transition={{duration: 0.8, delay:0.5}}className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Machine Learning Engineer. </motion.h1>
            <motion.p 
            initial = {{opacity: 0}}
            whileInView={{opacity:1 }}
            transition={{duration: 0.6, delay:0.7}}className='max-w-2xl mx-auto font-Ovo'>
                I am a machine learning Engineer and my background as an electronics engineer, 
                combined with a master’s degree in computer science, allows me to bridge hardware and software.
            </motion.p>

            {/* Social Media Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex gap-6 mt-6"
        >
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/stutikafle/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedin_logo} alt="LinkedIn" className="w-8 hover:scale-110 transition-transform duration-300 cursor-pointer mt-2" />
          </a>

          {/* GitHub */}
          <a href="https://github.com/stutee" target="_blank" rel="noopener noreferrer">
            <Image src={github_logo} alt="GitHub" className="w-10 hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </a>

          {/* Email */}
          <a href="mailto:stutikafle6@gmail.com">
            <Image src={email_logo} alt="Email" className="w-11 hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </a>
        </motion.div>    
    </div>
  )
}

export default Header
