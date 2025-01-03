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
        <section className='flexColcenter max-md:space-y-8  md:space-y-12 w-full h-fit max-md:pb-4 md:pb-6'>
            <h4 className='w-full text-center max-md:mt-4 mt-8 flexColcenter text-bluePrimary-700 font-bold font-Montserrat max-md:text-sm md:text-lg'><span>Trusted by Top</span><br /><span>Architecture Schools and firms</span></h4>
            <div className='w-full flexCenter'>
                <div className='w-full flex justify-center h-fit overflow-x-hidden'>
                    <Marquee gradient={true} gradientWidth={25} pauseOnHover={true} className='space-x-4'>
                        <Image src={LandT} className='md:w-28 max-md:w-20 h-fit' alt='Landt logo' />
                        <Image src={DattnerLogo} className='md:w-28 max-md:w-20 h-fit' alt='Landt logo' />
                        <Image src={Bvdoshi} className='md:w-28 max-md:w-20 h-fit' alt='Landt logo' />
                        <Image src={Spa} className='md:w-28 max-md:w-20 h-fit' alt='Landt logo' />
                        <Image src={Cookfox} className='md:w-28 max-md:w-20 h-fit' alt='Landt logo' />
                        <Image src={Manit} className='md:w-28 max-md:w-20 h-fit' alt='Landt logo' />
                        <Image src={Zaha} className='md:w-28 max-md:w-20 h-fit' alt='Landt logo' />
                        <Image src={LandT} className='md:w-28 max-md:w-20 h-fit' alt='Landt logo' />
                        <Image src={DattnerLogo} className='w-28 max-md:w-20 h-fit' alt='Landt logo' />
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default Brands
