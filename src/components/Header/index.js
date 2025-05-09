import React, { useState } from 'react';
import { ReactComponent as Logo } from 'assets/images/Logo.svg';
import { ReactComponent as Basket } from 'assets/images/Basket.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className={`toggle-button ${isMenuOpen ? 'open' : ''}`} role="button" onClick={() => setIsMenuOpen(!isMenuOpen)}></div>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav className={`header-navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Basket className="basket-icon" height="2rem"/>
    </header>
  );
};

export default Header;
