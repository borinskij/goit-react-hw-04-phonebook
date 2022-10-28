import { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { Form } from './ContactsForm/ContactsForm.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

const LOCAL_KEY = 'activ-id';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const locaStorageData = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (locaStorageData) {
      this.setState({ contacts: locaStorageData });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;

    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }

  hendlerChange = event => {
    const { value, name } = event.target;
    console.log('name :', name);
    console.log('value :', value);
    this.setState({ [name]: value });
  };
  hendelSubmit = (name, number) => {
    const id = nanoid();
    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: id, name: name, number: number },
        ],
      };
    });
  };
  hendelDelete = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };

  filterMap = () => {
    let filterContact = this.state.contacts.filter(element =>
      element.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filterContact;
  };
  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <Form
            // state={this.state}
            // hendlerChange={this.hendlerChange}
            hendelSubmit={this.hendelSubmit}
          />
        </Section>
        <Section title={'Filter'}>
          <Filter
            stateFilter={this.state.filter}
            hendlerChange={this.hendlerChange}
          />
        </Section>

        <Section title={'Contacts'}>
          <Contacts
            contacts={this.filterMap()}
            hendelDelete={this.hendelDelete}
          />
        </Section>
      </>
    );
  }
}

// export const  App = () => {
// const [contacts, setContacts] = useState ([]);
// const [filter, setFilter] = useState('')

//
// const locaStorageData = JSON.parse(localStorage.getItem(LOCAL_KEY));
//
// setContacts(locaStorageData );
//
//

//  useEffect(()=> {
//  setContacts( localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
// }, [contacts])

// const hendlerChange = event => {
// setFilter(value.event.target);
// };

//++++++++++++++ hendelSubmit = (name, number) => {
//   const id = nanoid();
//   if (contacts.some(name)) {
//     return alert(`${name} is already in contacts`);
//   }
//   setContacts(prevContacts => [
//     ...prevContacts,
//     { id, name, number },
//   ]);
// };

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!useEffect(()=>(setContacts(contacts.filter(item => item.id !== id))),[id])
//hendelDelete = id => {
//   this.setState(prevState => {
//     return { contacts: prevState.contacts.filter(item => item.id !== id) };
//   });
// };
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// filterMap = () => {
//   let filterContact = this.state.contacts.filter(element =>
//     element.name.toLowerCase().includes(this.state.filter.toLowerCase())
//   );
//   return filterContact;
// };

//   return (
//   <>
//     <Section title={'Phonebook'}>
//       <Form

//         hendelSubmit={this.hendelSubmit}
//       />
//     </Section>
//     <Section title={'Filter'}>
//       <Filter stateFilter={this.state.filter} hendlerChange={this.hendlerChange} />
//     </Section>

//     <Section title={'Contacts'}>
//       <Contacts contacts={this.filterMap()} hendelDelete={this.hendelDelete} />
//     </Section>
//   </>
// )
// }
