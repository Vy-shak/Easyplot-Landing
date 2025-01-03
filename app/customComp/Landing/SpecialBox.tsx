'use client'

import React, { SetStateAction } from 'react'
import { Dispatch } from 'react'

interface element {
    id: number,
    text: string,
    Img: any
}

interface SpecialBox {
    element: element
    text: string,
    selection: string,
    selSelection: Dispatch<SetStateAction<element>>
}

function SpecialBox({ text, selection, selSelection, element }: SpecialBox) {
    return (
        <div onClick={() => selSelection(element)} className={`flexCenter w-full max-md:text-[12px] max-md:font-semibold h-fit font-Montserrat ${selection} font-bold text-xs border-2 max-md:leading-3  border-stroke-500 rounded-lg px-8 max-md:py-2 max-lg:py-2 lg:py-4`}>
            <span >{text}</span>
        </div>
    )
}

export default SpecialBox
