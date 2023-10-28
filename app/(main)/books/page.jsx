import Heading from '@/components/Heading'
import BookList from '@/components/books/BookList'
import Container from '@/components/container/Container'
import { getBooksList } from '@/lib/notion-next/get-books-list'
import { IconBook } from '@tabler/icons-react'
import { Suspense } from 'react'

export const revalidate = 3600
const BooksPage = async () => {
  const list = await getBooksList()
  return (
    <Container>
      <Heading title="Books" className="relative">
        <IconBook
          className="absolute -right-[10%] top-0 opacity-5"
          size="80%"
          stroke={1}
        />
        <div className="space-y-3 leading-6 tracking-[0.015em] md:w-3/4 md:leading-8">
          <p>
            I don&apos;t consider myself someone who reads consistently, but I
            do enjoy picking up my Kindle and reading the occasional mystery
            novel. Productivity related books don&apos;t make up a large part of
            my reading list - I prefer to treat reading as a leisurely activity.
            Additionally, tech related books are not listed here.
          </p>
          <p>
            I will try to keep this page updated to motivate myself to keep my
            Kindle dust-free.
          </p>
          <p>
            last updated:{' '}
            <Suspense fallback={<span>loading...</span>}>
              <span>{new Date(list[0].updatedAt).toLocaleString()}</span>
            </Suspense>
          </p>
        </div>
      </Heading>
      <BookList bookList={list} />
    </Container>
  )
}

export default BooksPage
