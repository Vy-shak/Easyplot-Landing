'use client'

import { section } from 'motion/react-client'
import Image from 'next/image'
import React, { useState } from 'react'
import Iphone from "../../../public/Images/team/IphoneCover.png"

function Team() {
    const [spread, setSpread] = useState(false)
    const back0 = 'hover:bottom-0 hover:right-0 transition-all duration-500'
    return (
        <section className='flex pt-12  justify-start items-start flex-col w-full h-fit'>
            <h3 className='font-bold font-Montserrat  text-bluePrimary-700 max-md:text-xl md:text-4xl'><span>Meet the</span><br /><span>Team</span></h3>
            <section onMouseEnter={() => setSpread(true)} onMouseLeave={() => setSpread(false)} style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }} className='w-full grid place-items-center place-content-center max-md:72 md:h-96'>
                <Image style={{ gridArea: '1 / 1', }} alt='team members ' className={`  z-20 max-md:w-20 md:w-40 ${spread ? '-rotate-45 max-md:-bottom-6  md:-bottom-12 max-md:right-24  md:right-52 relative ' : 'bottom-0 right-0 rotate-0 relative '} transition-all duration-500 ease-out `} src={Iphone} />
                <Image style={{ gridArea: '1 / 1' }} alt='team members ' className={` z-20 max-md:w-20 md:w-40  ${spread ? 'rotate-45 md:left-52 max-md:left-24 max-md:-bottom-6 md:-bottom-12 relative' : 'rotate-0 left-0 bottom-0 relative  '} transition-all duration-500 ease-out  `} src={Iphone} />
                <Image style={{ gridArea: '1 / 1' }} alt='team members ' className={`z-20 max-md:w-20 md:w-40 ${spread ? 'rotate-12 md:left-28 max-md:left-14 relative' : 'left-0 rotate-0 relative '} transition-all duration-500 ease-out  `} src={Iphone} />
                <Image style={{ gridArea: '1 / 1' }} alt='team members ' className={` z-20 max-md:w-20 md:w-40 ${spread ? '-rotate-12 md:right-28 max-md:right-14 relative' : 'bottom-0 right-0 rotate-0'} transition-all duration-500 ease-out  `} src={Iphone} />
                <Image style={{ gridArea: '1 / 1' }} alt='team members ' className='z-20 max-md:w-20 md:w-40 rotate-0 ' src={Iphone} />
            </section>
        </section>
    )
}

export default Team
