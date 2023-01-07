import React from 'react'
import BookListStyles from '../styles/BookList.module.css'
import Book from './Book'

const BookList = ({ books }) => {
  return (
    <div className={BookListStyles.container}>
      {books.map((book) => (
        <Book book={book} key={book.book_id} />
      ))}
    </div>
  )
}

export default BookList
