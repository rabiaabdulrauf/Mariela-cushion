import React from 'react';
import Navbar from './Components/Navbar';
import "./App.css";
import Hero from './Components/Hero';
import Designer from './Components/Designer';
import Begining from './Components/Begining';
import Carrer from './Components/Carrer';
import Products from './Components/Products';
import Collection from './Components/Collection';
import Cushions from './Components/Cushions';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Designer/>
    <Begining/>
    <Carrer/>
    <Products/>
    <Collection/>
    <Cushions/>
    <Footer/>
    </div>
  );
}

export default App;

