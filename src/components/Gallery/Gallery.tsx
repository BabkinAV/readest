import React, { FC, useState, useEffect } from 'react';
import { Wrapper } from './Gallery.styles';
import GalleryItem from './GalleryItem';
import Sidebar from './Sidebar';
import data from '../../data';
import { createArrayOfUniqueValues } from '../../helpers/dataArrayHandler';
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
      const filteredBooks = data.filter((book: Book) => {
        //checking if specific filter categories are present on filter array

        const isFilterListNotIncludes = {
          author: !appliedFilters.some((elem) => elem.category === 'author'),
          year: !appliedFilters.some((elem) => elem.category === 'year'),
          rating: !appliedFilters.some((elem) => elem.category === 'rating'),
        };

        //if specific filter categories are present - checking if appliedFilters array contains object with value equal to current book's specific property value .
        //TODO: review edge cases
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
      setBooks(filteredBooks);
    } else {
      setBooks(data);
    }
  }, [appliedFilters]);


  const authors: string[] = createArrayOfUniqueValues<string>(data, 'Author l-f', true);

  const ratings: number[] = createArrayOfUniqueValues<number>(data, 'My Rating', false);

  const yearsRead: string[] = createArrayOfUniqueValues<string>(data, 'Date Read', false);

  const handleSortTypeChange = (sortProperty: SortType) => {
    //if sort desc order should be set to negative
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
          ratings={ratings}
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
