import React from 'react';
import Navbar from './Components/Navbar';
import "./App.css";
import Hero from './Components/Hero';
import Designer from './Components/Designer';
import Begining from './Components/Begining';
import Carrer from './Components/Carrer';
import section from './Components/Section'
const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Designer/>
    <Begining/>
    <Carrer/>
    <Section/>
    </div>
  );
}

export default App;

