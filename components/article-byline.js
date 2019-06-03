import util from '../util/util'

const {isValidName} = util

const upper = val => typeof val === 'string' && val.trim().toUpperCase() || ''

const fixAuthor = (author, source) => {
  if (!isValidName(author)) return ''
  let a = upper(author), s = upper(source)
  if (a === s) return ''
  if (a.startsWith('HTTP')) a = a.replace(/^HTTPS?:\/+/, '').toLowerCase()
  if (a.endsWith('/')) a = a.replace(/\/+$/, '')
  return a
}

const ByLine = props => {
  let {author, source} = props
  if (!author && !source) {
    return null
  }
  author = fixAuthor(author, source)
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