const ByLine = props => {
  let {author, source} = props
  if (!author && !source) {
    return null
  }
  if (source && author && author.toUpperCase() == source.toUpperCase()) {
    author = ''
  }
  let cls = 'byline'
  if (author && source) {
    cls += ' byline-full'
  }
  return (
    <div className={cls}>
      {author ?
        <span className="author">{author}</span>
        : null
      }
      {source ?
        <span className="source">{source}</span>
        : null
      }
    </div>
  )
}

export default ByLine