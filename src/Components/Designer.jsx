import React from 'react';
import about from '../Assets/about.png'
import product from '../Assets/product.png'
import contact from '../Assets/contact.png'
function Designer() {
  return (
    <div>
      <div className="design">
        <h6 className=' cush pt-10 font-bold text-center'>
            I'm a cushion designer
        </h6>
        <p className='text-center text-xl pt-4'>Based in San Francisco, California I design trendy and fashion Cushions,</p>
        <p className='text-center text-xl '>since I have memory I always had a tendency to design and illustration.</p>
        <div className='more mt-6 mb-8 '>
        <button className=' rounded-xl border p-2'>Learn more</button>
        </div>
        <div className="product mt-8 flex gap-12 ">
            <div className="about text-white">
                <img src={about} alt="" />
                <h5 className='pl-10 pt-6 font-bold text-2xl'>About me</h5>
                <h6 className='font-bold pl-10'>learn more</h6>
            </div>
            <div className="about text-white">
                <img src={product} alt="" />
                 <h5 className='pl-10 pt-6 font-bold text-2xl'> My Product</h5>
                <h6 className='font-bold pl-10'>learn more</h6>
            </div>
            <div className="about text-white">
                <img src={contact} alt="" />
                 <h5 className='pl-10 pt-6 font-bold text-2xl '>Contact Me</h5>
                <h6 className='font-bold pl-10'>learn more</h6>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Designer;
