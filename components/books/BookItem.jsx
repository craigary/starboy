import React from 'react'

const BookItem = ({ book }) => {
  return (
    <div className="flex aspect-square items-center justify-center rounded-lg bg-secondary/50 p-4 text-sm transition-all hover:bg-secondary/80">
      {book.Name}
    </div>
  )
}

export default BookItem
