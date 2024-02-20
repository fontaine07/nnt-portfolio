import React from 'react'
import fb from "../../assets/images/fb.png"
import github from "../../assets/images/github.png"
import mail from "../../assets/images/mail.png"
import discord from "../../assets/images/discord.png"
import laptop from "../../assets/images/laptop.png"
import Navbar from '../../components/Navbar/Navbar'
import "./Contact.css"
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
    <>
        <div className='contact-section' id='contact'>            
            <div className='contact-container'>
                <div className='contact-panel'>
                    <div class="contact-header">
                        <h1>Contact me</h1>
                    </div>
                    <div className="contact-box">
                        <div className="contact-img">
                            <img src={github} alt="" class="contact-icons" />
                        </div>
                        <p>fontaine07</p>
                    </div>
                    <div class="contact-box">
                        <div class="contact-img">
                            <img src={fb} alt="" class="contact-icons" />
                        </div>
                        <p>fb.com/delafontaine07</p>
                    </div>
                    <div class="contact-box">
                        <div class="contact-img">
                            <img src={mail} alt="" className="contact-icons" />
                        </div>
                        <p>tramnn.0702gmail.com</p>
                    </div>
                    <div class="contact-box">
                        <div class="contact-img">
                            <img src={discord} alt="" className="contact-icons" />
                        </div>
                        <p>@de.la.fontaine</p>
                    </div>
                </div>
                <div className='contact-panel'>
                    <img src={laptop} className="laptop" alt=''/>
                </div>
            </div>
        </div>
    </>
    )
}

export default Contact
