import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ buttonText, handleClick, isOperator }) {
  return (
    <div
      className={`button-container ${isOperator ? 'operator' : ''}`.trimEnd()}
      onClick={handleClick}
      aria-hidden="true"
    >
      {buttonText}
    </div>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isOperator: PropTypes.bool.isRequired,
};

export default Button;
