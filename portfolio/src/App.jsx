import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../dist/output.css'
import Navbar from './navigation';
import Hero from './hero';
import Portfolio from './portfolio';

function App() {

    
    return (
      <div >
        <Navbar /> 
        <Hero />
        <Portfolio />
      </div>
  );
}

export default App
