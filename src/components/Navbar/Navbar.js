import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../../../src/assets/logo/logo.png";
import { Button } from 'antd';
import { MenuOutlined, AlignRightOutlined } from '@ant-design/icons';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import { Link, BrowserRouter } from "react-router-dom";
import { Scrollchor } from 'react-scrollchor';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('/');
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />
      
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <Scrollchor to="/">
            <img className='logo' src={logo} alt='' />
          </Scrollchor>
          <ul>
            <li>
              <Scrollchor to="#about" className={activeLink === 'about' ? 'active nav-item' : 'nav-item'} onClick={() => onUpdateActiveLink('about')}>About Me</Scrollchor>
            </li>
            <li>
              <Scrollchor to="#my-work" className={activeLink === 'my-work' ? 'active nav-item' : 'nav-item'} onClick={() => onUpdateActiveLink('my-work')}>My Work</Scrollchor>
            </li>

          </ul>
          <Scrollchor to="#contact" style={{ textDecoration: 'none' }}>
            <Button className='cta-btn'>Contact Me</Button>
          </Scrollchor>
          <button className='menu-btn' onClick={toggleMenu}>
            {openMenu ? (<AlignRightOutlined />) : (<MenuOutlined />)}
          </button>

        </div>
      </nav>
      
    </>
  )
}

export default Navbar
