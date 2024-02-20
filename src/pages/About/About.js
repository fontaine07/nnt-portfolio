import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills'
import Activity from '../../components/Activity/Activity';
import Fact from '../../components/Fact/Fact';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <>
    <div className='container' id='about'>
      <Skills/>
      <Activity/>
      <Fact/>
    </div>
    
    </>
  )
}

export default About
