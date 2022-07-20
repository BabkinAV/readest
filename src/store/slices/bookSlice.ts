import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { Book } from '../../data.model';

import data from '../../data';

interface BookState {
  booksArray: Book[]
}

const initialState: BookState = {
  booksArray: data,
} 

export const bookSlice = createSlice({
  name: 'bookData',
  initialState,
  reducers: {
    replaceFullData: (state, action: PayloadAction<Book[]>) => {
      state.booksArray = action.payload
    }
  }
});



export const bookData = (state: RootState) => state.books.booksArray;

export const {replaceFullData} = bookSlice.actions;




export default bookSlice.reducer;
