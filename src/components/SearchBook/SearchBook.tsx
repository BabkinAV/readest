import React, { useState } from 'react';
import { Wrapper } from './SearchBook.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfiniteScroll from 'react-infinite-scroll-component';
import Select from '../Select/Select';
import SearchItem from './SearchItem/SearchItem';
import Spinner from '../Spinner/Spinner';

import { SearchResult, Doc } from '../../data.model';

import axios from 'axios';

interface FormElements extends HTMLFormControlsCollection {
  searchInput: HTMLInputElement;
  searchType: HTMLSelectElement;
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
  const [dataList, setDataList] = useState<Doc[]>([]);

  const [galleryLength, setGalleryLength] = useState<number>(20);

  const [showResults, setShowResults] = useState(false);

  const [showGallery, setShowGallery] = useState(false);

  const handleSearchFormSubmit = (
    event: React.FormEvent<SearchFormElement>
  ) => {
    event.preventDefault();
    setShowGallery(true);
    setDataList([]);
    setGalleryLength(20);
    const searchString = event.currentTarget.elements.searchInput.value;
    const searchType = event.currentTarget.elements.searchType.value;

    const searchQuery = parseSearchString(searchString);
    setShowResults(true);
    axios
      .get<SearchResult>(
        `https://openlibrary.org/search.json?${searchType}=${searchQuery}`
      )
      .then((res) => {
        res.data.docs.length > 0
          ? setDataList(res.data.docs)
          : setShowGallery(false);
      })
      .catch((error: string) => {
        console.log(error);
      });
  };

  const fetchMoreBooks = () => {
    setTimeout(() => {
      setGalleryLength((galleryLength) => {
        return galleryLength + 20;
      });
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
                name="searchInput"
                aria-label="search-input"
                type="text"
                className="search-form__input"
                placeholder="Enter text"
              />
              <button className="search-form__button" type="submit" aria-label='search'>
                <FontAwesomeIcon
                  icon={['fas', 'magnifying-glass']}
                  data-testid="star-filled"
                />
              </button>
            </div>
            <div className="search-form__select-wrapper">
              <Select
                name="searchType"
                id="search-type"
                accessibleName="search-type"
              >
                <option value="q">--Please choose search type--</option>
                <option value="q">By Title</option>
                <option value="author">By Author</option>
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
          {showGallery ? (
            <div className="search__gallery">
              <InfiniteScroll
                dataLength={galleryLength}
                next={fetchMoreBooks}
                hasMore={
                  dataList.length === 0 || dataList.length > galleryLength
                }
                loader={
                  <div className="search__spinner">
                    <Spinner />
                  </div>
                }
              >
                {dataList.slice(0, galleryLength).map((el) => {
                  return (
                    <SearchItem
                      title={el.title ?? 'Unknown title'}
                      author={
                        el.author_name ? el.author_name[0] : 'Unknown author'
                      }
                      isbn={el.isbn ? el.isbn[0] : ''}
                      coverId={el.cover_i ?? 0}
                      key={el.key}
                    />
                  );
                })}
              </InfiniteScroll>
            </div>
          ) : (
            <p>No result has been found. Please refine your search.</p>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default SearchBook;
