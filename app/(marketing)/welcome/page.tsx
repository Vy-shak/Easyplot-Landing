import React from 'react'
import { NavbarL } from '@/app/customComp';
import { HeroL, Brands, Bentogrid } from '../Sections';
import { DottedBackground } from '@/app/customComp/index';

function page() {
    return (
        <section className='w-full flex-col justify-center items-start'>
            <NavbarL />
            <section className='w-full px-8 h-fit'>
                {/* <DottedBackground /> */}
                <HeroL />
            </section>
            <section className='w-full flex justify-center px-8 h-fit'>
                {/* <DottedBackground /> */}
                <Brands />
            </section>
            <section className='w-full flex justify-center px-8 h-fit'>
                <Bentogrid />
            </section>
        </section>
    )
}

export default page
