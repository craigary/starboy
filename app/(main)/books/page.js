import Heading from '@/components/Heading'
import BookList from '@/components/books/BookList'
import Container from '@/components/container/Container'
import { getBooksList } from '@/lib/notion-next/get-books-list'
import { IconBook } from '@tabler/icons-react'

export const revalidate = 3600

const BooksPage = async () => {
  const list = await getBooksList()
  return (
    <Container>
      <Heading title="Books" className={'relative'}>
        <IconBook
          className="absolute -right-[10%] top-0 opacity-5"
          size="80%"
        />
        <p className="leading-6 md:w-3/4 md:leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          magnam vero est aperiam dolores. Officia ab a, atque voluptatum odit
          possimus exercitationem necessitatibus quam praesentium eligendi
          dolorem ea! Quas, nesciunt?
        </p>
      </Heading>
      <BookList bookList={list} />
    </Container>
  )
}

export default BooksPage
