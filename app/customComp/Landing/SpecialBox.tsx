import React from 'react'

interface SpecialBox {
    text: string
}

function SpecialBox({ text }: SpecialBox) {
    return (
        <div className='flexCenter w-full h-fit font-Montserrat font-bold text-xs border-2 bg-neutral-50 border-stroke-500 rounded-lg px-8 py-4'>
            <span>{text}</span>
        </div>
    )
}

export default SpecialBox
