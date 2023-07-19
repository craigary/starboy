import React from 'react'
import { Client } from '@notionhq/client'
import ToolsList from '@/components/tools/ToolsList'

export const revalidate = 1800 // revalidate every half an hour

const page = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN
  })

  const response = await notion.databases.query({
    database_id: process.env.NOTION_TOOLS_DATABASE_ID
  })

  const toolsList = response.results.map(page => ({
    // ...page.properties,
    platform: page.properties.Platform.multi_select,
    description: page.properties.Description.rich_text?.[0]?.plain_text,
    link: page.properties.Link.url,
    title: page.properties.Name.title?.[0]?.plain_text,
    icon: page.icon?.file || ''
  }))
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4">
      <h2 className="text-2xl ">Apps & Services I use</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque
        rem pariatur blanditiis perferendis doloremque tempora nesciunt
        laboriosam quidem libero veniam sunt sapiente odit, suscipit quaerat,
        quae modi id earum.
      </p>
      <hr className="my-4" />
      <ToolsList tools={toolsList} />
    </div>
  )
}

export default page
