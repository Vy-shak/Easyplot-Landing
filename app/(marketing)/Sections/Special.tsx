'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import SpecialBox from '@/app/customComp/Landing/SpecialBox'
import Affordable from "../../../public/Images/Special/Affordable pricing.jpg"
import Blog from "../../../public/Images/Special/Blog.jpg"
import Selling from "../../../public/Images/Special/Selling.jpg"
import MergeSheet from "../../../public/Images/Special/Merge.jpg"


const data = [{
    id: 0,
    text: 'Market place to sell your assets',
    Img: Selling
}, {
    id: 1,
    text: 'Merge sheets with Respctive to sheet number',
    Img: MergeSheet
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
    const [selected, setSelected] = useState({
        id: 0,
        text: 'Market place to sell your assets',
        Img: Selling
    })


    console.log(selected)
    return (
        <section className='flex max-md:flex-col items-center max-md:space-y-4 max-lg:space-x-6 lg:space-x-12 max-md:pt-12 max-lg:pt-16 lg:pt-20 justify-center w-full'>
            <div className='w-full  max-md:space-y-2 max-lg:space-y-4 lg:space-y-8 h-fit '>
                {data.map((item) => (
                    <SpecialBox key={item.id} element={item} selSelection={setSelected} selection={`${selected.id === item.id ? 'bg-bluePrimary-600 cursor-pointer text-white' : 'bg-neutral-50 '}`} text={item.text} />
                ))}
            </div>
            <Image alt='prview' className='w-1/2 h-full rounded-lg' src={selected.Img} />
        </section>
    )
}

export default Special
