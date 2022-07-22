import React, { FC, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { replaceFullData, sortData, addFilter, removeFilter } from '../../store/slices/bookSlice';
import { Wrapper } from './Gallery.styles';
import GalleryItem from '../GalleryItem/GalleryItem';
import Sidebar from './Sidebar/Sidebar';
import data from '../../data';
import { createArrayOfUniqueValues } from '../../helpers/dataArrayHandler';
import { Book } from '../../data.model';

const Gallery: FC = () => {
  //TODO: move appliedFilters state to redux store
  const appliedFilters = useAppSelector((state) => state.books.appliedFilters)
  const books = useAppSelector((state) => state.books.booksArray);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (appliedFilters.length > 0) {
      const filteredBooks = data.filter((book: Book) => {
        //checking if specific filter categories are present on filter array

        const isFilterListNotIncludes = {
          author: !appliedFilters.some((elem) => elem.category === 'author'),
          year: !appliedFilters.some((elem) => elem.category === 'year'),
          rating: !appliedFilters.some((elem) => elem.category === 'rating'),
        };

        //if specific filter categories are present - checking if appliedFilters array contains object with value equal to current book's specific property value .
        //TODO: review edge cases (like author name is equal to some number etc.)
        return (
          (isFilterListNotIncludes.author ||
            appliedFilters.some((distinctEl) => {
              return distinctEl.value === book['Author l-f'];
            })) &&
          (isFilterListNotIncludes.year ||
            appliedFilters.some((distinctEl) => {
              return distinctEl.value === book['Date Read'].slice(0, 4);
            })) &&
          (isFilterListNotIncludes.rating ||
            appliedFilters.some((distinctEl) => {
              return distinctEl.value === book['My Rating'];
            }))
        );
      });
      dispatch(replaceFullData(filteredBooks));
    } else {
      dispatch(replaceFullData(data));
    }
  }, [appliedFilters, dispatch]);

  const authors: string[] = createArrayOfUniqueValues<string>(
    data,
    'Author l-f',
    true
  );

  const ratings: number[] = createArrayOfUniqueValues<number>(
    data,
    'My Rating',
    false
  );

  const yearsRead: string[] = createArrayOfUniqueValues<string>(
    data,
    'Date Read',
    false
  );

  return (
    <Wrapper className="gallery">
      <div className="gallery__title">
        <h2 className="gallery__title-text">My books</h2>
      </div>
      <div className="gallery__wrapper">
        <Sidebar
          handleSortTypeChange={(sortProperty) =>
            dispatch(sortData(sortProperty))
          }
          authors={authors}
          yearsRead={yearsRead}
          ratings={ratings}
          appliedFilters={appliedFilters}
          handleXmarkClick={(filterValue) => dispatch(removeFilter(filterValue))}
          handleFilterClick={(addedElement) => {dispatch(addFilter(addedElement))}}
        />
        <div className="gallery__container">
          {books.map((el) => {
            return (
              <GalleryItem
                key={el['Book Id']}
                id={el['Book Id']}
                title={el.Title}
                author={el.Author}
                rating={el['My Rating']}
                isbn13={el.ISBN13}
                readDate={el['Date Read']}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Gallery;
