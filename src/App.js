import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navabar';
import Display from './Display/Display';
import Header from './Header/Header';

function App() {
  const [displayState, switchDisplayState] = useState({
    
  });

  return (
    <Display>
      <Navbar />
      <Header />
    </Display>
  );
}

export default App;
