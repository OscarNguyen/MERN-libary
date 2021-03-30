import { BookActions, BOOKS_LOADING, BookType, SAVE_BOOKS } from "../../types";

const initialState: { books: BookType | null, loading: boolean } = {
  books: null,
  loading: false
}

export default function bookReducer(state = initialState, action: BookActions) {

  switch (action.type) {
    case SAVE_BOOKS: {
      return { ...state, books: action.books, loading: false }
    }

    case BOOKS_LOADING: {
      return { ...state, loading: true }
    }

    default: {
      return state
    }
  }
}