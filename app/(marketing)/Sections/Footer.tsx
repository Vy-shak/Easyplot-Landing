import logo from "../../../public/Images/Logo.png"
import Image from "next/image"
function Footer() {
    return (
        <section className='flexcolCenter border-t-2 border-dashed mt-6 h-full w-full'>
            <div className="w-full flexBetween">
                <Image className="md:w-48 max-md:w-28 " alt="Easy plot logo" src={logo} />
                <div className="flexCenter space-x-2 w-fit h-fit">
                    <div className="flex justify-start flex-col items-start w-fit h-fit leading-12">
                        <span className="font-Montserrat font-bold text-bluePrimary-700  md:text-sm">About</span>
                        <span className="font-Montserrat font-medium text-neutral-500 max-md:text-[14px] md:text-xs">Yshak N</span>
                        <span className="font-Montserrat font-medium text-neutral-500 max-md:text-[14px] md:text-xs">NIT  Bhopal </span>
                        <span className="font-Montserrat font-medium text-neutral-500 max-md:text-[14px] text-xs">Bachelor of Architecture</span>
                    </div>
                    <div className="flex justify-start flex-col items-start w-fit h-fit leading-relaxed">
                        <span className="font-Montserrat font-bold text-bluePrimary-700 max-md:text-xs text-sm">Location</span>
                        <span className="font-Montserrat font-medium text-neutral-500 max-md:text-[14px] md:text-xs">Calicut,Kerala,India</span>
                        <span className="font-Montserrat font-medium text-neutral-500 max-md:text-[14px] md:text-xs">bhopal,mp,India</span>                    </div>
                    <div className="flex justify-start flex-col items-start w-fit h-fit max-md:text-[14px] leading-relaxed">
                        <span className="font-Montserrat font-bold text-bluePrimary-700 max-md:text-xs text-sm">Backed by</span>
                        <span className="font-Montserrat font-medium text-neutral-500 max-md:text-[14px] md:text-xs">100xdev</span>
                        <span className="font-Montserrat font-medium text-neutral-500 max-md:text-[14px]  md:text-xs">Harkirat singh</span>                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer
