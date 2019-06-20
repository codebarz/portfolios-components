import React from 'react';
import { Link } from 'react-router-dom';

import profileImage from '../../images/profile.jpeg';
import './Navbar.css';

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <img src={profileImage} alt={'profile'} />
      </div>
      <ul className="navbar-item">
        <Link className="menu-item active" to="/home">
          <li>HOME</li>
        </Link>
        <Link className="menu-item" to="/blog">
          <li>BLOG</li>
        </Link>
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
  );
};

export default navbar;
