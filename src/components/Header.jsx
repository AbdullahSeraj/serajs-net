import React, { useEffect, useState } from 'react'
import { FaRegMoon } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

import { links } from '../assets/data/data';
import { useDispatch, useSelector } from 'react-redux';
import { handleDark } from '../redux/slices/darkSlice';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [])

  const dark = useSelector((state) => state.dark.isDark)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='relative container flex justify-between items-center py-11 h-[70px]'>
        <div>
          <div className='bg-zinc-200 dark:bg-zinc-800 rounded-full p-2 border border-gray-500 dark:border-slate-800 hover:border-amber-600 dark:hover:border-amber-600 text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white cursor-pointer transition-all block md:hidden' onClick={handleOpen}>
            <LuMenu size={'20px'} />
          </div>
        </div>

        <div className='gap-5 bg-zinc-200 dark:bg-zinc-800 py-2 px-6 rounded-full hidden md:flex'>
          {links.map((link, i) => (
            <a href={`#${link.path}`} key={i} className='hover:text-blue-400 transition-all cursor-pointer'>{link.name}</a>
          ))}
        </div>

        <div onClick={() => dispatch(handleDark())} className='bg-zinc-200 dark:bg-zinc-800 rounded-full p-2 border border-gray-500 dark:border-slate-800 hover:border-amber-600 dark:hover:border-amber-600 text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white  cursor-pointer transition-all'>
          {dark ? <CiLight size={'20px'} /> : <FaRegMoon size={'20px'} />}
        </div>

        <div className={`fixed left-0 top-0 w-full h-full ${isOpen ? "block" : 'hidden'}`}>
          <div className='absolute top-0 left-0 w-full h-full bg-gray-300/70 dark:bg-gray-800/80 z-50' onClick={handleOpen}></div>
          <div className="absolute top-[50px] left-1/2 -translate-x-1/2 transition-all bg-gray-50 dark:bg-[#111] w-[350px] rounded-lg p-5 z-50 animate-wiggle">
            <div className='absolute top-3 right-3 cursor-pointer hover:text-red-600 transition-all' onClick={handleOpen}><MdClose size={'20px'} className="hover:animate-rotatefull" /></div>
            <div className='flex flex-col items-center gap-2'>
              {links.map((link, i) => (
                <a href={`#${link.path}`} key={i} className='hover:text-blue-400 transition-all cursor-pointer last:border-0 dark:border-zinc-800 py-1 text-sm' onClick={handleOpen}>{link.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {scroll &&
        <div className='fixed bottom-10 right-10 bg-blue-500/90 hover:bg-blue-500 text-white z-40 transition-all rounded-full p-3 cursor-pointer border border-gray-500 dark:border-gray-300' onClick={handleScroll}>
          <IoIosArrowUp className='text-title' size={'15px'} />
        </div>
      }
    </div>
  )
}

export default Header