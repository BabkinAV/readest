import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { Book } from '../../data.model';

import data from '../../data';
import { SortType, AppliedFilter } from '../../data.model';
import filterBooksArray from '../helpers/filterBooksArray';

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

      const filteredBooks = filterBooksArray(initialState.booksArray, newFilters);
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
        const filteredBooks = filterBooksArray(initialState.booksArray, newFilters);
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
