import React, { useState } from 'react';
import { Wrapper } from './SearchBook.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfiniteScroll from 'react-infinite-scroll-component';
import Select from '../Select/Select';
import SearchItem from './SearchItem/SearchItem';
import Spinner from '../Spinner/Spinner';

import { SearchResult } from '../../data.model';

import searchData from '../../searchData';

const SearchBook = () => {
  let data = searchData as SearchResult;
	const [booksList, setBooksList] = useState(data.docs.slice(0, 20));

	const fetchMoreBooks = () => {
		setTimeout(() => {
			setBooksList((booksList) => booksList.concat(data.docs.slice(booksList.length, booksList.length + 20)))
		}, 1500)
	}
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
      <div className="search__results-text">
        <h3 className="search__results-header">Your search results</h3>
      </div>
      <div className="search__gallery">
        <InfiniteScroll 
				dataLength={booksList.length}
				next={fetchMoreBooks}
				hasMore={searchData.docs.length > booksList.length}
				loader={<div className='search__spinner'><Spinner /></div>}
				>
          {booksList.map((el,index) => 
					{
            return (
              <SearchItem
                title={el.title ?? 'Unknown title'}
                author={el.author_name ? el.author_name[0] : 'Unknown author'}
                coverId={el.cover_i ?? 0}
                key={el.key}
              />
            );
          }
					)}
        </InfiniteScroll>
      </div>
    </Wrapper>
  );
};

export default SearchBook;
