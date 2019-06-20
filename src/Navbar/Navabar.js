import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import profileImage from '../images/profile.jpeg';
import './Navbar.css';

const navbar = props => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-item">
          <img src={profileImage} alt={'profile'} />
        </div>
        <ul className="navbar-item">
          <Link className="menu-item active" to="/home">
            <li>HOME</li>
          </Link>
          <a className="menu-item" href="./blog.html">
            <li>BLOG</li>
          </a>
          <a className="menu-item" href="./contact.html">
            <li>CONTACT</li>
          </a>
        </ul>
        <div className="navbar-item">
          <a className="hireLink" href="contact.html">
            Hire me
          </a>
        </div>
      </nav>
    </Router>
  );
};

export default navbar;
