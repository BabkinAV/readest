import React, { FC} from 'react';

import { useAppSelector } from '../../store/hooks';

import { sortedFilteredBooksArraySelector } from '../../store/slices/bookSlice';

import { Wrapper } from './Gallery.styles';
import GalleryItem from '../GalleryItem/GalleryItem';
import Sidebar from './Sidebar/Sidebar';

const Gallery: FC = () => {
  
  
  const sortedFilteredBooks = useAppSelector(sortedFilteredBooksArraySelector);


  return (
    <Wrapper className="gallery">
      <div className="gallery__title">
        <h2 className="gallery__title-text">My books</h2>
      </div>
      <div className="gallery__wrapper">
        <Sidebar />
        <div className="gallery__container">
          {sortedFilteredBooks.map((el) => {
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
