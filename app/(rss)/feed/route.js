import { getBlogRss } from '@/lib/sanity/get-blog-rss'
import { toHTML } from '@portabletext/to-html'
import htm from 'htm'
import { toXML } from 'jstoxml'
import vhtml from 'vhtml'

const html = htm.bind(vhtml)

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      const htmlStr = '<img src="' + value.imageUrl + '" />'
      return html`${htmlStr}`
    },
    code: ({ value }) => {
      return html`<code>${value.code}</code>`
    }
  }
}

const renderHtmlContent = block => {
  return toHTML(block, { components: myPortableTextComponents })
}

export async function GET() {
  const rawData = await getBlogRss(10, true)

  const modified = rawData.map(item => {
    return {
      // ...item,
      title: item.title,
      description: item.summary,
      link: 'https://craig.wf/blog/' + item.slug,
      guid: item._id,
      content: renderHtmlContent(item.content)
    }
  })

  const rssStructure = {
    _name: 'rss',
    _attrs: {
      version: '2.0'
    },
    _content: {
      channel: modified
    }
  }

  const rssConfig = {
    indent: '    '
  }

  const rss = toXML(rssStructure, rssConfig)

  return new Response(rss, {
    headers: {
      'Content-Type': 'text/xml'
    }
  })
}
