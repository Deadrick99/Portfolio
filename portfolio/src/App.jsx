import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../dist/output.css'
import Navbar from './navigation';
import Hero from './hero';
function App() {
    return (
      <div className=''>
        <Navbar /> 
           
      <Hero/>
      </div>
  );
}

export default App
