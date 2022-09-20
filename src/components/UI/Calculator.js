import PropTypes from 'prop-types';
import './Calculator.css';

function Number({ number }) {
  return <span className="number">{number}</span>;
}

Number.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Number;
