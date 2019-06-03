import '../styles/article-modal.less';

const ArticleModal = () => {
  //const [data, setData] = useState();
  // STUB
  const data = null, setData = data => {};

  if (!data) return null;

  return [
    <div className="article-modal-overlay" onClick={setData(null)}>
      <div className="article-modal-box">
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
            <a href={article.url} rel="noreferrer" target="_blank" onClick={setData(null)}>Read all</a>
          </div>
        </div>
          <div>
            <div className="modal-closer" onClick={setData(null)}>X</div>
          </div>
      </div>
    </div>
  ];
};

export default ArticleModal;
