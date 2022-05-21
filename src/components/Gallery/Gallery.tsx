import React, { FC, useState } from 'react';
import { Wrapper } from './Gallery.styles';
import GalleryItem from './GalleryItem';
import Sidebar from './Sidebar';
import data from '../../data';
import { Book } from '../../data.model';

export type SortType =
  | 'Book Id'
  | 'Title'
  | 'Author'
  | 'My Rating'
  | 'Date Read';

const Gallery: FC = () => {
  const [books, setBooks] = useState<Book[]>(data);

  const authors = Array.from(new Set(books.map((item) => item['Author l-f'])));
  
  const handleSortTypeChange = (sortProperty: SortType) => {
    //if sort desc order should be set te negative
    let order = 1;
    if (sortProperty === 'My Rating' || sortProperty === 'Date Read') {
      order = -1;
    }
    setBooks((books) => {
      const sorted = [...books].sort((a, b) => {
        if (a[sortProperty] < b[sortProperty]) {
          return -order;
        }
        if (a[sortProperty] > b[sortProperty]) {
          return order;
        }
        return 0;
      });

      return sorted;
    });
  };

  return (
    <Wrapper className="gallery">
      <div className="gallery__title">
        <h2 className="gallery__title-text">My books</h2>
      </div>
      <div className="gallery__wrapper">
        <Sidebar
          handleSortTypeChange={handleSortTypeChange}
          authors={authors}
        />
        <div className="gallery__container">
          {books.map((el) => {
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
