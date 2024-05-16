import React from 'react'
import NavbarHP from './NavbarHP';
import NavbarPC from './NavbarPC';

function Navbar() {
  return (
    <div>
    <div className='absolute w-full top-0 xl:hidden w-100'>
        <NavbarHP/>
    </div>
    <div className='hidden xl:block'>
        <NavbarPC/>
    </div>
    </div>
  )
}

export default Navbar