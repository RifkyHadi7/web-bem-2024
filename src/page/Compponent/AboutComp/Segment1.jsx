import React from "react";
import background from "../../../assets/welcoming.svg";
import awanKrem from "../../../assets/awanKrem.png"
import { motion } from "framer-motion";

const Segment1 = () => {
  return (
    <div className="overflow-hidden w-full h-full bg-[-100px] sm:bg-[-100px] md:bg-[0px] lg:bg-[0px] bg-cover" style={{ backgroundImage: `url(${background})` }}>
      <div className="lg:flex-start lg:justify-start font-lato h-full pt-[80px] lg:pt-[80px] lg:pl-[50px]">
        <div className="lg:mt-[60px] lg:mx-auto text-start pb-[70px] sm:pb-[50px] ml-[10px] sm:ml-[20px]">
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
            }}
            className="text-[40px] sm:text-[60px] w-full h-[45px] sm:h-[60px] lg:h-[90px] lg:text-[65px] xl:text-[80px] text-cust-lime font-extrabold"
            style={{
              textShadow: "0 0 1.5px #BCDB37",
            }}
          >
          Tentang
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
            }}
            className="text-[40px] sm:text-[60px] w-full h-[45px] sm:h-[60px] lg:h-[90px] lg:text-[65px] xl:text-[80px] text-cust-lime font-extrabold"
            style={{
              textShadow: "0 0 1.5px #BCDB37",
            }}
          >
            BEM FILKOM
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 3.2,
                damping: 15,
                stiffness: 50,
              },
            }}
            className="text-[40px] sm:text-[60px] w-full lg:text-start lg:text-[65px] xl:text-[80px] text-cust-lime text-bold font-extrabold"
            style={{
              textShadow: "0 0 1.5px #BCDB37",
            }}
          >
            UB 2024
          </motion.div>
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                duration: 5.0,
                damping: 15,
                stiffness: 50,
              },
            }}
            className="text-cust-white text-[20px] sm:text-[35px] md:w-full lg:text-start lg:text-[30px] font-extrabold pb-10"
          >
            Kabinet Arthakara
          </motion.div>
        </div>
      </div>
      <div>
        <img src={awanKrem} className="" alt="awanKrem" />
      </div>
    </div>
  );
};

export default Segment1;
