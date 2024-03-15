import React from 'react';
import './Battery.css';
import data from '../data.json'

function Battery(props) {    
  const { overview } = data;
  return (
      <div className="container">
        <div className="content">
          <ul>
          <li>Itki Sistemi Batarya Sıcaklığı: {overview[4].impulsetemp}</li>
          <li>Ray Sıcaklığı: {overview[4].railtemp}</li>
          </ul>
        </div>
      </div>
    );
  }

export default Battery;
