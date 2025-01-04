
import React from 'react'
import Image from 'next/image'


interface BentoCard {
    flexLength: number,
    heading: string,
    detail: string
    height: string,
    width: string,
    Img: any,
    defaultCss?: string

}


function BentoCard({ flexLength, heading, detail, Img, height, width, defaultCss }: BentoCard) {
    return (
        <div style={{ flex: flexLength }} className='border-2  hover hover:shadow-lg hover:border-bluePrimary-400 shadow-bluePrimary-300 transition-all  duration-300  text-start p-2 max-sm:p-1 flex justify-stretch items-stretch flex-col rounded-lg w-full bg-neutral-50 border-stroke-500'>
            <Image alt='bento image' className={`${height} ${width} ${defaultCss}`} src={Img} />
            <span className='font-medium mt-2 max-md:text-xs text-bluePrimary-700 leading-5  mb-2 w-fit'>{heading}</span>
            <p className='text-xs max-md:text-[11px] max-sm:text-[8px] h-fit font-medium leading-normal font-Montserrat text-neutral-500'>{detail}</p>
        </div>
    )
}

export default BentoCard

