import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navabar';
import Header from './Header/Header';

function App() {
  const [displayState, switchDisplayState] = useState({});

  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}

export default App;
