import {useGlobal} from 'reactn';
import ArticleList from './article-list';

const NewsContainer = props => {

  // remove the underlying list if an article is shown
  const [currentArticle] = useGlobal('article');
  if (currentArticle) {
    return null;
  }

  const {articles} = props;
  const len = articles && articles.length || 0;
  if (!len ) {
    return <p className="error">No articles found</p>
  }
  const topListSize = Math.min(len, 12);
  const midListSize = Math.min(len - topListSize, 12);
  const topArticles = articles.slice(0, topListSize);
  const midArticles = articles.slice(topListSize, topListSize + midListSize);
  const otherArticles = articles.slice(topListSize + midListSize);

  return [
    <div className="news-box page-wide">
      {topArticles.length ?
        <div className="toplist">
        <ArticleList articles={topArticles} cardSize="large" />
      </div>
      : null
      }
      {midArticles.length ?
        <div className="toplist">
        <ArticleList articles={midArticles} cardSize="medium" />
      </div>
      : null
      }
      {otherArticles.length ?
        <div className="toplist">
        <ArticleList articles={otherArticles} cardSize="small" />
      </div>
      : null
      }
  </div>
  ];
};

export default NewsContainer;
