import BookItem from '@/components/books/BookItem'

const BookList = ({ bookList }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      {bookList.map(item => {
        return <BookItem key={item.id} book={item} />
      })}
    </div>
  )
}

export default BookList
