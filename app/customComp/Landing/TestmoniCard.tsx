import { option } from 'motion/react-client'
import React from 'react'
import { useRouter } from 'next/router'


interface card {
    name: string,
    about: string,
    opinion: string
}


function TestmoniCard({ name, about, opinion }: card) {
    return (
        <div className='flex justify-center items-center rounded-md p-4 hover:bg-white border-gray-300'>
            <div className='h-full w-12 border-2'>

            </div>
            <div className=' flex justify-center items-center flex-col w-full'>
                <div className='w-full h-12 border-2'>
                    <span>{name}</span>
                    <span>{about}</span>
                </div>
                <div className='w-full h-full border-2 border-gray-300'>
                    <p>{opinion}</p>
                </div>
            </div>
        </div>
    )
}

export default TestmoniCard
