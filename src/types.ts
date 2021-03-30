export const ADD_USER = "ADD_USER"
export const GOOGLE_LOGIN = "GOOGLE_LOGIN"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const SIGNUP = "SIGNUP"
export const FETCH_BOOKS = "FETCH_BOOKS"
export const SAVE_BOOKS = "SAVE_BOOKS"
export const BOOKS_LOADING = "BOOKS_LOADING"
export type BookType = {
  ISBN: string
  title: string
  description: string
  publisher: string
  authors: [string]
  status: 'available' | 'borrowed' | string
  borrowerID: string | null
  publishedDate: Date
  borrowDate: Date | null
  returnDate: Date | null
  categories: string[],
  img: string
  _id: string
}

export type UserType = {
  firstName: string
  lastName: string
  email: string
  userName: string
  password: string
  isAdmin: boolean,
  img: string
  _id: string
}

export type userState = {
  user: UserType | null,
  token: string | null,
  isLogin: boolean
}
export type bookState = {
  books: BookType[] | null,
  loading: boolean
}
export type AppState = {
  user: userState
  book: bookState
}
export type AddUserAction = {
  type: typeof ADD_USER
  user: UserType
  token: string
}

export type LogOutAction = {
  type: typeof LOGOUT
}

export type SaveBooksAction = {
  type: typeof SAVE_BOOKS
  books: BookType[]
  loading: boolean
}
export type BooksLoadingAction = {
  type: typeof BOOKS_LOADING
}
export type BookActions = SaveBooksAction | BooksLoadingAction
export type UserActions = AddUserAction | LogOutAction

export type GoogleLoginAction = {
  type: typeof GOOGLE_LOGIN
  response: any
  history: any
}

export type SignUpAction = {
  type: typeof SIGNUP
  username: string
  password: string
  firstname: string
  lastname: string
  email: string
  history: any

}

export type JWTLoginAction = {
  type: typeof LOGIN,
  username: string
  password: string
  history: any
}