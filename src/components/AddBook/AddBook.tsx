import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

//Redux stuff
import { useAppDispatch } from '../../store/hooks';
import { addBook } from '../../store/slices/bookSlice';

import axios from 'axios';
import { StyledAddBook } from './AddBook.styles';
import emptyCover from '../../assets/images/emptyCover_md.png';
import Button from '../Button/Button';
import StarRatingInput from './StarRatingInput/StarRatingInput';

const AddBook = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [inputs, setInputs] = useState({
    title: '',
    firstName: '',
    lastName: '',
    'date-read': '',
    pages: '',
    isbn: '',
  });
  const [isCoverLoading, setIsCoverLoading] = useState(false);
  const [isBookUploading, setIsBookUploading] = useState(false);
  const [rating, setRating] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const addBookFormSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(
      addBook({
        'Book Id': Math.trunc(Math.random() * 10000000),
        Title: inputs.title,
        Author: inputs.firstName + ' ' + inputs.lastName,
        'My Rating': rating,
        ISBN13: parseInt(inputs.isbn),
        'Date Read': inputs['date-read'],
        'Author l-f': inputs.lastName + ', ' + inputs.firstName,
      })
    );

    setIsBookUploading(true);

    //***draft state to mock the db async upload***

    setTimeout(() => {
      setIsBookUploading(false);
      navigate('/');
    }, 1000);
  };

  const clearInputFieldsHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setInputs({
      title: '',
      firstName: '',
      lastName: '',
      'date-read': '',
      pages: '',
      isbn: '',
    });
    setRating(0);
  };
  const getBookCoverHandler = () => {
    setIsCoverLoading(true);
    if (inputs.isbn) {
      axios
        .get(
          `https://covers.openlibrary.org/b/isbn/${inputs.isbn}-L.jpg?default=false`,
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
              <input
                id="title"
                name="title"
                type="text"
                onChange={handleChange}
                value={inputs.title}
              />
            </div>
            <div className="addBook-form__group addBook-form__group--isbn">
              <label htmlFor="isbn">ISBN code (for book cover)</label>
              <input
                id="isbn"
                name="isbn"
                type="text"
                ref={isbnRef}
                value={inputs.isbn}
                onChange={handleChange}
              />
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
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleChange}
                value={inputs.firstName}
              />
            </div>
            <div className="addBook-form__group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={handleChange}
                value={inputs.lastName}
              />
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
                onChange={handleChange}
                value={inputs['date-read']}
                min="2010-01-01"
                max="2030-12-31"
                required
              />
            </div>
            <div className="addBook-form__group">
              <label htmlFor="rating">My rating</label>
              <StarRatingInput
                rating={rating}
                key={rating}
                onStarClick={(index) => {
                  setRating(index);
                }}
              />
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
            onClick={clearInputFieldsHandler}
          >
            Clear
          </Button>
        </form>
      </div>
    </StyledAddBook>
  );
};

export default AddBook;
