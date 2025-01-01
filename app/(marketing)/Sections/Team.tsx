import { section } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'
import Iphone from "../../../public/Images/team/IphoneCover.png"

function Team() {
    return (
        <section style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }} className='w-full grid place-items-center place-content-center h-96 bg'>
            <Image style={{ gridArea: '1 / 1', }} alt='team members ' className='z-20 w-40 -rotate-45 -bottom-12 right-52 relative ' src={Iphone} />
            <Image style={{ gridArea: '1 / 1' }} alt='team members ' className='z-20 w-40 rotate-45 -bottom-12 left-52 relative ' src={Iphone} />
            <Image style={{ gridArea: '1 / 1' }} alt='team members ' className='z-20 w-40  rotate-12 left-28 relative ' src={Iphone} />
            <Image style={{ gridArea: '1 / 1' }} alt='team members ' className='z-20 w-40  -rotate-12 right-28 relative ' src={Iphone} />
            <Image style={{ gridArea: '1 / 1' }} alt='team members ' className='z-20 w-40 rotate-0 ' src={Iphone} />
        </section>
    )
}

export default Team
