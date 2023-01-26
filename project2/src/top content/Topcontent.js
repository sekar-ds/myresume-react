import React from 'react';
import {Link} from 'react-scroll'
import '../top content/Topcontent.css'

const Topcontent = () => {
  return (
    <div className='top-content'>
      <div className='topcontent-container'>
        <h1>Mr.Dhanasekaran T</h1>
        <p> Web Developer</p>
        <a href='www.google.com'>
            <button className='downloadbutton' > Downloade CV</button>
        </a>
        <Link to="project" smooth={true} duration={500}>
            <button className='workbutton'>My Work</button>
        </Link>
      </div>
    </div>
  )
}

export default Topcontent;
