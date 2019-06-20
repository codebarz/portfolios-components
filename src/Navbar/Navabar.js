import React from 'react';
import './Navbar.css';

const navbar = props => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <img src="./images/profile.jpeg" alt="profile" />
      </div>
      <ul className="navbar-item">
        <a className="menu-item active" href="./index.html">
          <li>HOME</li>
        </a>
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
  );
};

export default navbar;
