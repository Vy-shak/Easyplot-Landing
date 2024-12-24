import { Section } from 'lucide-react'
import React from 'react'
import { DottedBackground, InfoCard } from '../customComp'
import { Button } from '@/components/ui/button'

function merge() {
    return (
        <section className='grid  w-full h-full box-border grid-cols-8 bg-white gap-1'>
            <div className='w-full  bg-neutral-200 px-4 pt-36 auto-rows-min align-middle overflow-y-scroll grid gap-2 grid-flow-row grid-cols-6 col-span-6'>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
                <div className='bg-white z-10 w-full h-36 rounded-sm'>PDF</div>
            </div>
            <div className='w-full box-border flex-col pt-36 px-4 flex z-10 col-span-2 bg-white'>
                {/* <InfoCard /> */}
                <Button variant={'epPrimary'} size={'lg'}>Merge the sheets</Button>
            </div>
        </section>
    )
}

export default merge
