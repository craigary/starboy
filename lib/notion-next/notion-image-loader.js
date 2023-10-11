export const notionImageUrlParser = (url, id) => {
  const spaceId = process.env.NOTION_WORKSPACE_ID

  if (!url) {
    return null
  }

  if (url.startsWith('data:')) {
    return url
  }

  // more recent versions of notion don't proxy unsplash images
  if (url.startsWith('https://images.unsplash.com')) {
    return url
  }

  try {
    const u = new URL(url)

    // if (
    //   u.pathname.startsWith('/secure.notion-static.com') &&
    //   u.hostname.endsWith('.amazonaws.com')
    // ) {
    const cleanUrl = u.origin + u.pathname

    const newUrl = `https://www.notion.so/image/${encodeURIComponent(
      cleanUrl
    )}?table=block&id=${id}&spaceId=${spaceId}&width=200`

    return newUrl
    // }
  } catch {
    // ignore invalid urls
  }
  return url
}

export const notionImageLoader = ({ src, width, quality }) => {
  // 解析图片地址
  const url = new URL(src)

  // 替换 width 参数
  url.searchParams.set('width', width)

  // 返回修改后的url
  return url.toString()
}
