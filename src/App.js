import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navabar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  const [displayState, switchDisplayState] = useState({});

  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default App;
