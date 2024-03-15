import React, { useState } from 'react';
import Header from "./components/Header";
import Speed from './components/Speed';
import Ipadress from './components/Ipadress';

function App() {
  const [speedData, setSpeedData] = useState({
    xspeed: 0,
    yspeed: 0,
    zspeed: 0
  });

  const handleClick = () => {
    setSpeedData({
      xspeed: speedData.xspeed +1,
      yspeed: speedData.yspeed,
      zspeed: setSpeedData.zspeed
    });
  };

  return (
    <div>
      <Header />
      <Speed xspeed={speedData.xspeed} yspeed={speedData.yspeed} zspeed={speedData.zspeed} />
      <button onClick={handleClick}>Speed</button>
      {/* <Ipadress/> */}
    </div>
  );
}

export default App;
