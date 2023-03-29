// import { nanoid } from 'nanoid';

import React from 'react';
import {
  Container,
  Title,
  List,
  Contact,
  Name,
  Number,
  DeleteBtn,
} from './ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      <Title>Contacts</Title>
      <form>
        <label>Enter name</label>
        <input type="text"></input>
      </form>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <DeleteBtn onClick={() => onDeleteContact(id)} type="button">
              Delete
            </DeleteBtn>
          </Contact>
        ))}
      </List>
    </Container>
  );
};
