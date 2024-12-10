

import React,{useEffect} from 'react';
import Search from './Search';
import Logo from './Logo';
import SideNav from './SideBar'
import SideBar from './SideBar';
import NavBottom from './NavBottom';

function Navbar() {
  return (
    <div className='navbar'>
      <Search/>
      <Logo/>
      <SideBar/>
      <NavBottom/>
    </div>
  )
}

export default Navbar