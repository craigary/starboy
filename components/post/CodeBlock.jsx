import Lowlight from 'react-lowlight'
import 'react-lowlight/common'
import './code-highlighting.css'

const CodeBlock = ({ data }) => {
  const { value } = data

  return (
    <Lowlight
      language={value.language}
      value={value.code}
      className={'px-0 text-sm leading-[1.125rem]'}
    />
  )
}

export default CodeBlock
