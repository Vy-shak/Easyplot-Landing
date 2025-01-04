"use client"

import React from 'react'
import Image from 'next/image'
import ErrorImg from "../../../public/Images/Error/Computer.jpg"
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'


function ErrPage() {
    const searchParams = useSearchParams();
    const feature = searchParams.get('feature')

    return (
        <section className='flexcolCenter w-full h-screen max-sm:px-4 max-md:px-8 max-lg:px-10 lg:px-16'>
            <Image className='sm:w-40 w-32 md:w-52 lg:w-80 rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg ' alt='Error image' src={ErrorImg} />
            <h2 className='font-Montserrat font-bold text-md sm:text-lg md:text-2xl lg:text-3xl text-center mt-2 sm:mt-4 md:mt-6 lg:mt-8'>{`Looking for the ${feature} feature?`}</h2>
            <h5 className='text-neutral-500 text-xs text-center font-semibold font-Montserrat'>Ah! this is just a landing page of that. I am working on that application</h5>
            <Link href={'./welcome'}>
                <Button size={'sm'} className=' mt-2 sm:mt-4 md:mt-6 lg:mt-8'>Go back to landing</Button>
            </Link>
        </section>
    )
}

export default ErrPage
