import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/Images/Logo.png"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import Burger from "../../../public/icons/BurgerMenu"

function NavbarL() {
    // const mobile = useMediaQuery({ query: "(max-width: 767px)" });


    // const size = mobile ? 'xs' : 'sm'
    return (
        <section className='w-full box-border absolute top-0 z-50 flex justify-between items-center max-sm:px-4 max-md:px-8  h-12  bg-white shadow'>
            <Image className='max-sm:w-28 max-sm:-ml-2 w-40 h-fit' src={Logo} alt="" />
            <div className='w-fit flexCenter  h-fit md:mr-6'>
                <div className='flexCenter max-md:hidden w-fit h-fit mr-6 max-md:space-x-2 md:space-x-4'>
                    <span className='text-bluePrimary-700  max-md:hidden hover:text-greenPrimary-300 text-xs font-Montserrat font-semibold w-fit h-fit'>Pricing</span>
                    <span className='text-bluePrimary-700 max-md:hidden hover:text-greenPrimary-300 text-xs font-Montserrat font-semibold w-fit h-fit'>About us</span>
                    <span className='text-bluePrimary-700 max-md:hidden hover:text-greenPrimary-300 text-xs font-Montserrat font-semibold w-fit h-fit'>Our services</span>
                </div>
                <div className='flexCenter space-x-2 w-fit h-fit'>
                    <Burger />
                    <Link className='max-sm:hidden' href={'/home'}>
                        <Button className='max-md:size-xs' variant={"epPrimary"} size={'sm'}>Merge</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NavbarL
