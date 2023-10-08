export const getPageIds = (collectionQuery, viewId) => {
  const views = Object.values(collectionQuery)[0]
  let pageIds = []
  if (viewId) {
    pageIds = views[viewId]?.collection_group_results?.blockIds
  } else {
    const pageSet = new Set()
    Object.values(views).forEach(view => {
      view?.collection_group_results?.blockIds?.forEach(id => pageSet.add(id))
    })
    pageIds = [...pageSet]
  }
  return pageIds
}
