import React from 'react';
import carrer from '../Assets/carrer.jpeg';
const Carrer = () => {
  return (
    <div>
     
      <div className="carrer">
        <div className="car-info">
             <h6 className=' cush pt-20 font-bold pl-2 mt-16'>
           CARRER
        </h6>
        <p className=' para text-left pl-2 pt-2'>Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences.</p>
        <p className=' para text-left pl-2 pt-2' >Dramatically synthesize integrated schemas. with optimal networks.</p>
        <button className='button mt-4'>LEARN MORE</button>
        </div>
        <div className="car-pic">
            <img src={carrer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Carrer;
