import React, { FC} from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {  sortData, addFilter, removeFilter } from '../../store/slices/bookSlice';

import { bookFiltersSelector, filteredBooksArraySelector, authorsSelector, ratingsSelector, yearsSelector } from '../../store/slices/bookSlice';

import { Wrapper } from './Gallery.styles';
import GalleryItem from '../GalleryItem/GalleryItem';
import Sidebar from './Sidebar/Sidebar';

const Gallery: FC = () => {
  const appliedFilters = useAppSelector(bookFiltersSelector)
  const authors = useAppSelector(authorsSelector);
  const yearsRead = useAppSelector(yearsSelector);
  const ratings = useAppSelector(ratingsSelector)
  const filteredBooks = useAppSelector(filteredBooksArraySelector);
  const dispatch = useAppDispatch();


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
          {filteredBooks.map((el) => {
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
