import React, { useState } from "react";
// import "./App.css"; 

import logo from "../Assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="w3-teal border-t-4 ">
           <div >
    <img
      src={logo}
     className="img"
      alt=""
      id="img"
    />
    
        </div>
        <div className="nav-item flex gap-6 ">
          <li><a href="/path">Home</a></li>
          <li><a href="/path">About me</a></li>
          <li><a href="/path">Products</a></li>
          <li><a href="/path">Contact me</a></li>
        
        </div>
        <div>
        <button className="w3-button w3 w3-xlarge" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        </div>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="w3-sidebar w3-bar-block w3-border-right ">
          <button onClick={() => setIsOpen(false)} className="w3-bar-item w3-large" style={{fontSize:'22px', color:"#b08fad"}}>
            Close &times;
          </button>
          <a href="#" className="w3-bar-item w3-button">Home</a>
          <a href="#" className="w3-bar-item w3-button">About me</a>
          <a href="#" className="w3-bar-item w3-button">Products</a>
          <a href="#" className="w3-bar-item w3-button">Contact me</a>
        </div>
      )}

    </>
  );
};

export default Navbar;
