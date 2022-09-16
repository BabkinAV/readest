import axios from 'axios';

import { AppDispatch } from '../store';
import { Book } from '../../data.model';

import { setBooks, setDataObtained } from '../slices/bookSlice';


export const fetchBooks = () => (dispatch: AppDispatch) => {
  axios
    .get<Book[]>(`https://gray-doubtful-cod.cyclic.app/books`)
    .then((res) => {
      dispatch(setBooks(res.data));
			dispatch(setDataObtained());
    })
    .catch((error: string) => {
      console.log(error);
    });
};
