import React, { FC } from 'react';
import { Wrapper } from './Gallery.styles';
import GalleryItem from './GalleryItem';
import GallerySidebar from './GallerySidebar';
import data from '../../data';
import { Book } from '../../data.model';

const Gallery: FC = () => {
  return (
    <Wrapper className="gallery">
      <div className="gallery__title">
        <h2 className="gallery__title-text">My books</h2>
      </div>
      <div className="gallery__wrapper">
        <GallerySidebar />
        <div className="gallery__container">
          {data.map((el: Book) => {
            return (
              <GalleryItem
                key={el['Book Id']}
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
