import PropTypes from 'prop-types';

function Names({ name, age }) {
  return (
    <p className="my-name">
      {name}
      {' '}
      and
      {' '}
      {age}
    </p>
  );
}

Names.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Names;
