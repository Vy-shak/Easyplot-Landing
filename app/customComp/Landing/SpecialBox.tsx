import React, { SetStateAction } from 'react'
import { Dispatch } from 'react'

interface SpecialBox {
    id: number
    text: string,
    selection: string,
    selSelection: Dispatch<SetStateAction<number>>
}

function SpecialBox({ text, selection, selSelection, id }: SpecialBox) {
    return (
        <div onClick={() => selSelection(id)} className={`flexCenter w-full h-fit font-Montserrat ${selection} font-bold text-xs border-2  border-stroke-500 rounded-lg px-8 py-4`}>
            <span>{text}</span>
        </div>
    )
}

export default SpecialBox
