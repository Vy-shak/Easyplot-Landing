

import React from 'react'
import { DottedBackground } from '@/app/customComp'
import { Button } from '@/components/ui/button'

function HeroL() {
    return (
        <section className='w-full pb-12     border-b-2 border-neutral-100 text-center flex items- flex-col h-fit'>
            <div className='w-full text-center flex items- flex-col h-fit'>
                <h1 className='font-Montserrat pt-24 content-center z-10 w-full h-fit text-3xl font-bold text-bluePrimary-700'><span className=''>Your<span className='text-gold-500'> submission </span>are not</span>
                    <br />
                    <span>past due </span><span>Anymore</span>
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
