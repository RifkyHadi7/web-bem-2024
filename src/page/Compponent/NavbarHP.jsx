import React, { useState } from 'react';
import background from "../../assets/corakbackground.svg";
import LogoHP from "../../assets/LogoHP.png";
import Logo from "../../assets/LogoNavbar.svg";
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import ComingSoon from '../ComingSoon';


const NavbarHP = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDropdownOpen(false);
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const appsItems = [
    { label: "SJW FILKOM", link: "https://bemfilkom.ub.ac.id/apps/sjw-filkom/" },
    { label: "SIPERAT", link: "https://bemfilkom.ub.ac.id/apps/siperat/#/" },
    { label: "IT PARTNERSHIP", link: "https://bemfilkom.ub.ac.id/itpartnership/" }
  ];

  return (
    <div>
      <div className='justify-between w-full flex bg-cust-green w- pl-2 py-1' style={{ backgroundImage: `url(${background})` }}>
        <div>
          <a href="/"><img src={Logo} alt="logo BEM" className='w-3/4' /></a>
        </div>
        <div className='mr-3 mt-0'>
          <button className='h-full' onClick={toggleMenu} type='button'>
            {isOpen ? "" : <IoMdMenu style={{ fontSize: '35px' }} className='text-cust-white' />}
          </button>
        </div>
      </div>
      {isOpen &&
        <div className='fixed top-0 left-0 bg-cust-yellow font-lato w-2/3 z-50 h-screen pl-3 pb-5 overflow-y-auto text-md'>
          <div className='flex justify-between w-full mb-5 py-1'>
            <img onClick={toggleMenu} src={LogoHP} alt="" className='w-2/3' />
            <button className='h-full' onClick={toggleMenu} type='button'>
              <IoMdClose style={{ fontSize: '35px' }} className='mr-3 mt-1 text-cust-gray ' />
            </button>
          </div>
          <div className='text-cust-gray w-3/4 font-lato font-bold'>
            <Link to="/" >
              <button onClick={toggleMenu} className='text-left hover:bg-[#FDE6BA] hover:text-cust-orange pl-3 w-full py-2 rounded-md'>
                Beranda
              </button>
            </Link>
            <Link to="/tentang">
              <button onClick={toggleMenu} className='text-left hover:bg-[#FDE6BA] hover:text-cust-orange pl-3 w-full py-2 rounded-md'>
                Tentang
              </button>
            </Link>
            <Link className='flex' to="/comingsoon">
              <button onClick={toggleMenu} className='text-left hover:bg-[#FDE6BA] hover:text-cust-orange pl-3 w-full py-2 mb-2 rounded-md'>
                Kabinet
              </button>
            </Link>
            <Dropdown title="Apps" items={appsItems} isOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
            {/* <Dropdown  title="Kabar" items={["KABAR FILKOM", "KABAR PROKER"]} isOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
            <Dropdown title="Kabinet" items={[
              "STRUKTUR", "PRESIDEN", "WAKIL PRESIDEN", "SEKPIM", "MENKO & DIRNAL",
              "PSDI", "PSDM", "EKRAF", "KMB", "SOSLING", "KASTRAT", "ADVOKESMA",
              "MEDINKRAF", "ADKEU", "PIT"
            ]} isOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
            <Dropdown title="Apps" items={["SJW FILKOM", "SIPERAT", "IT PARTNERSHIP"]} isOpen={dropdownOpen} toggleDropdown={toggleDropdown} /> */}
            <button className='px-6 mt-4 hover:bg-cust-orange hover:text-cust-white font-normal flex ring-1 ring-cust-orange hover:ring-cust-bg-orange2 bg-transparent outline-3 outline-cust-orange focus:outline-cust-orange text-cust-orange text-base py-1 rounded-full'>
              <a href="https://bemfilkom.ub.ac.id/open/#/" target='_blank'>Event  <FontAwesomeIcon icon={faLongArrowRight} className='ml-2 mt-[7px]' /></a>
            </button>
          </div>
        </div>
      }
    </div>
  );
};

const Dropdown = ({ title, items, isOpen, toggleDropdown }) => {
  return (
    <div>
      <button className='text-left pl-3 w-full flex space-x-3' onClick={toggleDropdown}>
        {title}
        <IoMdArrowDropdown style={{ fontSize: '30px' }} />
      </button>
      {isOpen &&
        <div className="text-start font-normal max-h-36 overflow-y-auto">
          {items.map((item, index) => (
            <Link to={item.link} key={index} target="_blank" className="hover:text-cust-orange hover:font-bold w-full text-nowrap hover:bg-[#FDE6BA] font-lato text-start text-[#929292] block px-4 py-2 text-sm rounded-md">
              {item.label}
            </Link>
          ))}
        </div>
      }
    </div>
  );
};

export default NavbarHP;