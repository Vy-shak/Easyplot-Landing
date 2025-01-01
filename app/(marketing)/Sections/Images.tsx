import React from 'react'
import Image from 'next/image'
import Image1 from "../../../public/Images/banner/Image1.png"
import Image2 from "../../../public/Images/banner/Image2.png"
import Image3 from "../../../public/Images/banner/Image3.png"
import Image4 from "../../../public/Images/banner/Image4.png"
import Boxes from '@/app/customComp/Landing/Boxes'

const Images = () => {
    return (
        <div className='flexBetween w-full pt-24 space-x-2 h-fit'>
            <Image alt='image1' className='w-36 hover:w-40 hover:shadow-lg transition-all duration-400 h-fit rounded-md' src={Image1} />
            <Boxes length='w-14' box1='w-4' box2='w-8' box3='w-full' />
            <Image alt='image2' className='w-28 hover:w-32 transition-all duration-400 h-fit rounded-md' src={Image2} />
            <Boxes length='w-14' box1='w-4' box2='w-8' box3='w-full' />
            <Image alt='image3' className='w-40 hover:w-44 transition-all duration-400 h-fit rounded-md' src={Image3} />
            <Boxes length='w-14' box1='w-4' box2='w-8' box3='w-full' />
            <Image alt='image4' className='w-36 hover:w-40 transition-all duration-400 h-fit rounded-md' src={Image4} />
        </div>
    )
}

export default Images
