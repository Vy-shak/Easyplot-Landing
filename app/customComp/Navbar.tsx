import React from 'react';

const Navbar = () => {
    return (
        <section className='w-screen box-border text-bluePrimary-700 h-12 max-w-screen fixed top-0 z-50   drop-shadow bg-white flexBetween font-semibold  text-xs px-6'>
            <span>LOGO</span>
            <div className='flex space-x-4 box-border w-fit h-fit   '>
                <span className='hover:text-bluePrimary-700 '>MERGE PDF</span>
                <span className='hover:text-bluePrimary-700 '>IMAGE 2 PDF</span>
                <span className='hover:text-bluePrimary-700'>SPLIT PDF</span>
            </div>
            <div className='space-x-4 box-border'>
                <span className='hover:text-bluePrimary-700'>LOGIN</span>
                <span className='hover:text-bluePrimary-700'>SIGN UP</span>
            </div>
        </section>
    )
}

export default Navbar
