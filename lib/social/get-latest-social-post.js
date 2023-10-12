import { XMLParser } from 'fast-xml-parser'

const getThreadsPosts = async () => {
  const parser = new XMLParser()
  const res = await fetch(
    'https://rsshub.app/threads/craigaryhart?showAuthorInTitle=0&showAuthorInDesc=0&showQuotedAuthorAvatarInDesc=1&showAuthorAvatarInDesc=1',
    { cache: 'no-cache' }
  )

  const data = await res.text()
  return parser.parse(data)
}

export { getThreadsPosts }
