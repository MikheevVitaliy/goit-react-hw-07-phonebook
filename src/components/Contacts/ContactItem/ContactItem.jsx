import PropTypes from 'prop-types';
import { Button, Item, Thumb } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  return contacts.map(({ id, name, number }) => (
    <Item key={id}>
      <Thumb>
        <p>{name}: </p>
        <p>{number}</p>
      </Thumb>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  ));
};

ListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
