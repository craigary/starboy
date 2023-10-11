const tools = {
  title: 'Tools & Service',
  name: 'tools',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'iconPicker',
      options: {
        providers: ['si'],
        storeSvg: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      provider: 'icon.provider',
      name: 'icon.name'
    },
    prepare(icon) {
      return {
        title: icon.title,
        subtitle: icon.name,
        media: preview(icon)
      }
    }
  }
}
export default tools
