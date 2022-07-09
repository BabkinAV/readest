import React from 'react';
import { StyledAddBook } from './AddBook.styles';
import emptyCover from '../../assets/images/emptyCover_md.png';
import StarRating from '../Gallery/Sidebar/StarRating/StarRating';

const AddBook = () => {
  return (
    <StyledAddBook>
      <div className="addBook">
        <div className="addBook__image">
          <img src={emptyCover} alt="empty cover" />
        </div>
        <div className="addBook__form addBook-form">
          <h2 className="addBook-form__header addBook-form__header--main">
            Add New Book
          </h2>
          <div className="addBook-form__section addBook-form__section--title">
            <div className="addBook-form__group">
              <label htmlFor="title">Book Title</label>
              <input id="title" name="title" type="text" />
            </div>
          </div>

          <div className="addBook-form__section addBook-form__section--author">
            <h3 className="addBook-form__header addBook-form__header--author">
              Add Author information
            </h3>
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
            <h3 className="addBook-form__header addBook-form__header--review">
              Add Review information
            </h3>
            <div className="addBook-form__group">
              <label htmlFor="date-read">Date Read</label>
              <input
                type="date"
                id="date-read"
                name="date-read"
                min="2018-01-01"
                max="2018-12-31"
              />
            </div>
            <div className="addBook-form__group">
              <label htmlFor="rating">My rating</label>
              <input type="number" id="rating" name="rating" min="1" max="5" />
            </div>
          </div>
          <div className="addBook-form__section addBook-form__section--extra">
            <h3 className="addBook-form__header addBook-form__header--extra">
              Additional information
            </h3>
            <div className="addBook-form__group  addBook-form__group--pages">
              <label htmlFor="pages">Number of pages:</label>
              <input id="pages" name="pages" type="text" />
            </div>
            <div className="addBook-form__group addBook-form__group--isbn">
              <label htmlFor="isbn">ISBN code (for book cover)</label>
              <input id="isbn" name="isbn" type="text" />
              <button className="addBook-form__button">Get book cover</button>
            </div>
          </div>

          <button className="addBook-form__button addBook-form__button--save">
            Save
          </button>
          <button className="addBook-form__button addBook-form__button--clear">
            Clear
          </button>
          <form onSubmit={() => {}}></form>
        </div>
      </div>
    </StyledAddBook>

    //TODO: Add book component should follow the similar structure as Single Book. Show on the left the blank image, and on the right show a form to input information with book details (title, author name, date read, amount of pages). Should include ISBN13 field and 'get image' button (book cover is coming via open library api).
  );
};

export default AddBook;
