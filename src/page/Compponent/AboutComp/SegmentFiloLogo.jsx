import React from 'react'
import BgFiloLogo from '../../../assets/BgFiloLogo.svg'
import BgFiLogoAlt from '../../../assets/BgFiLogoAlt.png'
import HeadFiloLogo from '../../../assets/HeadFiloLogo.svg'
import TangkaiWKiri from '../../../assets/TangkaiWKiri.svg'
import TangkaiWKanan from '../../../assets/TangkaiWKanan.svg'
import KartuFiloLogo from './KartuFiloLogo.jsx'
import Maknaburung11 from '../../../assets/Maknaburung11.png'
import Maknasayap12 from '../../../assets/Maknasayap12.png'
import Maknaekor21 from '../../../assets/Maknaekor21.png'
import Maknalingkaran22 from '../../../assets/Maknalingkaran22.png'

const SegmentFiloLogo = () => {
  return (
    <div className="overflow-hidden flex flex-col w-full mx-auto lg:bg-cover bg-contain lg:max-w-[1920px] h-full lg:h-auto -mt-8 lg:-mt-24 mb-0 pb-20 lg:pb-32 justify-center" style={{backgroundImage:`url(${BgFiloLogo})`}}>
        <div className='w-screen lg:w-full h-full mt-16 lg:mt-32 px-0'>
            <div className='flex flex-row w-full justify-between'>
                <img src={TangkaiWKiri} alt="" className='w-20 lg:w-64'/>
                <img src={HeadFiloLogo} alt="" className='w-60 lg:w-[664px] pt-12'/>
                <img src={TangkaiWKanan} alt="" className='w-20 lg:w-64' />
            </div>
        </div>
        <div className='grid grid-cols-1 grid-rows-4 lg:grid-rows-2 lg:grid-cols-2 gap-x-36 gap-y-24 h-full mt-10 px-12 bg-contain' style={{backgroundImage:`url(${BgFiLogoAlt})`}}>
            <KartuFiloLogo title="Burung Phoenix" imgsrc={Maknaburung11} desc="Melambangkan semangat berapi-api yang tak pernah padam dan kehadirannya yang menjadi penerang di sekelilingnya."/>
            <KartuFiloLogo title="Sayap" imgsrc={Maknasayap12} desc="Gestur membentangkan sayap bermakna organisasi ini sebagai wadah kolaborasi untuk menuju tempat yang lebih tinggi."/>
            <KartuFiloLogo title="Ekor Berapi" imgsrc={Maknaekor21} desc="Bermakna semangat dalam diri yang kuat, dan jumlah ekor merepresentasikan jumlah program studi yang ada di FILKOM UB."/>
            <KartuFiloLogo title="Lingkaran Kuning" imgsrc={Maknalingkaran22} desc="Lingkaran kuning bermakna cahaya yang memancarkan aura baik tanpa henti."/>
        </div>
    </div>
  )
}

export default SegmentFiloLogo