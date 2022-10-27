import { Component } from 'react';
import PropTypes from 'prop-types';

export class Contacts extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(item => (
          <li key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <button onClick={() => this.props.hendelDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  hendelDelete: PropTypes.func.isRequired,
};
