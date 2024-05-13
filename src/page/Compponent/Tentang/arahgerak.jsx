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
        <img src={DaunKiri} alt="" className='max-w-64 h-auto jutify-start'/>

        </div>
        <div className='w-1/2 pr-0 justify-end'>
        <img src={DaunKanan} alt="" className='max-w-64 h-auto justify-end ml-64' style={{ right: '0px'}}/>

        </div>
        
    </div>

    <div className="flex items-center">

    

    <div className="flex ml-20 mb-20"> 
      <div>
        <img src={ArahGerak} alt="Arah Gerak" className='mb-10 ml-20'/>
        {items.map((item, index) => (
          <div key={index} className="box-border bg-cust-orange rounded-full ml-20 my-5 p-4">
            <p className="text-center font-lato text-cust-white">{item}</p>
          </div>
        ))}
      </div>
      <div className="mx-20 justify-center">
        <img src={Linemid} alt="Line Arah" />
      </div>
      <div>
        <img src={BudayaKerja} alt="Budaya Kerja" className='mb-10' />
        {items2.map((item, index) => (
          <div key={index} className="box-border bg-cust-orange rounded-full my-5 p-4">
            <p className="text-center font-lato text-cust-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
);

export default ArahGerakComponent;
