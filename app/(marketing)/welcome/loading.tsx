import React from 'react'
import loadingLogo from '../../../public/Images/2x/LoadingLogohekki.png'
import Image from 'next/image'

function loading() {
    return (
        <>
            <Image alt='Loading logo' className='w-40 h-fit' src={loadingLogo} />
            <span>Loading</span>
        </>
    )
}

export default loading
