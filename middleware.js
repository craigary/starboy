import { NextResponse } from 'next/server'

export function middleware(request) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-url', request.url)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders //  put your headers here
    }
  })
  return response
}
