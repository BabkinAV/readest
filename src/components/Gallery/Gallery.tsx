import React, { FC, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import { Wrapper } from './Gallery.styles';
import GalleryItem from './GalleryItem';
import Sidebar from './Sidebar';
import data from '../../data';
import { Book } from '../../data.model';
import { AppliedFilter } from '../../data.model';

export type SortType =
  | 'Book Id'
  | 'Title'
  | 'Author'
  | 'My Rating'
  | 'Date Read';

const Gallery: FC = () => {
  const [books, setBooks] = useState<Book[]>(data);
  const [appliedFilters, setAppliedFilters] = useState<AppliedFilter[]>([]);
  useEffect(() => {
    if (appliedFilters.length > 0) {
      const filteredBooks = data.filter(
        (book: Book) => {
          //checking if specific filter categories are present on filter array

          const isFilterListNotIncludes = {
            author: !appliedFilters.some((elem) => elem.category === 'author'),
            year: !appliedFilters.some((elem) => elem.category === 'year'),
          };

          //if specific filter categories are present - checking if appliedFilters array contains object with value equal to current book's specific property value .
          return (
            (isFilterListNotIncludes.author ||
              appliedFilters.some((distinctEl) => {
                return distinctEl.value === book['Author l-f'];
              })) &&
            (isFilterListNotIncludes.year ||
              appliedFilters.some((distinctEl) => {
                return distinctEl.value === book['Date Read'].slice(0, 4);
              }))
          );
        }

      );
      setBooks(filteredBooks);
    } else {
      setBooks(data);
    }
  }, [appliedFilters]);

  //TODO: consolidate 3 data parses into a single function

  const authors = Array.from(new Set(data.map((item) => item['Author l-f'])));

  //enabling custom parse format for dayjs
  dayjs.extend(CustomParseFormat);
  const yearsRead = Array.from(
    new Set(
      data.map((item) => dayjs(item['Date Read'], 'YYYY/MM/DD').format('YYYY'))
    )
  );

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

  const handleXmarkClick = (filterValue: string | number) => {
    const modifiedAppliedFilters = appliedFilters.filter(
      (arrayItem) => arrayItem.value !== filterValue
    );
    setAppliedFilters(modifiedAppliedFilters);
  };
  const handleFilterClick = (addedElement: AppliedFilter) => {
    // const newElement: AppliedFilter = {category: 'author', value: addedElement};
    if (
      appliedFilters.findIndex(
        (element) => element.value === addedElement.value
      ) === -1
    ) {
      setAppliedFilters((oldFiltersArray) => [
        ...oldFiltersArray,
        { category: addedElement.category, value: addedElement.value },
      ]);
    }
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
          yearsRead={yearsRead}
          appliedFilters={appliedFilters}
          handleXmarkClick={handleXmarkClick}
          handleFilterClick={handleFilterClick}
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
