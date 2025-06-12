import React from 'react';
import black from '../Assets/black.jpg';
import green from '../Assets/green.jpg';
import blue from '../Assets/deep-blue.jpg';
import pink from '../Assets/pink.jpg';
import platedd from '../Assets/platedd.jpg';
import silver from '../Assets/silver.jpg';
const Cushions = () => {
  return (
    <div>
      <div className="cushions">
        <div className="row-1">
        <div className="new">
            <div>
         <img src={platedd} alt="" /></div>
         <p className='word text-center'>Plated Cushion</p>
         <p className='price text-center'>$ 19.99 USD</p>
        </div>
         <div className="new">
            <div>
            <img src={silver} alt="" /></div>
            <p className='word text-center'>Silver Cushion</p>
            <p className='price text-center'>$ 19.99 USD</p>
        </div>
         <div className="new">
            <div>
            <img src={blue} alt="" /></div>
            <p className='word text-center'>Deep Blue Cushion</p>
            <p className='price text-center'>$ 19.99 USD</p>
        </div>
        </div>
        <div className="row-1">
        <div className="new">
            <div>
        <img src={pink} alt="" /></div>
        <p className='word text-center'>Pink Cushion</p>
        <p className='price text-center'>$ 19.99 USD</p>
        </div>
         <div className="new">
            <div>
            <img src={black} alt="" /></div>
            <p className='word text-center'>Black Cushion</p>
            <p className='price text-center'>$ 19.99 USD</p>
        </div>
         <div className="new">
            <div>
            <img src={green} alt="" /></div>
            <p className='word text-center'>Green Cushion</p>
            <p className='price text-center'>$ 19.99 USD</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cushions;
