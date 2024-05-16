import React from 'react'
import Misi from '../../../assets/Misi.svg'
import Visi from '../../../assets/Visi.svg'
import background from "../../../assets/bgcorak.svg";
import bgArtikelHP from '../../../assets/bgArtikelHP.png'

export default function VisiMisi() {
  return (
    <div className='px-10 bg-cust-yellow' style={{ backgroundImage: `url(${background}), url(${bgArtikelHP})`, backgroundSize: 'cover', backgroundPosition: 'top -20px, top -20px' }}>
  



      
        <div className='flex pb-0 pt-24 justify-end'>
        <img src={Visi} alt="Visi" className='mx-20'/>
            <div className='font-lato text-xl text-cust-green rounded-3xl box-border mr-20 mx-8 my-20 p-10 h-38 bg-cust-yellow'>
                <p className='my-1'>Menjadikan BEM FILKOM UB sebagai WADAH KOLABORASI bagi KBM FILKOM untuk MEMBERSAMAI dalam menciptakan lingkungan kelembagaan yang harmonis, adaptif, dan inklusif demi mewujudkan KEBERMANFAATAN SESAMA.</p>
            </div>
        </div>
        <div className='flex pt-5 mt-0 justify-start'>
        
        <div className='font-lato text-justify text-xl text-cust-green rounded-3xl box-border ml-20 mx-8 my-20 px-14 p-10 h-38 bg-cust-yellow'>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Memaksimalkan potensi dan kesejahteraan anggota BEM FILKOM UB melalui pengembangan keterampilan, mental, dan peningkatan partisipasi dalam kegiatan organisasi. (Internal)</li>
            <li>Membangun hubungan kemitraan yang stabil dengan kelembagaan yang ada di FILKOM untuk menciptakan kerja sama mutualisme dan media pertukaran ide untuk mewujudkan inisiatif bersama. (Eksternal)</li>
            <li>Menyediakan layanan dan fasilitas yang tepat sasaran untuk memenuhi kebutuhan serta kesejahteraan mahasiswa FILKOM secara menyeluruh. (Pelayanan)</li>
            <li>Mendorong pengembangan sumber daya dan profesional mahasiswa FILKOM melalui berbagai program efektif yang dibutuhkan mahasiswa. (Pengembangan)</li>
            <li>Mewadahi pergerakan mahasiswa untuk aktif berpartisipasi agar memiliki kesadaran dalam isu sosial dan politik yang relevan dengan keterkaitan mahasiswa FILKOM. (Pergerakan)</li>
            <li>Menyelenggarakan kegiatan pengabdian yang strategis bagi mahasiswa FILKOM guna menumbuhkan rasa empati kepada masyarakat. (Pengabdian)</li>
          </ol>
        </div>

        

          <img src={Misi} alt="Misi" className='mx-20'/>
        </div>
    </div>
  )
}
