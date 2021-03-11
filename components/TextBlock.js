import React from 'react'
import PropTypes from 'prop-types'

const TextBlock = ({ title, content }) => {
  return (
    <div>
      <h2 className="mb-8 text-2xl">{title}</h2>
      <p className="mt-4 leading-7">
      {content}
      </p>
    </div>
  )
}

TextBlock.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object
}

export default TextBlock
