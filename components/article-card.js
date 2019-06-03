import ByLine from './article-byline';
import '../styles/article-card.less';

const setData = d => {}; // STUB

const ArticleCard = props => {
  const {article} = props;
  //const [data, setData] = useState();

  return [
  <div className="article-card button" onClick={setData(article)}>
    <div className="content">
      <ByLine author={article.author} source={article.source && article.source.name} />
      <h3 className="title">{article.title}</h3>
      <div className="description">{article.description}</div>
    </div>
  </div>
  ]}

export default ArticleCard
