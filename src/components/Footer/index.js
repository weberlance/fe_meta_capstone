import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <nav className="navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
