import React from 'react'
import { X, TriangleAlert } from 'lucide-react'

const Alertbox = () => {
    return (
        <div className="flex items-start rounded">
            <div className="flex flex-col flex-1 shrink justify-center p-2 mt-4 w-96 bg-amber-50 rounded border border-amber-500 border-solid basis-0 min-w-[240px]">
                <div className="flex gap-3 justify-center items-center w-full">
                    <TriangleAlert />
                    <div className="flex-1 font-medium text-neutral-600 text-xs shrink self-stretch my-auto font-Montserrat leading-5 min-w-[240px] text-neutral-900">
                        <span>"Oh dear!  Looks like we need two sheets to proceed.</span>
                        <span className='font-semi'>Please select <span className='font-semibold'>at least two!</span></span>
                    </div>
                    <div className="flex gap-2.5 justify-center items-center self-stretch my-auto w-8 min-h-[32px]">
                        < X />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Alertbox
