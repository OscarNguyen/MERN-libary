import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, BookType, FETCH_BOOKS } from '../../types'
import Card from '../Card/Card'

const Homepage = () => {
  const dispatch = useDispatch()
  const books = useSelector((state: AppState) => state.book.books && state.book.books)

  useEffect(() => {
    dispatch({ type: FETCH_BOOKS })
  }, [])
  return (
    <div className="homepage">
      <div className="books-container">

        {books!.map(book => <Card key={book._id} img={book.img} title={book.title} />)}
      </div>

    </div>
  )
}

export default Homepage
