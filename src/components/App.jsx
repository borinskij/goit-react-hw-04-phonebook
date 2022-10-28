import { useEffect, useState } from 'react';
import { Section } from './Section/Section.jsx';
import { Form } from './ContactsForm/ContactsForm.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

const LOCAL_KEY = 'activ-id';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = localStorage.getItem(LOCAL_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  function hendlerChange(event) {
    setFilter(event.target.value);
  }

  function hendelSubmit(name, number) {
    const id = nanoid();
    if (contacts.some(item => item.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(prevContacts => [...prevContacts, { id, name, number }]);
  }

  function hendelDelete(id) {
    setContacts(contacts.filter(item => item.id !== id));
  }

  function filterMap() {
    const result = contacts.filter(element =>
      element.name.toLowerCase().includes(filter.toLowerCase())
    );
    return result;
  }

  return (
    <>
      <Section title={'Phonebook'}>
        <Form hendelSubmit={hendelSubmit} />
      </Section>
      <Section title={'Filter'}>
        <Filter stateFilter={filter} hendlerChange={hendlerChange} />
      </Section>

      <Section title={'Contacts'}>
        <Contacts contacts={filterMap()} hendelDelete={hendelDelete} />
      </Section>
    </>
  );
};
