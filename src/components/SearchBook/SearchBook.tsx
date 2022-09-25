import React from 'react';
import { Wrapper } from './SearchBook.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from '../Select/Select';

const SearchBook = () => {
  return (
    <Wrapper className="search">
      <div className="search__title">
        <h2 className="search__title-text">Search for book</h2>
      </div>
      <div className="search__outer">
        <form action="#" className="search-form">
          <div className="search-form__content">
            <div className="search-form__input-wrapper">
              <input
                type="text"
                className="search-form__input"
                placeholder="Enter text"
              />
              <button className="search-form__button" type="submit">
                <FontAwesomeIcon
                  icon={['fas', 'magnifying-glass']}
                  data-testid="star-filled"
                />
              </button>
            </div>
            <div className="search-form__select-wrapper">
              <Select>
                <option value="">--Please choose search type--</option>
                <option value="Title">By Title</option>
                <option value="Author">By Author</option>
              </Select>
            </div>
          </div>
        </form>
      </div>
      <div className="search__results">Search results will go here...</div>
    </Wrapper>
  );
};

export default SearchBook;
