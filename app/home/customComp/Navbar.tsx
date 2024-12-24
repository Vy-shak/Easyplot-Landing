import React from 'react';

const Navbar = () => {
    return (
        <section className='w-full h-12 fixed top-0 z-20 drop-shadow bg-bluePrimary-100 flexBetween font-semibold text-xs px-6'>
            <span>LOGO</span>
            <div className='flex space-x-4  w-fit h-fit text-bluePrimary-700  '>
                <span className='hover:text-blueSecondary-300 '>MERGE PDF</span>
                <span className='hover:text-blueSecondary-300 '>IMAGE 2 PDF</span>
                <span className='hover:text-blueSecondary-300'>SPLIT PDF</span>
            </div>
            <div className='space-x-4'>
                <span className='hover:text-blueSecondary-300'>LOGIN</span>
                <span className='hover:text-blueSecondary-300'>SIGN UP</span>
            </div>
        </section>
    )
}

export default Navbar
