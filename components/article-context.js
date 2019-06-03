const ArticleContext = React.createContext(null);

withArticleContext = function(props) {
  return (
    <ArticleContext.Consumer>
      {props.children}
    </ArticleContext.Consumer>
  );
};

export default withArticleContext;
