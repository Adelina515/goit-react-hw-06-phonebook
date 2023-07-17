export const getFilter = state => state.filter;

export const getContacts = state => state.contacts;

export const getFilterContacts = state => {
  const contacts = state.contacts;
  const filter = state.filter;
  const toLowerCaseFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(toLowerCaseFilter)
  );
};
