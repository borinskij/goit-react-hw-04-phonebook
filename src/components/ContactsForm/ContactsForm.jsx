import { Component } from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  hendlerChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  hendelSubmit = event => {
    event.preventDefault();
    this.props.hendelSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.hendelSubmit}>
        <label>
          Name
          <br />
          <input
            onChange={this.hendlerChange}
            type="text"
            name="name"
            value={this.state.name}
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
            onChange={this.hendlerChange}
            value={this.state.number}
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
  }
}

Form.propTypes = {
  hendelSubmit: PropTypes.func.isRequired,
};
