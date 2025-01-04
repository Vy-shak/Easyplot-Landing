'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import Boy1 from "../../../public/Images/Hero3d/Boy1.png"
import Boy2 from "../../../public/Images/Hero3d/Boy2.png"

function HeroL() {
    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setloaded(true);
        }, 700);
    }, []);
    return (
        <section className='w-full max-sm:pb-6 pb-12 max-md:pb-12 border-b-2 border-neutral-100 text-center flex items- flex-col h-fit'>
            <motion.img initial={{ scale: 1 }} animate={{ scale: 1.1, translateY: [-15, 15] }} transition={{ translateY: { duration: 6, repeatType: 'mirror', repeat: Infinity }, scale: { duration: 1, repeat: 0 } }} alt='3d boy model' className='absolute w-48 max-sm:w-20 max-lg:w-32 max-md:w-24 top-28 max-sm:-left-8 max-md:left-10 left-8' src={Boy1.src} />
            <motion.img initial={{ scale: 1 }} animate={{ scale: 1.1, translateY: [-15, 15] }} transition={{ translateY: { duration: 6, repeatType: 'mirror', repeat: Infinity }, scale: { duration: 1, repeat: 0 } }} alt='3d boy model' className='absolute w-52 max-md:w-24 max-lg:w-40 top-28 max-sm:w-24 max-md:right-10 right-8  max-sm:right-2' src={Boy2.src} />
            <div className='w-full text-center flex items- flex-col h-fit'>
                <h1 className='font-Montserrat max-md:text-xl max-sm:text-lg max-lg:text-2xl max-sm:pt-16 pt-24 max-md:pt-24 max-lg:pt- content-center z-10 w-full h-fit text-3xl font-bold text-bluePrimary-700'><span className=''>Your<span className='text-gold-500'> submissions </span>are not</span>
                    <br />
                    <div className='inline-block'>
                        <div className='flex flex-col items-start justify-center w-fit h-fit'>
                            <span>past due </span>
                            <div className={` ${loaded ? "w-full" : "w-0"} justify-start transition-all origin-left ease-out duration-1000 h-1 rounded-full bg-orange-600`}></div>
                        </div>
                    </div>
                    <span> Anymore</span>
                </h1>
                <h4 className='font-Montserrat z-10 text-xs pt-6 leading-6 text-neutral-600 font-medium'>
                    <span>Unite your architecture journey—merge PDFs, access premium AutoCAD assets,</span><br />
                    <span>and unlock exciting career opportunities,</span><br />
                    <span>all in one platform. Designed by students, for students!</span>
                </h4>
                <div className='flexCenter max-md:flex-col max-md:pt-3 md:pt-6 w-full max-md:space-y-3 md:space-x-6 z-0 h-fit'>
                    <Button variant={'epPrimary'} size={'sm'}>Create an account</Button>
                    <Button variant={'secondary'} size={'sm'}>Continue as guest</Button>
                </div>
            </div>
        </section>
    )
}

export default HeroL
