import BookItem from '@/components/books/BookItem'

const BookList = ({ bookList }) => {
  return (
    // <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(150px, 1fr))`
      }}
    >
      {bookList.map(item => {
        return <BookItem key={item.id} book={item} />
      })}
    </div>
  )
}

export default BookList
