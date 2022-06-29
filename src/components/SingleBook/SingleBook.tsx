import React, { FC } from 'react';
import  dayjs from 'dayjs';
import { getBookById } from '../../data';
import StarRating from '../Gallery/Sidebar/StarRating/StarRating';
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
      <div className="singleBook">
        <div className="singleBook__image">
          <img
            src={`https://covers.openlibrary.org/b/isbn/${book.ISBN13}-L.jpg?default=false`}
            alt={`${book.Title} cover`}
          />
        </div>
        <div className="singleBook__info">
          <h1>{book.Title}</h1>
          <div className="singleBook__author">
            <b><span className="singleBook__author--gold">{book.Author}</span></b>
            <span className="singleBook__author--snippet">{' (author)'}</span>
             
          </div>
          <div className="singleBook__rating">
            <StarRating rating = {book['My Rating']} large/>
          </div>
          <div className="singleBook__date">
            <span>Date read: {dayjs(book['Date Read']).format('DD.MM.YYYY')}</span>
            
          </div>
        </div>
      </div>
    </StyledSingleBook>
  );
};

export default SingleBook;
