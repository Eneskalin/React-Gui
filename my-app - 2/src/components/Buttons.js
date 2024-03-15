import React from 'react';
import './Buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Buttons() {
  return (
    <>
    <div>
        <ul>
            <li><button className='start'><i class="fa-solid fa-circle-play"></i></button></li>
            <li><button className='brake'><i class="fa-solid fa-circle-stop"></i></button></li>
            <li><button className='triangle'><i class="fa-solid fa-triangle-exclamation"></i></button></li>
            <li><button className='start'><i class="fa-solid fa-wifi"></i></button></li>
        </ul>
        
    </div>
    </>

  )

}

export default Buttons;
