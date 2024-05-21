import React, { useState } from 'react';
import background from "../../assets/bgcorak.svg";
import LogoHP from "../../assets/LogoHP.png";
import Logo from "../../assets/LogoNavbar.svg";
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
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

  return (
    <div>
      <div className='justify-between w-full flex bg-cust-green w- pl-2 py-1' style={{ backgroundImage: `url(${background})` }}>
        <div>
          <img src={Logo} alt="logo BEM" className='w-3/4' />
        </div>
        <div className='mr-3 mt-0'>
          <button className='h-full' onClick={toggleMenu} type='button'>
            {isOpen ? <IoMdClose style={{ fontSize: '35px' }} className='text-cust-gray' /> : <IoMdMenu style={{ fontSize: '35px' }} className='text-cust-white' />}
          </button>
        </div>
      </div>
      {isOpen &&
        <div className='fixed top-0 left-0 bg-cust-yellow font-lato w-2/3 z-50 h-screen pl-3 pb-5 overflow-y-auto text-md'>
          <div className='flex justify-between w-full mb-5 py-1'>
            <img onClick={toggleMenu} src={LogoHP} alt="" className='w-2/3'/>
            <button className='h-full' onClick={toggleMenu} type='button'>
              <IoMdClose style={{ fontSize: '35px' }} className='mr-3 mt-1 text-cust-gray ' />
            </button>
          </div>
          <div className='text-cust-gray w-3/4 font-lato space-y-4 font-bold'>
            <button onClick={toggleMenu} className='text-left hover:bg-orange-200 hover:text-cust-orange pl-3 w-full'>
            <Link to="">Beranda</Link>
            </button>
            <button onClick={toggleMenu} className='text-left hover:bg-orange-200 hover:text-cust-orange pl-3 w-full'>
            <Link to="/tentang">Tentang</Link>
            </button>
            <button onClick={toggleMenu} className='text-left flex hover:bg-orange-200 hover:text-cust-orange pl-3 w-full'>
            <Link className='flex' to="/comingsoon">Kabar <IoMdArrowDropdown style={{ fontSize: '25px' }} className='' /> </Link>
            </button>
            <button onClick={toggleMenu} className='text-left flex hover:bg-orange-200 hover:text-cust-orange pl-3 w-full'>
            <Link className='flex' to="/comingsoon">Kabinet <IoMdArrowDropdown style={{ fontSize: '25px' }} className='' /> </Link>
            </button>
            <button onClick={toggleMenu} className='text-left flex hover:bg-orange-200 hover:text-cust-orange pl-3 w-full'>
            <Link className='flex' to="/tentang">Apps <IoMdArrowDropdown style={{ fontSize: '25px' }} className='' /> </Link>
            </button>
            {/* <Dropdown  title="Kabar" items={["KABAR FILKOM", "KABAR PROKER"]} isOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
            <Dropdown title="Kabinet" items={[
              "STRUKTUR", "PRESIDEN", "WAKIL PRESIDEN", "SEKPIM", "MENKO & DIRNAL",
              "PSDI", "PSDM", "EKRAF", "KMB", "SOSLING", "KASTRAT", "ADVOKESMA",
              "MEDINKRAF", "ADKEU", "PIT"
            ]} isOpen={dropdownOpen} toggleDropdown={toggleDropdown} />
            <Dropdown title="Apps" items={["SJW FILKOM", "SIPERAT", "IT PARTNERSHIP"]} isOpen={dropdownOpen} toggleDropdown={toggleDropdown} /> */}
          <button className='w-32 hover:bg-cust-orange hover:text-cust-white px-3 pt-1 font-normal flex h-10 justify-between ring-1 ring-cust-orange hover:ring-cust-bg-orange2 bg-transparent outline-3 outline-cust-orange focus:outline-cust-orange text-cust-orange text-lg rounded-full'>
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