import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navabar';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/home" exact component={Header} />
        <Route path="/blog" exact component={Blog} />
      </Switch>
      <Footer />
      {/* <Header /> */}
    </>
  );
}

export default App;
