// src/components/Header.tsx

import React from 'react';
import './App.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">ravenous.</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item"><a href="#home">Home</a></li>
            <li className="header-nav-item"><a href="#about">About</a></li>
            <li className="header-nav-item"><a href="#services">Services</a></li>
            <li className="header-nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
