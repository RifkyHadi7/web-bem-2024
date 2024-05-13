import React from 'react'
import Misi from '../../../assets/Misi.svg'
import Visi from '../../../assets/Visi.svg'
import background from "../../../assets/bgcorak.svg";
import bgArtikelPC from '../../../assets/bgArtikelPC.png'

export default function VisiMisi() {
  return (
    <div className='px-10 bg-cust-yellow' style={{ backgroundImage: `url(${background}), url(${bgArtikelPC})`, backgroundSize: 'cover', backgroundPosition: 'top -20px, top -20px' }}>
  



      
        <div className='flex pb-0 pt-24 justify-end'>
        <img src={Visi} alt="Visi" className='mr-20'/>
            <div className='font-lato text-cust-green rounded-xl box-border my-20 p-10 h-38 bg-cust-yellow'>
                <p className='my-1'>Menjadikan BEM FILKOM UB sebagai WADAH KOLABORASI</p>
                <p className='my-1'>bagi KBM FILKOM untuk MEMBERSAMAI dalam</p>
                <p className='my-1'>menciptakan lingkungan kelembagaan yang harmonis,</p>
                <p className='my-1'>adaptif, dan inklusif demi mewujudkan KEBERMANFAATAN SESAMA.</p>
            </div>
        </div>
        <div className='flex pt-5 mt-0 justify-start'>
        
        <div className='font-lato text-left text-cust-green rounded-xl box-border my-20 p-10 h-38 bg-cust-yellow'>
          <ol style={{ listStyleType: 'decimal' }}>
            <li>Memaksimalkan potensi dan kesejahteraan anggota BEM FILKOM UB melalui pengembangan keterampilan, mental, dan peningkatan partisipasi dalam kegiatan organisasi. (Internal)</li>
            <li>Membangun hubungan kemitraan yang stabil dengan kelembagaan yang ada di FILKOM untuk menciptakan kerja sama mutualisme dan media pertukaran ide untuk mewujudkan inisiatif bersama. (Eksternal)</li>
            <li>Menyediakan layanan dan fasilitas yang tepat sasaran untuk memenuhi kebutuhan serta kesejahteraan mahasiswa FILKOM secara menyeluruh. (Pelayanan)</li>
            <li>Mendorong pengembangan sumber daya dan profesional mahasiswa FILKOM melalui berbagai program efektif yang dibutuhkan mahasiswa. (Pengembangan)</li>
            <li>Mewadahi pergerakan mahasiswa untuk aktif berpartisipasi agar memiliki kesadaran dalam isu sosial dan politik yang relevan dengan keterkaitan mahasiswa FILKOM. (Pergerakan)</li>
            <li>Menyelenggarakan kegiatan pengabdian yang strategis bagi mahasiswa FILKOM guna menumbuhkan rasa empati kepada masyarakat. (Pengabdian)</li>
          </ol>
        </div>

        

          <img src={Misi} alt="Misi" className='ml-20'/>
        </div>
    </div>
  )
}
