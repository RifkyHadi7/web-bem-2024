import React, { useState } from "react";
import background from "../../assets/bgcorak.svg";
import Logo from "../../assets/LogoNavbar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import NotFound from "../NotFound";
import Tentang from "../Tentangpage";
import { Link } from 'react-router-dom';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left ">
      <button
        type="button"
        onClick={toggleMenu}
        className="hover:text-cust-orange font-Lato text-white text-lg pl-8"
      >
        {title} <FontAwesomeIcon icon={faAngleDown} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-0 w-100 max-h-36 overflow-y-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 options">
          <div className="bg-[#FDFADB] py-1 rounded-md">
            {items.map((item, index) => (
              <Link to={item.link} key={index} target="_blank">
                <button
                  type="button"
                  className="hover:text-cust-orange hover:font-bold w-full text-nowrap hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm"
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const kabinetItems = [
    "STRUKTUR", "PRESIDEN", "WAKIL PRESIDEN", "SEKPIM", "MENKO & DIRNAL",
    "PSDI", "PSDM", "EKRAF", "KMB", "SOSLING", "KASTRAT", "ADVOKESMA",
    "MEDINKRAF", "ADKEU", "PIT"
  ];
  const kabarItems = ["KABAR FILKOM", "KABAR PROKER"];
  const appsItems = [
    { label: "SJW FILKOM", link: "https://bemfilkom.ub.ac.id/apps/sjw-filkom/", },
    { label: "SIPERAT", link: "https://bemfilkom.ub.ac.id/apps/siperat/#/" },
    { label: "IT PARTNERSHIP", link: "https://bemfilkom.ub.ac.id/itpartnership/" }
  ];
  const comingsoon = ["Selengkapnya"];

  return (
    <header className="bg-cust-green w-" style={{ backgroundImage: `url(${background})` }}>
      <div className="flex pl-6 items-center">
        <a href="/" className="mr-4">
          <img src={Logo} alt="BEM Logo" />
        </a>
        <button type="button" className="hover:text-cust-orange font-Lato text-white text-lg pl-28">
          <Link to="">Beranda</Link>
        </button>
        <button type="button" className="hover:text-cust-orange font-Lato text-white text-lg pl-8">
          <Link to="/tentang">Tentang</Link>
        </button>
        <button type="button" className="hover:text-cust-orange font-Lato text-white text-lg pl-8">
          <Link to="/comingsoon">Kabinet</Link>
        </button>
        {/* <Dropdown title={"Kabar"} items={comingsoon} /> */}
        <Dropdown title={"Apps"} items={appsItems} />
        <div className="w-32"></div>
        {/* <Dropdown items={kabinetItems} />
        <Dropdown items={kabarItems} />
        <Dropdown items={appsItems} /> */}
        <div>
          <button className="ring-1 xxl:max-h-max max-h-10 ring-white hover:ring-cust-bg-orange2 bg-transparent outline-3 outline-gray-200 focus:outline-cust-orange hover:bg-cust-bg-orange2 text-white text-lg font-semibold py-1.5 px-3 xxl:px-10 rounded-full ml-48">
            <a href="https://bemfilkom.ub.ac.id/open/#/" target="_blank">Event <FontAwesomeIcon className="relative top-0.5" icon={faArrowRightLong} /></a>
          </button>
        </div>
      </div>
    </header >
  );
};

export default Navbar;