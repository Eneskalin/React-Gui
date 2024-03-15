import React from 'react';
import './Navigation.css';
import Kapsul from'../img/kapsul2.png'
import ProgBar from './progbar'
function Navigation() {
  return (
    <>
    <div className='navigationbar'></div>
    <div className='circle1'></div>
    <div className='circle2'></div>
    <div className='circle3'></div>
    <img  id='imgs' src={Kapsul} alt='' className='kapsul'/>
    <ProgBar/>

     </>

  )

}

export default Navigation;
