import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonText, handleClick }) {
  const isOperator = (valor) => Number.isNaN(valor) && (valor !== '.') && (valor !== '=');

  return (
    <div
      className={`button-container ${isOperator(buttonText) ? 'operator' : ''}`.trimEnd()}
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
};

export default Button;
