import Image from 'next/image'
import techSupport from '../public/tech support.png'
import webDev from '../public/web development.png'
import modileapp from '../public/mobile development.png'
import socialmedia from '../public/social media marketing.png'
import digitalmarketing from '../public/digital marketing.png'
import contentmarketing from '../public/content marketing.png'

export const Services = () => {
    return(
        <div className="w-screen h-fit grid place-items-center">
            <div className="w-2/3">
                <h2 className="text-3xl md:text-5xl">Services</h2>
                <div className="w-full flex-wrap mt-4 md:mt-20" >

                    {/* tech support */}

                    <div className="w-full flex flex-wrap md:flex">
                        <section className="w-full flex-col text-fuchsia-50  bg-gray-700 md:w-1/2">
                            <h2 className="my-4 ml-4 text-lg lg:text-2xl xl:text-3xl">Tech Support</h2>
                           <span className="w-full grid place-items-center">
                                <p className="text-sm w-5/6 m-6 lg:text-lg xl:text-xl">
                                    Our experienced team provides reliable tech support to ensure smooth operations andoptimal performance of our clients' digital infrastructure. We proac8vely address technical challenges and implement robust solu8ons to enhance efficiency, security, and scalability.
                                </p>
                           </span>
                        </section>
                        <section className="w-full grid place-items-center md:w-1/2">
                            <Image
                                src={techSupport}
                                alt='tech Support'
                            />
                        </section>
                    </div>

                    {/* web development  */}

                    <div className="w-full flex flex-wrap md:flex-row-reverse">
                        <section className="w-full flex-col text-fuchsia-50 bg-gray-700 md:w-1/2">
                            <h2 className="my-4 ml-4 text-lg lg:text-2xl xl:text-3xl">Web Design and Development</h2>
                           <span className="w-full grid place-items-center">
                                <p className="text-sm w-5/6 m-6 lg:text-lg xl:text-xl">
                                    We specialize in craKing visually stunning, user-friendly, and responsive websites. Ourtalented designers and developers combine aesthetics with functionality to create captivating online experiences that engage users and drive conversions.
                                </p>
                           </span>
                        </section>
                        <section className="w-full grid place-items-center md:w-1/2">
                            <Image
                                src={webDev}
                                alt='Web development'
                            />
                        </section>
                    </div>

                    {/* digital marketing */}

                    <div className="w-full flex flex-wrap md:flex">
                        <section className="w-full flex-col text-fuchsia-50  bg-gray-700 md:w-1/2">
                            <h2 className="my-4 ml-4 text-lg lg:text-2xl xl:text-3xl">Digital Marketing</h2>
                           <span className="w-full grid place-items-center">
                                <p className="text-sm w-5/6 m-6 lg:text-lg xl:text-xl">
                                    We employ strategic digital marketinng techniques to elevate our clients' online presence anddrive results. Our services include search engine optimization (SEO), social media marketing,content marketing, and paid advertising campaigns tailored to each client's unique goals.
                                </p>
                           </span>
                        </section>
                        <section className="w-full grid place-items-center md:w-1/2">
                            <Image
                                src={digitalmarketing}
                                alt='Web development'
                            />
                        </section>
                    </div>

                    {/* mobile-app development */}

                    <div className="w-full flex flex-wrap md:flex-row-reverse">
                        <section className="w-full flex-col text-fuchsia-50  bg-gray-700 md:w-1/2">
                            <h2 className="my-4 ml-4 text-lg lg:text-2xl xl:text-3xl">Mobile App Development</h2>
                           <span className="w-full grid place-items-center">
                                <p className="text-sm w-5/6 m-6 lg:text-lg xl:text-xl">
                                    We have a proven track record of developing innovative mobile applications that cater to our clients' specific requirements. Our mobile app solu8ons are designed to provide seam lessuser experiences and deliver value to both businesses and their customers.
                                </p>
                           </span>
                        </section>
                        <section className="w-full grid place-items-center md:w-1/2">
                            <Image
                                src={modileapp}
                                alt='Web development'
                            />
                        </section>
                    </div>

                    {/* social-media marketing */}

                    <div className="w-full flex flex-wrap md:flex">
                        <section className="w-full flex-col text-fuchsia-50  bg-gray-700 md:w-1/2">
                            <h2 className="my-4 ml-4 text-lg lg:text-2xl xl:text-3xl">Social Media Marketing</h2>
                           <span className="w-full grid place-items-center">
                                <p className="text-sm w-5/6 m-6 lg:text-lg xl:text-xl">
                                    We harness the power of social media plaOorms to build brand awareness, engage with thetarget audience, and foster meaningful connections. Our social media strategies aredesigned to amplify brand messaging, increase reach, and drive traffic to clients' websites.
                                </p>
                           </span>
                        </section>
                        <section className="w-full grid place-items-center md:w-1/2">
                            <Image
                                src={socialmedia}
                                alt='Web development'
                            />
                        </section>
                    </div>

                    {/* content marketing */}

                    <div className="w-full flex flex-wrap md:flex-row-reverse">
                        <section className="w-full flex-col  bg-gray-700 text-slate-50 md:w-1/2">
                            <h2 className="my-4 ml-4 text-lg lg:text-2xl xl:text-3xl">Content Marketing</h2>
                           <span className="w-full grid place-items-center">
                                <p className="text-sm w-5/6 m-6 lg:text-lg xl:text-xl">
                                    Our content marke8ng strategies focus on creating valuable and engaging content that resonates with target audiences. By leveraging compelling storytelling, we aim to establish thought leadership, enhance brand credibility, and nurture customer relationships.
                                </p>
                           </span>
                        </section>
                        <section className="w-full grid place-items-center md:w-1/2">
                            <Image
                                src={contentmarketing}
                                alt='Web development'
                            />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}