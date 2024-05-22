import React from 'react';
import ArahGerak from '../../../assets/ArahGerak.svg';
import Linemid from '../../../assets/LineArah.svg';
import BudayaKerja from '../../../assets/BudayaKerja.svg';
import DaunKiri from '../../../assets/daunKiri.png';
import DaunKanan from '../../../assets/daunKanan.png';
import { motion } from "framer-motion";


const items = [
  "Pelayanan Inklusien (Inklusif Efisien)",
  "Pengembangan Kolaborasif (Kolaboratif Progresif)",
  "Pergerakan Dinaktif (Dinamis Aktif)",
  "Pengabdian Partisiaktif (Partisipasi Proaktif)",
  "Internal Adapsional (Adaptif Profesional)",
];

const items2 = [
  "Bersinergi",
  "Kreatif",
  "Kritis",
  "Komunikatif",
  "Humanis",
];

const ArahGerakComponent = () => (
    
  <div className="bg-cust-yellow h-max">
    <div className='flex w-full pt-10'>
        <div className='justify-start'>
        <img src={DaunKiri} alt="" className='lg:w-64 lg:h-64 jutify-start h-28'/>

        </div>
        <div className='w-1/2 lg:w-2/3 justify-between'>
        

        </div>
        <div className='justify-end'>
        <img src={DaunKanan} alt="" className='lg:w-64 lg:h-64 justify-end h-28'/>

        </div>
        
    </div>

    <div className="lg:grid lg:grid-cols-10 flex flex-col">
  <div className="flex flex-col items-center mx-6 mb-10 lg:col-span-4 lg:-mr-10 lg:ml-10"> 
    <div className="flex justify-center ">
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
                }}  src={ArahGerak} alt="Arah Gerak" className="lg:w-full w-[250px] mb-5" />
    </div>
    {items.map((item, index) => (
       <motion.div
       initial={{ opacity: 0}}
       whileInView={{
         opacity: 1,
         x: 0,
         transition: {
           type: "spring",
           duration: 4.0,
           damping: 15,
           stiffness: 50,
         },
       }} key={index} className="flex justify-center box-border bg-cust-orange rounded-full my-2 lg:my-5 lg:w-full py-3 w-full">
        <p className="text-center font-lato text-cust-white lg:text-[20px] text-[14px] font-semibold">{item}</p>
        </motion.div>
    ))}
  </div>
  
  <div className="hidden lg:flex justify-center mx-28 mb-20 lg:col-span-2 col-span-1">
  <img src={Linemid} alt="Line" />
</div>

  <div className="flex flex-col items-center mx-6 mb-10 lg:col-span-4 lg:mr-10 lg:-ml-10">
    <div className="flex justify-center ">
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
                }} src={BudayaKerja} alt="Budaya Kerja" className="lg:w-full w-[250px] mb-5" />
    </div>
    {items2.map((item, index) => (
       <motion.div
       initial={{ opacity: 0}}
       whileInView={{
         opacity: 1,
         x: 0,
         transition: {
           type: "spring",
           duration: 4.0,
           damping: 15,
           stiffness: 50,
         },
       }}  key={index} className="flex justify-center box-border bg-cust-orange rounded-full my-2 lg:my-5 lg:w-full py-3 w-full">
        <p className="text-center font-lato text-cust-white lg:text-[20px] text-[14px] font-semibold ">{item}</p>
        </motion.div>
    ))}
  </div>
</div>
    
  </div>
);

export default ArahGerakComponent;