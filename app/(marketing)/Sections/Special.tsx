'use client'

import { image, section } from 'motion/react-client'
import React, { useState } from 'react'
import SpecialBox from '@/app/customComp/Landing/SpecialBox'
import Affordable from "../../../public/Images/Special/Affordable pricing.jpg"
import Blog from "../../../public/Images/Special/Blog.jpg"
import Selling from "../../../public/Images/Special/Selling.jpg"
import Image from 'next/image'


const data = [{
    id: 0,
    text: 'Market place to sell your assets',
    Img: Selling
}, {
    id: 1,
    text: 'Merge sheets with Respctive to sheet number',
    Img: Selling
}, {
    id: 2,
    text: 'Affordable price for students',
    Img: Affordable
}, {
    id: 3,
    text: 'write blogs and get paid',
    Img: Blog
},]

function Special() {
    const [selected, setSelected] = useState(0)
    return (
        <section className='flex items-center space-x-12  pt-20 justify-center w-full p-4'>
            <div className='w-full space-y-8 h-full '>
                {data.map((item, index) => (
                    <SpecialBox key={index} id={index} selSelection={setSelected} selection={`${selected === index ? 'bg-bluePrimary-600 text-white' : 'bg-neutral-50 '}`} text={item.text} />
                ))}
            </div>
            {data.map((item, index) => {
                if (selected === index) {
                    return (
                        <div className='w-full h-full rounded-lg bg-neutral-50 border-2 border-stroke-500'>
                            <Image key={index} className='rounded-lg' alt='special image' src={item.Img} />
                        </div>
                    )
                }
            })}
        </section>
    )
}

export default Special
