import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Navbar/Navabar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import './App.css';

function App() {
  const [displayState, switchDisplayState] = useState({});

  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" exact component={Header} />
      </Router>
      {/* <Header /> */}
      <Footer />
    </>
  );
}

export default App;
