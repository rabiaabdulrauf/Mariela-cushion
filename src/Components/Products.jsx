import React from 'react';
import bed from '../Assets/bed.jpeg'
const Products = () => {
  return (
    <div>
      <hr className='line' />
      <div className="pro">
        <div className="pro-data">
          <h6 className=' cush pt-20 font-bold pl-2 ' id='h6'>
         PRODUCTS
        </h6>
        <p className=' para text-left pl-2 pt-2'>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources.</p>
        <p className=' para text-left pl-2 pt-2' >Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.</p>
        <p className=' para text-left pl-2 pt-2'>Energistically scale future-proof core competence</p>

        </div>
        <div className="pro-pic">
        <img src={bed} alt="" className='pro-img' />
        </div>
      </div>
    </div>
  );
}

export default Products;

