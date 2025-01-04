"use client"

import React from 'react'
import { X } from 'lucide-react'
import logo from "../../../public/Images/Logo.png"
import Image from 'next/image'
import { NavlInks } from './NavbarL'
import Link from 'next/link'
import { SetStateAction, Dispatch } from 'react'
import { motion } from 'motion/react'


interface navmenu {
    setterfn: Dispatch<SetStateAction<boolean>>
}

function NavMenu({ setterfn }: navmenu) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className='max-md:w-screen  max-md:h-screen md:hidden absolute z-50 border-2 border-neutral-200 top-0 right-0 bg-white'>
            <div className='flex border-b-2 border-neutral-200 px-6 sm:px-8 justify-between w-full items-center'>
                <Image className='w-36 -ml-4' alt='Logo' src={logo} />
                <X onClick={() => setterfn(false)} className='cursor-pointer' color='#5b5d5f' />
            </div>
            <div className='flexcolCenter mt-3 sm:mt-6 items-start px-6 w-full space-y-8 h-fit'>
                {NavlInks.map((item) => (
                    <Link key={item.id} href={`#${item.id}`}>
                        <span onClick={() => setterfn(false)} className='w-full hover:bg-bluePrimary-100 font-Montserrat font-medium text-neutral-600 rounded px-6 py-2 bg-neutral-100 border-stroke-500'>{item.text}</span>
                    </Link>
                ))}
            </div>
        </motion.div>
    )
}

export default NavMenu
