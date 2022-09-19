import PropTypes from 'prop-types';

function Names({ name }) {
  return <p className="my-name">{name}</p>;
}

Names.propTypes = { name: PropTypes.string.isRequired };

export default Names;
