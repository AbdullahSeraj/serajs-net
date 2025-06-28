import { useRef } from 'react'
import logo from "/me.png"

import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdCall } from "react-icons/md";

import Lottie from "lottie-react";
import programmingAni from "../../public/animations/AnimationProgramming.json"

const Hero = () => {
  const lottieRef = useRef();

  return (
    <div id='about' className='container py-10 border-b border-gray-300 dark:border-slate-800 flex items-center justify-between gap-7'>
      <div className='lg:w-[60%]'>
        <div className='mb-8 flex items-end'>
          <img src={logo} alt="" className='rounded-full w-[130px] border-2 border-yellow-500' />
          <MdVerified size={'25px'} className='text-blue-500' />
        </div>
        <h1 className='text-4xl font-black mb-3'>Sotfware Designer, Computer Engineer, Software Developer, and Front-End Developer.</h1>
        <p className='mb-5 text-gray-500'>Highly motivated and skilled Software Designer with a strong foundation in computer engineering and a passion for front-end development utilizing React.js and Vue.js. Currently pursuing a Computer Engineering degree at Al-Biruni University, demonstrating a commitment to continuous learning and growth in the ever-evolving field of software development. Eager to contribute to innovative projects that address complex problems and make a real-world impact.
        </p>
        <div className='flex gap-5'>
          <a href="https://github.com/AbdullahSeraj" target='_blank'>
            <FaGithub size={'20px'} className='text-gray-500 cursor-pointer hover:text-black dark:hover:text-white transition-all' />
          </a>
          <a href="https://linkedin.com/in/abdullah-seraj" target='_blank'>
            <BsLinkedin size={'20px'} className='text-gray-500 cursor-pointer hover:text-black dark:hover:text-white transition-all' />
          </a>
          <a href="https://wa.me/905013362511" target='_blank'>
            <IoLogoWhatsapp size={'24px'} className='text-gray-500 cursor-pointer hover:text-black dark:hover:text-white transition-all' />
          </a>
          <a href="tel:905013362511" target='_blank'>
            <MdCall size={'23px'} className='text-gray-500 cursor-pointer hover:text-black dark:hover:text-white transition-all' />
          </a>
        </div>
      </div>

      <div className='hidden lg:block'>
        <Lottie animationData={programmingAni} className='w-full' loop={true} lottieRef={lottieRef} onLoadedImages={() => lottieRef.current.setSpeed(0.4)} />
      </div>
    </div>
  )
}

export default Hero