import { Button, Stack, TextArea } from '@sanity/ui'
import { useCallback } from 'react'
import { set, useFormValue } from 'sanity'

const blocksToText = (blocks, opts = {}) => {
  const options = Object.assign({}, { nonTextBehavior: 'remove' }, opts)
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove'
          ? ''
          : `[${block._type} block]`
      }

      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

const SanityBlogSummary = ({ onChange, value }) => {
  const content = useFormValue(['content'])
  const handleChange = useCallback(
    event => {
      onChange(event.target.value ? set(event.target.value) : unset())
    },
    [onChange]
  )

  const handleBtnClick = () => {
    const str = blocksToText(content ?? []).replace(/(\r\n|\n|\r)/gm, '')
    console.log(str)
    str ? set(str) : unset()
    console.log(333)
  }
  return (
    <Stack space={4}>
      <TextArea paddingBottom={4} value={value} onChange={handleChange} />
      <Button text="Generate from content" onClick={handleBtnClick} />
    </Stack>
  )
}

export default SanityBlogSummary
