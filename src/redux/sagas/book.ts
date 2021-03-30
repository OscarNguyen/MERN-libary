import { takeLatest, call, put, select } from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios';
import { BookType, FETCH_BOOKS } from '../../types';
import { saveBooks } from '../actions/book';

function* fetchBooks() {
  try {
    const result: AxiosResponse = yield call(axios.get, "/books");
    const books: BookType[] = result.data
    yield put(saveBooks(books))
    console.log(result.data)
  }
  catch (err) {
    console.log(err)
  }
}

export default [takeLatest(FETCH_BOOKS, fetchBooks)]