import {useGlobal} from 'reactn';
import ByLine from './article-byline';
import '../styles/article-card.less';

const ArticleCard = props => {

  const {article} = props;
  const [,setArticle] = useGlobal('article');

  return [
  <div className="article-card button anim-fade-in" role="button" onClick={() => setArticle(article)}>
    <div className="content">
      <ByLine author={article.author} source={article.source && article.source.name} />
      <h3 className="title">{article.title}</h3>
      <div className="description">{article.description}</div>
    </div>
  </div>
  ];
};

export default ArticleCard;
