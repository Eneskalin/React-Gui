import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <>
    <nav>
        <div>
            <ul id='navbar'>
                <li><a href='index.html'>Main</a></li>
                <li><a href='temperature.html'>Sıcaklık</a></li>
            </ul>
        </div>
    </nav>
    </>

  )

}

export default Navbar;