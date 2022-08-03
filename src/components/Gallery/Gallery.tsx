import React, { FC} from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {  sortData, addFilter, removeFilter } from '../../store/slices/bookSlice';
import { Wrapper } from './Gallery.styles';
import GalleryItem from '../GalleryItem/GalleryItem';
import Sidebar from './Sidebar/Sidebar';
import data from '../../data';
import { createArrayOfUniqueValues } from '../../helpers/dataArrayHandler';

const Gallery: FC = () => {
  const appliedFilters = useAppSelector((state) => state.books.appliedFilters)
  const books = useAppSelector((state) => state.books.booksArray);
  const dispatch = useAppDispatch();

  //TODO: move unique values creators to store


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
