import React from "react";
import background from "../../../assets/bgcorak.svg";
import Nilaikerja from "../../../assets/NilaiKerja.svg";

export default function NilaiKerja() {
  return (
    <div
      className="bg-cust-green flex flex-col justify-center items-center py-20 px-40"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={Nilaikerja} alt="" className="mb-10" />

      <div>
        <div className="flex mb-10">
          <Box
            title="KOLABORASI"
            description="Sebagai bentuk kerja sama dari segala unsur yang saling mendukung dan menjalankan tujuan untuk FILKOM lebih baik."
          />
          <Box
            title="AKSELERASI"
            description="Percepatan birokrasi dan administrasi sebagai langkah awal kesuksesan dan keberlangsungan lembaga."
          />
        </div>
          <div className="flex mb-10">
            <Box
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

const Box = ({ title, description }) => (
  <div className="flex justify-center w-1/2 h-full items-center mb-6 md:mb-0 md:mr-10 ml-10">
    <div className="box-border bg-cust-yellow rounded-xl w-full md:w-80 p-3 flex flex-col justify-center items-center">
      <div className="box-border p-3 bg-orange-200 rounded-full text-center">
        <h1 className="text-cust-orange font-extrabold font-lato">{title}</h1>
      </div>
      <p className="text-cust-green text-center font-lato pt-2 h-28">
        {description}
      </p>
    </div>
  </div>
);
