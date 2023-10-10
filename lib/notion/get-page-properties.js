import { notionClient } from '@/lib/notion/client'
import { getDateValue, getPageProperty, getTextContent } from 'notion-utils'

async function getPageProperties(
  id,
  block,
  schema,
  recordMap,
  getIcons = false
) {
  const rawProperties = Object.entries(block?.[id]?.value?.properties || [])

  const excludeProperties = ['date', 'select', 'multi_select', 'person', 'file']
  const properties = {}
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val] = rawProperties[i]
    properties.id = id

    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val)
    } else {
      switch (schema[key]?.type) {
        case 'date': {
          const dateProperty = getDateValue(val)
          delete dateProperty.type
          properties[schema[key].name] = dateProperty
          break
        }
        case 'select':
        case 'multi_select': {
          const selects = getPageProperty(
            schema[key].name,
            block[id].value,
            recordMap
          )

          const filteredSelects = schema[key].options.filter(item =>
            selects.includes(item.value)
          )

          properties[schema[key].name] = filteredSelects

          break
        }
        case 'file': {
          // find file type property
          const fileRaw =
            rawProperties.filter(item => item[0] === key)?.[0]?.[1] || []
          const fileList = fileRaw.reduce((prev, curr) => {
            if (curr.length === 2) {
              const fileUrl = curr[1]?.[0]?.[1]

              const url = getImageUrl(fileUrl, id)

              return [...prev, url]
            }
            return prev
          }, [])

          properties[schema[key].name] = fileList

          break
        }
        case 'person': {
          const rawUsers = val.flat()
          const users = []
          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0]
              const res = await notionClient.getUsers(userId)
              const resValue =
                res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value
              const user = {
                id: resValue?.id,
                first_name: resValue?.given_name,
                last_name: resValue?.family_name,
                profile_photo: resValue?.profile_photo
              }
              users.push(user)
            }
          }
          properties[schema[key].name] = users
          break
        }
        default:
          break
      }
    }
  }

  if (getIcons) {
    const url = getImageUrl(block?.[id]?.value?.format?.page_icon, id)
    properties.icon_url = url
  }

  return properties
}

const getImageUrl = (url, id) => {
  const imgUrl = encodeURIComponent(url)
  return 'https://www.notion.so/image/' + imgUrl + '?table=block&id=' + id
}

export { getPageProperties }
