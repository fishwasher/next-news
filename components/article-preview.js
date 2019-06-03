import ByLine from './ByLine'

const ArticlePreview = props => {
  const {article} = props
  return [
    <div className="article-preview">
      {article.urlToImage ?
      <figure>
        <img src={article.urlToImage} />
      </figure>
      : null
    }
    <h3 className="title">{article.title}</h3>
    <ByLine author={article.author} source={article.source && article.source.name} />
    <div className="dateline">{article.publishedAt}</div>
    <div className="description">{article.description}</div>
    <div className="content">{article.content}</div>
      <div className="source-link">
        <a href={article.url} rel="noreferrer" target="_blank">Read all</a>
      </div>
    </div>
  ]
}