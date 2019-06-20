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
        <Link className="menu-item" to="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
      <div className="navbar-item">
        <Link className="hireLink" to="/contact">
          Hire me
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
