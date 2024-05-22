import React from 'react'
import { motion } from "framer-motion";

const KartuFiloLogo = (props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='font-lato mb-2 text-2xl lg:text-3xl font-extrabold text-cust-yellow'>
            {props.title}
            {/*Buat SubJudul*/}
        </div>
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
                }}className='max-w-[200px] lg:max-w-[320px] mb-2' src={props.imgsrc} alt=''/>
        <div className='flex flex-col justify-center items-center font-lato h-[100px] lg:h-[130px] text-center text-sm lg:text-xl text-cust-white2 rounded-[16px] lg:rounded-[22px] bg-cust-orange p-4 max-w-[456px]'>
            {props.desc}
            {/*Buat Deskripsi*/}
        </div>
    </div>
  )
}

KartuFiloLogo.defaultProps = {
    title: 'Burung',
    desc: 'Lalalalalalalalalalalalalalalalalalalalalalalal',
}

export default KartuFiloLogo