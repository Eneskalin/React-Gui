import React, { useState } from 'react';
import Speed from './components/Speed';
import Navbar from './components/Navbar';
import Buttons from './components/Buttons';
import Battery from './components/Battery';
import Ipcam from './components/Ipcam';
import Navigation from './components/Navigation';
import BatteryIndicator from './components/BatteryIndicator';
function App() {
  const [speedData, setSpeedData] = useState({
    xspeed: 0,
    yspeed: 0,
    zspeed: 0
  });

  return (
    <div>
      <Speed speedData={speedData} />
      {/* <Ipadress/> */}
      <Navbar/>
      <Buttons/>
      <Battery/>
      <Ipcam/>
      <Navigation/>
      <BatteryIndicator />
    </div>
  );
}

export default App;
