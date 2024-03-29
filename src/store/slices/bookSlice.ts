import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { createArrayOfUniqueValues } from '../../helpers/dataArrayHandler';

import { Book } from '../../data.model';

import { SortType, AppliedFilter } from '../../data.model';
import filterBooksArray from '../helpers/filterBooksArray';

interface BookState {
  booksArray: Book[];
  appliedFilters: AppliedFilter[];
  sorting: SortType;
	dataObtained: boolean;
}

const initialState: BookState = {
  booksArray: [],
  appliedFilters: [],
  sorting: 'Book Id',
	dataObtained: false,
};

export const bookSlice = createSlice({
  name: 'bookData',
  initialState,
  reducers: {
    setBooks: (state, action:PayloadAction<Book[]>) => {
      state.booksArray = action.payload;
    },
		setDataObtained: (state) => {
			state.dataObtained = true;
		},
    addBook: (state, action: PayloadAction<Book>) => {
      state.booksArray.push(action.payload);
    },
    sortData: (state, action: PayloadAction<SortType>) => {
      state.sorting = action.payload;
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

      return {
        ...state,
        appliedFilters: newFilters,
      };
    },
    removeFilter: (state, action: PayloadAction<string | number>) => {
      let newFilters: AppliedFilter[] = [...state.appliedFilters].filter(
        (arrayItem) => arrayItem.value !== action.payload
      );

      return {
        ...state,
        appliedFilters: newFilters,
      };
    },
  },
});

export const selectBooks = (state: RootState) => state.books.booksArray;

const selectBookId = (state: RootState, bookId: number) => bookId;

export const { sortData, setDataObtained, addFilter, removeFilter, addBook, setBooks } = bookSlice.actions;

export const bookFiltersSelector = (state: RootState) =>
  state.books.appliedFilters;

export const filteredBooksArraySelector = createSelector(
  selectBooks,
  bookFiltersSelector,
  (booksArray: Book[], AppliedFilters: AppliedFilter[]) => {
    const filteredBooks = filterBooksArray(booksArray, AppliedFilters);
    return filteredBooks;
  }
);

export const sortedFilteredBooksArraySelector = createSelector(
  filteredBooksArraySelector,
  (state: RootState) => state.books.sorting,
  (filteredBooksArray: Book[], sortProperty: SortType) => {
    let order = 1;

    if (sortProperty === 'My Rating' || sortProperty === 'Date Read') {
      order = -1;
    }

    const sortedArray = [...filteredBooksArray].sort((a, b) => {
      if (a[sortProperty] < b[sortProperty]) {
        return -order;
      }
      if (a[sortProperty] > b[sortProperty]) {
        return order;
      }
      return 0;
    });
    return sortedArray;
  }
);

export const authorsSelector = (state: RootState) => {
  const authors: string[] = createArrayOfUniqueValues<string>(
    state.books.booksArray,
    'Author l-f',
    true
  );

  return authors;
};
export const ratingsSelector = (state: RootState) => {
  const ratings: number[] = createArrayOfUniqueValues<number>(
    state.books.booksArray,
    'My Rating',
    false
  );

  return ratings;
};
export const yearsSelector = (state: RootState) => {
  const years: string[] = createArrayOfUniqueValues<string>(
    state.books.booksArray,
    'Date Read',
    true
  );

  return years;
};

export const singleBookSelector = createSelector(
  [selectBooks, selectBookId],
  (bookList, bookId) => {
    // console.log(bookId);
    return bookList.find((arrayEl) => arrayEl['Book Id'] === bookId);
  }
);


export default bookSlice.reducer;
