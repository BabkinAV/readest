import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../App.styles';
import AddBook from '../AddBook/AddBook';

const AddBookPage = () => {

  return (
    <Container>
      <AddBook />
    </Container>
  );
};

export default AddBookPage;
