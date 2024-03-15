  import React from 'react';
  import './Speed.css';
  import speedmeter from '../img/speedmeter.png';
  import speedmethod from '../img/speedmethod.png';
  import data from '../data.json';

  function Speed(props) {
    console.log(props);      
    const { overview } = data;
    return (

      <>
      <div>
       
      </div>
      <div id='speed'>
      <div className='rollpithyaw'> <ul>
        <li>Roll: {overview[1].roll}</li>
        <li>Pith: {overview[1].pitch}</li>
        <li>Yaw: {overview[1].yaw}</li>
        </ul>
        </div>

        <div className='power'>
          <ul>
            <li>Güç:{overview[3].power} kw</li>
            <li>Basınç:{overview[3].pressure}</li>
          </ul>
          <div/>

        </div>
        


        <div className='acceleration'>
          <h3>Ivme <br></br>
           X= {overview[2].Xacceleration} 
          Y= {overview[2].Yacceleration} 
           Z= {overview[2].Zacceleration}</h3>
          
        </div>
      <div id='speednumbers' className='xspeednumber'>  {overview[0].Xspeed}<h1>M/H</h1> </div>
      <div id='speednumbers'className='yspeednumber'> Y: {overview[0].yspeed} m/h</div>
      <div id='speednumbers'className='zspeednumber'> Z: {overview[0].zspeed} m/h </div>
      <div id='speednumbers'className='speedmethod'> </div>
      <div> 
      <img  id='imgs' src={speedmeter} alt='' className='speedbackground'/>
      <img id='imgs' src={speedmethod} alt='' className='speedarrow'/>
      </div>
      </div>
      </>
      
    )
  }

  export default Speed;
