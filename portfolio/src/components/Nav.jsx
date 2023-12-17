// src/components/Nav.js
import React from 'react';
import dark_icon from './img/dark_mode_icon.svg'
import light_icon from './img/light_mode_icon.svg'
const Nav = ({ toggleTheme , isDarkTheme }) => {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          <img src= {isDarkTheme? dark_icon: light_icon }/>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
