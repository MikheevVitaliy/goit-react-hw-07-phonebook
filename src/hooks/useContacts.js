import { useSelector } from 'react-redux';
import { selectVisibleContact } from 'redux/selectors';

export const useContacts = () => useSelector(selectVisibleContact);
