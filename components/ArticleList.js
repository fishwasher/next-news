import ArticleCard from './ArticleCard'

const ArticleList = props => (
    <ul>
    {props.articles.map((card, idx) => (
      <li key={idx}>
        <ArticleCard article={card} />
      </li>
    ))}
    </ul>
)

export default ArticleList
