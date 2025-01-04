import React from 'react'
import { HeroL, Brands, Bentogrid, Images, Testmonials, Footer, Team } from '../Sections';
import Special from '../Sections/Special';
function page() {
    return (
        <>
            <section id='hero' className='w-full max-sm:px-4 max-md:px-8 max-lg:px-10 lg:px-16 h-fit'>
                <HeroL />
            </section>
            <section id='brands' className='w-full flex justify-center max-sm:px-4 max-lg:px-10  lg:px-16 max-md:px-8  h-fit'>
                {/* <DottedBackground /> */}
                <Brands />
            </section>
            <section id='services' className='w-full flex justify-center max-sm:px-4 max-lg:px-10 max-md:px-8 lg:px-16 h-fit'>
                <Bentogrid />
            </section>
            <section id='team' className='w-full flex justify-center max-sm:px-4 max-lg:px-10 max-md:px-8 lg:px-16 h-fit'>
                <Team />
            </section>
            <section id='images' className='w-full flex justify-center max-sm:px-4 max-lg:px-10 max-md:px-8 lg:px-16 h-fit'>
                <Images />
            </section>
            <section id='special' className='w-full flex justify-center  max-lg:px-10 max-sm:px-4 max-md:px-8 lg:px-16 h-fit'>
                <Special />
            </section>
            <section id='testimonials' className='w-full flex justify-center max-sm:px-4 max-lg:px-10 max-md:px-8 lg:px-16 h-fit'>
                <Testmonials />
            </section>
            <section id='footer' className='w-full flex justify-center max-sm:px-4 max-lg:px-10 max-md:px-8 lg:px-16 h-fit'>
                <Footer />
            </section>
        </>
    )
}

export default page
