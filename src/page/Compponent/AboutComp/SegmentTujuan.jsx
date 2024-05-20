import React from "react";
import background from "../../../assets/bgTentang.png";
import logo from "../../../assets/LogoTentangPC.png";
import { motion } from "framer-motion";

const SegmentTujuan = () => {
  return (
    <div
      className="overflow-hidden w-full h-full bg-[-100px] sm:bg-[-100px] md:bg-[0px] lg:bg-[0px] bg-cover pt-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="mx-auto mt-auto lg:mt-0 basis-1/2">
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
            }}
            src={logo}
            className="lg:w-[350px] mx-auto mt-auto sm:w-[300px] w-[250px]"
          />
        </div>
        <div className="lg:text-start mt-4 lg:mt-0 lg:ml-4 lg:basis-1/2 mx-7 text-center pb-10">
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
            }}
          className="font-lato font-extrabold text-3xl lg:text-[50px] pt-10 pb-4 text-cust-green pr-4 sm:pr-0 text-start pl-4 outline-cust-green">
           BEM FILKOM UB
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
            }}
          className="text-justify lg:pr-6 lg:mr-20 pr-4 sm:pr-0 font-lato mb-10 lg:text-[20px] text-[16px] pl-4 text-cust-black lg:mb-40">
            BEM FILKOM UB merupakan badan eksekutif yang memiliki 4 fungsi utama dalam membantu mahasiswa FILKOM UB berproses, diantaranya ialah pelayanan khususnya dibidang advokasi dan kesejahteraan mahasiswa, pengembangan khususnya dalam mengembangkan soft skill serta minat bakat mahasiswa, pengabdian dalam mengamalkan salah satu Tri Dharma Perguruan Tinggi, dan pergerakan yang mewadahi mahasiswa untuk bertindak sebagai inisiator dalam mengawal isu yang beredar.
          
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SegmentTujuan;