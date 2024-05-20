import React from "react";
import background from "../../../assets/bgcorak.svg";
import Nilaikerja from "../../../assets/NilaiKerja.svg";
import awan from '../../../assets/awanKrem.png';

export default function NilaiKerja() {
  return (
    <div
      className="bg-cust-green flex flex-col justify-center items-center lg:py-10 lg:px-20 mx-auto "
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={Nilaikerja} alt="" className="mb-10 w-[250px] mt-10 lg:mx-auto lg:w-[25rem]"  />

      <div className="mb-7 ">
        <div className="lg:grid lg:grid-cols-2 flex-col lg:mb-10 font-semibold text-[14px] lg:text-[20px] px-4">
          <Box1
            title="KOLABORASI"
            description="Sebagai bentuk kerja sama dari segala unsur yang saling mendukung dan menjalankan tujuan untuk FILKOM lebih baik."
          />
          <Box3
            title="AKSELERASI"
            description="Percepatan birokrasi dan administrasi sebagai langkah awal kesuksesan dan keberlangsungan lembaga."
          />
        </div>
          <div className="lg:grid lg:grid-cols-2 lg:px-auto flex-col lg:mb-10 font-semibold text-[14px] lg:text-[20px] px-3">
            <Box2
              title="INTEGRASI"
              description="Tidak hanya bersama namun dengan bersinergi memiliki tujuan dan cita cita yang sama."
            />
            <Box
              title="TRANSPARANSI"
              description="Kejelasan dan keterbukaan atas segala bagian."
            />
          </div>
      </div>
    </div>
  );
}

const Box1 = ({ title, description }) => (
  <div className="flex justify-center lg:w-full lg:h-full lg lg:items-center lg:mb-6 lg:mb-0 lg:mr-10 lg:-ml-5 mx-6 mb-7">
    <div className="box-border bg-cust-yellow rounded-xl w-full lg:p-3 flex flex-col pb-3 justify-center items-center">
      <div className="box-border py-2 px-7 mt-4 bg-[#FDE6BA] rounded-full text-center">
        <h1 className="text-cust-orange font-extrabold font-lato">{title}</h1>
      </div>
      <p className="text-cust-green text-center font-lato lg:pt-2 lg:h-28 py-2 px-3 ">
        {description}
      </p>
    </div>
  </div>
);

const Box3 = ({ title, description }) => (
  <div className="flex justify-center lg:w-full lg:h-full lg:items-center lg:mb-6 lg:mb-0 lg:mr-10 lg:ml-7 mx-6 mb-7">
    <div className="box-border bg-cust-yellow rounded-xl w-full  lg:p-3 flex flex-col pb-3 justify-center items-center">
      <div className="box-border py-2 px-7 mt-4 bg-[#FDE6BA] rounded-full text-center">
        <h1 className="text-cust-orange font-extrabold font-lato">{title}</h1>
      </div>
      <p className="text-cust-green text-center font-lato lg:pt-2 lg:h-28 py-2 px-3 ">
        {description}
      </p>
    </div>
  </div>
)

const Box2 = ({ title, description }) => (
  <div className="flex justify-center lg:w-full lg:h-full lg:items-center lg:mb-6 lg:mb-0 lg:mr-10 lg:-ml-5 mx-6 mb-7">
    <div className="box-border bg-cust-yellow rounded-xl w-full  lg:p-3 flex flex-col pb-3 justify-center items-center">
      <div className="box-border py-2 px-8 mt-4 bg-[#FDE6BA] rounded-full text-center">
        <h1 className="text-cust-orange font-extrabold font-lato">{title}</h1>
      </div>
      <p className="text-cust-green text-center font-lato lg:pt-2 lg:h-28 py-2 px-6 ">
        {description}
      </p>
    </div>
  </div>
)


const Box = ({ title, description }) => (
  <div className="lg:flex flex justify-center lg:w-full lg:h-full lg:items-center lg:mb-6 lg:mb-0 lg:mr-10 lg:ml-7 mx-6 mb-6">
    <div className="box-border bg-cust-yellow rounded-xl w-full  lg:p-3 flex flex-col pb-3 justify-center items-center">
      <div className="box-border py-2 px-4 mt-4 bg-[#FDE6BA] rounded-full text-center">
        <h1 className="text-cust-orange font-extrabold font-lato">{title}</h1>
      </div>
      <p className="text-cust-green text-center font-lato lg:pt-2 lg:h-28 py-2 px-6 ">
        {description}
      </p>
    </div>
  </div>
)

 