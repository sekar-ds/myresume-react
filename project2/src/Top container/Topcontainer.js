import React from 'react';
import {Element} from 'react-scroll'
import Topcontent from '../top content/Topcontent';
import '../Top container/Topcontainer.css'

const Topcontainer = () => {
  return (
    <Element name='About me' className='topcontainer'>
        <Topcontent/>
    </Element>
  )
}

export default Topcontainer;
