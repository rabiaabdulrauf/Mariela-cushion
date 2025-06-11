import React from 'react';

import slide from "../Assets/hero-pic.jpeg";
const Hero = () => {
  return (
    <div>
      <div className='main'>
       <div className='photo'>
        <img src={slide} alt="" />
       </div>
       <div className='info'>
       <h6 className='pt-28 pl-8 text-white font-bold'>About me</h6>
       <h1 className='designer text-white font-bolder pl-8 pt-2'>I'm a trendy<br/>
Cushion Designer</h1>
<button className='learn text-white ml-8 mt-3 border-b-2'>LEARN MORE</button>
       </div>
      </div>
      <div className="sec">

      </div>
    </div>
  );
}

export default Hero;
