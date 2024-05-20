import React from 'react';
import ArahGerak from '../../../assets/ArahGerak.svg';
import Linemid from '../../../assets/LineArah.svg';
import BudayaKerja from '../../../assets/BudayaKerja.svg';
import DaunKiri from '../../../assets/daunKiri.png';
import DaunKanan from '../../../assets/daunKanan.png';


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
    <div className='flex w-100'>
        <div className='flex flex-row w-full justify-between'>
        <img src={DaunKiri} alt="" className='lg:w-64 lg:h-64 jutify-start h-32'/>

        </div>
        <div className=' pr-0 justify-end'>
        <img src={DaunKanan} alt="" className='lg:w-64 lg:h-64 justify-end h-32'/>

        </div>
        
    </div>

    <div className="lg:grid lg:grid-cols-10 flex flex-col">
  <div className="flex flex-col items-center mx-6 mb-10 lg:col-span-4 lg:-mr-10 lg:ml-10"> 
    <div className="flex justify-center ">
      <img src={ArahGerak} alt="Arah Gerak" className="lg:w-full w-[200px] mb-5" />
    </div>
    {items.map((item, index) => (
      <div key={index} className="flex justify-center box-border bg-cust-orange rounded-full my-5 lg:w-full lg:py-3 w-full py-3">
        <p className="text-center font-lato text-cust-white lg:text-[20px] text-[14px] font-semibold">{item}</p>
      </div>
    ))}
  </div>
  
  <div className="hidden lg:flex justify-center mx-28 mb-20 lg:col-span-2 col-span-1">
  <img src={Linemid} alt="Line" />
</div>

  <div className="flex flex-col items-center mx-6 mb-10 lg:col-span-4 lg:mr-10 lg:-ml-10">
    <div className="flex justify-center ">
      <img src={BudayaKerja} alt="Budaya Kerja" className="lg:w-full w-[200px] mb-5" />     
    </div>
    {items2.map((item, index) => (
      <div key={index} className="flex justify-center box-border bg-cust-orange rounded-full my-5 lg:w-full lg:py-3 w-full py-3">
        <p className="text-center font-lato text-cust-white lg:text-[20px] text-[14px] font-semibold ">{item}</p>
      </div>
    ))}
  </div>
</div>
    
  </div>
);

export default ArahGerakComponent;