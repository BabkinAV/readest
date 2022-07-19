import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { Book } from '../../src/data.model';

import data from '../../src/data';

interface BookState {
  booksArray: Book[]
}

const initialState: BookState = {
  booksArray: data,
} 

export const BookSlice = createSlice({
  name: 'bookData',
  initialState,
  reducers: {
    replaceFullData: (state, action: PayloadAction<Book[]>) => {
      state.booksArray = action.payload
    }
  }
});



export const bookData = (state: RootState) => state.books.booksArray;




export default BookSlice.reducer;
