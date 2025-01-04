"use client"

import React from 'react'
import loadingLogo from "../public/Images/2x/LoadingLogohekki.png"
import { motion } from 'motion/react'
function loading() {
    return (
        <div className='flexCenter w-full h-screen'>
            <motion.img animate={{ rotate: 90 }} transition={{ repeatType: 'mirror', repeat: Infinity, duration: 1 }} alt='Loading logo' className='w-40 h-fit' src={loadingLogo.src} />
            <h2 className='font-Montserrat font-bold text-md sm:text-lg md:text-2xl lg:text-3xl text-center mt-2 sm:mt-4 md:mt-6 lg:mt-8'>We are getting there...</h2>
        </div>
    )
}

export default loading
