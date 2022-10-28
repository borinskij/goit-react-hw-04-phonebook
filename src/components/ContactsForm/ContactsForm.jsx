import PropTypes from 'prop-types';
import { useState } from 'react';

export const Form = ({ hendelSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendlerChangeName = event => {
    const { value } = event.target;
    setName(value);
  };
  const hendlerChangeNumber = event => {
    const { value } = event.target;
    setNumber(value);
  };

  const submit = event => {
    event.preventDefault();
    hendelSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submit}>
      <label>
        Name
        <br />
        <input
          onChange={hendlerChangeName}
          type="text"
          name="name"
          value={name}
          placeholder="Name User"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        Number <br />
        <input
          onChange={hendlerChangeNumber}
          value={number}
          placeholder="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button>Add Contact</button>
      <br />
      <br />
    </form>
  );
};

Form.propTypes = {
  hendelSubmit: PropTypes.func.isRequired,
};
