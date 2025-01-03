import React from 'react'
import { NavbarL } from '@/app/customComp';
import { HeroL, Brands, Bentogrid, Images, Testmonials, Footer, Team } from '../Sections';
import { DottedBackground } from '@/app/customComp/index';
import Special from '../Sections/Special';

function page() {
    return (
        <section className='w-full flex-col box-border  justify-center itemslg:px-16'>
            <NavbarL />
            <section className='w-full max-sm:px-4 max-md:px-8 max-lg:px-10 lg:px-16 h-fit'>
                {/* <DottedBackground /> */}
                <HeroL />
            </section>
            <section className='w-full flex justify-center max-sm:px-4 max-lg:px-10  lg:px-16 max-md:px-8  h-fit'>
                {/* <DottedBackground /> */}
                <Brands />
            </section>
            <section className='w-full flex justify-center max-sm:px-4 max-lg:px-10 max-md:px-8 lg:px-16 h-fit'>
                <Bentogrid />
            </section>
            <section className='w-full flex justify-center max-sm:px-4 max-lg:px-10 max-md:px-8 lg:px-16 h-fit'>
                <Team />
            </section>
            <section className='w-full flex justify-center max-sm:px-4 max-lg:px-10 max-md:px-8 lg:px-16 h-fit'>
                <Images />
            </section>
            <section className='w-full flex justify-center  max-lg:px-10 max-sm:px-4 max-md:px-8 lg:px-16 h-fit'>
                <Special />
            </section>
            <section className='w-full flex justify-center max-sm:px-4 max-lg:px-10 max-md:px-8 lg:px-16 h-fit'>
                <Testmonials />
            </section>
            <section className='w-full flex justify-center max-sm:px-4 max-lg:px-10 max-md:px-8 lg:px-16 h-fit'>
                <Footer />
            </section>
        </section>
    )
}

export default page
