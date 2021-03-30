import { BOOKS_LOADING, BookType, SAVE_BOOKS } from "../../types";

export function saveBooks(books: BookType[]) {
  return {
    type: SAVE_BOOKS,
    books
  }
}

export function saveBookLoading() {
  return { type: BOOKS_LOADING }
}