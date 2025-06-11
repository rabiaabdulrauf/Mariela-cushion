import React from 'react';
import cushion from '../Assets/cushion.jpeg'
const Collection = () => {
  return (
    <div>
      <div className="mainn">
        <div className="picture">
            <img src={cushion} alt="" />
        </div>
        <div className="infromation">
             <h6 className='pt-28 pl-8 text-white font-bold'>New</h6>
       <h1 className='designer text-white font-bolder pl-8 pt-2'>Spring Cushion<br/>
Collection 2019</h1>
<button className='learn text-white ml-8 mt-3 border-b-2'>BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Collection;
