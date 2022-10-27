import PropTypes from 'prop-types';

export const Filter = ({ hendlerChange, stateFilter }) => {
  return (
    <input
      onChange={hendlerChange}
      value={stateFilter}
      placeholder="filter"
      type="tel"
      name="filter"
    />
  );
};

Filter.propTypes = {
  stateFilter: PropTypes.string.isRequired,
  hendlerChange: PropTypes.func.isRequired,
};
