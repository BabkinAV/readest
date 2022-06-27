import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../App.styles';
import SingleBook from '../SingleBook/SingleBook';

const SingleBookPage = () => {
  let { bookId } = useParams();

  return (
    <Container>
      <SingleBook id={bookId} />
    </Container>
  );
};

export default SingleBookPage;
