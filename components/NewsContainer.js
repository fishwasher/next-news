import ArticleList from './ArticleList'
import ArticleCard from './ArticleCard'
import '../styles/newspage.less'

const NewsContainer = props => {
  const {articles} = props
  const len = articles && articles.length || 0
  if (!len ) {
    return <p className="error">No articles found</p>
  }
  const topListMax = Math.min(len, 12) + 1
  const topArticles = articles.slice(1, topListMax)
  const otherArticles = articles.slice(topListMax + 1)

  return (
    <div className="news-box">
      <div className="news-box-prim">
        <div className="topstory">
          <ArticleCard article={articles[0]} />
        </div>
        {topArticles.length ?
        <div className="toplist">
          <ArticleList articles={topArticles} />
        </div>
        : null
      }
      </div>
      {otherArticles.length ?
        <div className="news-box-sec">
          <ArticleList articles={otherArticles} />
        </div>
        : null
      }
    </div>
  )
}

export default NewsContainer
