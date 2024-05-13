import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 150 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 2.0,
          damping: 10,
          stiffness: 100,
        },
      }}
      className="cust-outer-container bg-cust-green text-white font-lato pt-8"
    >
      <div className="cust-outer-container">
        <div className="cust-outer-container">


          <div className="flex flex-col lg:flex-row lg:justify-between pb-12 mt-10 mb-5">
            <div className="w-2/4 items-center h-full flex-shrink-0 lg:w-[250px] mx-auto lg:mx-10 lg:mr-2">
              <img
                className="mx-auto drop-shadow-xl lg:ml-2"
                src='https://res.cloudinary.com/dkncrhkfo/image/upload/v1715490690/logotulisan_cszdxj.png'
                alt="missing Logo img"
              ></img>
            </div>

            <div className="flex flex-col text-center px-0 lg:px-5 pt-10 lg:w-2/4 lg:pt-0 lg:pl-10">
              <h3 className="text-cust-white text-3xl  font-bold mb-5">
                Sekretariat
              </h3>
              <p className="text-2xl font-light">Gedung Kreativitas Mahasiswa Lt 2</p>
              <p className="text-2xl font-light">Fakultas Ilmu Komputer UB</p>
              <p className="text-2xl font-light">Jalan Veteran Nomor 8, Lowokwaru, Malang</p>
              <p className="text-2xl font-light">Email : bemfilkom@ub.ac.id</p>
              <div className="flex flex-wrap flex-row justify-center pb-24 pt-10">
                <Link to="http://www.instagram.com/bemfilkomub/" target="_blank"
                >
                  <img
                    src='https://res.cloudinary.com/dkncrhkfo/image/upload/v1715490688/ig_aamgeg.png'
                    alt="missing instagram img"
                    className="px-0 lg:mx-2 mx-2 py-3 lg:py-0 object-cover transition duration-300 transform hover:scale-125 w-[50px]"
                  ></img>
                </Link>
                <Link to="http://page.line.me/?accountId=csj9184g&openerPlatform=webview&openerKey=webview%3AunifiedSearch" target="_blank"
                >
                  <img
                    src='https://res.cloudinary.com/dkncrhkfo/image/upload/v1715490688/line_nlwwfo.png'
                    alt="missing line img"
                    className="px-0 lg:mx-2 mx-2 py-3 lg:py-0 object-cover transition duration-300 transform hover:scale-125 w-[50px]"
                  ></img>
                </Link>
                <Link to="http://www.tiktok.com/@bemfilkomub" target="_blank">
                  <img
                    src='https://res.cloudinary.com/dkncrhkfo/image/upload/v1715490701/tiktok_ydqror.png'
                    alt="missing tiktok img"
                    className="px-0 lg:mx-2 mx-2 py-3 lg:py-0 object-cover transition duration-300 transform hover:scale-125 w-[50px]"
                  ></img>
                </Link>
                <Link to="http://www.youtube.com/c/BEMFILKOMUB" target="_blank">
                  <img
                    src='https://res.cloudinary.com/dkncrhkfo/image/upload/v1715490688/youtube_pvq27i.png'
                    alt="missing youtube img"
                    className="px-0 lg:mx-2 mx-2 py-3 lg:py-0 object-cover transition duration-300 transform hover:scale-125 w-[50px] "
                  ></img>
                </Link>
              </div>
            </div>

            <div className="flex flex-col text-center pt-10 lg:text-right lg:w-1/4 lg:pt-0 lg:mr-10 lg:pr-8 gap-3">
              <h3 className="text-cust-white font-semibold mb-3 text-3xl">
                Tautan Terkait
              </h3>
              <a
                href="https://filkom.ub.ac.id/"
                target="_blank"
                className="hover:underline text-2xl font-light hover:font-normal"
              >
                FILKOM UB
              </a>
              <a
                href="https://bemfilkom.ub.ac.id/"
                target="_blank"
                className="hover:underline text-2xl font-light hover:font-normal"
              >
                Nawasena 2023
              </a>

              <a
                href="https://bemfilkom.ub.ac.id/2022/"
                target="_blank"
                className="hover:underline text-2xl font-light hover:font-normal"
              >
                Aryakarsa 2022
              </a>
              <a
                href="https://bemfilkom.ub.ac.id/2021/"
                target="_blank"
                className="hover:underline text-2xl font-light hover:font-normal"
              >
                Mozaik Asa 2021
              </a>
              <a
                href="https://bemfilkom.ub.ac.id/2020/"
                target="_blank"
                className="hover:underline text-2xl font-light hover:font-normal"
              >
                Elaborasi Makna 2020
              </a>
              <a
                href="https://bemfilkom.ub.ac.id/2019/"
                target="_blank"
                className="hover:underline text-2xl font-light hover:font-normal"
              >
                Atmabara 2019
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <hr className="w-[1200px] h-0 border-[1px] border-solid border-white" />
          </div>

          <div className="group flex justify-center font-semibold text-center py-5 sm:body5 sm:py-10 md:text-base xl:text-xl">
            Made with 🧡️ by Biro Pengembangan Informasi & Teknologi
            2024
            {/* <div className="opacity-0 lg:group-hover:opacity-100 transition-all duration-500 ml-2">
              ❤️️
            </div> */}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
