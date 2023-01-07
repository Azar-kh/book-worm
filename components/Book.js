import Link from 'next/link'
import React from 'react'
import BookStyles from '../styles/Book.module.css'

const Book = ({ book }) => {
  return (
    <Link href="/[id]" as={`/${book.book_id}`} legacyBehavior>
      <a className={BookStyles.card}>
        <img src={book.cover} height={300} width={250} />
        <h4>{book.name}</h4>
      </a>
    </Link>
  )
}

export default Book
