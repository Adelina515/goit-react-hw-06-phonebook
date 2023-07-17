import style from 'components/ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);
  const handleDelete = () => dispatch(deleteContact());
  return (
    <ul>
      {contacts.map(contact => (
        <li className={style.li} key={contact.id}>
          <span className={style.spanName}>{contact.name}: </span>
          <span className={style.spanNumber}>{contact.number} </span>
          <button className={style.btnDelete} onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
