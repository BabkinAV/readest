import React, { useState, useEffect } from 'react';
import { Wrapper } from './SearchBook.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfiniteScroll from 'react-infinite-scroll-component';
import Select from '../Select/Select';
import SearchItem from './SearchItem/SearchItem';
import Spinner from '../Spinner/Spinner';

import { SearchResult, Doc } from '../../data.model';

import searchData from '../../searchData';
import axios from 'axios';

interface FormElements extends HTMLFormControlsCollection {
  searchInput: HTMLInputElement;
}
interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const parseSearchString = (str: string) => {
  const arrWords = str.toLowerCase().match(/[a-z0-9]+/g);
  if (arrWords) {
    const parsedString = arrWords.join('+');
    return parsedString;
  }
  return '';
};

const SearchBook = () => {
	//TODO: refactor 2 data list into 1
  const [booksList, setBooksList] = useState<Doc[]>([]);
  const [dataList, setDataList] = useState<Doc[]>([]);

  const [showResults, setShowResults] = useState(false);

  const [searchString, setSearchString] = useState<string>('');

  useEffect(() => {
    axios
      .get<SearchResult>(`http://openlibrary.org/search.json?q=${searchString}`)
      .then((res) => {
        setBooksList(res.data.docs.slice(0, 20));
				setDataList(res.data.docs);
      })
      .catch((error: string) => {
        console.log(error);
      });
  }, [searchString]);

  const handleSearchFormSubmit = (
    event: React.FormEvent<SearchFormElement>
  ) => {
    event.preventDefault();
    const searchString = event.currentTarget.elements.searchInput.value;
    const searchQuery = parseSearchString(searchString);
    setSearchString(searchQuery);
    setShowResults(true);
  };

  const fetchMoreBooks = () => {
    setTimeout(() => {
      setBooksList((booksList) =>
        booksList.concat(
          dataList.slice(booksList.length, booksList.length + 20)
        )
      );
    }, 1500);
  };
  return (
    <Wrapper className="search">
      <div className="search__title">
        <h2 className="search__title-text">Search for book</h2>
      </div>
      <div className="search__outer">
        <form
          action="#"
          className="search-form"
          onSubmit={handleSearchFormSubmit}
        >
          <div className="search-form__content">
            <div className="search-form__input-wrapper">
              <input
                type="text"
                name="searchInput"
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
      {showResults && (
        <div className="search__results">
          <div className="search__results-text">
            <h3 className="search__results-header">Your search results</h3>
          </div>

          <div className="search__gallery">
            <InfiniteScroll
              dataLength={booksList.length}
              next={fetchMoreBooks}
              hasMore={searchData.docs.length > booksList.length}
              loader={
                <div className="search__spinner">
                  <Spinner />
                </div>
              }
            >
              {booksList.map((el) => {
                return (
                  <SearchItem
                    title={el.title ?? 'Unknown title'}
                    author={
                      el.author_name ? el.author_name[0] : 'Unknown author'
                    }
                    coverId={el.cover_i ?? 0}
                    key={el.key}
                  />
                );
              })}
            </InfiniteScroll>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default SearchBook;
