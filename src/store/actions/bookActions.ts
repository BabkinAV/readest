import axios from 'axios';

import { AppDispatch } from '../store';
import { Book } from '../../data.model';

import { setBooks } from '../slices/bookSlice';

const uri = 'https://backend.dev';

export const fetchBooks = () => (dispatch: AppDispatch) => {
  axios
    .get<Book[]>(`${uri}/getBooks`)
    .then((res) => {
      dispatch(setBooks(res.data));
    })
    .catch((error: string) => {
      console.log(error);
    });
};
