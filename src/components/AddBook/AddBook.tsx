import React, { useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

//Redux stuff
import { useAppDispatch } from '../../store/hooks';
import { addBook } from '../../store/slices/bookSlice';

import axios from 'axios';
import { StyledAddBook } from './AddBook.styles';
import emptyCover from '../../assets/images/emptyCover_md.png';
import Button from '../Button/Button';

const AddBook = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isCoverLoading, setIsCoverLoading] = useState(false);
  const [isBookUploading, setIsBookUploading] = useState(false);
  const addBookFormSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      title: { value: string };
      firstName: { value: string };
      lastName: { value: string };
      'date-read': { value: string };
      rating: { value: string };
      pages: { value: string };
      isbn: { value: string };
    };
    //TODO: replace properties with actual values from form
    dispatch(
      addBook({
        'Book Id': Math.trunc(Math.random() * 10000000),
        Title: target.title.value,
        Author: target.firstName.value + ' ' + target.lastName.value,
        'My Rating': parseInt(target.rating.value),
        ISBN13: parseInt(target.isbn.value),
        'Date Read': target['date-read'].value,
        'Author l-f': target.lastName.value + ', ' + target.firstName.value,
      })
    );

    setIsBookUploading(true);
    

    //***draft state to mimic the db async upload***

    setTimeout(() => {
      setIsBookUploading(false);
      navigate('/');

    }, 1000);
  };
  const getBookCoverHandler = () => {
    setIsCoverLoading(true);
    if (isbnRef.current) {
      axios
        .get(
          `https://covers.openlibrary.org/b/isbn/${isbnRef.current['value']}-L.jpg?default=false`,
          {
            responseType: 'blob',
          }
        )
        .then((res) => {
          const imageBlob = new Blob([res.data]);
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setIsbn(imageObjectURL);
        })
        .finally(() => {
          setIsCoverLoading(false);
        });
    } else {
      //TODO: Error handling for improper or absent isbn code
    }
  };

  const isbnRef = useRef(null);
  const [isbn, setIsbn] = useState<string>(emptyCover);

  return (
    <StyledAddBook>
      <div className="addBook">
        <div className="addBook__image">
          <img src={isbn} alt="empty cover" />
        </div>
        <form
          className="addBook__form addBook-form"
          onSubmit={addBookFormSubmitHandler}
        >
          <div className="addBook-form__header addBook-form__header--main">
            <h2>Add New Book</h2>
          </div>

          <div className="addBook-form__section addBook-form__section--title">
            <div className="addBook-form__group">
              <label htmlFor="title">Book Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="addBook-form__group addBook-form__group--isbn">
              <label htmlFor="isbn">ISBN code (for book cover)</label>
              <input id="isbn" name="isbn" type="text" ref={isbnRef} />
              <Button
                className="addBook-form__button"
                onClick={getBookCoverHandler}
                loading={isCoverLoading}
              >
                Get book cover
              </Button>
            </div>
          </div>

          <div className="addBook-form__section addBook-form__section--author">
            <div className="addBook-form__header addBook-form__header--author">
              <h3>Add Author information</h3>
            </div>

            <div className="addBook-form__group">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" />
            </div>
            <div className="addBook-form__group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" />
            </div>
          </div>
          <div className="addBook-form__section addBook-form__section--review">
            <div className="addBook-form__header addBook-form__header--review">
              <h3>Add Review information</h3>
            </div>

            <div className="addBook-form__group">
              <label htmlFor="date-read">Date Read</label>
              <input
                type="date"
                id="date-read"
                name="date-read"
                min="2018-01-01"
                max="2018-12-31"
                required
              />
            </div>
            <div className="addBook-form__group">
              {/* TODO: Make my rating as hoverable element */}
              <label htmlFor="rating">My rating</label>
              <input type="number" id="rating" name="rating" min="1" max="5" />
            </div>
          </div>

          <Button
            className="addBook-form__button addBook-form__button--save"
            type="submit"
            loading={isBookUploading}
          >
            Save
          </Button>
          <Button
            className="addBook-form__button"
            outlined={true}
            onClick={getBookCoverHandler}
          >
            Clear
          </Button>
        </form>
      </div>
    </StyledAddBook>
  );
};

export default AddBook;
