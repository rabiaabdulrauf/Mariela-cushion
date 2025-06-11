import React from 'react';
import sofa from '../Assets/sofa.jpeg'
const Begining = () => {
  return (
    <div>
      <div className="beg mt-6">
    <div className="detail">
          <h6 className=' cush pt-20 font-bold pl-2 '>
           BEGINNINGS
        </h6>
        <p className=' para text-left pl-2 pt-2'>Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences.</p>
        <p className=' para text-left pl-2 pt-2' >Dramatically synthesize integrated schemas. with optimal networks.</p>

    </div>
    <div className="pict">
    <img src={sofa} alt=""  />
    </div>
      </div>
         <hr className=' line mb-4 ' />
    </div>
  );
}

export default Begining;
