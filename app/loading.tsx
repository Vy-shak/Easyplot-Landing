import React from 'react'
import Image from 'next/image'
import loadingLogo from "../public/Images/2x/LoadingLogohekki.png"

function loading() {
    return (
        <>
            <Image alt='Loading logo' className='w-40 h-fit' src={loadingLogo} />
            <h2 className='font-Montserrat font-bold text-md sm:text-lg md:text-2xl lg:text-3xl text-center mt-2 sm:mt-4 md:mt-6 lg:mt-8'>We are getting there...</h2>
        </>
    )
}

export default loading
