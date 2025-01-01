import { section } from 'motion/react-client'
import React from 'react'
import TestmoniCard from '@/app/customComp/Landing/TestmoniCard'
import cohort from "../../../public/Images/Thanks/100x.png"
import harkirat from "../../../public/Images/Thanks/Harkirat.png"
import College from "../../../public/Images/Thanks/Manit.png"
import Image from 'next/image'

function Footer() {
    return (
        <section className='w-full flexBetween pt-12'>
            <div className='w-full  border-r-2 border-dashed  flex flex-col justify-start items-start'>
                <h3 className='text-2xl leading-normal font-Montserrat font-bold'><span>Designed and </span><br /><span>Developed by</span></h3>
                <TestmoniCard opinion='anything' name='yshak N' about='Software developer and UI/Ux designer' />
            </div>
            <div className='w-full pl-2 flex space-y-4 flex-col justify-start items-start'>
                <h3 className='text-2xl leading-normal font-Montserrat font-bold'><span>Special Thanks to</span></h3>
                <div className='flex justify-between items-center p-3 w-full'>
                    <Image src={cohort} className='w-12 h-12 object-contain' alt='cohort' />
                    <Image src={harkirat} className='w-12 h-fit' alt='cohort' />
                    <Image src={College} className='w-12 h-12' alt='cohort' />
                </div>
            </div>
        </section>
    )
}

export default Footer
