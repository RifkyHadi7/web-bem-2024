import React from 'react'
import BgFiloLogo from '../../../assets/BgFiloLogo.svg'
import BgFiLogoAlt from '../../../assets/BgFiLogoAlt.png'
import HeadFiloLogo from '../../../assets/HeadFiloLogo.svg'
import BingkaiPutihKanan from '../../../assets/BingkaiPutihKanan.png'
import BingkaiPutihKiri from '../../../assets/BingkaiPutihKiri.png'
import KartuFiloLogo from './KartuFiloLogo.jsx'
import Maknaburung11 from '../../../assets/Maknaburung11.png'
import Maknasayap12 from '../../../assets/Maknasayap12.png'
import Maknaekor21 from '../../../assets/Maknaekor21.png'
import Maknalingkaran22 from '../../../assets/Maknalingkaran22.png'
import { motion } from "framer-motion";

const SegmentFiloLogo = () => {
  return (
    <div className="overflow-hidden flex flex-col w-full mx-auto lg:bg-cover bg-contain lg:max-w-[1920px] h-full lg:h-auto -mt-16 lg:-mt-24 mb-0 pb-16 lg:pb-32 justify-center" style={{backgroundImage:`url(${BgFiloLogo})`}}>
        <div className='w-screen lg:w-full h-full mt-16 lg:mt-32 px-0'>
            <div className='flex flex-row w-full justify-between'>
                <img src={BingkaiPutihKiri} alt="" className='w-[20vw] lg:w-64'/>
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
                }} src={HeadFiloLogo} alt="" className='-ml-[10vw] w-[70vw] lg:w-[664px] pt-12'/>
                <img src={BingkaiPutihKanan} alt="" className='-ml-[10vw] w-[20vw] lg:w-64' />
            </div>
        </div>
        <div className='grid grid-cols-1 grid-rows-4 lg:grid-rows-2 lg:grid-cols-2 gap-x-36 gap-y-20 lg:gap-y-24 h-full mt-10 px-12 bg-contain text-cust-white bg-[url(https://res.cloudinary.com/dnoqmou6x/image/upload/v1715971131/BgFiLogoAlt_mjfwqi.png)]'>
            <KartuFiloLogo title="Burung Phoenix" imgsrc={Maknaburung11} desc="Melambangkan semangat berapi-api yang tak pernah padam dan kehadirannya yang menjadi penerang di sekelilingnya."/>
            <KartuFiloLogo title="Sayap" imgsrc={Maknasayap12} desc="Gestur membentangkan sayap bermakna organisasi ini sebagai wadah kolaborasi untuk menuju tempat yang lebih tinggi."/>
            <KartuFiloLogo title="Ekor Berapi" imgsrc={Maknaekor21} desc="Bermakna semangat dalam diri yang kuat, dan jumlah ekor merepresentasikan jumlah program studi yang ada di FILKOM UB."/>
            <KartuFiloLogo title="Lingkaran Kuning" imgsrc={Maknalingkaran22} desc="Lingkaran kuning bermakna cahaya yang memancarkan aura baik tanpa henti."/>
        </div>
    </div>
  )
}

export default SegmentFiloLogo