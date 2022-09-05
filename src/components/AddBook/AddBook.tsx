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
import { useInput } from '../../helpers/hooks/useInput';

const AddBook = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isCoverLoading, setIsCoverLoading] = useState(false);
  const [isBookUploading, setIsBookUploading] = useState(false);
  const [rating, setRating] = useState(0);


  const isNotEmpty = (value: string) => value.trim() !== '';
  const isISBN = (value: string) => {
    return /\b\d{13}\b/.test(value);
  };

  const {
    value: titleValue,
    isValid: titleIsValid,
    valueChangeHandler: titleChangeHandler,
    hasError: titleHasError,
    inputBlurHandler: titleBlurHandler,
    reset: titleReset
  } = useInput('', isNotEmpty);

  const {
    value: isbnValue,
    valueChangeHandler: isbnChangeHandler,
    hasError: isbnHasError,
    inputBlurHandler: isbnBlurHandler,
    reset: isbnReset
  } = useInput('', isISBN);

  const { value: firstNameValue, valueChangeHandler: firstNameChangeHandler, reset: firstNameReset } = useInput('', () => true);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    hasError: lastNameHasError,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInput('', isNotEmpty);

  const {
    value: dateReadValue,
    isValid: dateReadIsValid,
    valueChangeHandler: dateReadChangeHandler,
    hasError: dateReadHasError,
    inputBlurHandler: dateReadBlurHandler,
    reset: dateReadReset
  } = useInput('', isNotEmpty);

  let formIsValid = titleIsValid && lastNameIsValid && dateReadIsValid;

  const addBookFormSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      titleBlurHandler();
      lastNameBlurHandler();
      isbnBlurHandler();
      dateReadBlurHandler();
      return;
    }

    dispatch(
      addBook({
        'Book Id': Math.trunc(Math.random() * 10000000),
        Title: titleValue,
        Author: firstNameValue + ' ' + lastNameValue,
        'My Rating': rating,
        ISBN13: parseInt(isbnValue),
        'Date Read': dateReadValue,
        'Author l-f': lastNameValue + ', ' + firstNameValue,
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
    titleReset();
    isbnReset();
    firstNameReset();
    lastNameReset();
    dateReadReset()
    setRating(0);
  };
  const getBookCoverHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsCoverLoading(true);
    if (isbnValue) {
      axios
        .get(
          `https://covers.openlibrary.org/b/isbn/${isbnValue}-L.jpg?default=false`,
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
      setIsCoverLoading(false);
      isbnBlurHandler();
      return;
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
            <div
              className={`addBook-form__group addBook-form__group addBook-form__group ${
                titleHasError && 'hasError'
              }`}
            >
              <label htmlFor="title">Book Title*</label>
              <input
                id="title"
                name="title"
                type="text"
                onBlur={titleBlurHandler}
                onChange={titleChangeHandler}
                value={titleValue}
              />
              {titleHasError && (
                <span className="error">Title must not be empty</span>
              )}
            </div>
            <div
              className={`addBook-form__group addBook-form__group--isbn ${
                isbnHasError && 'hasError'
              }`}
            >
              <label htmlFor="isbn">ISBN code (for book cover)</label>
              <input
                id="isbn"
                name="isbn"
                type="text"
                onBlur={isbnBlurHandler}
                ref={isbnRef}
                value={isbnValue}
                onChange={isbnChangeHandler}
              />
              {isbnHasError && <span className="error">Invalid ISBN code</span>}
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
                onChange={firstNameChangeHandler}
                value={firstNameValue}
              />
            </div>
            <div
              className={`addBook-form__group ${
                lastNameHasError && 'hasError'
              } `}
            >
              <label htmlFor="lastName">Last Name*</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onBlur={lastNameBlurHandler}
                onChange={lastNameChangeHandler}
                value={lastNameValue}
              />
              {lastNameHasError && (
                <span className="error">Last name must not be empty</span>
              )}
            </div>
          </div>
          <div className="addBook-form__section addBook-form__section--review">
            <div className="addBook-form__header addBook-form__header--review">
              <h3>Add Review information</h3>
            </div>

            <div
              className={`addBook-form__group ${
                dateReadHasError && 'hasError'
              }`}
            >
              <label htmlFor="date-read">Date Read*</label>
              <input
                type="date"
                id="date-read"
                name="date-read"
                onBlur={dateReadBlurHandler}
                onChange={dateReadChangeHandler}
                value={dateReadValue}
                min="2010-01-01"
                max="2030-12-31"
              />
              {dateReadHasError && (
                <span className="error">Read date is required</span>
              )}
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

          <p className="addBook-form__info">*Required fields</p>

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
