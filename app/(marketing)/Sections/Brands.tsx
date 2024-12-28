import React from 'react'
import LandT from "../../../public/Images/brands/L&T.png"
import DattnerLogo from "../../../public/Images/brands/Dattner architects.png"
import Bvdoshi from "../../../public/Images/brands/Bv doshi.png";
import Spa from "../../../public/Images/brands/Spa.png"
import Image from 'next/image'
import Cookfox from "../../../public/Images/brands/Cookfox.png"
import Manit from "../../../public/Images/brands/Manit.png"
import Zaha from "../../../public/Images/brands/zaha.png"
import Marquee from 'react-fast-marquee';




function Brands() {
    return (
        <section className='flexColcenter space-y-6 w-full h-fit pb-6'>
            <h4 className='w-full text-center mt-6 flexColcenter text-bluePrimary-700 font-bold font-Montserrat text-lg'><span>Trusted by Top</span><br /><span>Architecture Schools and firms</span></h4>
            <div className='w-full flexCenter'>
                <div className='w-full flex justify-center h-fit overflow-x-hidden'>
                    <Marquee gradient={true} pauseOnHover={true} className='space-x-4'>
                        <Image src={LandT} className='w-28 h-fit' alt='Landt logo' />
                        <Image src={DattnerLogo} className='w-28 h-fit' alt='Landt logo' />
                        <Image src={Bvdoshi} className='w-28 h-fit' alt='Landt logo' />
                        <Image src={Spa} className='w-28 h-fit' alt='Landt logo' />
                        <Image src={Cookfox} className='w-28 h-fit' alt='Landt logo' />
                        <Image src={Manit} className='w-28 h-fit' alt='Landt logo' />
                        <Image src={Zaha} className='w-28 h-fit' alt='Landt logo' />
                        <Image src={LandT} className='w-28 h-fit' alt='Landt logo' />
                        <Image src={DattnerLogo} className='w-28 h-fit' alt='Landt logo' />
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default Brands
