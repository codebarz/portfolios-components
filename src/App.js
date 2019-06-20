import React from 'react';
import './App.css';
import Navbar from './Navbar/Navabar';
import Display from './Display/Display';
import Header from './Header/Header';

function App() {
  return (
    <Display>
      <Navbar />
      <Header />
    </Display>
  );
}

export default App;
