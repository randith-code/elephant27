
export const Contact = () => {
    return(
        <div className="w-screen h-fit mt-10 bg-darkBlue flex flex-col items-center">
            <div className="w-2/3 h-full">
                <h2 className=" text-fuchsia-50 my-10 text-3xl md:text-5xl">Who we are...</h2>
                <div className="">
                    <p className="text-fuchsia-50 md:text-base">
                        At Elephant27, our unwavering passion lies in enabling business success in the digital realm. With our innovative digital solutions, we empower both SMEs and global enterprises to flourish and attain their objectives. We eagerly welcome gifted individuals who align with our vision and contribute their creative expertise to our team. We extend our gratitude for considering Elephant27, and we eagerly anticipate the opportunity to explore collaboration possibilities, striving together to deliver outstanding outcomes for our esteemed clients.
                    </p>
                    <section className="flex justify-center">
                        <form className="flex flex-col text-fuchsia-50 mt-10 w-2/3" action=""> 
                            <label className="md:text-xl" htmlFor="">Your name</label>
                            <input className="my-2 md:my-5 md:h-7" type="text" name="name" id="userName" />

                            <label className="md:text-xl" htmlFor="">Email</label>
                            <input className="my-2 md:my-5 md:h-7" type="email" name="email" />

                            <label className="md:text-xl" htmlFor="">Message</label>
                            <textarea className="my-2 md:my-5" name="maessage" id="" cols={30} rows={10}></textarea>

                            <span className="flex justify-end mb-10">
                                <button className="grid place-items-center mx-5 px-3 rounded-2xl border-lightGrey border-2 text-xs md:text-lg hover:bg-mainRed hover:text-fuchsia-50 hover:border-none">
                                    Clear
                                </button>
                                <button className="grid place-items-center px-3 rounded-2xl border-lightGrey border-2 text-x md:text-lg hover:bg-mainRed hover:text-fuchsia-50 hover:border-none">
                                    Send
                                </button>
                            </span>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}