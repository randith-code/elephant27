import Image from "next/image"
import menu from '../public/menu.svg'
import insta from '../public/instagram.svg'
import linkedin from '../public/linkedin.svg'
import fb from '../public/facebook.svg'
import close from '../public/Close.svg'
import logo from '../public/Logo.png'
import { useState } from "react"

export const Navbar = () =>{

    const [isOpen, setOpen] = useState(false)

    return(
        <div className="w-fit h-fit">
            {isOpen ? <Slidebar setOpen={setOpen}/> : <></>}
            <div className="bg-darkBlue border-b-lightGrey border-b-2 w-screen h-12 flex justify-between items-center">
                <section className="h-full w-fit flex justify-center items-center">
                    <Image
                        className="cursor-pointer mx-1"
                        src={fb}
                        alt="facebook"
                    />
                    <Image
                        className="cursor-pointer mx-1"
                        src={linkedin}
                        alt="Linkedin"
                    />
                    <Image
                        className="cursor-pointer mx-1"
                        src={insta}
                        alt="instagram"
                    />
                </section>
                <Image
                    src="/Logo White.png"
                    width={15596}
                    height={10084}
                    alt="company logo"
                    className="w-1/5 h-auto md:w-36 mx-auto translate-y-1/4"
                />
                <section onClick={() => setOpen(!isOpen)} className="relative h-full w-auto grid place-items-center mr-2 md:mr-4 hover:bg-mainRed cursor-pointer">
                    <Image
                        src={menu}
                        alt="hamberger menu"
                        className="mx-3 my-auto"
                    />
                </section>  
            </div>
        </div>
    )
} 

const Slidebar =({ setOpen }: { setOpen: (isOpen: boolean) => void }) => {
    return(
        <div className="fixed top-0 left-0 overflow-hidden w-screen h-screen z-10 bg-fuchsia-50">
            <section className="w-full h-fit flex justify-end">
                <Image
                    src={close}
                    alt="close button"
                    className="w-6 h-6 m-6 cursor-pointer"
                    onClick={() => setOpen(false)}
                />
            </section>
            <div className="flex flex-wrap w-full h-5/6">
                    <section className="w-full h-1/2 md:w-1/2 grid place-items-center md:h-full ">
                        <Image
                            src={logo}
                            alt="company logo"
                            className="md: w-3/5 h-auto"
                        />
                    </section>
                    <section className="w-full h-1/2 grid place-items-center md:w-1/2 md:h-full">
                        <span className="w-full h-full flex flex-col justify-around items-center md:h-2/3">
                            <a className="text-2xl md:text-4xl" href="">Industries</a>
                            <a className="text-2xl md:text-4xl" href="">Blog</a>
                            <a className="text-2xl md:text-4xl" href="">Client Testimonials</a>
                            <a className="text-2xl md:text-4xl" href="">Partnerships</a>
                            <a className="text-2xl md:text-4xl" href="">Careers</a>
                        </span>
                    </section>
                </div>
        </div>
    )
}