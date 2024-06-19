import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { projects, selects } from '../assets/data/data.js';

import { useCopyToClipboard } from "usehooks-ts"

const Main = () => {
    const [select, setSelect] = useState("all");
    const [products, setProducts] = useState([])

    const [value, copy] = useCopyToClipboard()

    useEffect(() => {
        if (select === 'all') {
            setProducts(projects)
        } else {
            setProducts(projects.filter((item) => item.category === select))
        }
    }, [select])

    return (
        <div id='products' className='container py-10 border-b border-gray-300 dark:border-slate-800 flex flex-col md:flex-row gap-8'>
            <div className='grid md:block grid-cols-1 sm:grid-cols-2 gap-3'>
                {selects.map((item, i) => (
                    <div key={i} className={`rounded-md bg-zinc-300 dark:bg-zinc-800 md:my-3 py-2 px-7 text-center text-gray-700 dark:text-gray-400 cursor-pointer ${item.select === select ? 'text-black dark:text-white outline outline-1 outline-blue-300 dark:outline-blue-900 font-semibold' : ''}`} onClick={() => setSelect(item.select)}>{item.name}</div>
                ))}
            </div>

            <div className='flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                {products.map((pro, i) => (
                    <div
                        key={i} className='rounded-md border border-blue-300 dark:border-blue-900 hover:border-blue-500 dark:hover:border-blue-300 overflow-hidden hover:rotate-1 transition-all bg-zinc-300 dark:bg-zinc-800'>
                        <img src={pro.img} alt="" className='' />
                        <div className='px-5 py-3'>
                            <h3 className='font-semibold text-lg mb-1'>{pro.title}</h3>
                            <p className='text-sm text-gray-500 mb-4'>{pro.text}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <a href={pro.githubUrl} target='_blank'>
                                        <FaGithub size={"20px"} className='cursor-pointer text-gray-500 hover:text-black dark:hover:text-white transition-all' />
                                    </a>
                                    <FaLink onClick={() => copy(pro.githubUrl)} size={"20px"} className='cursor-pointer text-gray-500 hover:text-black dark:hover:text-white transition-all' />
                                </div>
                                <a href={pro.website} target='_blank' className='text-blue-400 hover:text-blue-500 transition-all flex gap-2 items-center text-sm'>visit <FaArrowRight /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Main