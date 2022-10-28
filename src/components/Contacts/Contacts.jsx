import PropTypes from 'prop-types';

export const Contacts = ({ contacts, hendelDelete }) => {
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <button onClick={() => hendelDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  hendelDelete: PropTypes.func.isRequired,
};
