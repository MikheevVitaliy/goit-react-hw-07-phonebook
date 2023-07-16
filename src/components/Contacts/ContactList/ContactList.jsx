import { useSelector } from 'react-redux';
import { ListItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilters } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const getVisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <List>
      <ListItem contacts={getVisibleContact()} />
    </List>
  );
};
