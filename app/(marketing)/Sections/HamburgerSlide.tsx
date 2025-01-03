import React from 'react'
import Image from 'next/image'
import MenuButton from '@/app/customComp/Landing/menuButton'
import logo from "../../../public/Images/Logo.png"
import { X } from 'lucide-react'
const menuData = [{
    id: 1,
    text: "pricing"
},
{
    id: 2,
    text: "About us"
},
{
    id: 3,
    text: "The team"
},
{
    id: 4,
    text: "Our services"
},
]

function HamburgerSlide() {
    return (
        <div className='w-screen absolute top-0 right-0 flexcolCenter z-50 h-screen bg-white pb-6'>
            <div className='flexBetween w-full h-fit'>
                <Image className='w-28' src={logo} alt='logo' />
                <X />
            </div>
            <div className='flexcolCenter space-y-4'>
                {menuData.map((item) => (
                    <MenuButton key={item.id} text={item.text} />
                ))}
            </div>
        </div>
    )
}

export default HamburgerSlide
