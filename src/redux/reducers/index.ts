import { combineReducers } from 'redux'

import userReducer from './user'
import bookReducer from './book'
const createRootReducer = () => combineReducers({ user: userReducer, book: bookReducer })

export default createRootReducer