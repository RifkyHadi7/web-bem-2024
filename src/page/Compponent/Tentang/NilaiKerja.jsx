import React from 'react';
import background from "../../../assets/bgcorak.svg";
import Nilaikerja from "../../../assets/NilaiKerja.svg";

export default function NilaiKerja() {
  return (
    <div className='bg-cust-green flex flex-col justify-center items-center py-10' style={{ backgroundImage: `url(${background})` }}>
      <img src={Nilaikerja} alt="" className='mb-10'/> 

        <div className='w-100 justify-center'>
      <div className='w-full max-w-screen-md flex mb-10'>
        <Box title="KOLABORASI" description="Sebagai bentuk kerja sama dari segala unsur yang saling mendukung dan menjalankan tujuan untuk FILKOM lebih baik." />
        <Box title="AKSELERASI" description="Percepatan birokrasi dan administrasi sebagai langkah awal kesuksesan dan keberlangsungan lembaga." />
      </div>
      <div className='w-full max-w-screen-md flex'>
        <Box title="INTEGRASI" description="Tidak hanya bersama namun dengan bersinergi memiliki tujuan dan cita cita yang sama." />
        <Box title="TRANSPARANSI" description="Kejelasan dan keterbukaan atas segala bagian." />
      </div>

        </div>
    </div>
  );
}

const Box = ({ title, description }) => (
  <div className='flex justify-center w-1/2 h-full items-center mb-6 md:mb-0 md:mr-10 ml-10'>
    <div className='box-border bg-cust-yellow rounded-xl w-full md:w-64 p-3 flex flex-col justify-center items-center'>
      <div className='box-border  p-3 bg-orange-200 rounded-full text-center'>
        <h1 className='text-cust-orange font-bold font-lato'>{title}</h1>
      </div>
      <p className='text-cust-green text-center font-lato'>{description}</p>
    </div>
  </div>
);


