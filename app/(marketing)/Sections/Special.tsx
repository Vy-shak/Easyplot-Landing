import { section } from 'motion/react-client'
import React from 'react'
import SpecialBox from '@/app/customComp/Landing/SpecialBox'

function Special() {
    return (
        <section className='flex items-center space-x-12 pt-20 justify-center w-full p-4'>
            <div className='w-full space-y-8 h-full '>
                <SpecialBox text='Merge sheets with Respctive to sheet number' />
                <SpecialBox text='Market place to sell your assets' />
                <SpecialBox text='Affordable price for students' />
                <SpecialBox text='write blogs and get paid' />
            </div>
            <div className='w-full h-full rounded-lg bg-neutral-50 border-2 border-stroke-500'>
            </div>
        </section>
    )
}

export default Special
