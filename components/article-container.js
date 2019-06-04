import {useGlobal} from 'reactn';
import {unescapeCodePoints, formatDate, trimArticleContent} from '../util/util';
import ByLine from './article-byline';
import '../styles/article-container.less';

const ArticleContainer = () => {

  const [article, setArticle] = useGlobal('article');

  if (!article) return null;

  const closeIt = () => setArticle(null);

  const filterContent = s => unescapeCodePoints(trimArticleContent(s));

  const closeBar = (
    <div style={{textAlign: 'right'}}>
      <span className="button button-link close" role="button" onClick={closeIt}>Close Preview</span>
    </div>
    );

  return [
    <div className="article-container">
      <div className="article-body page-wide">
      {closeBar}
        {article.urlToImage ?
          <figure>
            <img src={article.urlToImage} title={article.title} alt={article.title} />
          </figure>
          : null
        }
        <h3 className="title">{article.title}</h3>
        <ByLine author={article.author} source={article.source && article.source.name} />
        <div className="dateline">{formatDate(article.publishedAt)}</div>
        <div className="description">{article.description}</div>
        <div className="content">{filterContent(article.content)}</div>
        <div className="source-link">
          <a className="button-link" role="link" href={article.url} rel="noreferrer" target="_blank" onClick={closeIt}>Read original</a>
        </div>
        {closeBar}
      </div>
    </div>
  ];
};

export default ArticleContainer;
