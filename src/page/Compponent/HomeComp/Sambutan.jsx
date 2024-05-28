import background from "../../../assets/kremBg.svg";
import backgroundMobile from "../../../assets/bgKremMobile.svg";
import underline from "../../../assets/underlineJudul.svg";
import contoh from "../../../assets/contohPirza.png";
import sambutan from "../../../assets/sambutan.svg";
import popupPres from "../../../assets/popupPres.svg";
import popupWapres from "../../../assets/popupWapres.svg";
import arrowBawah from "../../../assets/arrowBawah.svg"
import arrowAtas from "../../../assets/arrowAtas.svg"
import { motion } from "framer-motion";
import { Popper } from '@mui/base/Popper';
import React, { useState } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Sambutan = () => {
  const [anchorElPresiden, setAnchorElPresiden] = useState(null);
  const [anchorElWakilPresiden, setAnchorElWakilPresiden] = useState(null);
  const [isPictureDownPresiden, setIsPictureDownPresiden] = useState(true);
  const [isPictureDownWakilPresiden, setIsPictureDownWakilPresiden] = useState(true);

  const handleClickPresiden = (event) => {
    setAnchorElPresiden(anchorElPresiden ? null : event.currentTarget);
    setIsPictureDownPresiden(!isPictureDownPresiden);
  };

  const handleClickWakilPresiden = (event) => {
    setAnchorElWakilPresiden(anchorElWakilPresiden ? null : event.currentTarget);
    setIsPictureDownWakilPresiden(!isPictureDownWakilPresiden);
  };

  const openPresiden = Boolean(anchorElPresiden);
  const openWakilPresiden = Boolean(anchorElWakilPresiden);

  const idPresiden = openPresiden ? 'presiden-popper' : undefined;
  const idWakilPresiden = openWakilPresiden ? 'wakil-presiden-popper' : undefined;
  const longText = `
Puji dan syukur kita panjatkan kepada Tuhan Yang Maha Esa atas rahmat dan karunia-Nya yang selalu menyertai perjuangan kami. BEM FILKOM UB 2024 Kabinet Arthakara hadir bagaikan pena yang siap mengukir cerita pada setiap lembaran, dengan tekad untuk memberikan sumbangsih demi kebermanfaatan yang berkelanjutan. Kami menjalankan kewajiban dari aspek Pengembangan, Pelayanan, Pengabdian, dan Pergerakan, yang menjadi identitas kami dalam mempertahankan nilai vital sebuah organisasi eksekutif.
  
Dengan semangat dan partisipasi dari seluruh anggota KBMFILKOM, kami hadir untuk membawa perubahan positif dan inovasi dalam setiap langkah yang kami ambil. Melalui kebersamaan, kami menghadapi setiap rintangan, menciptakan solusi kreatif, dan memberikan kontribusi aktif demi mencapai tujuan dan harapan bersama.
  
BEM FILKOM UB 2024 Kabinet Arthakara membutuhkan media untuk mendokumentasikan setiap aksi nyata kami. Untuk mengiringi perjalanan hingga akhir kisah, pada platform inilah BEM FILKOM UB 2024 yang akan menjadi museum dari setiap karya yang kami hadirkan. Kami mengucapkan terima kasih kepada seluruh pihak yang terlibat dan selalu mendukung kami, sang pembawa secercah harapan demi mensukseskan Fakultas Ilmu Komputer, Universitas Brawijaya, dan Indonesia.
  
SATU HATI SATU JIWA FILKOM!

Wassalamualaikum Warahmatullahi Wabarakatuh....

`;
  return (
    <div className="overflow-hidden w-full h-full bg-[-100px] sm:bg-[-100px] md:bg-[0px] lg:bg-[0px] bg-contain lg:bg-cover" style={{ backgroundImage: `url(${background})` }}>
      <div className="cust-container pb-20">
        <div className="lg:grid flex-col lg:grid-cols-4 lg:gap-2 py-10">
          <div className="col-span-full flex flex-col items-center">
            <div className="items-center">
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
                src={sambutan}
                className="mx-auto w-5/6 lg:w-full"
              />
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
              }}
              src={underline}
              className="lg:w-[200px] mt-2 w-[150px]"
            />
          </div>
          <div className="mt-[40px]  items-center flex flex-col mx-auto  ">
            <div onClick={handleClickPresiden} className="lg:w-full w-max">
              <button
                className="font-lato ring-1 ring-cust-green bg-cust-green outline-3 outline-gray-200  focus:outline-5 text-white text-lg font-semibold py-1.5 px-5 rounded-full"
                aria-describedby={idPresiden}
                type="button"

                style={{ minWidth: "200px" }}
              >
                Presiden
              </button>
              <img src="https://res.cloudinary.com/dkncrhkfo/image/upload/v1715851631/trapesium_pyjb0a.png" alt="" className="w-[100px] mx-auto mt-[-9px] cursor-pointer" />
              <img src={isPictureDownPresiden ? arrowBawah : arrowAtas} alt="" className="w-[15px] mx-auto mt-[-15px] lg:mt-[-14px] cursor-pointer" />
              {openPresiden && (
                <Popper
                  id={idPresiden}
                  open={openPresiden}
                  anchorEl={anchorElPresiden}
                  placement="bottom-start"
                  style={{ position: 'fixed' }}
                >
                  <div className="w-[200px]  mt-1 flex justify-center">
                    <img src={popupPres} />
                  </div>
                </Popper>
              )}
            </div>
            <motion.img
              initial={{ opacity: 0, y: 50, x: 0, z: 0 }}
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
              animate={{ marginTop: openPresiden ? '80px' : '30px' }}
              src='https://res.cloudinary.com/dkncrhkfo/image/upload/v1715917719/pres_kfvo2c.png'
              className="lg:w-[200px] mt-3  mx-auto w-[175px]"
            />
          </div>

          <div className="mt-10 relative w-full">
            <div className="wapres w-full items-center" style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div onClick={handleClickWakilPresiden} className="lg:w-full w-max ">
                <button
                  className="font-lato ring-1 ring-cust-green  bg-cust-green outline-3 outline-gray-200 text-white text-lg font-semibold py-1.5 px-5 rounded-full  ml-0"
                  aria-describedby={idWakilPresiden}
                  type="button"

                  style={{ minWidth: "200px", position: 'relative', zIndex: 1 }}
                >
                  Wakil Presiden
                </button>
                <img src="https://res.cloudinary.com/dkncrhkfo/image/upload/v1715851631/trapesium_pyjb0a.png" alt="" className="w-[100px] mx-auto mt-[-8px] cursor-pointer" />
                <img src={isPictureDownWakilPresiden ? arrowBawah : arrowAtas} alt="" className="w-[15px] mx-auto mt-[-15px] cursor-pointer" />
                {openWakilPresiden && (
                  <Popper
                    id={idWakilPresiden}
                    open={openWakilPresiden}
                    anchorEl={anchorElWakilPresiden}
                    placement="bottom-start"
                    style={{ position: 'fixed' }}
                  >
                    <div className="lg:w-[314px] w-[200px] mt-1 flex justify-center">
                      <img src={popupWapres} />
                    </div>
                  </Popper>
                )}
              </div>

              <motion.img
                initial={{ opacity: 0, y: 50, x: 0, z: 0 }}
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
                animate={{ marginTop: openWakilPresiden ? '80px' : '30px' }}
                src='https://res.cloudinary.com/dkncrhkfo/image/upload/v1715917720/wapres_sdvi6p.png'
                className="lg:w-[200px] mt-3 mx-auto w-[175px]"
              />
            </div>
          </div>

          <div className="mt-10 text-justify mx-auto col-span-2 px-8 text-[16px] lg:text-[20px] font-lato text-cust-black">
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
              <span className="font-extrabold text-cust-black whitespace-">Assalamualaikum Warahmatullahi Wabarakatuh, Shalom, Om Swastyastu, Namo Buddhaya, Salam Kebajikan Bagi Kita Semua.</span>
              <br />
              {/* <ReadMoreReact
                min={100}
                ideal={200}
                max={250}
                readMoreText={<span style={{ color: '#208B71', cursor: 'pointer' }}>... Lihat Selengkapnya</span>}
              /> */}
              <div className="whitespace-pre-wrap">
                <ReactReadMoreReadLess
                  charLimit={350}
                  readMoreText={"Lihat Selengkapnya"}
                  readMoreClassName={"text-cust-green"}
                  readLessText={"Lebih Sedikit..."}
                  readLessClassName={"text-cust-green"}

                >
                  {longText}
                </ReactReadMoreReadLess>
              </div>

              <br />
              <span className="font-extrabold text-cust-black">BEM FILKOM UB 2024</span>
            </motion.div>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <motion.div
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
            }}>
            <span className="font-extrabold text-cust-green font-lato justify-center mx-auto lg:text-[28px] text-[24px]" >#SatuRagaWujudkanAsa</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sambutan;