import React from 'react';
// import PropTypes from 'prop-types';
import promoImage from 'assets/images/restauranfood_560.jpg';
import './CallToAction.scss';
import { Link } from 'react-router-dom';

// TODO : Add dynamic properties title, subtitle, text, image, actions
export default function CallToAction() {
  return (
    <div className="callToAction">
      <div className="callToAction__titleArea">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </div>
      <div className="callToAction__contentArea">
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </div>
      <div className="callToAction__imageArea">
        <div className="callToAction__imageContainer">
          <img src={promoImage} alt="Promo" />
        </div>
      </div>
      <div className="callToAction__actionsArea">
        <Link to='/booking' className="btn btn-primary">Reserve a Table</Link>
      </div>
    </div>
  )
}

CallToAction.propTypes = {
  // children: PropTypes.node.isRequired,
};
