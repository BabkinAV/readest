import React, { FC } from 'react';
import { getBookById } from '../../data';
import { StyledSingleBook } from './SingleBook.styles';

type SingleBookProps = {
  id?: string;
};

const SingleBook: FC<SingleBookProps> = ({ id }) => {
  let bookIdNum = parseInt(id!);
  const book = getBookById(bookIdNum);

  if (book === undefined) {
    return <h1>Book not found</h1>;
  }
  return (
    <StyledSingleBook>
      <h1>{book.Title}</h1>
      <img src={`https://covers.openlibrary.org/b/isbn/${book.ISBN13}-L.jpg?default=false`} alt={`${book.Title} cover`} />
      <div className="author-name__container">
        <span>By: {book.Author}</span>
      </div>
      <div className="rating-container">
        <span>My Rating: {book['My Rating']}</span>
      </div>
      <div className="date__read-container">
        <span>Date read: {book['Date Read']}</span>
      </div>
      
    </StyledSingleBook>
  );
};

export default SingleBook;
