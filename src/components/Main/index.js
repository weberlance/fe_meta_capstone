import React from 'react';
import PropTypes from 'prop-types';
import './Main.css'; // Optional: Add styles if needed

const Main = ({ children }) => {
  return (
    <div className="main-wrapper">
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;