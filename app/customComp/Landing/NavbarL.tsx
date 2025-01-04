"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "../../../public/Images/Logo.png"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Burger from "../../../public/icons/BurgerMenu"
import NavMenu from './NavMenu'
import { AnimatePresence } from 'motion/react'

const NavlInks = [{
    id: 'services',
    text: 'Our services'
}, {
    id: 'team',
    text: 'Meet team'
}, {
    id: 'testimonials',
    text: 'testimonials'
}]

function NavbarL() {
    const [minibar, setminiBar] = useState(false);

    return (
        <section className='w-full box-border fixed top-0 z-50 flex justify-between items-center max-sm:px-4 max-md:px-8  h-12  bg-white shadow'>
            <Image className='max-sm:w-28 max-sm:-ml-2 w-40 h-fit' src={Logo} alt="" />
            <AnimatePresence>
                {minibar && <NavMenu setterfn={setminiBar} />}
            </AnimatePresence>
            <div className='w-fit flexCenter  h-fit md:mr-6'>
                <div className='flexCenter max-md:hidden w-fit h-fit mr-6 max-md:space-x-2 md:space-x-4'>
                    {NavlInks.map((item) => (
                        <Link key={item.id} href={`#${item.id}`}>
                            <span className='cursor-pointer text-bluePrimary-700 max-md:hidden hover:text-greenPrimary-300 text-xs font-Montserrat font-semibold w-fit h-fit'>{item.text}</span>
                        </Link>
                    ))}
                </div>
                <div className='flexCenter space-x-2 w-fit h-fit'>
                    <div onClick={() => setminiBar(true)} className='w-fit h-fit md:hidden'>
                        <Burger />
                    </div>

                    <Link className='max-sm:hidden' href={'/message?feature=Merge your sheets'}>
                        <Button className='max-md:size-xs cursor-pointer' variant={"epPrimary"} size={'sm'}>Merge</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NavbarL
export { NavlInks }
