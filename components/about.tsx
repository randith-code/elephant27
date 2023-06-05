import Image from "next/image"
import logo from '../public/Logo.png'

export const About = () => {
    return(
        <div className="w-screen h-75vh md:h-50vh mt-12 grid place-items-center">
            <div className="w-2/3 h-5/6">
                <h2 className="text-3xl md:text-5xl">Who we are...</h2>
                <div className="flex flex-wrap w-full h-5/6">
                    <section className="w-full h-1/2 md:w-1/2 grid place-items-center md:h-full ">
                        <p className="md:text-xl">Elephant27 is a dynamic startup agency specializing in providing creative digital solutions to small and medium-sized enterprises (SMEs) and global businesses. Our mission is to empower businesses with innova8ve digital strategies and cutting-edge technologies,helping them thrive in the digital landscape.</p>
                    </section>
                    <section className="w-full h-1/2 grid place-items-center md:w-1/2 md:h-full">
                        <Image
                            src={logo}
                            alt="company logo"
                            className="md: w-3/5 h-auto"
                        />
                    </section>
                </div>
            </div>
        </div>
    )
}