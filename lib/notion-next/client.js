const API_KEY = process.env.NOTION_API_KEY
const API_ENDPOINT = 'https://api.notion.com/v1'
const API_VERSION = process.env.NOTION_API_VERSION || '2022-06-28'

const hasPaginationEndpoints = [
  'databases',
  'search',
  'pages',
  'comments',
  'blocks',
  'users'
]

const notionFetchClient = async (path, options = {}) => {
  const hasPagination = hasPaginationEndpoints.some(endpoint =>
    path.startsWith('/' + endpoint)
  )

  const fetchOptions = {
    method: options?.method || 'POST',
    ...options,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'Notion-Version': API_VERSION,
      Authorization: `Bearer ${API_KEY}`,
      ...options?.headers
    },

    next: { revalidate: '60' },
    body: JSON.stringify(options?.body)
  }
  const result = []

  const response = await fetch(API_ENDPOINT + path, fetchOptions)

  let tempResult = await response.json()

  if (tempResult.object === 'error') {
    throw new Error(tempResult.message)
  }

  if (hasPagination) {
    result.push(...tempResult.results)
    while (tempResult.has_more) {
      let nextResponse
      if (fetchOptions.method === 'GET') {
        nextResponse = await fetch(
          `${path}?start_cursor=${tempResult.next_cursor}`,
          {
            ...fetchOptions,
            body: JSON.stringify({
              ...JSON.parse(fetchOptions?.body || '{}'),
              start_cursor: tempResult.next_cursor
            })
          }
        )
      } else {
        nextResponse = await fetch(path, fetchOptions)
      }
      if (!nextResponse.ok) {
        throw new Error(nextResponse.statusText)
      }
      const nextResult = await nextResponse.json()
      tempResult = nextResult
      result.push(...tempResult.results)
    }
    return result
  } else {
    return tempResult
  }
}

export { notionFetchClient }
