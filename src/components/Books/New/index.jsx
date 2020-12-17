import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Books">
        Create you book
      </Header>

      <Container>
        <Form endpoint="books"/>
      </Container>
    </>
  );
}
 
export default New;