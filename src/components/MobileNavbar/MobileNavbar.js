import React from 'react'
import './MobileNavbar.css'
import logo from "../../assets/logo/logo.png"

const MobileNavbar = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div 
    className={`mobile-menu ${isOpen ? "active" : ""}`} 
    onClick={toggleMenu}>
        <div className='mobile-menu-container'>
            <img className='logo' src={logo} alt=''/>
            <ul>
          <li>
            <a className='nav-item'>About Me</a>
          </li>
          <li>
            <a className='nav-item'>Skills</a>
          </li>
          <li>
            <a className='nav-item'>My Work</a>
          </li>
          
        </ul>
        
        </div>
    </div>
    </>
  )
}

export default MobileNavbar
