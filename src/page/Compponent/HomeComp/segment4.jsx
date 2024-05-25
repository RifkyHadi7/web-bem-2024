import Marquee from "react-fast-marquee";
import Modal from "./Modal";
import SponsorItem from "./SponsorItem";
import React, { useState } from "react";
import background from "../../../assets/bgcorak.svg";
import { motion } from "framer-motion";

const sponsorItems = [
    { 
      imageSrc: "https://res.cloudinary.com/dkncrhkfo/image/upload/v1716478352/WhatsApp_Image_2024-05-12_at_12.04.10_PM_1_wksf2t.jpg", 
      altText: "Kopi Sisi Lain", 
      alamat: "Jl Terusan Sudimoro 7A Sudimoro Lowokwaru Malang", 
      benefit: [
        "Memberikan diskon all menu 10% pada Mahasiswa FILKOM UB",
      ],
      ketentuan: [
        "KTM FILKOM UB",
      ],
    },
    { imageSrc: "https://res.cloudinary.com/dkncrhkfo/image/upload/v1716478352/Copy_of_Black_Logo_Gutenham_Coffee_House_udoxtk.png", altText: "Gutenham", alamat:"Jl. Mt Haryono 9 No.332, Dinoyo, Kec. Lowokwaru.", 
    benefit: [
      "Diskon 10% tanpa minimal pembelian (untuk mahasiswa filkom)",
      "Diskon 12% khusus  anggota BEM FILKOM",
      "⁠Diskon 15% Minimal Pembelian 50.000 untuk seluruh mahasiswa FILKOM UB",
      "Bebas biaya reservasi"
    ],
    ketentuan: [
      "KTM BEM FILKOM",
      "10 Orang No Minimal Order, 15 Orang minimal Order 150K, 20 Orang Minimal Order 200k",
    ] },
    { imageSrc: "https://res.cloudinary.com/dkncrhkfo/image/upload/v1716478352/Untitled_design_vkttxr.png", altText: "Nine Clothing", alamat:"-",
    benefit: [
      "Cashback 10% untuk pemesanan semua item",
    ],
    ketentuan: [
      "KTM FILKOM UB",
    ] },
    { imageSrc: "https://res.cloudinary.com/dkncrhkfo/image/upload/v1716478352/Logo_Alfath_Space_eauavo.png", altText: "Alfath Space", alamat: [
      "Jl. Sunan Kalijaga No.35A, Dinoyo, Kec. Lowokwaru, Kota Malang ",
    ],
    benefit: [
      " Memberikan diskon All menu 10% pada mahasiswa FILKOM UB tanpa minimum pembelian",
      " Memberikan diskon sewa ruangan 10% pada mahasiswa FILKOM UB dengan minimal penyewaan 3 jam",
      "Memberikan diskon sewa ruangan 10% pada BEM FILKOM UB 2024 tanpa minimal jam"
    ],
    ketentuan: [
      "KTM FILKOM UB",
    ] },
    { imageSrc: "https://res.cloudinary.com/dkncrhkfo/image/upload/v1716478352/kirei_yfbt9o.png", altText: "Kirei Coffee", alamat:"Jl. Terusan Sudimoro, No. 18 Kota Malang.", 
    benefit: [
      "Discount 10%",
    ],
    ketentuan: [
      "KTM FILKOM UB",
    ]},
    { imageSrc: "https://res.cloudinary.com/dkncrhkfo/image/upload/v1716478351/slide_1_chph4o.png", altText: "GOGIEGU", alamat:"Jl. Akordion Utara No.3d, Tunggulwulung", 
    benefit: [
      "- Memberikan diskon seasonal khusus untuk mahasiswa FILKOM UB",
      "Memberikan Cashback sebesar Rp. 1000,00 ke pihak BEM FILKOM UB",
    ],
    ketentuan: [
      "KTM FILKOM UB" ,
    ]},
    { 
      imageSrc: "https://res.cloudinary.com/dkncrhkfo/image/upload/v1716478352/selfroom_k7dtbn.jpg", 
      altText: "Selfroom", 
      alamat: "Jl. Manunggal No.A94, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65142",
      benefit: [
        "Memberikan diskon all 10% pada Mahasiswa FILKOM UB",
      ],
      ketentuan: [
        "KTM FILKOM UB",
      ],
    },
  ];


  const segment4 = () => {
    const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  
  return (
    <div className="box-border bg-cust-yellow pb-20 bg-contain lg:bg-cover" style={{ backgroundImage: `url(${background})` }}>
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
                }} src="https://res.cloudinary.com/dq11ayv02/image/upload/v1716217808/web-bem-2024/partner.png" alt="Partner" className="mx-auto w-[10rem] xl:w-[15rem] pt-20 pb-10" />
      <div className="font-lato mb-12 text-[#929292] xl:text-2xl text-xl">
        Klik untuk melihat benefitnya &gt;_&lt;
      </div>
      <Marquee direction="right" autoFill={true} className="mb-10">
        <div className="flex">
          {sponsorItems.map((item, index) => (
            <button key={index} onClick={() => handleShowModal(item)}>
              <SponsorItem 
                imageSrc={item.imageSrc} 
                altText={item.altText} 
                alamat={item.alamat} 
                benefit={item.benefit} 
                ketentuan={item.ketentuan}
              />
            </button>
          ))}
        </div>
      </Marquee>

      <Marquee direction="left" loop="30" autoFill={true}>
        <div className="flex">
          {sponsorItems.map((item, index) => (
            <button key={index} onClick={() => handleShowModal(item)}>
              <SponsorItem 
                imageSrc={item.imageSrc} 
                altText={item.altText} 
                alamat={item.alamat} 
                benefit={item.benefit} 
                ketentuan={item.ketentuan}
              />
            </button>
          ))}
        </div>
      </Marquee>
      
      {showModal && <Modal onClose={() => setShowModal(false)} selectedItem={selectedItem} />}      
          
    </div>
  );
  };

  export default segment4;