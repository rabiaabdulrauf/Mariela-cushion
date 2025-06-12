import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="list">
         <li className='mail pt-10'> <a href="/path">email</a></li>
         <li className='text'> <a href="/path">support@website.com</a></li>
         <li className='mail pt-6'> <a href="/path">phone</a></li>
         <li className='text'> <a href="/path">800-123-456</a></li>
         <li className='mail pt-6'> <a href="/path">address</a></li>
         <li className='text'> <a href="/path">23 Evergreen Street,
San Francisco, California
USA</a></li>
        </div>
        <div className="form">
                <li className='mail pt-10'> <a href="/path">Address</a></li>
                <li className='msg'><a href="/path">Drop us your message and I'll get back to you as soon as possible.</a></li>
                <form action="">
                    <div className="name pt-4">
                    <input  type="text" name="" id="" placeholder='your name' />
                    <input  type="text" name="" id="" placeholder='your company' />
                    </div>
                    <div className="name pt-4">
                    <input  type="text" name="" id="" placeholder='your phone' />
                    <input  type="email" name="" id="" placeholder='your email' />
                    </div>
                    <div className="message pt-4">
                   <textarea name="" id="" placeholder='your message'></textarea>
                    </div>
                    <div className="btnn mt-4">
                        <button>Let's talk</button>
                    </div>
                </form>
        </div>
      </div>
      <div className="selter">
        <h6 className='ns text-center pt-6 '>NEWSLETTER</h6>
        <p className='get text-center text-xl pt-2'>Get promotions & updates!</p>
        <div className="sub mt-6">
          <input type="text" name="" id="" placeholder='your name' required />
          <input type="email" name="" id="" placeholder='your email' required />
          <button className='SUBS'>SUBSCRIBE</button>
        </div>
      </div>
      <div className="shop text-white">
          <div className="icon ">
            <div className="ship">
           <i class="fa-solid fa-house-tsunami"></i>
             </div>
             
           <p className='text-center text-xl pt-6'>Safe shopping</p>
           <p className='text-center'>Buy with confidence</p>
          </div>
          <div className="icon">
            <div className="ship">
            <i class="fa-solid fa-truck-fast"></i>
            </div>
            <p className='text-center text-xl pt-6'>Fast shipping</p>
            <p className='text-center'>Get your product fast</p>
          </div>
          <div className="icon">
            <div className="ship">
            <i class="fa-solid fa-thumbs-up"></i>
            </div>
            <p className='text-center text-xl pt-6'>Satisfaction guarantee</p>
            <p className='text-center'>Or get your money back</p>
          </div>
      </div>
      <div className="home">
         <div className="copy">
          <p className='text-white'>©copyright, all reserved 2025. </p>
         </div>
         <div className="copy">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
         </div>
      </div>
    </div>
  );
}

export default Footer;
