'use client'

import { div, option } from 'motion/react-client'
import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'motion/react'
import Image, { StaticImageData } from 'next/image'


interface card {
    name: string,
    about: string,
    opinion: string,
    ProfileImg: StaticImageData
}


function TestmoniCard({ name, about, opinion, ProfileImg }: card) {
    return (
        <motion.div initial={{ scale: 1, }} whileHover={{ scale: 1.04, }} className='flex border-2  hover:z-30 hover:drop-shadow-md hover:border-bluePrimary-400 shadow-bluePrimary-300 border-stroke-500 max-md:py-2 md:py-4 justify-center items-stretch rounded-md hover:bg-white '>
            <div className='flex p-1 justify-center items-stretch border-r-2 border-neutral-200 border-dashed w-12'>
                <div className='flex justify-start items-start bg-neutral-100 rounded-full '>
                    <Image className='w-10 border-primaryBlue-300 relative top-0 h-9 object-contain rounded-full' src={ProfileImg} alt='profiles' />
                </div>
            </div>
            <div className=' flex justify-center h-24 items-center flex-col w-full'>
                <div className='w-full pl-3 pb-2 flex justify-start items-start flex-col leading-5'>
                    <span className='font-semibold font-Montserrat text-bluePrimary-700 max-md:xs  leading-tight max-sm:text-[14px] text-sm'>{name}</span>
                    <span className='font-semibold font-Montserrat text-neutral-500 max-md:text-[14px] max-md:leading-tight md:text-xs'>{about}</span>
                </div>
                <div className='w-full max-md:text-[12px] pl-3 pt-2  leading-3 flex justify-start items-start flex-col font-Montserrat font-medium border-t-2 border-dashed text-xs text-neutral-500  border-neutral-400'>
                    <p>{opinion}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default TestmoniCard
