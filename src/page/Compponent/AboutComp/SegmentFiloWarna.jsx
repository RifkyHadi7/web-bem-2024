import React from 'react'
import CardFiloWarL from './CardFiloWarL.jsx'
import CardFiloWarR from './CardFiloWarR.jsx'
import HeadFiloWarna from '../../../assets/HeadFiloWarna.svg'
import filOren from '../../../assets/filOren.png'
import filBiru from '../../../assets/filBiru.png'
import filkuning from '../../../assets/filkuning.png'
import filkrem from '../../../assets/filkrem.png'
import { motion } from "framer-motion";

const SegmentFiloWarna = () => {
  return (
    <div className="flex flex-col w-full mx-auto bg-cover lg:max-w-[1920px] bg-cust-background h-auto my-0 justify-center">
        <div className='flex flex-col w-full bg-cover h-full justify-center pt-16 lg:pt-28 pb-40 px-6 bg-[url("https://res.cloudinary.com/dnoqmou6x/image/upload/v1715442347/bgFiloWarna_kijs7z.png")]'>
            <div className='w-full flex justify-center'>
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
                }}src={HeadFiloWarna} className='mx-auto w-[90dvw] lg:w-[600px] mb-6 lg:mb-16'/>
            </div>
            <div className='w-full grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-y-6 lg:gap-y-[60px] gap-x-8 px-2 lg:px-10 text-cust-black'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 3.0,
                  damping: 15,
                  stiffness: 50,
                },
              }}>
                <CardFiloWarL srcimg={filBiru} desc="Melambangkan stabilitas dalam profesionalisme kinerja BEM FILKOM UB 2024 untuk menjalankan tanggung jawabnya sebagai eksekutor di FILKOM UB."/>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 3.0,
                  damping: 15,
                  stiffness: 50,
                },
              }}>
                <CardFiloWarR srcimg={filOren} desc="Melambangkan keberanian dan vitalitas BEM FILKOM UB 2024 dalam menghadapi tantangan untuk melayani KBMFILKOM."/>
              </motion.div>
                <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 3.0,
                  damping: 15,
                  stiffness: 50,
                },
              }}>
                <CardFiloWarL srcimg={filkuning} desc="Melambangkan kreativitas dan kapabilitas yang dimiliki oleh BEM FILKOM UB 2024 serta energi positif yang selalu menyertai seluruh fungsionaris."/>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 3.0,
                  damping: 15,
                  stiffness: 50,
                },
              }}>
                <CardFiloWarR srcimg={filkrem} desc="Melambangkan atmosfer internal yang penuh kehangatan dan antusias yang tertanam dalam setiap individu di BEM FILKOM UB 2024."/>
              </motion.div>
            </div>
        </div>
    </div>
  )
}

export default SegmentFiloWarna