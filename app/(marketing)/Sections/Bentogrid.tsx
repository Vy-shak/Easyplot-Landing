import { div, section } from 'motion/react-client'
import React from 'react'

const Bentogrid = () => {
    return (
        <section className='flex flex-col w-full z-10 h-fit justify-center items-center pt-8 space-y-4'>
            <span className='text-lg font-bold text-bluePrimary-700'>Our services</span>
            <section className='w-full h-96 z-20 flex gap-3 px-16'>
                <div style={{ flex: 2 }} className=' rounded-lg flex-col flex gap-3 w-full h-full'>
                    <div style={{ flex: 2 }} className='border-2 rounded-lg flex gap-3 w-full h-full'>
                        <div style={{ flex: 3 }} className='border-2 text-start p-2 flexcolCentertop rounded-lg w-full h-full border--500'>
                            <div className='w-full bg-blue-500 h-36 rounded-md'>

                            </div>
                            <span className='font-medium w-fit'>Buy and sell your autocad templates</span>
                            <p className='text-xs font-medium font-Montserrat text-neutral-500'>helping the recruters
                                to find the best tallents</p>
                        </div>
                        <div style={{ flex: 2 }} className='border-2 flexcolCentertop rounded-lg w-full h-full border-yellow-500'>
                            <span className='font-medium w-fit'>Merge your sheets</span>
                        </div>
                    </div>
                    <div style={{ flex: 1 }} className='border-2 flexcolCentertop rounded-lg gap-3 w-full h-full border-green-500'>
                        <span className='font-medium w-fit'>Merge your sheets</span>
                    </div>
                </div>
                <div style={{ flex: 1 }} className='border-2 w-full rounded-lg h-full border-black-500 flex flex-col justify-start items-center'>
                    <span className='font-medium w-fit'>Merge your sheets</span>
                </div>
            </section>
        </section>
    )
}

export default Bentogrid
