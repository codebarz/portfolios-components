import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <div className="hold-main">
      <section className="banner">
        <article>
          <p>
            Hi!, I'm
            <em>
              <strong>Tega</strong>
            </em>
            <sup>TM</sup>
          </p>
          <div className="underline-white" />
          <h2>A Javascript Developer at Decagon</h2>
          <p>
            View my work on my
            <a href="https://github.com/whitehox">
              <i className="mdi mdi-github-circle" />
              GitHub
            </a>
          </p>
          <p className="small-paragraph">
            <em>Follow me on these platforms</em>
          </p>
          <ul>
            <li>
              <i className="mdi mdi-facebook" />
            </li>
            <li>
              <i className="mdi mdi-twitter" />
            </li>
            <li>
              <i className="mdi mdi-instagram" />
            </li>
          </ul>
          <i className="mdi mdi-navigation scroll-down" />
        </article>
        <div className="dim" />
      </section>
    </div>
  );
};

export default Header;
