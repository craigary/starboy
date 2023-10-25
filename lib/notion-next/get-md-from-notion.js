import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { cache } from 'react'
import wordsCount from 'words-count'

export const revalidate = 60

const notionClient = new Client({ auth: process.env.NOTION_API_KEY })
// passing notion client to the option
const n2m = new NotionToMarkdown({
  notionClient,
  config: {
    parseChildPages: false
  }
})

// n2m.setCustomTransformer('code', async block => {
//   const id = block.id
//   const language = block.code.language

//   return false
// })

n2m.setCustomTransformer('image', async block => {
  const id = block.id
  const { caption } = block.image
  let url = ''
  if (block.image.type === 'external') {
    url = block.image.external.url
  } else {
    url = block.image.file.url
  }
  //  this is used for content rendering. change it for RSS output.
  const imageCaption = caption.map(i => i.plain_text).join('')
  return `![${id}](${url} \"${imageCaption}\")`
})

export const getMdFromNotion = cache(async pageId => {
  const mdblocks = await n2m.pageToMarkdown(pageId)
  const mdString = n2m.toMarkdownString(mdblocks)
  const words = wordsCount(mdString.parent)
  return { source: mdString.parent, words }
})
