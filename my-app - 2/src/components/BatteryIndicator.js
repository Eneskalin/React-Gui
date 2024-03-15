import React from 'react';
import './batteryGauge.css';

const BatteryGauge = ({ percentage }) => {
  // Calculate the width of the filled portion of the battery based on the percentage
  const filledWidth = `${percentage}%`;

  return (
    <div className="battery-container">
      <div className="battery">
        <div className="battery-level" style={{ width: filledWidth }}></div>
      </div>
      <span>{percentage}%</span>
    </div>
  );
};

export default BatteryGauge;
