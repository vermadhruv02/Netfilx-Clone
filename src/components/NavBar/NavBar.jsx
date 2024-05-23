import React, { useEffect, useRef } from 'react';
import './NavBar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase';


const NavBar = () => {
  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('dark-nav')
      }else{
        navRef.current.classList.remove('dark-nav')

      }
    })
  },[]);
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search icon" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="Bell icon" className='icons'/>
        <div className="navbar-profile">
          <img src={profile_icon} alt="Profile icon" className='profile'/>
          <img src={caret_icon} alt="Caret icon" />
          <div className="dropdown">
            <p onClick={()=>{ logout()}}>Sign Out</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default NavBar;
