import {useGlobal} from 'reactn';
import {unescapeCodePoints} from '../util/util';
import ByLine from './article-byline';
import '../styles/article-modal.less';

const ArticleModal = () => {

  const [article, setArticle] = useGlobal('article');

  if (!article) return null;

  const closeIt = () => setArticle(null);
  const noClickThru = evt => evt.stopPropagation();

  return [
    <div className="article-modal-overlay" onClick={closeIt}>
      <div className="article-modal-box page-wide" onClick={noClickThru}>
        <div className="article-preview">
          {article.urlToImage ?
          <figure>
            <img src={article.urlToImage} title={article.title} alt={article.title} />
          </figure>
          : null
          }
          <h3 className="title">{article.title}</h3>
          <ByLine author={article.author} source={article.source && article.source.name} />
          <div className="dateline">{article.publishedAt}</div>
          <div className="description">{article.description}</div>
          <div className="content">{unescapeCodePoints(article.content)}</div>
          <div className="source-link">
            <a href={article.url} rel="noreferrer" target="_blank" onClick={closeIt}>Read all</a>
          </div>
          <div className="modal-closer" onClick={closeIt}>Close</div>
        </div>
      </div>
    </div>
  ];
};

export default ArticleModal;
