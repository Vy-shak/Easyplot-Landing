import { details } from 'motion/react-client'
import React from 'react'


interface BentoCard {
    length: number,
    heading: string,
    detail: string
}

function BentoCard({ length, heading, detail }: BentoCard) {
    return (
        <div style={{ flex: length }} className='border-2 text-start p-2 flexcolCentertop rounded-lg w-full h-full bg-neutral-50 border-stroke-500'>
            <div className='w-full bg-blue-500 h-36 rounded-md mb-2'>

            </div>
            <span className='font-medium text-bluePrimary-700 leading-5 mb-2 w-fit'>{heading}</span>
            <p className='text-xs font-medium font-Montserrat text-neutral-500'>{detail}</p>
        </div>
    )
}

export default BentoCard

