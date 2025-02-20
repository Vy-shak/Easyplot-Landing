import React from 'react'
import Image from 'next/image'
import Image1 from "../../../public/Images/banner/Image1.png"
import Image2 from "../../../public/Images/banner/Image2.png"
import Image3 from "../../../public/Images/banner/Image3.png"
import Image4 from "../../../public/Images/banner/Image4.png"
import Boxes from '@/app/customComp/Landing/Boxes'

const Images = () => {
    return (
        <div className='flexBetween w-full max-md:pt-12 md:pt-24 space-x-2 h-fit'>
            <Image alt='image1' className=' max-sm:w-12 max-lg:w-24 lg:w-36 hover:max-md:w-20  max-md:w-20 md:hover:w-40 hover:shadow-lg transition-all duration-400 h-fit rounded-md' src={Image1} />
            <Boxes length='md:w-14' box1='md:w-4' box2='md:w-8' box3='w-full' />
            <Image alt='image2' className='max-sm:w-6 lg:w-28 max-lg:w-16 max-md:w-12 md:hover:w-32 transition-all duration-400 h-fit max-sm:rounded-sm rounded-md' src={Image2} />
            <Boxes length='w-14' box1=' md:w-4' box2='md:w-8' box3='w-full' />
            <Image alt='image3' className=' max-sm:w-16 lg:w-40 max-lg:w-24 max-md:w-20 hover:w-44 transition-all duration-400 h-fit rounded-md' src={Image3} />
            <Boxes length='w-14' box1='lg:w-4' box2='md:w-8' box3='w-full' />
            <Image alt='image4' className=' max-sm:w-16 md:w-36 max-lg:w-24 max-md:w-20 hover:w-40 transition-all duration-400 h-fit rounded-md' src={Image4} />
        </div>
    )
}

export default Images
