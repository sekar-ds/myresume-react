import React from 'react';
import { Element } from 'react-scroll';
import '../project/project.css';
import form from '../assets/1.gif'
import ecommerse from '../assets/image1.png'
import Bike from '../assets/bike1.jpg'
import calculator from '../assets/cal1.jpg'
import nav from '../assets/nav1.jpg'



const Project = () => {
  return (
    <Element className='container' name="Project">
      <div className='link'>
      <h1>Project</h1>
      <br></br>
      <h3>Here are some project which I done for making live of people easy</h3>
      <br></br>
      <div className='container'>
        <div className='picture1'>
        <img src={form} alt="picture" />
        <br></br><br></br>
        <a href ="https://github.com/sekar-ds/form-validation-2">FORM-VALIDATION <span>click the link to see the project code</span></a>
        </div>
        <br></br>
        <div className='picture2'>

        <img src={ecommerse} alt="picture1"/>
        <br></br><br></br>
        <a href ="https://github.com/sekar-ds/e-commerce-project">ECOMMERCE-WEBSITE <span>click the link to see the project code</span></a>
        </div>
        <br></br>
        <div className='picture3'>
        <img src={Bike} alt="picture2"/>
        <br></br><br></br>
        <a href ="https://github.com/sekar-ds/Bike-service-station">BIKE-SERVICE-STATION <span>click the link to see the project code</span></a>
        </div>
        <br></br>
        <div className='picture4'>
        <img src={calculator} alt="picture2"/>
        <br></br><br></br>
        <a href ="https://github.com/sekar-ds/calculator-js">CALCULATOR <span>click the link to see the project code</span></a>
        </div>
        <br></br>
        <div className='picture5'>

        <img src={nav} alt="picture"/>
        <br></br><br></br>
        <a href ="https://github.com/sekar-ds/navbar">NAVBAR <span>click the link to see the project code</span></a>
        </div>
        </div>
      </div>
    </Element>
  )
}

export default Project
