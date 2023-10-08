import { notionClient } from '@/lib/notion/client'
import { getPageIds } from '@/lib/notion/get-page-ids'
import { getPageProperties } from '@/lib/notion/get-page-properties'
import { parseISO } from 'date-fns'
import { idToUuid } from 'notion-utils'

export const getAllPages = async (databaseId, viewId, getIcons = false) => {
  databaseId = idToUuid(databaseId)
  viewId = idToUuid(viewId)

  const response = await notionClient.getPage(databaseId)
  const collection = Object.values(response.collection)[0]?.value
  const collectionQuery = response.collection_query
  const block = response.block
  const schema = collection?.schema

  const pageIds = getPageIds(collectionQuery, viewId)

  const promises = pageIds.map(async id => {
    try {
      const properties = await getPageProperties(
        id,
        block,
        schema,
        response,
        getIcons
      )

      // Add fullwidth and date
      properties.fullWidth = block[id].value?.format?.page_full_width ?? false

      if (properties.date) {
        properties.date = (
          properties.date?.start_date
            ? parseISO(properties.date.start_date)
            : parseISO(block[id].value.created_time)
        ).getTime()
      }

      return properties
    } catch (error) {
      return error
    }
  })

  const results = await Promise.allSettled(promises)

  const data = results.filter(r => r.status === 'fulfilled').map(r => r.value)
  return data
}
