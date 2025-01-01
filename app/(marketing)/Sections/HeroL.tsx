'use client'
import React, { useEffect, useState } from 'react'
import { DottedBackground } from '@/app/customComp'
import { Button } from '@/components/ui/button'

function HeroL() {
    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setloaded(true);
        }, 700);
    }, []);
    return (
        <section className='w-full pb-12     border-b-2 border-neutral-100 text-center flex items- flex-col h-fit'>
            <div className='w-full text-center flex items- flex-col h-fit'>
                <h1 className='font-Montserrat pt-24 content-center z-10 w-full h-fit text-3xl font-bold text-bluePrimary-700'><span className=''>Your<span className='text-gold-500'> submissions </span>are not</span>
                    <br />
                    <div className='inline-block'>
                        <div className='flex flex-col items-start justify-center w-fit h-fit'>
                            <span>past due </span>
                            <div className={` ${loaded ? "w-full" : "w-0"} justify-start transition-all origin-left ease-out duration-1000 h-1 rounded-full bg-orange-600`}></div>
                        </div>
                    </div>
                    <span> Anymore</span>
                </h1>
                <h4 className='font-Montserrat z-10 text-xs pt-6 leading-6 text-gray-500 font-medium'>
                    <span>Unite your architecture journey—merge PDFs, access premium AutoCAD assets,</span><br />
                    <span>and unlock exciting career opportunities,</span><br />
                    <span>all in one platform. Designed by students, for students!</span>
                </h4>
                <div className='flexCenter pt-6 w-full space-x-6 z-0 h-fit'>
                    <Button variant={'epPrimary'} size={'sm'}>Create an account</Button>
                    <Button variant={'secondary'} size={'sm'}>Continue as a guest</Button>
                </div>
            </div>
        </section>
    )
}

export default HeroL
