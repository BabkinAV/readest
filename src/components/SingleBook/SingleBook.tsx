import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import dayjs from 'dayjs';
import StarRating from '../Gallery/Sidebar/StarRating/StarRating';
import { StyledSingleBook } from './SingleBook.styles';
import { useParams } from 'react-router-dom';


import { useAppSelector } from '../../store/hooks';
import {singleBookSelector} from '../../store/slices/bookSlice'

type BooksParams = {
  bookId: string;
};

type openLibraryBook = {
  number_of_pages?: number;
};

const SingleBook = () => {
  let { bookId } = useParams<BooksParams>();
  const [bookInfo, setBookInfo] = useState<openLibraryBook>({});
  const [isBookInfoLoading, setIsBookInfoLoading] = useState<boolean>(true);
  let bookIdNum = parseInt(bookId!);
  const book = useAppSelector((state) =>
    singleBookSelector(state, bookIdNum)
  );

  const url = 'https://openlibrary.org/isbn/';

  useEffect(() => {
    axios
      .get<openLibraryBook>(url + `${book!.ISBN13}.json`)
      .then((response) => {
        setBookInfo(response.data);
        setIsBookInfoLoading(false);
      });
  }, [book]);

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
            <b>
              <span className="singleBook__author--gold">{book.Author}</span>
            </b>
            <span className="singleBook__author--snippet">{' (author)'}</span>
          </div>
          <div className="singleBook__rating">
            <StarRating rating={book['My Rating']} large />
          </div>
          <div className="singleBook__date">
            <span>
              Date read: <b>{dayjs(book['Date Read']).format('DD.MM.YYYY')}</b>
            </span>
          </div>
          <div className="singleBook__date">
            <span>
              ISBN code: <b>{book.ISBN13}</b>
            </span>
          </div>
          <div className="singleBook__pages">
            <span>
              Number of pages:{' '}
              {isBookInfoLoading ? (
                <Spinner />
              ) : (
                <b>
                  {bookInfo['number_of_pages']
                    ? bookInfo['number_of_pages']
                    : 'Not Available'}
                </b>
              )}
            </span>
          </div>
        </div>
      </div>
    </StyledSingleBook>
  );
};

export default SingleBook;
