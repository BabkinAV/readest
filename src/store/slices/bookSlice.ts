import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { Book } from '../../data.model';

import data from '../../data';
import { SortType, AppliedFilter } from '../../data.model';

interface BookState {
  booksArray: Book[];
  appliedFilters: AppliedFilter[]
}

const initialState: BookState = {
  booksArray: data,
  appliedFilters: []
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
    addFilter: (state, action:PayloadAction<AppliedFilter>) => {
      if (
        state.appliedFilters.findIndex(
          (element) => element.value === action.payload.value
        ) === -1
      ) {
        state.appliedFilters.push(action.payload)
      }
    },
    removeFilter: (state, action: PayloadAction<string | number >) =>{
    
      state.appliedFilters = state.appliedFilters.filter(
        (arrayItem) => arrayItem.value !== action.payload
      );
      
    }
  },
});

export const bookData = (state: RootState) => state.books.booksArray;

export const { replaceFullData, sortData, addFilter, removeFilter } = bookSlice.actions;


export default bookSlice.reducer;
