const BLOG = {
  title: 'CRAIGARY',
  description: 'This is an awesome website',
  author: 'Craig Hart',
  email: 'i@craigary.net',
  link: 'https://craigary.net',
  language: 'en-US',
  path: '/blog', // leave this empty if you want to use '/' as the blog, don't add trailing slash
  postsPerPage: 5,
  socialLink: 'https://twitter.com/craigaryhart',
  notionApiEndPoint: process.env.NOTION_API_ENDPOINT,
  notionPageId: process.env.NOTION_PAGE_ID
}

export default BLOG
