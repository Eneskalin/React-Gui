  import React from 'react';
  import './Speed.css';
  import speedmeter from '../img/speedmeter.png';
  import speedmethod from '../img/speedmethod.png';


  function Speed(props) {
    console.log(props);
      
    return (

      <>
      <div id='speednumbers' className='xspeednumber'>  {props.xspeed}</div>
      <div id='speednumbers'className='yspeednumber'> Y: {props.yspeed}</div>
      <div id='speednumbers'className='zspeednumber'> Z:{props.yspeed}</div>
      <div id='speednumbers'className='speedmethod'> </div>
      <div> 
      <img  id='imgs' src={speedmeter} alt='' className='speedbackground'/>
      <img id='imgs' src={speedmethod} alt='' className='speedarrow'/>
      </div>
      </>
      
    )
  }

  export default Speed;
