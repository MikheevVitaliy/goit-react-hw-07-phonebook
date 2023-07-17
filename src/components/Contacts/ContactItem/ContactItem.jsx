import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button, Item, Thumb } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  return contacts.map(({ id, name, number }) => (
    <Item key={id}>
      <Thumb>
        <p>{name}: </p>
      </Thumb>
      <Thumb>
        <p>{number}</p>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </Thumb>
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
