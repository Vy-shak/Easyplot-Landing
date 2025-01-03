import logo from "../../../public/Images/Logo.png"
import Image from "next/image"
function Footer() {
    return (
        <section className='flexcolCenter border-t-2 border-dashed mt-6 h-full w-full'>
            <div className="w-full flexBetween">
                <Image className="w-48 " alt="Easy plot logo" src={logo} />
                <div className="flexCenter space-x-4 w-fit h-fit">
                    <div className="flex justify-start flex-col items-start w-fit h-fit leading-12">
                        <span className="font-Montserrat font-bold text-bluePrimary-700 text-sm">About</span>
                        <span className="font-Montserrat font-medium text-neutral-500 text-xs">Yshak N</span>
                        <span className="font-Montserrat font-medium text-neutral-500 text-xs">NIT  Bhopal </span>
                        <span className="font-Montserrat font-medium text-neutral-500 text-xs">Bachelor of Architecture</span>
                    </div>
                    <div className="flex justify-start flex-col items-start w-fit h-fit leading-6">
                        <span className="font-Montserrat font-bold text-bluePrimary-700 text-sm">Location</span>
                        <span className="font-Montserrat font-medium text-neutral-500 text-xs">Calicut,Kerala,India</span>
                        <span className="font-Montserrat font-medium text-neutral-500 text-xs">bhopal,mp,India</span>                    </div>
                    <div className="flex justify-start flex-col items-start w-fit h-fit leading-6">
                        <span className="font-Montserrat font-bold text-bluePrimary-700 text-sm">Backed by</span>
                        <span className="font-Montserrat font-medium text-neutral-500 text-xs">100xdev</span>
                        <span className="font-Montserrat font-medium text-neutral-500 text-xs">Harkirat singh</span>                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer
