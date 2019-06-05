import ArticleCard from './article-card';
import '../styles/article-list.less';

const getSizeName = sizeProp => sizeProp === 'large' || sizeProp === 'medium' ? sizeProp : 'small';

const ArticleList = props => (
    <ul className={'article-list card-size-' + getSizeName(props.cardSize)}>
    {props.articles.map((card, idx) => (
      <li key={'li' + idx}>
        <ArticleCard article={card} key={'card'+idx} />
      </li>
    ))}
    </ul>
);

export default ArticleList;
