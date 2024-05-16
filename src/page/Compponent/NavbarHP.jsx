import React, { useState } from 'react';
import LogoHP from "../../assets/LogoNavbarHP.svg";
import Logo from "../../assets/LogoNavbar.svg";
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


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

  return (
    <div>
      <div className='justify-between w-full flex'>
        <div>
          <img src={Logo} alt="logo BEM" className='' />
        </div>
        <div className='mr-3 mt-0'>
          <button className='h-full' onClick={toggleMenu} type='button'>
            {isOpen ? <IoMdClose style={{ fontSize: '35px' }} className='text-cust-gray' /> : <IoMdMenu style={{ fontSize: '35px' }} className='text-cust-white' />}
          </button>
        </div>
      </div>
      {isOpen &&
        <div className='bg-cust-yellow font-lato w-1/2 z-50 h-screen pb-5 overflow-y-auto text-md'>
          <div className='flex justify-between w-full mb-5'>
            <img src={LogoHP} alt="" style={{ fontSize: '35px' }} />
            <button className='h-full' onClick={toggleMenu} type='button'>
              <IoMdClose style={{ fontSize: '35px' }} className='mr-3 text-cust-gray ' />
            </button>
          </div>
          <div className='text-cust-gray w-3/4 font-lato space-y-4 font-bold'>
            <button className='text-left hover:bg-orange-200 hover:text-cust-orange pl-3 w-full'>
            <Link to="">Beranda</Link>
            </button>
            <button className='text-left hover:bg-orange-200 hover:text-cust-orange pl-3 w-full'>
            <Link to="/tentang">Tentang</Link>
            </button>
            <Dropdown title="Kabar" items={["KABAR FILKOM", "KABAR PROKER"]} isOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
            <Dropdown title="Kabinet" items={[
              "STRUKTUR", "PRESIDEN", "WAKIL PRESIDEN", "SEKPIM", "MENKO & DIRNAL",
              "PSDI", "PSDM", "EKRAF", "KMB", "SOSLING", "KASTRAT", "ADVOKESMA",
              "MEDINKRAF", "ADKEU", "PIT"
            ]} isOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
            <Dropdown title="Apps" items={["SJW FILKOM", "SIPERAT", "IT PARTNERSHIP"]} isOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
          <button className='w-1/2 hover:bg-cust-orange hover:text-cust-white ml-3 px-3 pt-1 font-normal flex h-10 justify-between ring-1 ring-cust-orange hover:ring-cust-bg-orange2 bg-transparent outline-3 outline-cust-orange focus:outline-cust-orange hover:bg-cust-bg-orange2 text-cust-orange text-lg rounded-full'>
            Event 
            <FaLongArrowAltRight style={{fontSize: '25px'}} className='mt-0.5'/>
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
        <div className="pl-6 space-y-5 font-normal max-h-36 overflow-y-auto">
          {items.map((item, index) => (
            <button key={index} className='text-left w-full'>
              {item}
            </button>
          ))}
        </div>
      }
    </div>
  );
};

export default NavbarHP;
