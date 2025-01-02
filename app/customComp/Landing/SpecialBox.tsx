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
        <div onClick={() => selSelection(element)} className={`flexCenter w-full h-fit font-Montserrat ${selection} font-bold text-xs border-2  border-stroke-500 rounded-lg px-8 py-4`}>
            <span>{text}</span>
        </div>
    )
}

export default SpecialBox
