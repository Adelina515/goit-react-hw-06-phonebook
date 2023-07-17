import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length === 0 ? (
          <p>Haven't got contacts. Please, add contact </p>
        ) : (
          <Filter />
        )}
        {contacts.length > 0 && <ContactList />}
      </div>
    </>
  );
};
