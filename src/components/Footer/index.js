import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css'; // Optional: Add styles if needed

const Footer = ({ text }) => {
  return (
    <footer className="footer-wrapper">
      <p>{text}</p>
    </footer>
  );
};

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
