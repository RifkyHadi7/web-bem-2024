import React from "react"
import headMag from "../../../assets/headMag.svg"
import { motion } from "framer-motion";

const Magazine = (props) => {
    return (
        <div className="flex flex-col w-full lg:max-w-[1920px] h-auto mt-0 mb-0 lg:p-0 bg-cust-background items-center justify-center">
            <div className="flex flex-col w-full bg-cover bg-[url('https://res.cloudinary.com/dnoqmou6x/image/upload/v1715757034/bgValueHP_kirb6j.png')] 
            lg:bg-[url('https://res.cloudinary.com/dnoqmou6x/image/upload/v1714531632/bgMagfix_eqbhix.png')] mx-auto items-center justify-center">
                <div className="max-w-max mb-8 pt-8 lg:mb-12 lg:pt-20">
                <motion.img
                initial={{ opacity: 0, y: 50, x: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "ease",
                    duration: 1.0,
                    damping: 10,
                    stiffness: 40,
                  },
                }} src={headMag} alt="" className="w-[20rem] xl:w-[35rem]" />
                    {/* <h2 className="relative font-lato text-8xl text-cust-green font-bold text-center pb-8">{props.heading}</h2> */}
                    {/* //!add garis dibawah heading nanti */}
                    {/* <div className="relative mx-auto w-22vw h-0.5 bg-cust-lime max-h-max">
                        <div className="mx-auto -translate-y-[3px] w-1/12vw h-2 bg-cust-green"></div>
                    </div> */}
                </div>
                <div className="rounded-lg m-0 p-0.5 w-10/12 h-full max-h-[580px] aspect-video">
                    <iframe className="fp-iframe align-middle block relative mx-auto my-0 border border-cust-green w-full h-[65vh] lg:h-[64vh] rounded-lg"
                    src={props.embed}
                    allowFullScreen 
                    >
                        {/* tes flipbook */}
                    </iframe>
                </div>
            </div>
        </div>
    )
}

Magazine.defaultProps = {
    heading: 'Value Magazine',
    embed: 'https://heyzine.com/flip-book/4ac1b0c560.html',
}

export default Magazine