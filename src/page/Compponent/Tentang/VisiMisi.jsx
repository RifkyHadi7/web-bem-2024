import React from 'react'
import Misi from '../../../assets/Misi.svg'
import Visi from '../../../assets/Visi.svg'
import background from '../../../assets/welcoming.svg'


export default function VisiMisi() {
  return (
    <div className="overflow-hidden flex flex-col w-full mx-auto lg:bg-cover bg-contain lg:max-w-[1920px] h-full lg:h-auto lg:-mt-24 mb-0 pb-14 lg:pb-32 justify-center" style={{backgroundImage:`url(${background})`}}>

        <div className='lg:flex grid grid-cols-3 pb-0 lg:pt-24 justify-end mt-5'>
        <img src={Visi} alt="Visi" className='lg:mx-20 mx-auto w-[125px] col-span-1 my-auto'/>
            <div className='font-lato lg:text-xl text-cust-green rounded-3xl box-border lg:mr-20 lg:mx-8 lg:my-20 lg:p-10 lg:h-38 bg-cust-yellow mt-10 mr-8  px-7 py-4 col-span-2 text-[14px] font-semibold'>
                <p className='my-1'>Menjadikan BEM FILKOM UB sebagai WADAH KOLABORASI bagi KBM FILKOM untuk MEMBERSAMAI dalam menciptakan lingkungan kelembagaan yang harmonis, adaptif, dan inklusif demi mewujudkan KEBERMANFAATAN SESAMA.</p>
            </div>
        </div>


        <div className='lg:flex grid grid-cols-3 pt-5 mt-5 justify-start'>       
        <div className='font-lato lg:text-justify text-left lg:text-xl text-[14px] text-cust-green rounded-3xl box-border lg:ml-20 lg:mx-8 lg:my-20 lg:px-14 lg:p-10 lg:h-38 bg-cust-yellow col-span-2 ml-8 mr-2 font-semibold py-4 px-7'>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Memaksimalkan potensi dan kesejahteraan anggota BEM FILKOM UB melalui pengembangan keterampilan, mental, dan peningkatan partisipasi dalam kegiatan organisasi. (Internal)</li>
            <br/>
            <li>Membangun hubungan kemitraan yang stabil dengan kelembagaan yang ada di FILKOM untuk menciptakan kerja sama mutualisme dan media pertukaran ide untuk mewujudkan inisiatif bersama. (Eksternal)</li>
            <br/>
            <li>Menyediakan layanan dan fasilitas yang tepat sasaran untuk memenuhi kebutuhan serta kesejahteraan mahasiswa FILKOM secara menyeluruh. (Pelayanan)</li>
            <br/>
            <li>Mendorong pengembangan sumber daya dan profesional mahasiswa FILKOM melalui berbagai program efektif yang dibutuhkan mahasiswa. (Pengembangan)</li>
            <br/>
            <li>Mewadahi pergerakan mahasiswa untuk aktif berpartisipasi agar memiliki kesadaran dalam isu sosial dan politik yang relevan dengan keterkaitan mahasiswa FILKOM. (Pergerakan)</li>
            <br/>
            <li>Menyelenggarakan kegiatan pengabdian yang strategis bagi mahasiswa FILKOM guna menumbuhkan rasa empati kepada masyarakat. (Pengabdian)</li>
          </ol>
        </div>

        

          <img src={Misi} alt="Misi" className='mx-auto lg:mx-20 col-span-1 my-auto w-[125px]'/>
        </div>
    </div>
  )
}