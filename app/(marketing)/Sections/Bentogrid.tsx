import { div, section } from 'motion/react-client'
import React from 'react'
import BentoCard from '@/app/customComp/Landing/BentoCard'
import Marketplace from "../../../public/Images/bento/Marketplace.png"
import FindTalent from "../../../public/Images/bento/Findtalent.png"
import Community from "../../../public/Images/bento/Comunity.png"
import Mergesheets from "../../../public/Images/bento/Merge your sheets.png"


const Bentogrid = () => {
    return (
        <section className='flex object-contain flex-col w-full z-10  justify-center items-center max-md:pt-4 md:pt-8 space-y-4'>
            <span className='text-lg max-md:text-sm md:text-lg font-bold text-bluePrimary-700'>Our services</span>
            <section className='w-full z-20 flex max-md:gap-1 md:gap-3 max-md:px-4 md:px-16'>
                <div style={{ flex: 2 }} className=' rounded-lg flex-col flex max-md:gap-1 md:gap-3 w-full h-full'>
                    <div style={{ flex: 2 }} className='rounded-lg flex max-md:gap-1 md:gap-3 w-full h-full'>
                        <BentoCard flexLength={3} height='h-34' width='w-full' Img={Marketplace} heading='Market place for your assests' detail='Empower your projects by purchasing premium AutoCAD files tailored for architects. access ready-to-use designs, and save valuable time  ' />
                        <BentoCard flexLength={2} height='h-34' width='w-full' Img={FindTalent} heading='Find the talent' detail='connect with skilled architects to 
build your dream team and bring your vision to life' />
                    </div>
                    <BentoCard flexLength={1} height='h-34' width='w-full' Img={Marketplace} heading='Market place for your assests' detail='Empower your projects by purchasing premium AutoCAD files tailored for architects. access ready-to-use designs, and save valuable time  ' />
                </div>
                <BentoCard defaultCss='items-stretch' flexLength={1} height='h-34' width='w-full' Img={Mergesheets} heading='Community intraction' detail='Community interaction for architects inspires collaboration, fostering the exchange of ideas, designs, and resources. It creates a space to connect with peers, share insights, and explore innovative solutions together. Through meaningful engagement,' />
            </section>
        </section>
    )
}

export default Bentogrid
