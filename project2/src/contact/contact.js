import React from 'react';
import { Element } from 'react-scroll';
import '../contact/contact.css';
import linkdine from '../assets/link.jpg';
import instagram from '../assets/instagram.png'

const Contact = () => {
  return (
    <Element className="container_contact" name="contact">
        <h1>CONTACT</h1>
        <div className='container' id="con">
         <p>Email :<a href=" tdhanasekarn917@gmail.com">tdhanasekaran917@gmail.com</a></p>
         <p>Github : <a href="https://github.com/sekar-ds">click Here</a></p>
         <p>Contact :<a href="9087087688">9087087688</a> </p>
         <p>Name:DhanasekaranT<br></br>
            Date of Birth :26/04/2002<br></br>
            Father Name:Thangavel.s<br></br>
            Gender:Male<br></br>
            Nationally:Indian<br></br>
            Language Know:Tamil,English,"Read and write",Telugu


         </p>
         <div className='icon'>
          <a href="https://www.linkedin.com/in/dhanasekaran9087">
          <img src={linkdine} alt="linkdine"/>
          </a>
          <a href="https://www.instagram.com/sekar_ramp/feed/">
          <img src={instagram} alt="instagram"/>
          </a>
         </div>
        </div>
    </Element>
  )
}

export default Contact
