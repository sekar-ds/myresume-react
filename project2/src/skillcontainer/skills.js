import React from 'react';
import { Element } from "react-scroll";
import skillsimage from '../assets/images.jpg';
import '../skillcontainer/skills.css'
const Skills = () => {
  return (
    <Element name='skills' id ='skills' className='skillscontainer'>
        <div className='skills-image' id="skill1">
         <img src={skillsimage}  alt="skills"/>
        </div>
        <div className='skilltext'>
          <h2>SKILLSET</h2>
          <hr></hr>
          
          <div className='skillset'>
            
             <h2>*  HTML5  ****/5</h2>
            
            </div>
            <div className='skillset'>
            <h2>*  CSS3  ****/5</h2>
            </div>
            <div className='skillset'>
            <h2> * Javascript  ***/5</h2>
            </div>
            <div className='skillset'>
            <h2>*  React js  ***/5</h2>
            </div>
            <div className='skillset'>
            <h2>*  Node js  **/5</h2>
            </div>
            <div className='skillset'>
            <h2>*  Mysql  ****/5</h2>

          </div>
          
          
        </div>

    </Element>
  )
}

export default Skills;
