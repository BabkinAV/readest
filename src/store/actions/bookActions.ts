import axios from 'axios';

import { AppDispatch } from '../store';
import { Book } from '../../data.model';

import { setBooks } from '../slices/bookSlice';


export const fetchBooks = () => (dispatch: AppDispatch) => {
  axios
    .get<Book[]>(`https://gray-doubtful-cod.cyclic.app/books`)
    .then((res) => {
      dispatch(setBooks(res.data));
    })
    .catch((error: string) => {
      console.log(error);
    });
};
