import { all } from 'redux-saga/effects'

import userSaga from './user'
import bookSaga from './book'
export default function* rootSaga() {
  yield all([
    ...userSaga,
    ...bookSaga
  ])
}
