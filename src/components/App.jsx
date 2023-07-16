import { GlobalStyle } from './Layout/GlobalStyle';
import { Container } from './Layout/Container.styled';
import { Filter } from './Contacts/ContactFilter/Filter';
import { ContactForm } from './Contacts/ContactForm/ContactForm';
import { ContactList } from './Contacts/ContactList/ContactList';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Container>
  );
};
