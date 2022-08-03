import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { Book } from '../../data.model';

import data from '../../data';
import { SortType, AppliedFilter } from '../../data.model';

interface BookState {
  booksArray: Book[];
  appliedFilters: AppliedFilter[];
}

const initialState: BookState = {
  booksArray: data,
  appliedFilters: [],
};

export const bookSlice = createSlice({
  name: 'bookData',
  initialState,
  reducers: {
    replaceFullData: (state, action: PayloadAction<Book[]>) => {
      state.booksArray = action.payload;
    },
    sortData: (state, action: PayloadAction<SortType>) => {
      let order = 1;
      const sortProperty = action.payload;

      if (sortProperty === 'My Rating' || sortProperty === 'Date Read') {
        order = -1;
      }

      const sorted = [...state.booksArray].sort((a, b) => {
        if (a[sortProperty] < b[sortProperty]) {
          return -order;
        }
        if (a[sortProperty] > b[sortProperty]) {
          return order;
        }
        return 0;
      });
      state.booksArray = sorted;
    },
    addFilter: (state, action: PayloadAction<AppliedFilter>) => {
      let newFilters: AppliedFilter[] = [...state.appliedFilters];
      if (
        state.appliedFilters.findIndex(
          (element) => element.value === action.payload.value
        ) === -1
      ) {
        newFilters.push(action.payload);
      }

      const filteredBooks = initialState.booksArray.filter((book: Book) => {
        //checking if specific filter categories are present on filter array

        const isFilterListNotIncludes = {
          author: !newFilters.some((elem) => elem.category === 'author'),
          year: !newFilters.some((elem) => elem.category === 'year'),
          rating: !newFilters.some((elem) => elem.category === 'rating'),
        };

        //if specific filter categories are present - checking if appliedFilters array contains object with value equal to current book's specific property value .
        //TODO: review edge cases (like author name is equal to some number etc.)
        return (
          (isFilterListNotIncludes.author ||
            newFilters.some((distinctEl) => {
              return distinctEl.value === book['Author l-f'];
            })) &&
          (isFilterListNotIncludes.year ||
            newFilters.some((distinctEl) => {
              return distinctEl.value === book['Date Read'].slice(0, 4);
            })) &&
          (isFilterListNotIncludes.rating ||
            newFilters.some((distinctEl) => {
              return distinctEl.value === book['My Rating'];
            }))
        );
      });
      return {
        ...state,
        appliedFilters: newFilters,
        booksArray: filteredBooks,
      };
    },
    removeFilter: (state, action: PayloadAction<string | number>) => {
      let newFilters: AppliedFilter[] = [...state.appliedFilters].filter(
        (arrayItem) => arrayItem.value !== action.payload
      );

      if (newFilters.length > 0) {
        const filteredBooks = initialState.booksArray.filter((book: Book) => {
          //checking if specific filter categories are present on filter array

          const isFilterListNotIncludes = {
            author: !newFilters.some((elem) => elem.category === 'author'),
            year: !newFilters.some((elem) => elem.category === 'year'),
            rating: !newFilters.some((elem) => elem.category === 'rating'),
          };

          //if specific filter categories are present - checking if appliedFilters array contains object with value equal to current book's specific property value .
          //TODO: review edge cases (like author name is equal to some number etc.)
          return (
            (isFilterListNotIncludes.author ||
              newFilters.some((distinctEl) => {
                return distinctEl.value === book['Author l-f'];
              })) &&
            (isFilterListNotIncludes.year ||
              newFilters.some((distinctEl) => {
                return distinctEl.value === book['Date Read'].slice(0, 4);
              })) &&
            (isFilterListNotIncludes.rating ||
              newFilters.some((distinctEl) => {
                return distinctEl.value === book['My Rating'];
              }))
          );
        });
        return {
          ...state,
          appliedFilters: newFilters,
          booksArray: filteredBooks,
        };
      } else {
        return { ...state, appliedFilters: newFilters, booksArray: initialState.booksArray };
      }
    },
  },
});

export const bookData = (state: RootState) => state.books.booksArray;

export const { replaceFullData, sortData, addFilter, removeFilter } =
  bookSlice.actions;

export default bookSlice.reducer;
