import BookItem from '@/components/books/BookItem'
import React from 'react'

const BookList = ({ bookList }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {bookList.map(item => {
        return <BookItem key={item.id} book={item} />
      })}
    </div>
  )
}

export default BookList
