import ByLine from './ByLine'

//const fixContent = text => text.trim().replace(/\s*\[[^\]]*\]$/, '')

const ArticleCard = props => {
  const {article} = props
  return [
    <div className="article-card">
    {article.urlToImage ?
      <figure>
        <a href={article.url} rel="noreferrer" target="_blank">
          <img src={article.urlToImage} />
        </a>
      </figure>
      : null
    }
    <div className="details">
      <ByLine author={article.author} source={article.source && article.source.name} />
      <a href={article.url} rel="noreferrer" target="_blank">
        <h3 className="title">{article.title}</h3>
        <div className="description">{article.description}</div>
      </a>
      </div>
    </div>
  ]}

export default ArticleCard
