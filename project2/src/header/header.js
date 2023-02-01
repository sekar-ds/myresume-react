import React from 'react';
import '../header/header.css';
import { Link } from 'react-scroll'


const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header__left'>
            <h1> <span>DE</span>VELOP<span>ER</span></h1>
        </div>
        <div className='header__right'>
        <Link to ="About me" smooth={true} duration={500}>

            <h1>About me</h1>
            </Link>
        
            <Link to ="skills" smooth={true} duration={500}>

            <h1>Skills</h1>
            </Link>
            <Link to ="Project" smooth={true} duration={500}>

            <h1>Project</h1>
            </Link>
            <Link to ="contact" smooth={true} duration={500}>

            <h1>Contact</h1>
            </Link>
        
        <h1>Join with me</h1>
        </div>
      </div>
    </div>
  )
};

export default Header;
